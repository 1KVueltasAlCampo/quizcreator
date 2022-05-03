import { Pool } from "pg";

var db;


if (!db){
    db = new Pool({
        host: "localhost",
        user: "postgres",
        password: "password",
        database: "postgres",
        port: "5432"
    })
}

export {db};