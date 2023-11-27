
import config from "./wdio-ui5.conf";

config.services = (config.services ? config.services : []).concat([
  [
    "browserstack",
    {
      browserstackLocal: process.env.BROWSERSTACK_LOCAL === "true"
        ? true : false,
    },
  ],
]);

// remove the chromedrive and selenium-standalone that might be there before
config.services = config.services.filter((value, _index, _arr) => {
  return !((Array.isArray(value) && (value[0] === "chromedriver" || value[0] === "selenium-standalone")) || (value === "chromedriver" || value === "selenium-standalone"));
});


// =================
// Service Providers
// =================
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

// see : https://www.browserstack.com/automate/capabilities#core-capabilities
config.capabilities = [
  {
    maxInstances: 1,
    acceptInsecureCerts: true,
    browserName: "chrome",
    "bstack:options": {
      projectName: process.env.BROWSERSTACK_PROJECT_NAME,
      buildName: process.env.BROWSERSTACK_BUILD_NAME,
      buildTag: process.env.BROWSERSTACK_BUILD_TAG,
      browser: process.env.BROWSERSTACK_BROWSER1 || "chrome",
      osVersion: process.env.BROWSERSTACK_OS_VERSION1 || "11",
      os: process.env.BROWSERSTACK_OS1 || "Windows",
      browserVersion: process.env.BROWSERSTACK_OS_BROWSER_VERSION1 || "latest",
      networkLogs: true,
      local: process.env.BROWSERSTACK_LOCAL === "true"
        ? true : false,
      // debug: false,
    },
  },
];


exports.config = config;
export default config;