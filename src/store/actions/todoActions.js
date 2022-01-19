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