
const form = document.getElementById('form')
const newTask = document.getElementById('newTask').value
const description = document.getElementById('description').value
   
form.addEventListener('submit', function(e){
    e.preventDefault()
    const newTask = document.getElementById('newTask').value
   
    const description = document.getElementById('description').value
   
    const list = document.createElement('ul')
    list.classList.add('list')
    list.innerHTML = ` 
                 <ul>
                    <li>${newTask}</li>
                    <p>${description}</p>
                    <button>${'Cancel ✘'} </button>
                    `

    const listSection = document.getElementById('listSection')
    listSection.appendChild(list)

    const newListElement = document.querySelector('ul li')
    const newDescript = document.querySelector('ul p')

    newListElement.addEventListener('click', function () {
        newListElement.classList.add('barrato'),
        newDescript.classList.add('barrato')

    }) 

    

    const cancelButton = document.querySelector('ul button')
    cancelButton.addEventListener('click', function () {
        newListElement.classList.add('cancel'),
        newDescript.classList.add('cancel'),
        cancelButton.classList.add('cancel')
        
    })
   
    })

