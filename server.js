const express = require("express");
const path = require("path");
const cors = require("cors");
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
// Enable Cors
app.use(cors());

// Routes
app.use("/api/users", routes);
// Serve static assets if in Production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
