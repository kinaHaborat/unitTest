import { expect } from "chai";
import { Calculator } from "../src/myApp";

describe("Calculator", () => {
  describe("#sum()", () => {
    it("should return the sum of 2 numbers", () => {
      expect(Calculator.sum([1, -1])).to.equal(0);
    });
    it("should return the sum of teo numbers", () => {
      expect(Calculator.sum([-1, 2])).to.equal(1);
    });
  });
  describe("#average()", () => {
    it("should return the average of 2 numbers", () => {
      expect(Calculator.average([10, 20])).to.equal(15);
    });
    it("should return the average of 2 numbers", () => {
      expect(Calculator.average([100, 20])).to.equal(60);
    });
  });
  describe("#calculate()", () => {
    it("should return the either average or the sum of 2 numbers based on the second argument", () => {
      expect(Calculator.calculate([5, 20], "sum")).to.equal(25);
    });
    it("should return the either average or the sum of 2 numbers based on the second argument", () => {
      expect(Calculator.calculate([54, 242], "average")).to.equal(148);
    });
  });
});
