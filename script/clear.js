
document.getElementById("btn-clear").addEventListener('click',function(event){
     event.preventDefault();
     // document.getElementById("history-container").style.display = "none";
     document.getElementById("history-container").innerHTML = '';
     alert("History has been cleared!");
})