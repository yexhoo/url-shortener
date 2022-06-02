import http from './constants/http'
import express, { Application } from "express";

const app: Application = express();
app.use(express.json());

app.listen(http.PORT, async function () {
  console.log(http.RUNNING_SERVER);
});