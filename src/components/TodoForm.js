import React from 'react'

const TodoForm = () => {
    return (
        <div className = 'grid wide'>
            <div className = 'row'>
                <div className = 'l-6 l-o-3 m-6 m-o-3 c-12 '>
                    <div className = 'todo-form'>
                        <form>
                            <label htmlFor="todo" className="">To do</label>
                            <input type = 'text' id = "todo" placeholder = "To do" />
                            <input type="submit" value="ADD" />
                        </form>

                    </div>

                </div>    
            </div>
        </div>         
    )
}

export default TodoForm
