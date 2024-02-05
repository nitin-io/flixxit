import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

beforeAll(async () => {
  const memoryServer = await MongoMemoryServer.create();
  await mongoose.connect(memoryServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("User Authentication", () => {
  // Sign-up Test
  describe("POST /api/v1/signup", () => {
    describe("given all required fields", () => {
      it("should signup successfully", async () => {
        const res = await request(app)
          .post("/api/v1/signup")
          .send({
            name: "Example",
            email: "example@email.com",
            password: "correct",
          })
          .expect(201);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toEqual("User created successfully");
      });
    });

    describe("given only email, not password and name", () => {
      it("should give error for required fields", async () => {
        const res = await request(app)
          .post("/api/v1/signup")
          .send({ email: "example1@email.com" })
          .expect(400);

        expect(res.body.message).toEqual(
          "Name, email, and password are required."
        );
      });
    });
  });

  // Sign-in Tests
  describe("POST /api/v1/signin", () => {
    describe("given correct username and password", () => {
      it("should login successfully", async () => {
        const res = await request(app)
          .post("/api/v1/signin")
          .send({
            email: "example@email.com",
            password: "correct",
          })
          .expect(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toEqual("Logged in successfully");
      });
    });

    describe("given incorrect email or password", () => {
      it("should user not found", async () => {
        const res = await request(app)
          .post("/api/v1/signin")
          .send({
            email: "incorrect@email.com",
            password: "correct",
          })
          .expect(401);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toEqual("User not found");
      });

      it("should return message, incorrect email or password", async () => {
        const res = await request(app)
          .post("/api/v1/signin")
          .send({
            email: "example@email.com",
            password: "incorrect",
          })
          .expect(401);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toEqual("Email or password is incorrect");
      });
    });
  });
});
