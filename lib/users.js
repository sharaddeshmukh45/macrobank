import db from "./db";

export function createUser(email, password, date, name) {
  const result = db
    .prepare(
      "INSERT INTO users (name, date, email, password) VALUES (?, ?, ?, ?)"
    )
    .run(name, date, email, password);
  return result.lastInsertRowid;
}

export function updateUser(name, email, password) {
  const result = db
    .prepare("UPDATE users SET name = ?, email = ?, password=?")
    .run(name, email, password);
  console.log(
    db.prepare("SELECT name FROM users WHERE email = ?").get("test@test.com")
  );
  return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
