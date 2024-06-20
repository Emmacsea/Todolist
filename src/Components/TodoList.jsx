export const TodoList = ({todos}) => {
    console.log(todos);
    return (
        <div>
            {todos?.map((todo) => {
                return (
                    <div>
                        {todo.title}
                    </div>
                )
            })}

        </div>
    )
}