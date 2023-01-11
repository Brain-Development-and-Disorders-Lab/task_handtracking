# Template Task 🧠

> A template repository for online tasks created in the Brain Development and Disorders Lab.

## Getting Started 🚦

Before developing or previewing the task, ensure that the Node.js version 14+ is installed on your system. Download Node.js [here](https://nodejs.org/en/) and install Yarn using this command `npm i -g yarn`. After installing Yarn, run `yarn install` in the root directory of this repository. After a short period of time, all dependencies for the tasks will be configured and ready for development.

For an extensive usage guide, see the [wiki](https://github.com/Brain-Development-and-Disorders-Lab/template_task_static/wiki) for this repository (under construction).

## Commands 👨‍💻

A number of developer commands have been configured for ease of development. The `Yarn` package manager is used in this repository and should be used to run these commands.

- `clean`: Remove build and development artefacts that are temporary or not required. The list of directories and files to remove are specified in `gulpfile.js`.
- `build`: Create a deployment-ready build of the task. A single output file, `index.js` will be created in a `dist/` subdirectory.
- `lint`: Run the Prettier linting tool over the entire repository, correcting any styling issues.
- `start`: Start the development server and active build process. The task will be able to be previewed in the browser and will reload after each source code change.
- `test`: Execute all tests specified in the `test/` subdirectory.

## Contribution 👉

- Issues, bugs, or suggestions? File a new issue under the `Issues` tab.
- Reach out to [henry.burgess@wustl.edu](mailto:henry.burgess@wustl.edu) if you want to contribute, more than happy to discuss.
