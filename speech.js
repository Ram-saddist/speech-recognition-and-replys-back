const btn=document.querySelector(".speak");
const result=document.querySelector(".result");

const speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new speechRecognition();

const greetings=["Iam happy to hear your voice","I love your voice"]

recognition.onstart=()=>{
	console.log("mic is turned on start speaking")
}

recognition.onresult=(event)=>{
	const current= event.resultIndex;
	const transcript=event.results[current][0].transcript;
	result.textContent=transcript;
	readOutLoud(transcript);
	setTimeout(()=>{
		result.textContent=""
	},5000)
}

btn.addEventListener("click",()=>{
	recognition.start()
})


function readOutLoud(msg){
	const speech=new SpeechSynthesisUtterance();
	speech.text="Sorry I can't understand you"
	if(msg.includes("how are you")){
		const finalResult=greetings[Math.floor(Math.random()*greetings.length)];
		speech.text=finalResult;
	}
	if(msg.includes("what's the time")){
		const today=new Date();
		var time="current time is"+today.getHours()+"hours"+ today.getMinutes()+"minutes"+today.getSeconds()+"seconds";
		speech.text=time;
	}

	speech.volume=1;
	speech.rate=1;
	speech.pitch=1;

	window.speechSynthesis.speak(speech)
}




