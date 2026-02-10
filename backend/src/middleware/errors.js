function notFound(req, res, next) {
  res.status(404).json({ success: false, message: "Route not found" });
}

function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  const message = err.message || "Server error";
  if (process.env.NODE_ENV !== "production") console.error(err);
  res.status(status).json({ success: false, message });
}

module.exports = { notFound, errorHandler };