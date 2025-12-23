const supertest = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

const request = supertest(app);

beforeAll(async () => {
  await mongoose.connect(MONGO_URI_TEST);
});
