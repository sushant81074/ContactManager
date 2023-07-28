const {
  NOT_FOUND,
  VALIDATION_ERROR,
  FORBIDDEN,
  UNAUTHORIZED,
  SERVER_ERROR,
} = require("../constants");

const errorHandler = (err, req, res, next) => {
  console.log(JSON.stringify(err));
  const statusCode = req.statusCode ? statusCode : 500;

  switch (statusCode) {
    case NOT_FOUND:
      res.json({
        title: "NOT_FOUND",
        message: err.message,
      });
      break;
    case VALIDATION_ERROR:
      res.json({
        title: "VALIDATION_ERROR",
        message: err.message,
      });
      break;
    case FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
      });
      break;
    case UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: err.message,
      });
      break;
    case SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR",
        SERVER_ERROR: 500,
        message: err.message,
      });
      break;
    default:
      console.log("No Error , Everything's Good. ");
      break;
  }

  res.json({ message: err.message });
};

module.exports = errorHandler;
