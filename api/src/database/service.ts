import { Guilds, IGuilds } from "./models/Guilds";
import { connectDatabase } from "./connectDatabase";

import chalk from "chalk";

export const save = async (guild: IGuilds) => {
        await connectDatabase();
        const userGuilds = await Guilds.findOne({ id: guild.id });

        if ( !userGuilds ) {
            try {
                await Guilds.create(guild);
                console.log(chalk.cyan(`* [${chalk.bold("Saved")}] New user saved : ${chalk.italic(guild.username)} with ${chalk.bold(guild.guilds.length)} guilds`));
            } catch (err) {
                if ( err ) {
                    console.log(chalk.redBright(`* [${chalk.bold("Error")}] during ${chalk.underline("Save")} -> ${chalk.italic(err)}`));
                }
            }
        }
        else {
            if ( userGuilds.guilds != guild.guilds ) {
                try {
                    await userGuilds.updateOne(guild);
                    console.log(chalk.hex("#FF8800")`* [${chalk.bold("Updated")}] Guild updates for : ${chalk.italic(guild.username)}`);
                } catch (err) {
                    if ( err ) {
                        console.log(chalk.redBright(`* [${chalk.bold("Error")}] during ${chalk.underline("Update")} -> ${chalk.italic(err)}`));
                    }
                }
            } else console.log(`* [${chalk.bold("Updated")}] ${chalk.hex("#DC143C")} ${chalk.underline('No need to update')}`);
        }
    }

export const get = async (GuildMember: {string: string | number}) => {
    await connectDatabase();
    try {
        const userData = await Guilds.findOne(GuildMember);
        if (userData) {
            return userData;
            console.log(chalk.hex("7F00FF")`* [${chalk.bold("Get")}] Get user Data for : ${userData.username}`);
        } else {
            return null;
            console.log(chalk.hex("DC143C") `* [${chalk.bold("Get")}] Nothing to return`);
        }
    } catch (error) {
        if (error) {
            console.log(chalk.redBright(`* [${chalk.bold("Error")}] during ${chalk.underline("Get")} -> ${chalk.italic(error)}`));
        }
    }

}
