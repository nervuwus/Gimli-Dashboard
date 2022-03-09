import express from "express";
import cors from "cors";
import chalk from "chalk";
import config from "../environments.config";

import { root, auth, discord } from "./router";

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(cors());

app.use(root);
app.use(auth);
app.use(discord);

app.listen(port, () => {
    console.log(chalk.green(`* [${chalk.bold(port)}] server running at ${chalk.underline(`http://localhost:${port}`)}`));
});
