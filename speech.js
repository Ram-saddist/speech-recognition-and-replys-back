const btn=document.querySelector(".speak");
const result=document.querySelector(".result");

const speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new speechRecognition();
recognition.continuous = true;
const greetings=["Iam happy to hear your voice","I love your voice"]

recognition.onstart=()=>{
	console.log("mic is turned on start speaking")
}

recognition.onend = () => {
    
    console.log("Speech Recognition Ended");
  };

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
	const speech=new SpeechSynthesisUtterance();
	speech.text="Hi this is jarvis? Allow the microphone So i can help you ";
	speech.volume=1;
	speech.rate=1;
	speech.pitch=1;
	window.speechSynthesis.speak(speech)
	recognition.start()

})


function readOutLoud(msg){
	const speech=new SpeechSynthesisUtterance();
	speech.text="Sorry I can't understand you"
	if(msg.includes("how are you")){
		//const finalResult=greetings[Math.floor(Math.random()*greetings.length)];
		//speech.text=finalResult;
		speech.text="It is really a plesant day for me! How may I help you?"
	}
	
	if(msg.includes("what's the current time")){
		const today=new Date();
		var time="current time is"+today.getHours()+" hours:"+ today.getMinutes()+" minutes";
		speech.text=time;
		var t2=today.getHours()+":"+today.getMinutes()
		document.querySelector(".result").textContent=t2
	}
	if(msg.includes("bye")){
		recognition.stop();
		speech.text="I am really happy for helping you! Have a great day"
	}
	speech.volume=1;
	speech.rate=1;
	speech.pitch=1;


	window.speechSynthesis.speak(speech)
}




