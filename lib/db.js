import mysql from 'mysql2/promise';
export default mysql.createPool(process.env.DATABASE_URL + '?multipleStatements=true');
