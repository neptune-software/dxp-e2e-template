declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SAP_USER: string;
      SAP_PASSWORD: string;
      SAP_URL: string;
      SAP_CLIENT: string;
      DXP_SAP_EDITION_VERSION: string;
      BROWSER_URL: string;
      PERCY_TOKEN: string;
      HEADLESS: string;
      BROWSERSTACK_USERNAME: string;
      BROWSERSTACK_ACCESS_KEY: string;
      BROWSERSTACK_PROJECT_NAME: string; 
      BROWSERSTACK_BUILD_NAME: string; // NAME,
      BROWSERSTACK_BUILD_TAG: string; // whatever,
      BROWSERSTACK_BROWSER1: string;// "chrome",
      BROWSERSTACK_OS_VERSION1: string; // "11",
      BROWSERSTACK_OS1: string; //  "Windows",
      BROWSERSTACK_OS_BROWSER_VERSION1: string; // "latest",
      BROWSERSTACK_LOCAL: string;
      NEPTUNE_OKTA_EMAIL1: string;
      NEPTUNE_OKTA_PASSWORD1: string;
      NEPTUNE_OKTA_EMAIL2: string;
      NEPTUNE_OKTA_PASSWORD2: string;
      NEPTUNE_PINCODE: string;
      NEPTUNE_PINCODE2: string;
      NEPTUNE_PINCODE3: string;
      SAP_USERNAME1: string;
      SAP_USERNAME2: string;
      SAP_USER1: string;
      SAP_USER2: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };