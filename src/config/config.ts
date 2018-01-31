export interface AppConfig {
    production: boolean;
    appName: string;
    apiEndpoint: string;
}

export const CONFIG: AppConfig = {
    production: false,
    appName: 'Go2Shopping',
    apiEndpoint: (this.production === true)? 'http://dev.go2shopping.co/api/v1/':'http://dev.go2shopping.co/api/v1/'
};