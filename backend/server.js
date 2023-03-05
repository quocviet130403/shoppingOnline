import express from "express";
import * as dotenv from 'dotenv'
dotenv.config();
import connect from './database/database.js'
import { print, OutputType } from "./helpers/print.js"
const app = express();
app.use(express.json());
connect()

const port = process.env.PORT ?? 3000

app.listen(port, async () => {
    print(`Run on localhost:${port}`, OutputType.INFORMATION)
})