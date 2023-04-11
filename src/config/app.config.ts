import { config } from 'dotenv';
config();

const AppConfig = {
    PHYLLO: {
        CLIENT_ID: process.env.PHYLLO_CLIENT_ID,
        SECRET_ID: process.env.PHYLLO_SECRET_ID,
    }
};

export default AppConfig;
