import { version, author, license, description } from '../../../package.json'

const licenseURLMap = {
  'MIT': 'https://mit-license.org/',
  'Apache-2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
  'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
  'LGPL-3.0': 'https://www.gnu.org/licenses/lgpl-3.0',
  'MPL-2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
  'CC-BY-4.0': 'https://creativecommons.org/licenses/by/4.0/',
}
const githubName = 'howcasperwhat'
const licenseURL = licenseURLMap[license]
const rootURL = `${githubName}.github.io`
const githubURL = `https://github.com/${githubName}`
const counterAPI = `https://finicounter.eu.org/counter?host=${rootURL}`
const setupYear = 2023
export const useConfigStore = () => {
  return { author, version, license, description, setupYear, rootURL, counterAPI, githubURL, licenseURL }
}