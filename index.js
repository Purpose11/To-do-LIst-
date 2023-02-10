const enterTask = document.getElementById('inputTextForm')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskContainer = document.getElementById('taskContainer')
let ol = document.createElement('ol')
taskContainer.append(ol)

addTaskBtn.addEventListener('click', function(){

        let li = document.createElement('li')
        li.innerText = `${enterTask.value}`
        ol.appendChild(li)

        let deleteBtn = document.createElement('button')
       deleteBtn.innerHTML = `<i class="fa-solid fa-trash" id="deleteBtn"></i>`
       li.appendChild(deleteBtn)
        
        
       let cancelBtn = document.createElement('button')
       cancelBtn.innerHTML = `<i class="fa-solid fa-check" id="cancelBtn"></i>`
       li.appendChild(cancelBtn)

       

       if(enterTask.value === ""){
        alert('Please, Enter Task!') 
        li.parentNode.removeChild(li)  
       }
       else {
        taskContainer.append(ol)
       };

       enterTask.value = "";

       cancelBtn.addEventListener('click', function(){
        li.style.textDecoration = 'line-through'
       })

       deleteBtn.addEventListener('click', function(){
        li.parentNode.removeChild(li)
       })

      
})

