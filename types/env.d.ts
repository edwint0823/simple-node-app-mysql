declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MYSQL_HOST: string;
            MYSQL_PORT: number;
            MYSQL_USER: string;
            MYSQL_PASS: string;
            MYSQL_DATABASE: string;
        }
    }
}
export {};
