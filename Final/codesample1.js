document.addEventListener("DOMContentLoaded", function() {
    let tasks = ['Task 1', 'Task 2', 'Task 3'];

    tasks.forEach(task => {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${task}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    })

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Enter Task Name!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        const current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].textContent = "done";
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

    setInterval(() => {
        alert('Take a break!');
    }, 60 * 60 * 1000);

    let currentDate = new Date();
    let month = currentDate.toLocaleString('default', { month: 'long' });
    let day = currentDate.getDate();

    document.querySelector('#tasks').insertAdjacentHTML('beforebegin', `
        <div id="currentDate">
            <span>${month} ${day}</span>
        </div>
    `);

});
