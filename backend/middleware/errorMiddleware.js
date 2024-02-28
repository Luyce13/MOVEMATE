const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = {};
    for (let field in err.errors) {
      errors[field] = err.errors[field].message;
    }
    return res
      .status(400)
      .json({ success: false, message: "Validation Error", errors });
  }else if (err.code === 11000) {
    const key = Object.keys(err.keyValue)[0];
    const message = `Duplicate key error: ${key} already exists.`;
    return res.status(400).json({ success: false, message });
  }  else {
    const statusCode = err.statusCode || 500;
    const errorResponse = {
      success: false,
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    };
    return res.status(statusCode).json(errorResponse);
  }
};

module.exports = { errorHandler };
