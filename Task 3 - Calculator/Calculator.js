document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
      input(key); 
    } 
    else if (key === 'Enter') {
      cal(); 
    } 
    else if (key === 'Escape') {
      clearScreen(); 
    }
});

function input(value) {
    document.getElementById("screen").innerText += value;
}

function clearScreen() {
    document.getElementById("screen").innerText = "";
}

function cal() {
    try {
      let result = eval(document.getElementById("screen").innerText);
      document.getElementById("screen").innerText = result;
    } 
    
    catch (error) {
      document.getElementById("screen").innerText = "Error";
    }
}
