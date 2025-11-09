

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
	p5Inst._predefinedSpriteAnimations = {};
	p5Inst._pauseSpriteAnimationsByDefault = false;
	var animationListJSON = { "orderedKeys": ["3998a111-b9b1-4366-857d-18da1217e47e", "e3cf9ad0-8cdb-49f8-ae12-2cca1ccc9a69"], "propsByKey": { "3998a111-b9b1-4366-857d-18da1217e47e": { "name": "title2", "sourceUrl": null, "frameSize": { "x": 661, "y": 607 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "lzmzNMWZ6qSYQc2GlUNdBidKDsBXwfGL", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 661, "y": 607 }, "rootRelativePath": "assets/3998a111-b9b1-4366-857d-18da1217e47e.png" }, "e3cf9ad0-8cdb-49f8-ae12-2cca1ccc9a69": { "name": "start1", "sourceUrl": "assets/v3/animations/PqOp0ou8kvykADg3G6mnIrv7XUwHPZUZD4rJQznU7OA/e3cf9ad0-8cdb-49f8-ae12-2cca1ccc9a69.png", "frameSize": { "x": 488, "y": 217 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "fJXno2H8dd7Kc8kX0Lg6xSs9jJIKv_i8", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 488, "y": 217 }, "rootRelativePath": "assets/v3/animations/PqOp0ou8kvykADg3G6mnIrv7XUwHPZUZD4rJQznU7OA/e3cf9ad0-8cdb-49f8-ae12-2cca1ccc9a69.png" } } };
	var orderedKeys = animationListJSON.orderedKeys;
	var allAnimationsSingleFrame = false;
	orderedKeys.forEach(function (key) {
		var props = animationListJSON.propsByKey[key];
		var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
		var image = loadImage(props.rootRelativePath, function () {
			var spriteSheet = loadSpriteSheet(
				image,
				props.frameSize.x,
				props.frameSize.y,
				frameCount
			);
			p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
			p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
			p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
		});
	});

	function wrappedExportedCode(stage) {
		if (stage === 'preload') {
			if (setup !== window.setup) {
				window.setup = setup;
			} else {
				return;
			}
		}
		// -----

		// Draw a 40 x 40 grid on a piece of paper and start colouring your idea on it,
		// This will help you code faster.

		//  Your pixel grid has 40 rows and 40 columns.
		//  Every time you change the code click on "Reset" then click "Run"
		//  This will refresh your canvas.


		var row_1 = "8888888888888880000000088888888888888888";
		var row_2 = "8888888888888800000000008888888888888888";
		var row_3 = "8888888888888000000000000888888888888888";
		var row_4 = "8888888888880000000000000088888888888888";
		var row_5 = "8888888888800000000000000008888888888888";
		var row_6 = "8888888888800000000000000000888888888888";
		var row_7 = "8888888888800000000000000000888888888888";
		var row_8 = "8888888888800040000000000000888888888888";
		var row_9 = "8888888888800044444444444400888888888888";
		var row_10 = "8888888888880044004444400440888888888888";
		var row_11 = "8888888888888040110444011040888888888888";
		var row_12 = "8888888888884400110000011004488888888888";
		var row_13 = "8888888888884440110444011044488888888888";
		var row_14 = "8888888888888444004494400444888888688888";
		var row_15 = "8883333888888844444444444448888886688888";
		var row_16 = "8883333888888844449444944448888866888888";
		var row_17 = "8888338888888884444999444488888666688888";
		var row_18 = "8884434888888888844888448888888666688888";
		var row_19 = "8844224888888888884444488888888866888988";
		var row_20 = "8844224888888888888444888888888668888988";
		var row_21 = "8844224888888881116646611188886688888988";
		var row_22 = "8882224888888811111666111118868888888988";
		var row_23 = "8882222188888111111666111111868888888988";
		var row_24 = "8822222218881111111666111111333383333908";
		var row_25 = "8822222211811111111161111111133888000000";
		var row_26 = "8822222211111111111161111111143888338908";
		var row_27 = "8888888111111811111111111181466488338988";
		var row_28 = "8888888811118811111111111188466488558988";
		var row_29 = "8833333881188811111133331188466488558988";
		var row_30 = "8883338888888811111113331188866488558988";
		var row_31 = "8885558888888811111117771188866888558988";
		var row_32 = "8885558888888811111117771188888888888988";
		var row_33 = "8885558888888811111117771188888999999998";
		var row_34 = "4444444444444444444444444444444444444444";
		var row_35 = "4114411444441144111411141414141411141414";
		var row_36 = "4141414144441414144414441414141414441414";
		var row_37 = "4141411444441144114411444144141441441114";
		var row_38 = "4141414144441444144414444144141444141414";
		var row_39 = "4114414141441444111411144144111411141414";
		var row_40 = "4444444444444444444444444444444444444444";

		// 0 ==> Black
		// 1 ==> White
		// 2 ==> Red
		// 3 ==> Yellow
		// 4 ==> Orange
		// 5 ==> Green
		// 6 ==> Blue
		// 7 ==> Purple
		// 8 ==> Pink
		// 9 ==> Brown





























		var rows = [row_1, row_2, row_3, row_4, row_5, row_6, row_7, row_8,
			row_9, row_10, row_11, row_12, row_13, row_14, row_15, row_16, row_17,
			row_18, row_19, row_20, row_21, row_22, row_23, row_24, row_25, row_26,
			row_27, row_28, row_29, row_30, row_31, row_32, row_33, row_34, row_35,
			row_36, row_37, row_38, row_39, row_40];


		background("white");

		for (var k = 0; k <= 40; k++) {
			line(k * 10, 0, k * 10, 400);
			line(0, k * 10, 400, k * 10);
		}

		// rows
		for (var r = 0; r < rows.length; r++) {
			for (var i = 0; i < rows[r].length; i++) {
				if (rows[r][i] == "0") {
					// console.log("entered" + i);
					strokeWeight(0.02)
					fill("black");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "1") {
					strokeWeight(0.02)
					fill("white");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "2") {
					strokeWeight(0.02)
					fill("red");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "3") {
					strokeWeight(0.02)
					fill("yellow");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "4") {
					strokeWeight(0.02)
					fill("orange");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "5") {
					strokeWeight(0.02)
					fill("green");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "6") {
					strokeWeight(0.02)
					fill("blue");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "7") {
					strokeWeight(0.02)
					fill("purple");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "8") {
					strokeWeight(0.02)
					fill("pink");
					rect(i * 10, r * 10, 10, 10);
				}
				else if (rows[r][i] == "9") {
					strokeWeight(0.02)
					fill("brown");
					rect(i * 10, r * 10, 10, 10);
				}
			}
		}
		drawSprites();

		// -----
		try { window.draw = draw; } catch (e) { }
		switch (stage) {
			case 'preload':
				if (preload !== window.preload) { preload(); }
				break;
			case 'setup':
				if (setup !== window.setup) { setup(); }
				break;
		}
	}
	window.wrappedExportedCode = wrappedExportedCode;
	wrappedExportedCode('preload');
};

window.setup = function () {
	window.wrappedExportedCode('setup');
};

function draw() {
	if (windowHeight < windowWidth) {
		document.body.style.zoom = (windowHeight / 400) - 0.03
	}
	else {
		document.body.style.zoom = (windowWidth / 400) - 0.03
	}
}