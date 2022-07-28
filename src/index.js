document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("MikeDOMContentLoaded")
});


document.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Mike: submit")
  const input = document.getElementById("new-task-description") 
  console.log(input)
  const task = input.value
  console.log(task)
  // get todo list element 
  const tasks = document.getElementById("tasks") 
  // create a list item for task
  const item = document.createElement('li')
  // add todo text 
  item.appendChild(document.createTextNode(task))
  // add item to list 
  tasks.appendChild(item)
  
});