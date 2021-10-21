import { dirname } from "path"
import { fileURLToPath } from "url"

const projectDir = dirname(fileURLToPath(import.meta.url))

export default {
  transform: {},
  globalSetup: `${projectDir}/lib/jest.global-setup.cjs`,
  globalTeardown: `${projectDir}/lib/jest.global-teardown.cjs`,
  setupFilesAfterEnv: [`${projectDir}/lib/jest.setup.cjs`],
}
