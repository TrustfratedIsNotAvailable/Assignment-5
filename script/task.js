function handleButtonClick(buttonId , titleId) {
    document.getElementById(buttonId).addEventListener('click', function(event) {
        event.preventDefault();
        const taskCountElement = document.getElementById("task-count");
        const convertedTaskCount = parseInt(taskCountElement.innerText);

        taskCountElement.innerText = convertedTaskCount - 1;
        document.getElementById(buttonId).disabled = true;

        const title = document.getElementById(titleId).innerText;

        const now = new Date();
        const hours = now.getHours() % 12 || 12; 
        const minutes = now.getMinutes().toString().padStart(2, "0"); 
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const ampm = now.getHours() >= 12 ? "PM" : "AM";
        const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

        const div = document.createElement('div');
        div.classList.add("task-message");
        div.innerText = `You have complete the task ${title} at ${formattedTime}`; 
        document.getElementById("history-container").appendChild(div);

        const completedTask = document.getElementById("completed-task").innerText;
        const convertedCT = parseInt(completedTask) + 1;
        document.getElementById("completed-task").innerText = convertedCT;

        alert("Board Updated Successfully");
        const last = document.getElementById("task-count").innerText;
        if (parseInt(last) === 0){
            alert("Congratulations! You have completed all the tasks");
        }
          
    });
} 

handleButtonClick("btn-box-1", "title-box-1");
handleButtonClick("btn-box-2", "title-box-2");
handleButtonClick("btn-box-3", "title-box-3");
handleButtonClick("btn-box-4", "title-box-4");
handleButtonClick("btn-box-5", "title-box-5");
handleButtonClick("btn-box-6", "title-box-6");
