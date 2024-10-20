const assert = require("assert");
const formatNumber = require("./index.js");

describe("formatNumber", () => {
  it("should format number with default separator", () => {
    assert.strictEqual(formatNumber(1234567), "1.234.567");
  });

  it("should format number with a custom separator", () => {
    assert.strictEqual(formatNumber(1234567, ","), "1,234,567");
  });

  it("should return the same small number when no separator is needed", () => {
    assert.strictEqual(formatNumber(12), "12");
  });

  it("should format 0 correctly", () => {
    assert.strictEqual(formatNumber(0), "0");
  });

  it("should format negative numbers correctly", () => {
    assert.strictEqual(formatNumber(-1234567), "-1.234.567");
  });
});
