import http from './commons/constants/http'
import * as Boot from "./commons/setup/boot"
import express, { Application } from "express";
import * as Logger from './commons/utils/logger'
import * as Shortcode from './controllers/shortcode'

const app: Application = express();
app.use(express.json());
Shortcode.handlers(app);

app.listen(http.PORT, async function () {
  Logger.info(http.RUNNING_SERVER);
  await Boot.init();
});