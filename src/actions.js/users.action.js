export const FETCH_USERS = 'FETCH_USERS'



export const getAllUsers = (props) => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${props.keyword}`)
      .then(res => res.json())
      .then(users => {
        dispatch({
          type: FETCH_USERS,
          payload: users
        })
      })
  }
}
