const license = 'MIT'
const author = 'Casper Huang'
const githubName = 'howcasperwhat'
const rootURL = `${githubName}.github.io`
const licenseURL = 'https://mit-license.org/'
const githubURL = `https://github.com/${githubName}`
const counterAPI = `https://finicounter.eu.org/counter?host=${rootURL}`
const setupYear = 2023

export function useConfigStore() {
  return { author, license, setupYear, rootURL, counterAPI, githubURL, licenseURL }
}
