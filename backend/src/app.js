const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { corsOptions } = require("./config/cors");
const routes = require("./routes");
const { notFound, errorHandler } = require("./middleware/errors");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

module.exports = { app };