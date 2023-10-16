// Take the function parameter and split it into an Array
// Create another array with all the letters of the alphabet
// Loop through the Array and till you find the same letter
// Push the new letters into a new array
// Join the letters together to form a word

const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

export default function caesarCipher(word) {
	const arr = word.split("");
	const updatedArr = [];
	for (let letter of arr) {
		const findLetter = alphabet.findIndex(
			(alphaLetter) => letter.toLowerCase() === alphaLetter
		);
		if (findLetter !== -1) {
			updatedArr.push(alphabet[findLetter + 1]);
		} else if (findLetter === 26) {
			updatedArr.push("a");
		}
	}
	return updatedArr.join("");
}
