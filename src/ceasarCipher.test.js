import caesarCipher from "./ceasarCipher";

/* console.log(caesarCipher("abcd")); */

test("Get the next letter", () => {
	expect(caesarCipher("abcd")).toBe("bcde");
});

test("Check for punctuation", () => {
	expect(caesarCipher("ab.cd/")).toBe("bcde");
});

test("Check same case", () => {
	expect(caesarCipher("ABCD")).toBe("bcde");
});
