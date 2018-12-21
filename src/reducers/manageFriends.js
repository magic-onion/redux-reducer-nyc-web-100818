export function manageFriends(state, action){

  switch (action.type) {

    case 'ADD_FRIEND':
      return {friends: state.friends.concat(action.friend)}

    case 'REMOVE_FRIEND':

    const newFriends = state => {
      let index = state.friends.indexOf(state.friends.find(friend=> friend.id === action.id))
      const newFriends = [...state.friends]; newFriends.splice(index, 1);
      return newFriends
    }

    return {friends: newFriends(state)}

    default:
      return state;
  }
}
