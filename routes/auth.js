import express from "express";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import { register } from "../routes_controller/auth.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("It works!");
});

router.get("/test2", (req, res) => {
  res.send("It works too!");
});

router.post("register", register);

export default router;
