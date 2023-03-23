export const plus = () => {
    return {
        type:"PLUS"
    };
};

export const minus = () => {
    return {
        type:"MINUS"
    };
};

export const addUser = (user) => {
    return {
        type:"ADD",
        payload:user
    };
};

export const editUser = (user) => {
    return {
        type:"EDIT",
        payload:user
    };
};

export const deleteUser = (username) => {
    return {
        type:"DELETE",
        payload:{username}
    };
};