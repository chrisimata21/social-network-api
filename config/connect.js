const mongoose = require("mongoose");
const DB = process.env.MONGODB_URI;

/*mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/
mongoose.set("strictQuery", true);

(async () => {
  await mongoose.connect(DB, {}, async () => {
    console.log("Connected to Database");
  });
})();

module.exports = mongoose.connection;
