let outputscreen=document.getElementById("output");

function display(num){
    outputscreen.value += num;
}

function Calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("Invalid Syntax")
    }
}

function Clear(){
    outputscreen.value = "";
}

function Del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}

