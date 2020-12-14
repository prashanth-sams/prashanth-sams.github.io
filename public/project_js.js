/*
	All existing event dispatching would still exist in Optimizely's Project JS. (i.e. everything below this line)
*/

document.querySelector("#click-me").addEventListener("click", function() {
	window.optimizely.push({
	  type: "event",
	  eventName: "clickMe",
	  tags: {category: 'button', value: 1}
	});
});

document.querySelector("#dont-click").addEventListener("click", function() {
	window.optimizely.push({
	  type: "event",
	  eventName: "dontClick",
	  tags: {category: 'button', value: 2}
	});
});


document.querySelector("#skip").addEventListener("click", function() {
	window.optimizely.push({
	  type: "event",
	  eventName: "skip",
	  tags: {category: 'button', value: 3}
	});
});