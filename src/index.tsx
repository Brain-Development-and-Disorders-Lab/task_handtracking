// Define the layout and order of trials in the experiment
// Configuration
import { Configuration } from "src/configuration";

// Import crossplatform API
import { Experiment } from "neurocog";

// Import jsPsych plugins
import "jspsych/plugins/jspsych-instructions";

// Import the custom plugin before adding it to the timeline
import "src/plugin";

// Create a new Experiment instance
const experiment = new Experiment(Configuration);

// Timeline setup
const timeline = [];

timeline.push({
  type: Configuration.studyName,
});

// Configure and start the experiment
experiment.start({
  timeline: timeline,
  show_progress_bar: true,
  show_preload_progress_bar: true,
});
