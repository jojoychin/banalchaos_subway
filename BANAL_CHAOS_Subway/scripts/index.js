window.onload=function(){

var startAudio = null;
var audioFiles = [];
var soundArray = [];

//INTRO & PLAY BUTTON

var body = $("#container");
var startScreen = $("<div id=\'startScreen\'></div>");
$("#container").append(startScreen);
setTimeout(function(){var text = $("<h1>BANAL CHAOS</h1>");$("#startScreen").append(text);},1500)
setTimeout(function(){text = $("<h2>the train is arriving...</h2>"); $("#startScreen").append(text);}, 3000);
setTimeout(function(){text = $("<br><h2>...please stand clear</h2>"); $("#startScreen").append(text);}, 5000)

setTimeout(function(){var startBtn = $("<div class=\"buttonPlay\" id=\"play\">PLAY</div>");
$("#startScreen").append(startBtn); playMe();
}, 6500);


//====================================
//   AUDIO STUFF
//====================================

var fileToLoad = ['audio/willSound.mp3','audio/aartiSound.mp3','audio/joannaSound.mp3', 'audio/jennaSound.mp3', 'audio/karinaSound.mp3'];
// 'audio/joannaSound.mp3','audio/jennaSound.mp3','audio/karinaSound.mp3', 'audio/dianaSound.mp3'];
for (var i in fileToLoad){
	loadAudio(fileToLoad[i]);

}

// Fix up prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audio = new AudioContext();

function loadAudio(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    console.log("Requesting start audio: " + request.response);

    // Decode asynchronously
    request.onload = function() {
        console.log("Start audio received");
        audio.decodeAudioData(request.response, function(buffer) {
            //audioBuffer = buffer;
            audioFiles.push(buffer);
            // playSound(audioFiles[0]);
            // console.log(audioFiles[0]);
            //playSound(audioBuffer);
            //playSound(startAudio);
        }); //, onError);
		
        // playSound(startAudio);
    };
    request.send();
}

 var source;
 var gainNode;

var playMe = function() {
$('.buttonPlay').off('click').on('click',function(){
	console.log("START BUTTON PRESSED");
	$('#startScreen').remove();
	window.scrollTo(0, 0);
// function playSound(buffer) {
	console.log("here");
for (var i in audioFiles){
    source = audio.createBufferSource(); // creates a sound source
    source.loop = true;
    source.buffer = audioFiles[i]; // tell the source which sound to play
    // source.connect(audio.destination); // connect the source to the context's destination (the speakers)
    // source.start(0); // play the source now // note: on older systems, may have to use deprecated noteOn(time);

    // Create a gain node.
	gainNode = audio.createGain();
	// Connect the source to the gain node.
	source.connect(gainNode);
	// Connect the gain node to the destination.
	gainNode.connect(audio.destination);
	soundArray.push(gainNode);

	source.start(0);
	$('.play').remove();
}
});
}

	$(".diana").off('click').on('click',function(){
		// $(".diana").css("background-color","green");
		soundArray[0].gain.value = 1;
		soundArray[1].gain.value = 0;
		soundArray[2].gain.value = 0;
		soundArray[3].gain.value = 0;
		soundArray[4].gain.value = 0;
		// soundArray[5].gain.value = 0;

	console.log("this is diana");


});

//play jenna...
$(".jenna").off('click').on('click',function(){
		soundArray[0].gain.value = 0;
		soundArray[1].gain.value = 0;
		soundArray[2].gain.value = 1;
		soundArray[3].gain.value = 0;
		soundArray[4].gain.value = 0;
		// soundArray[5].gain.value = 0;
		
	console.log("this is jenna");
});

//play will
$(".will").off('click').on('click',function(){
		soundArray[0].gain.value = 1;
		soundArray[1].gain.value = 0;
		soundArray[2].gain.value = 0;
		soundArray[3].gain.value = 0;
		soundArray[4].gain.value = 0;
		// soundArray[5].gain.value = 0;
		// alert("this is working");
	console.log("this is will");


});

//play aarti
$(".aarti").off('click').on('click',function(){
		soundArray[0].gain.value = 0;
		soundArray[1].gain.value = 0;
		soundArray[2].gain.value = 0;
		soundArray[3].gain.value = 0;
		soundArray[4].gain.value = 1;
		soundArray[5].gain.value = 0;
		// alert("this is working");
	console.log("this is aarti");


});

//play joanna
$(".joanna").off('click').on('click',function(){
		soundArray[0].gain.value = 0;
		soundArray[1].gain.value = 0;
		soundArray[2].gain.value = 0;
		soundArray[3].gain.value = 1;
		soundArray[4].gain.value = 0;
		// soundArray[5].gain.value = 0;
		// alert("this is working");
	console.log("this is joanna");


});

//play karina
$(".karina").off('click').on('click',function(){
		soundArray[0].gain.value = 0;
		soundArray[1].gain.value = 1;
		soundArray[2].gain.value = 0;
		soundArray[3].gain.value = 0;
		soundArray[4].gain.value = 0;
		// soundArray[5].gain.value = 0;
		// alert("this is working");
	console.log("this is karina");


});


//quiet please...
$(".silence").off('click').on('click',function(){
		soundArray[0].gain.value = 0;
		soundArray[1].gain.value = 0;
		soundArray[2].gain.value = 0;
		soundArray[3].gain.value = 0;
		soundArray[4].gain.value = 0;
		// soundArray[5].gain.value = 0;
		
		console.log("QUIET PLEASE");

});

$(".chaos").off('click').on('click',function(){
		soundArray[0].gain.value = 1;
		soundArray[1].gain.value = 1;
		soundArray[2].gain.value = 1;
		soundArray[3].gain.value = 1;
		soundArray[4].gain.value = 1;
		// soundArray[5].gain.value = 1;
		
		console.log("CHAOS PLEASE");
});
};



