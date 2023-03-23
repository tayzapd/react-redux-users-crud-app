import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"; 
import { deleteUser } from "../../services/actions";
import { AddUser } from "./AddUser";
import EditUser from "./EditUser";
const Users = () => {
    const dispatch = useDispatch(); 
    const users = useSelector(state => state.users.users); 
    const [edit,setEdit] = useState(false); 
    const [user,setUser] = useState({}); 

    return ( 
        <div>
            {
                edit == false ? 
                <AddUser  /> : <EditUser setEdit={() => {setEdit(false)}} payload={user} />
            }
            {
                users.length != 0 ? 

                <div className="mt-3">
                    <table className="table ">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,index) => {
                                    return (
                                        <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => {
                                                dispatch(deleteUser(user.username))
                                            }} className="btn btn-sm btn-danger rounded-0">
                                                DELETE
                                            </button>

                                            <button onClick={() => {
                                                setUser({id:index,username:user.username,email:user.email}); 
                                                setEdit(true); 
                                                
                                                // dispatch(deleteUser(user))
                                            }} className="btn btn-sm btn-primary rounded-0">
                                                EDIT
                                            </button>
                                            
                                        </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    
                </div>
                :
                <div className="mt-3 ">
                    No Users Available... 
                </div>
            }
        </div>
    )
}; 

export default Users;