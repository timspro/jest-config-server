import { dirname } from "path"
import { fileURLToPath } from "url"

const projectDir = dirname(fileURLToPath(import.meta.url))

export default {
  transform: {},
  globalSetup: `${projectDir}/jest.global-setup.js`,
  globalTeardown: `${projectDir}/jest.global-teardown.js`,
  setupFilesAfterEnv: [`${projectDir}/jest.setup.js`],
}
