import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
import path from "path";
import bcrypt from "bcrypt";
import authRoutes from "./routes/auth.js"; // Ensure the file extension (.js) is included
import { fileURLToPath } from "url"; // Import the fileURLToPath function
import { dirname } from "path"; // Import dirname from path module

const app = express();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url); // Convert URL to file path
const __dirname = dirname(__filename); // Get the directory name from the file path

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;
const SECRET_KEY = "registrar'sOfficeOnlineRequestForm2025"; // Change this to a secure key

app.use("/api/auth", authRoutes);

// ✅ Login API
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // ✅ Validate input
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required" });
//     }

//     // ✅ Check if user exists
//     const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
//       email,
//     ]);
//     if (rows.length === 0) {
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     const user = rows[0];

//     // ✅ Compare password with the hashed password in the database
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     // ✅ Generate JWT token (optional)
//     const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ message: "Login successful!", token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
