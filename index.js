function produceDrivingRange(blockRange) {
	return function withinRange(start, end) {
		let blocks = Number(start.slice(0, 2)) - Number(end.slice(0, 2));

		if (Math.abs(blocks) <= blockRange) {
			return `within range by ${blockRange - Math.abs(blocks)}`;
		} else {
			return `${Math.abs(blocks) - blockRange} blocks out of range`;
		};

	};
};

function produceTipCalculator(percent) {
	return function probablyTheTotal(total) {
		return total * percent;
	};
};

function createDriver() {
	let driverId = 0

	return class {
		constructor(name) {
			this.name = name
			this.id = ++driverId
		};
	};
};