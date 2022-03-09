import { model, Schema } from "mongoose";

export interface IGuilds {
    guilds: Array<{
        id: string,
        name: string,
        owner: boolean,
        permissions: string,
    }>
    id: string,
    username: string
};

const guildSchema = new Schema({
    guilds: Array,
    id: String,
    username: String
});

export const Guilds = model<IGuilds>("Guilds", guildSchema);
