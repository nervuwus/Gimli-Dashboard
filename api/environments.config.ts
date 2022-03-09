import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.port,
    CLIENT_ID: process.env.client_id,
    SECRET: process.env.secret,
    REDIRECT_URI: process.env.redirect_uri,
    OAUTH: process.env.oauth,
    MONGO_URI: process.env.mongo_uri
}
