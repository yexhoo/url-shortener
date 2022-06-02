import http from './constants/http'
import express, { Application } from "express";
import * as Shortcode from './controller/shortcode'

const app: Application = express();
app.use(express.json());
Shortcode.handlers(app);

app.listen(http.PORT, async function () {
  console.log(http.RUNNING_SERVER);
});