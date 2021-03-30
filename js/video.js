var video = document.querySelector("#player1");

// function PlayVid() {
// 	video.play();
// }

// function PauseVid() {
// 	video.pause();
// }

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");

});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .95;
	console.log(video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate = video.playbackRate / .95;
		console.log(video.playbackRate)
	});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime <= video.duration - 15) {
	video.currentTime = video.currentTime + 15 }
	else {
	console.log(video.currentTime)
	video.currentTime = 0 
	video.play()
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == true) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuted")
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Muted")
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	console.log(video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100

});

// window.addEventListener("load", function () {
// 	document.querySelector("#volume").innerHTML = video.volume * 100
// })

document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Add vintage style");
	video.classList.add("oldSchool")
	}
);
	document.querySelector("#orig").addEventListener("click", function () {
		console.log("Removing vintage css");
		video.classList.remove("oldSchool");
	}
)



