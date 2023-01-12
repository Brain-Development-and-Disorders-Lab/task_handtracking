/**
 * @file Plugin file containing code establishing a jsPsych plugin for the
 * template task. Configures data storage and displays a React screen
 * to the participant. Handles the end of the trial by storing data and
 * cleaning up the display.
 * @author Henry Burgess <henry.burgess@wustl.edu>
 */

// Logging library
import consola from "consola";

// Handtracking library
import * as handTrack from "handtrackjs";

// Core modules
import { Configuration } from "src/configuration";

jsPsych.plugins[Configuration.studyName] = (() => {
  const plugin = {
    info: {},
    trial: (displayElement: HTMLElement, trial: any) => {
      // Debugging info if this is reached
      consola.debug(`displayElement:`, displayElement);
      consola.debug(`trial:`, trial);

      // Should raise an error
      consola.error(`Not implemented!`);
    },
  };

  plugin.info = {
    name: Configuration.studyName,
    parameters: {},
  };

  plugin.trial = async (displayElement: HTMLElement, trial: any) => {
    // const Experiment = window.Experiment;
    consola.debug("displayElement:", displayElement);

    // Setup the trial data to be stored
    const trialData = {
      trial: trial.trial,
      trialDuration: 0,
    };

    // Record the start time
    const startTime = performance.now();

    /**
     * Function to finish the trial and unmount React components
     * cleanly if required
     */
    const finishTrial = (): void => {
      // Record the total reaction time
      const duration = performance.now() - startTime;
      trialData.trialDuration = duration;

      // Re-enable keyboard actions
      document.removeEventListener("keydown", () => {
        return false;
      });

      // Finish the jsPsych trial
      jsPsych.finishTrial(trialData);
    };

    // Create a main container
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    displayElement.appendChild(container);

    // Create a "status" feedback element
    const status = document.createElement("header");
    status.textContent = "Loading model...";
    container.appendChild(status);

    // Load the handtracking model
    const model =  await handTrack.load();

    // Default status
    status.textContent = "Hand positioning status: 👎";

    // Create a video element
    const video = document.createElement("video");
    video.autoplay = true;
    
    // Create a canvas
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.style.width = "640px";
    canvas.style.height = "480px";
    canvas.style.border = "black 5px solid";
    canvas.style.visibility = "visible";
    container.appendChild(canvas);

    /**
     * Start hand detection
     */
    const runDetection = async () => {
      model.detect(video).then((predictions: any) => {
        if (validPositioning(predictions)) {
          status.textContent = "Hand positioning: 👍";
          canvas.style.border = "green 5px solid";
        } else {
          status.textContent = "Hand positioning: 👎";
          canvas.style.border = "red 5px solid";
        }

        model.renderPredictions(predictions, canvas, context, video);
        requestAnimationFrame(runDetection);
      })
    };

    // Start the handtracking video
    handTrack.startVideo(video).then((status: any) => {
      if (status) {
        runDetection();
      }
    });

    /**
     * Basic algorithm to determine if two hands are being shown
     * at once
     * @param {any[]} predictions set of predictions from video
     * @return {boolean}
     */
    const validPositioning = (predictions: any[]): boolean => {
      let handCount = 0;
      for (const prediction of predictions) {
        if (prediction.class !== 5) {
          handCount += 1;
        }
      }
      return handCount > 1;
    }

    /**
     * Teardown of handtracking and video
     */
    const onFinish = () => {
      handTrack.stopVideo(video);
      model.dispose();
      finishTrial();
    };

    // Create a container for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "center";
    buttonContainer.style.gap = "10px";

    // Button to show / hide the canvas
    const btnHide = document.createElement("button");
    btnHide.onclick = () => {
      // Toggle the visibility of the canvas element
      if (canvas.style.visibility === "visible") {
        canvas.style.visibility = "hidden";
      } else {
        canvas.style.visibility = "visible";
      }
    };
    btnHide.innerText = "Show / Hide";
    buttonContainer.appendChild(btnHide);

    // Button to stop the video and end the experiment
    const btnStop = document.createElement("button");
    btnStop.onclick = onFinish;
    btnStop.innerText = "Stop";
    buttonContainer.appendChild(btnStop);

    container.appendChild(buttonContainer);
  };

  return plugin;
})();
