let startText = "Press Start To Begin!"
let text = "A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th century."
let slider = 0;
let char_count = 0;
let STARTED = false;
let start_time = 0;
let last_key_wrong = false;
const MAX_WPM = 100;
const text_color_typed = "#FFFFFF";
const text_color_untyped = "#501717";
const text_color_next = "orange";
const text_color_wrong = "red";
const start_speed = "0 wpm";
const start_accuracy = "0 %";
const start_timer = "00 s";
const individual_char = "individual-char";

// text = "test"

// init text in text box
document.getElementById("text-box").textContent = startText;


//when user clicks the start button
let b1 = document.getElementsByClassName("start")[0]
b1.addEventListener("click",startTyper);

//when user clicks the reset button
let b2 = document.getElementsByClassName("reset")[0]
b2.addEventListener("click",reset)

//get the whole body to register typing
let body = document.body
body.addEventListener("keypress",keyPress)

setInterval(showStats,100)// every 10 secondsw

function showStats(){
    if (STARTED===true){
        // speed update
        let now = Date.now();
        let time_elapsed = (now - start_time)/60000 // minutes
        let words = (1/4.7) * slider // average number of chars in a word
        let wpm = Math.round(words/time_elapsed);
        let speed = wpm + " " + start_speed.split(" ")[1]


        //accuracy update
        let acc = Math.round((slider/char_count) * 100) 
        if (isNaN(acc)){
            acc = 0;
        }
        let accuracy = acc + " " + start_accuracy.split(" ")[1];

        //timer update
        let timer = start_timer;

        update_stats(speed,accuracy,timer)
    }
}


function keyPress(event){
    if (STARTED===true){
        let letters = document.getElementsByClassName(individual_char)
        let curr = letters[slider].textContent
        let typed = String.fromCharCode(event.keyCode)
        char_count +=1;
        if (curr===typed){
            //change color of typed char
            if (!last_key_wrong){
                letters[slider].style.color = text_color_typed; 
            }
            last_key_wrong = false;
            slider += 1;
            if (slider === text.length){
                reset()
                return
            }
            //change color of next char to type
            letters[slider].style.color = text_color_next;
        } else{
            letters[slider].style.color = text_color_wrong;
            last_key_wrong = true;
        }
    }
}




function startTyper(event){
    let p_elem = document.getElementById("text-box")
    let currText = p_elem.textContent;
    slider = 0;

    if (currText===startText){
        p_elem.textContent = "";
        STARTED = true;
        for (let i=0; i < text.length; i++){
            let new_span = document.createElement("span")
            let new_text = document.createTextNode(text[i])
            new_span.className = individual_char;
            new_span.appendChild(new_text)
            if (i===0){
                new_span.style.color = text_color_next;
            }
            p_elem.appendChild(new_span)
        }
        start_time = Date.now();
    
    } else{
       reset()
    }

}

function reset(){
    let p_elem = document.getElementById("text-box")
    p_elem.textContent = startText;
    update_stats(start_speed,start_accuracy,start_timer)

    STARTED = false;
    start_time = 0;
    char_count = 0;
}

function update_stats(speed,accuracy,timer){
    let s = document.getElementById("speed-value");
    let a = document.getElementById("accuracy-value");
    let t = document.getElementById("timer-value");
    s.textContent = speed;
    a.textContent = accuracy;
    t.textContent = timer;    
}