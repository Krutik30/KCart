import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "./database.config";
import { User } from "../../user/user.entity";
import { DEVELOPMENT, SEQUELIZE, TEST } from "../constant";

export const databaseProviders = [{
    provider: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case DEVELOPMENT:
                config = databaseConfig.devlopment;
                break;
            case TEST:
                config = databaseConfig.devlopment;
                break;
            case DEVELOPMENT:
                config = databaseConfig.devlopment;
                break;
            default:
                config = databaseConfig.devlopment;
                break;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User]);
        await sequelize.sync()
        return sequelize;
    }
}]