import * as dxpE2E from "@neptune-software/dxp-e2e-toolbox";
import * as dotenv from "dotenv";
import { default as _wdi5 } from "wdio-ui5-service";

// FUNCTION TO USE WITH "Browser Selection to be handled by = "Percy"": 
// import percySnapshot from "@percy/webdriverio";

// FUNCTION TO USE WITH "Browser Selection to be handled by = "Automate"":
//@ts-ignore <-- https://github.com/percy/percy-selenium-js/issues/429
import { percyScreenshot } from "@percy/selenium-webdriver";

import Panel from "sap/m/Panel";
import Text from "sap/m/Text";

const wdi5 = new _wdi5();

const selectors = {
    NEPTUNE_UNIT_TEST_APP: {

        oPanelGeneric: {
            selector: {
                controlType: "sap.m.Panel",
                id: "oPanelGeneric",
            }
        },
        otxtGenMS_ALL_TYPESC: {
            selector: {
                controlType: "sap.m.Text",
                id: "otxtGenMS_ALL_TYPESC",
            }
        },
        oButGenPOST_ApplCMS_ALL_TYPES: {
            selector: {
                controlType: "sap.m.Button",
                id: "oButGenPOST_ApplCMS_ALL_TYPES",
            }
        }

    }
};

describe("Neptune Unit Test App", () => {

    before(async () => {
        // load environment variables from .env file
        dotenv.config();
        // setup neptune dxp e2e toolbox
        dxpE2E.common.Environment.getInstance().setup({
            wdi5: wdi5,
            browser: browser,
            dxpEditionType: dxpE2E.common.DxpEditionType.sapEdition,
            dxpVersion: process.env.DXP_SAP_EDITION_VERSION || "23.10.0000"
        });
    });


    it("Open oPanelGeneric", async () => {

        const app = await dxpE2E.sapEdition.AppSapEdition.open({
            appName: "NEPTUNE_UNIT_TEST_APP",
            webapp: true,
            saml2Disabled: true,
            neptuneDebug: true,
            url: process.env.SAP_URL,
            client: process.env.SAP_CLIENT,
        })

        const webappLogin = new dxpE2E.sapEdition.WebappLogin();

        await webappLogin.login(process.env.SAP_USER!, process.env.SAP_PASSWORD!);

        await webappLogin.injectUI5();

        await app.waitUntilNeptuneIsReady();

        await (await browser.asControl<Panel>(selectors.NEPTUNE_UNIT_TEST_APP.oPanelGeneric)).press();

        let genericTextControl = await browser.asControl<Text>(selectors.NEPTUNE_UNIT_TEST_APP.otxtGenMS_ALL_TYPESC);
        let genericText = await genericTextControl.getText(false);

        await expect(genericText).toBe("");

        await (await browser.asControl<Panel>(selectors.NEPTUNE_UNIT_TEST_APP.oButGenPOST_ApplCMS_ALL_TYPES)).press();

        await browser.pause(1000);

        genericText = await genericTextControl.getText(false);

        await expect(genericText).toBe("ABCD123ÄÖÜ");

        // FUNCTION TO USE WITH "Browser Selection to be handled by = "Percy"":
        // await percySnapshot(driver, "Standalone - Generic Button Press", {});

        // FUNCTION TO USE WITH "Browser Selection to be handled by = "Automate"":
        await percyScreenshot(driver, "Standalone - Generic Button Press", {});

    });

});


