
const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const newTask = document.getElementById('newTask').value
   
    const description = document.getElementById('description').value
   
    const list = document.createElement('ul')
    list.classList.add('list')
    list.innerHTML = ` 
                 <ul>
                    <li>${newTask})</li>
                    <p>${description}</p>
                    <button>${'Cancel ✘'} </button>
                    `

    const listSection = document.getElementById('listSection')
    listSection.appendChild(list)

   
    })

    newTask.addEventListener('click',function () {
        newTask.innerText.style(font-decoration('strike'))
        
    })

