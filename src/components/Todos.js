import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoForm from './TodoForm';
import {markComplete} from '../store/actions/todoActions'



const Todos = ({todos, markComplete}) => {
   
    return (
        <div className = 'grid wide'>
                <div className = 'row'>
                  <TodoForm  />
                    <div className = 'l-6 l-o-3 m-6 m-o-3 c-12'>  
                       <div className = 'todo-list'>
                            <ul>
                                {
                                    todos.map(todo => (
                                    <li key = {todo.id} className = {todo.completed ? 'completed' : ''}>
                                        {todo.title}
                                        <input type = 'checkbox' onChange={markComplete.bind(this, todo.id)}/>
                                        <button>Delete</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>              
                    </div>    
                </div>
        </div>


    )
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	// getTodos: PropTypes.func.isRequired,
	markComplete: PropTypes.func.isRequired,
	// deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	todos: state.myTodos.todos
})

export default connect(mapStateToProps, {markComplete}) (Todos)
