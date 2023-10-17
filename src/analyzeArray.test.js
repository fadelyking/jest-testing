import { newObject } from "./analyzeArray";
test("object assignment", () => {
	expect(newObject).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
