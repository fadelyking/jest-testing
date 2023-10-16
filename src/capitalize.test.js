import { capitalize } from "./capitalize";

test("Capitalize the first letter of the word", () => {
	expect(capitalize("test")).toBe("Test");
});
