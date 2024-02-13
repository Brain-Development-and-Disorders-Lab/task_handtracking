# Browser Handtracking

> A prototype task to test in-browser handtracking using standard webcam hardware.

## Getting Started

Before developing or previewing the task, ensure that the Node.js version 14+ is installed on your system. Download Node.js [here](https://nodejs.org/en/) and install Yarn using this command `npm i -g yarn`. After installing Yarn, run `yarn install` in the root directory of this repository. After a short period of time, all dependencies for the tasks will be configured and ready for development.

## Commands

A number of developer commands have been configured for ease of development. The `Yarn` package manager is used in this repository and should be used to run these commands.

- `clean`: Remove build and development artefacts that are temporary or not required. The list of directories and files to remove are specified in `gulpfile.js`.
- `build`: Create a deployment-ready build of the task. A single output file, `index.js` will be created in a `dist/` subdirectory.
- `lint`: Run the Prettier linting tool over the entire repository, correcting any styling issues.
- `start`: Start the development server and active build process. The task will be able to be previewed in the browser and will reload after each source code change.
- `test`: Execute all tests specified in the `test/` subdirectory.

## License

<!-- CC BY-NC-SA 4.0 License -->
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
</a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Issues and Feedback

Please contact **Henry Burgess** <[henry.burgess@wustl.edu](mailto:henry.burgess@wustl.edu)> for all code-related issues and feedback.
