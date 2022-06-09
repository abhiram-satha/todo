const express = require("express");
const router = express.Router();


module.exports = (db) => {
  router.get("/users", (req, res) => {
    console.log("hello")
    db.query(
      `SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.send({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;

};