export function errorHandler(error, req, res, next) {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  const status = error.status || 500;
  res.status(status).json({
    message: error.message || "Unexpected server error"
  });
}
