const endpoint = require("../../endpoints/endpointConstants");

test("Check the endpoint for product", () => {
  expect(endpoint.PRODUCT).toBe("/api/product");
});

test("Check the endpoint for profile", () => {
  expect(endpoint.PROFILE).toBe("/api/profile");
});
