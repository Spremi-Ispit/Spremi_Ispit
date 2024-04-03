import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

const env = process.env;

const app = express();
app.use(cors());
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

const { host, port, user, password, db_name } = env;

// const host = "localhost";
// const port = "3306";
// const user = "root";
// const password = "12345";
// const db_name = "demo";

const createDatabaseConnection = async () => {
  return await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
};

app.post("/createDatabase", async (req, res) => {
  try {
    const connection = await createDatabaseConnection();

    await connection.query(`CREATE DATABASE IF NOT EXISTS ${db_name}`);
    res.send("Database created!");
  } catch (err) {
    res.send("Error while creating database");
    console.log(err);
    process.exit();
  }
});

app.delete("/dropDatabase", async (req, res) => {
  try {
    const connection = await createDatabaseConnection();

    await connection.query(`DROP DATABASE IF EXISTS ${db_name}`);
    res.send("Database has been dropped!");
  } catch (err) {
    res.send("Error while creating database");
    console.log(err);
    process.exit();
  }
});

app.get("/ping", (req, res) => {
  res.send("🏓 Pong!");
});

app.listen(3006, () => {
  console.log(`Server is running!`);
});
