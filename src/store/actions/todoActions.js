// export const markComplete = () => {
// 	const markCompleteAction = dispatch => {
// 		dispatch({
// 			type: 'MARK_COMPLETE',
// 			payload: 'my payload'
// 		})
// 	}
// 	return markCompleteAction
// }

export const markComplete = (id) => dispatch => {
        // console.log(id)
		dispatch({
			type: 'MARK_COMPLETE',
			payload: id
		})
}

export const addTodo = newTodo => dispatch => {
	dispatch({
		type: 'ADD_TODO',
		payload: newTodo
	})
}

export const deleteTodo = (id) => dispatch => {
	// console.log(id)
	dispatch({
		type: 'DELETE_TODO',
		payload: id
	})
}