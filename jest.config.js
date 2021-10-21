import { projectDir } from "@tim-code/project-dir"

export default {
  transform: {},
  globalSetup: `${projectDir}/src/jest.global-setup.js`,
  globalTeardown: `${projectDir}/src/jest.global-teardown.js`,
  setupFilesAfterEnv: [`${projectDir}/src/jest.setup.js`],
}
