let newObject = {};
const object = analyzeArray([1, 8, 3, 4, 2, 6]);
function analyzeArray(arr) {
	const sortedArray = arr.sort(sortArray);
	function sortArray(a, b) {
		return a - b;
	}

	const reducedArray = sortedArray.reduce((a, b) => a + b, 0);

	return (newObject = {
		average: 24 / sortedArray.length,
		min: sortedArray[0],
		max: sortedArray[sortedArray.length - 1],
		length: sortedArray.length,
	});
}
export { object, analyzeArray, newObject };
