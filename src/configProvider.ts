import * as devConfig from '../config_dev.json';
import * as prodConfig from '../config_prod.json';

export type Config = {
    DISCORD_BOT_TOKEN: string;
};

const useConfig: () => Config = () => {
    const configs = {
        'dev': devConfig,
        'prod': prodConfig
    } as { [key: string]: Config; };

    return configs[process.env.NODE_ENV!] ? configs[process.env.NODE_ENV!] : configs['dev'];
};

export default useConfig;
