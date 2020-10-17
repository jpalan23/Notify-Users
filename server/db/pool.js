import { Pool } from 'pg';

import env from '../env';

let databaseConfig = undefined;
if(process.env.NODE_ENV == 'development'){
    databaseConfig = {connectionString: env.database_url}
}else{
    databaseConfig = { connectionString: env.database_url };
}
console.log(databaseConfig);
const pool = new Pool(databaseConfig);

export default pool;