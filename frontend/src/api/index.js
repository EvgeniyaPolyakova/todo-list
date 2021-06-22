export const getTodos = () => {
    return fetch('http://localhost:3001/').then(res => res.json())
}

export const addTodo = body => {
    return fetch('http://localhost:3001/',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
    }).then(res => res.json())
}

export const deleteTodo = id => {
    return fetch('http://localhost:3001/',{
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id}),
    }).then(res => res.json())
}

export const changeCompleted = id => {
    return fetch('http://localhost:3001/',{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id}),
    }).then(res => res.json())
}