const { projectDir } = require("@tim-code/project-dir")

module.exports = {
  transform: {},
  globalSetup: `${projectDir}/lib/jest.global-setup.cjs`,
  globalTeardown: `${projectDir}/lib/jest.global-teardown.cjs`,
  setupFilesAfterEnv: [`${projectDir}/lib/jest.setup.cjs`],
}
