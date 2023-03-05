import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js"


async function connect() {
    try {
        let connection = mongoose.connect(process.env.MONGO_URL)
        print("Connect mongoose successfully", OutputType.SUCCESS)
        return connection
    } catch (error) {
        const { code } = error
        print(`Code error : ${code}`, OutputType.INFORMATION)
    }
}

export default connect
