module.exports = require("mongoose").connect(
  process.env.MONGODB_URI || "mongodb://localhost/employee_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
