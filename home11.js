function createNewBlocks() {
	var parentEl = document.getElementById("blocks");
	for (var i = 0; i < 20; i++) {
		var newEl = document.createElement("div");
		parentEl.append(newEl);
	}
}
