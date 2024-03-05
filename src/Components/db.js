import mysql from "mysql"

export const db = mysql.createConnection({
  host:"3309",
  user:"root",
  database:"blog"
})