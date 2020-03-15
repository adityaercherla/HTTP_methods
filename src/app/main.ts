import App from './app';
import { UsersController } from "./controllers";
import { config } from "dotenv";

//For dotenv.
config();

const app = new App(
    //controllers of array
    [
        new UsersController()
    ],
    Number(process.env.SERVERPORT || 9000)
).listen();