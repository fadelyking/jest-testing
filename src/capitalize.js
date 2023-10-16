export let capitalize = (word) => {
	const firstLetter = word.charAt(0).toUpperCase();
	const restWord = word.substr(1);
	return firstLetter + restWord;
};
