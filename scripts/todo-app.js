'use strict'

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (evt) => {
    filters.searchText = evt.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (evt) => {
    evt.preventDefault()
    const text = evt.target.elements.text.value.trim()
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        evt.target.elements.text.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (evt) => {
    filters.hideCompleted = evt.target.checked
    renderTodos(todos, filters)
})