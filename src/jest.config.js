import { dirname } from "path"
import { fileURLToPath } from "url"

const dir = dirname(fileURLToPath(import.meta.url))

export default {
  transform: {},
  globalSetup: `${dir}/jest.global-setup.js`,
  globalTeardown: `${dir}/jest.global-teardown.js`,
  setupFilesAfterEnv: [`${dir}/jest.setup.js`],
}
