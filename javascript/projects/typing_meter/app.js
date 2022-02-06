let startText = "Press Here To Begin!"
let text = "A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th century."
let slider = 0;
let STARTED = false;
let start_time = 0;
const MAX_WPM = 100;
const text_color_typed = "#FFFFFF";
const text_color_untyped = "#501717";

// text = "test"

// init text in text box
document.getElementById("text-box").textContent = startText;


//when user clicks the start button
let button = document.getElementsByClassName("content")[0]
button.addEventListener("click",startTyper);

//get the whole body to register typing
let body = document.body
body.addEventListener("keypress",keyPress)

setInterval(showSpeed,100)// every 10 secondsw

function showSpeed(){
    if (STARTED===true){
        let now = Date.now();
        let time_elapsed = (now - start_time)/60000 // minutes
        console.log(time_elapsed)
        let disp = document.getElementById("number");
        let words = (1/4.7) * slider // average number of chars in a word
        let wpm = Math.round(words/time_elapsed);
        let offset = 472 - ((wpm/MAX_WPM)*472)
        disp.textContent = wpm + " WPM";
        let circle = document.getElementsByTagName('circle')[0]
        circle.style.strokeDashoffset = offset;
    }
}


function keyPress(event){
    if (STARTED===true){
        let letters = document.getElementsByClassName("individual-char")
        let curr = letters[slider].textContent
        let typed = String.fromCharCode(event.keyCode)
        if (curr===typed){
            //change color of typed char
            letters[slider].style.color = text_color_typed; 
            slider += 1;
            if (slider === text.length){
                slider = 0;
                startTyper(NaN);
                return
            }
            //change color of 
            letters[slider].style.color = "orange";
        }        
    }
}




function startTyper(event){
    let p_elem = document.getElementById("text-box")
    let currText = p_elem.textContent;
    let speedometer = 
    slider = 0;
    console.log(event.type)

    if (currText===startText){
        p_elem.textContent = "";
        STARTED = true;
        for (let i=0; i < text.length; i++){
            let new_span = document.createElement("span")
            let new_text = document.createTextNode(text[i])
            new_span.className = "individual-char";
            new_span.appendChild(new_text)
            if (i===0){
                new_span.style.color = "blue";
            }
            p_elem.appendChild(new_span)
        }
        start_time = Date.now();
    
    } else{
        let circle = document.getElementsByTagName('circle')[0]
        circle.style.strokeDashoffset = 472;
        let disp = document.getElementById("number");
        disp.textContent = "0 WPM";
        p_elem.textContent = startText
        STARTED = false;
        start_time = 0;
    }

}