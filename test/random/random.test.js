const random = require("../../src/random/random");

test("should export randi, randf, randfArray and randiArray", () => {
  expect(random.randi).not.toBe(undefined);
  expect(random.randf).not.toBe(undefined);
  expect(random.randiArray).not.toBe(undefined);
  expect(random.randfArray).not.toBe(undefined);
});

test("randi should return a random integer", () => {
  let r = random.randi(10, 40);
  expect(r).toBeDefined();
  expect((r * 10) % 10).toEqual(0);
  expect(r).toBeLessThan(40);
  expect(r).toBeGreaterThanOrEqual(10);
});

test("randf should return a random float", () => {
  let r = random.randf(10, 40);
  expect(r).toBeDefined();
  expect(r).toBeLessThan(40);
  expect(r).toBeGreaterThanOrEqual(10);
});

test("randfArray should return an array of random float", () => {
  let rfarray = random.randfArray(20, 40, 10);
  expect(rfarray.length).toEqual(10);
  for (let i = 0; i < rfarray.length; i++) {
    let r = rfarray[i];
    expect(r).toBeDefined();
    expect(r).toBeLessThan(40);
    expect(r).toBeGreaterThanOrEqual(20);
  }
});

test("randiArray should return an array of random integer", () => {
  let rfarray = random.randiArray(20, 40, 10);
  expect(rfarray.length).toEqual(10);
  for (let i = 0; i < rfarray.length; i++) {
    let r = rfarray[i];
    expect(r).toBeDefined();
    expect(r).toBeLessThan(40);
    expect(r).toBeGreaterThanOrEqual(20);
  }
});
