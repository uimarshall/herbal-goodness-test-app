const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const routes = require("./routes/api/users");
const connectDb = require("./config/dbConn");

// Load env variables
dotenv.config({ path: "./config/.env" });

// Connect to Database
connectDb();
const app = express();

// MIDDLEWARE

// Body Parser
app.use(express.json());

// Routes
app.use("/api/users", routes);

const port = process.env.PORT || 5000;

app.listen(port, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
