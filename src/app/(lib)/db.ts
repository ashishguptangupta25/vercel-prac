import mysql from "mysql2/promise";

let connection: mysql.Connection;

export async function getDB() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "admin",
      database: "posts_db",
    });
  }

  return connection;
}
