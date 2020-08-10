document.addEventListener('keydown',(event) => {
	console.log(event.keyCode);
		var key = event.keyCode;
		if (key == 65){
			var audio = new Audio("./assets/Piano Chord 331.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('A').style.backgroundColor = "aqua";
			document.getElementById('A').style.boxShadow = "0px 0px 20px 0px aqua";
			setTimeout(function () {
				document.getElementById('A').style.backgroundColor = "transparent";
			document.getElementById('A').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 83){
			var audio = new Audio("./assets/Piano Chord 209.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('S').style.backgroundColor = "aqua";
			document.getElementById('S').style.boxShadow = "0px 0px 20px 0px aqua";
			setTimeout(function () {
				document.getElementById('S').style.backgroundColor = "transparent";
			document.getElementById('S').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 68){
			var audio = new Audio("./assets/Piano Chord 208.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('D').style.backgroundColor = "aqua";
			document.getElementById('D').style.boxShadow = "0px 0px 20px 0px aqua";
			setTimeout(function () {
				document.getElementById('D').style.backgroundColor = "transparent";
			document.getElementById('D').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 70){
			var audio = new Audio("./assets/PREL Musical 57.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('F').style.backgroundColor = "#ff00ff";
			document.getElementById('F').style.boxShadow = "0px 0px 20px 0px #ff00ff";
			setTimeout(function () {
				document.getElementById('F').style.backgroundColor = "transparent";
			document.getElementById('F').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 71){
			var audio = new Audio("./assets/Drum Snare Roll.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('G').style.backgroundColor = "#ff00ff";
			document.getElementById('G').style.boxShadow = "0px 0px 20px 0px #ff00ff";
			setTimeout(function () {
				document.getElementById('G').style.backgroundColor = "transparent";
			document.getElementById('G').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 72){
			var audio = new Audio("./assets/Cymbal Suspended.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('H').style.backgroundColor = "#ff00ff";
			document.getElementById('H').style.boxShadow = "0px 0px 20px 0px #ff00ff";
			setTimeout(function () {
				document.getElementById('H').style.backgroundColor = "transparent";
			document.getElementById('H').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 74){
			var audio = new Audio("./assets/Drum Sticks Hit 3.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('J').style.backgroundColor = "#ff00ff";
			document.getElementById('J').style.boxShadow = "0px 0px 20px 0px #ff00ff";
			setTimeout(function () {
				document.getElementById('J').style.backgroundColor = "transparent";
			document.getElementById('J').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 75){
			var audio = new Audio("./assets/Musical Compos 33.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('K').style.backgroundColor = "white";
			document.getElementById('K').style.boxShadow = "0px 0px 20px 0px white";
			setTimeout(function () {
				document.getElementById('K').style.backgroundColor = "transparent";
			document.getElementById('K').style.boxShadow = "none";
				// body...
			},500)
		}
		if (key == 76){
			var audio = new Audio("./assets/Musical Orches 4.mp3");
			audio.currentTime = 0;
			audio.play();
			document.getElementById('L').style.backgroundColor = "white";
			document.getElementById('L').style.boxShadow = "0px 0px 20px 0px white";
			setTimeout(function () {
				document.getElementById('L').style.backgroundColor = "transparent";
			document.getElementById('L').style.boxShadow = "none";
				// body...
			},500)
		}

});
