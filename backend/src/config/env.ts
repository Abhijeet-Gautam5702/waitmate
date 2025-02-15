import dotenv from "dotenv";

dotenv.config();

export const env = {
    app :{
        port: process.env.PORT || 8080,
        corsOrigin: process.env.CORS_ORIGIN || "*",
    },
    db :{
        uri: process.env.MONGODB_CONNECTION_URI || "",
        name: process.env.DB_NAME || "",
    },
    appwrite :{
        endpoint: process.env.APPWRITE_ENDPOINT || "",
        projectId: process.env.APPWRITE_PROJECT_ID || "",
    }
}