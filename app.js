

let randomNumber;
let number;

function guess(){
    let inputText = document.getElementById("guess").value;
    
    if (!inputText==""){
        if(randomNumber==inputText){
            document.getElementById("numberhint").style.color = '#00ff00';
            document.getElementById("numberhint").innerHTML = 'Your guess is correct. Congratulations!'
        } else if(randomNumber<inputText){
            document.getElementById("numberhint").style.color = '#ff0000';
            document.getElementById("numberhint").innerHTML = 'Make a smaller guess.'
        }
        else if(randomNumber>inputText){
            document.getElementById("numberhint").style.color = '#ff0000';
            document.getElementById("numberhint").innerHTML = 'Make a bigger guess.'
        }
    } else {
        document.getElementById("numberhint").style.color = '#ff0000';
        document.getElementById("numberhint").innerHTML = 'Enter a number.'
    }
    

    
}

window.onload = function() {
    randomNumber = (Math.floor(Math.random() * (100 + 1)));
    console.log(`Random number is set to ${randomNumber}`);

};

function increase(){
    let getnumber = document.getElementById("guess").value;
    number = getnumber;
    if (number==""){
        number = 0
        document.getElementById("guess").value = number;
    }
    else if(!number<=100){
        number++;
        document.getElementById("guess").value = number;
        
    }
}

function decrease(){
    let getnumber = document.getElementById("guess").value;
    number = getnumber;
    if (number==""){
        number = 0
        document.getElementById("guess").value = number;
    }
    else if(!number<=0){
        number--;
        document.getElementById("guess").value = number;
        
    }
    
}