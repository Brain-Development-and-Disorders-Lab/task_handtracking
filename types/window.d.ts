// Extend the global Window interface
import { Experiment } from "neurocog";

// Add Experiment to the global Window interface
declare global {
  interface Window {
    Experiment: Experiment;
    jsPsych: jsPsych;
  }
}
