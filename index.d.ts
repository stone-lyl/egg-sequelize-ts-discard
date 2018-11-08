import { Sequelize, ISequelizeValidationOnlyConfig } from 'sequelize-typescript';
import { SequelizeConfig } from "sequelize-typescript/lib/types/SequelizeConfig";

declare module 'egg' {
    /**
     * @see https://github.com/whxaxes/egg-ts-helper/issues/8
     */
    interface IModel extends Sequelize { }

    // extend app
    interface Application {
        Sequelize: Sequelize;
        model: IModel;
    }

    // extend context
    interface Context {
        model: IModel;
    }

    // extend your config
    interface EggAppConfig {
        sequelize: SequelizeConfig | ISequelizeValidationOnlyConfig
    }

}
