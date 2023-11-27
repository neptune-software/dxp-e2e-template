import {config} from "./wdio.conf";
import {wdi5Config} from "wdio-ui5-service/esm/types/wdi5.types";

const wdi55Conf = config as wdi5Config;

wdi55Conf.wdi5 = {
  skipInjectUI5OnStart: true,
  waitForUI5Timeout: 30000,
};

wdi55Conf.services?.push("ui5");

exports.config = wdi55Conf;
export default config;