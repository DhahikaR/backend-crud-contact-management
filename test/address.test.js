import supertest from "supertest";
import {
  getTestContact,
  removeAllTestAddresses,
  removeAllTestContacts,
  createTestUser,
  createTestContact,
  removeTest,
  createTesAddress,
  getTestAddress,
} from "./test-util";
import { web } from "../src/application/web";

describe("POST /api/contacts/:contactId/addresses", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTest();
  });

  it("should can create new address", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .post("/api/contacts/" + testContact.id + "/addresses")
      .set("Authorization", "test")
      .send({
        street: "jalan test",
        city: "kota test",
        province: "provinsi test",
        country: "indonesia",
        postal_code: "242424",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.street).toBe("jalan test");
    expect(result.body.data.city).toBe("kota test");
    expect(result.body.data.province).toBe("provinsi test");
    expect(result.body.data.country).toBe("indonesia");
    expect(result.body.data.postal_code).toBe("242424");
  });

  it("should reject if address request is invalid", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .post("/api/contacts/" + testContact.id + "/addresses")
      .set("Authorization", "test")
      .send({
        street: "jalan test",
        city: "kota test",
        province: "provinsi test",
        country: "",
        postal_code: "",
      });

    expect(result.status).toBe(400);
  });

  it("should reject if contact not found", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .post("/api/contacts/" + (testContact.id + 1) + "/addresses")
      .set("Authorization", "test")
      .send({
        street: "jalan test",
        city: "kota test",
        province: "provinsi test",
        country: "",
        postal_code: "",
      });

    expect(result.status).toBe(404);
  });
});

describe("GET /api/contacts/:contactId/addresses/:addressId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTesAddress();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTest();
  });

  it("should can get address", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .get("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.street).toBe("jalan test");
    expect(result.body.data.city).toBe("kota test");
    expect(result.body.data.province).toBe("provinsi test");
    expect(result.body.data.country).toBe("indonesia");
    expect(result.body.data.postal_code).toBe("242424");
  });

  it("should reject if contact not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .get(
        "/api/contacts/" + (testContact.id + 1) + "/addresses/" + testAddress.id
      )
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });

  it("should reject if address not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .get(
        "/api/contacts/" + testContact.id + "/addresses/" + testAddress.id + 1
      )
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});

describe("PATCH /api/contacts/:contactId/addresses/:addressId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTesAddress();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTest();
  });
  it("should can update address", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .patch("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
      .set("Authorization", "test")
      .send({
        street: "street",
        city: "city",
        province: "province",
        country: "indonesia",
        postal_code: "11111",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBe(testAddress.id);
    expect(result.body.data.street).toBe("street");
    expect(result.body.data.city).toBe("city");
    expect(result.body.data.province).toBe("province");
    expect(result.body.data.country).toBe("indonesia");
    expect(result.body.data.postal_code).toBe("11111");
  });

  it("should reject update if request not valid", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .patch("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
      .set("Authorization", "test")
      .send({
        street: "street",
        city: "city",
        province: "province",
        country: "",
        postal_code: "",
      });

    expect(result.status).toBe(400);
  });

  it("should reject update if address not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .patch(
        "/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1)
      )
      .set("Authorization", "test")
      .send({
        street: "street",
        city: "city",
        province: "province",
        country: "indonesia",
        postal_code: "11111",
      });

    expect(result.status).toBe(404);
  });

  it("should reject update if contact not found", async () => {
    const testContact = await getTestContact();
    const testAddress = await getTestAddress();

    const result = await supertest(web)
      .patch(
        "/api/contacts/" + (testContact.id + 1) + "/addresses/" + testAddress.id
      )
      .set("Authorization", "test")
      .send({
        street: "street",
        city: "city",
        province: "province",
        country: "indonesia",
        postal_code: "11111",
      });

    expect(result.status).toBe(404);
  });
});

describe("DELETE /api/contacts/:contactId/addresses/:addressId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTesAddress();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTest();
  });
  it("should can remove address", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(
        "/api/contacts/" + testContact.id + "/addresses/" + testAddress.id
      )
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data).toBe("OK");

    testAddress = await getTestAddress();
    expect(testAddress).toBeNull();
  });

  it("should reject if address not found", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(
        "/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1)
      )
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });

  it("should reject if contact not found", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(
        "/api/contacts/" + (testContact.id + 1) + "/addresses/" + testAddress.id
      )
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
  it("should reject if address not found", async () => {
    const testContact = await getTestContact();
    let testAddress = await getTestAddress();

    const result = await supertest(web)
      .delete(
        "/api/contacts/" + testContact.id + "/addresses/" + (testAddress.id + 1)
      )
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});

describe("GET /api/contacts/:contactId/addresses", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
    await createTesAddress();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTest();
  });
  it("should can list address", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .get("/api/contacts/" + testContact.id + "/addresses")
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data.length).toBe(1);
  });

  it("should reject if contact not found", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .get("/api/contacts/" + (testContact.id + 1) + "/addresses")
      .set("Authorization", "test");

    expect(result.status).toBe(404);
  });
});
