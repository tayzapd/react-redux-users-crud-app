const initialState = {
    users: [],
    loading: false,
    error: null
  };

const users = (state=initialState,action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                users:[...state.users,action.payload]
            }; 
        
        case "DELETE":
            const users = state.users.filter(user => user.username !== action.payload.username);

            return { 
                ...state,
                users
            };

        case 'EDIT':
            const updatedUsers = state.users.map((user,index) => {
                if (index == action.payload.id) {
                    let {username,email} = action.payload
                    return {
                        ...user,
                        ...{username,email}
                    };
                }

                return user;
            });
            return {
                ...state,
                users: updatedUsers
            };
        
        default:
            return state;
    };
};

export default users;