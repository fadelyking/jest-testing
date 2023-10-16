import { add, subtract, divide, multiply } from "./calculator";

test("Add 2 numbers together", () => {
	expect(add(1, 2)).toBe(3);
});

test("Subtract 2 numbers", () => {
	expect(subtract(4, 2)).toBe(2);
});

test("Divide 2 numbers", () => {
	expect(divide(12, 6)).toBe(2);
});

test("Multiply 2 numbers", () => {
	expect(multiply(6, 6)).toBe(36);
});
