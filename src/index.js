document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      const data = e.target.new.value
      const list = document.createElement('li')
      list.textContent = data
      const addTodo = document.getElementById('tasks')
      const button = document.createElement('button')
      button.textContent = 'x'
      addTodo.appendChild(list)
      addTodo.appendChild(button)
      button.addEventListener('click', ()=>{
        list.remove()
        button.remove()
      })
    })
  
});
