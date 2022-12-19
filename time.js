 var minutesCount = 0,secondCount = 0,centisecondCount = 0
minutes = document.getElementById("minutes")
second = document.getElementById("second")
centisecond = document.getElementById("centisecond")


function startSW() {

$("#pauseCount").removeAttr("disabled");
$("#restCount").removeAttr("disabled");


 minutessetInterval=setInterval(function(){
minutesCount += 1
minutes.innerHTML = minutesCount

},60000)


 secondsetInterval=setInterval(function(){

secondCount += 1
if(secondCount > 59){
	secondCount = 1
}
second.innerHTML = secondCount
},1000)

 centisecondsetInterval=setInterval(function(){

	centisecondCount += 1

	if(centisecondCount > 59){
		centisecondCount = 1
	}
		centisecond.innerHTML = centisecondCount

  },10)

}

function pauseSW(){

$("#pauseCount").attr({"disabled":"disabled"});



clearInterval(minutessetInterval)
clearInterval(secondsetInterval)
clearInterval(centisecondsetInterval)
}


function restSW(){

$("#restCount").attr({"disabled":"disabled"});
$("#pauseCount").attr({"disabled":"disabled"});

clearInterval(minutessetInterval)
clearInterval(secondsetInterval)
clearInterval(centisecondsetInterval)


minutesCount = 0;
secondCount = 0;
centisecondCount = 0 ;

minutes.innerHTML = minutesCount
second.innerHTML = secondCount
centisecond.innerHTML = centisecondCount

}









