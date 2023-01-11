/**
 * @file Configuration file used by the task for general configuration.
 * Contains standard information about experiment parameters and
 * error handling. Can be extended as required.
 * @author Henry Burgess <henry.burgess@wustl.edu>
 */

// Logging level
import { LogLevel } from "consola";

// Configuration and other required data
export const Configuration = {
  // General information
  name: "Template task",
  studyName: "template-task",

  // Error screen configuration
  allowParticipantContact: false,
  contact: "henry.burgess@wustl.edu",

  // Manipulations that are configured in Gorilla
  manipulations: {
    variableA: 1,
  },

  // Collection of any stimuli used in the trials
  stimuli: {},

  // Collection of any resources used in the trials
  resources: {},

  // Seed for RNG
  seed: 0.1234,

  // Initial experiment state
  state: {
    counter: 0,
  },

  // Force fullscreen when deployed
  fullscreen: process.env.NODE_ENV !== "development",

  // Set the logging level
  logging:
    process.env.NODE_ENV === "development" ? LogLevel.Verbose : LogLevel.Error,
};
