
export function Todos({todos}){

    return <div>
        {/* this map function basically iterates over the array of todos and returns a JSX element for each one */}
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}