import { useEffect, useState } from "react";
import { editUser } from "../../services/actions";
import { useDispatch } from "react-redux";

const EditUser = ({payload,setEdit}) => {
    const [user,setUser] = useState({
        id:payload.id,
        username:payload.username,
        email:payload.email
    }); 
    const dispatch = useDispatch()

    return ( 
        <form className="col  d-flex flex-row justify-content-center mt-4 " onSubmit={(e) => {
                e.preventDefault();
                dispatch(editUser(user));
                setUser({});
                setEdit()                
            }} >

            <input value={user.username} placeholder="username"  onChange={(e) => { setUser({...user,[e.target.name]:e.target.value}) }} type="text" className="col rounded-0  form-control" name="username" />
            <input value={user.email} placeholder="email"  onChange={(e) => { setUser({...user,[e.target.name]:e.target.value}) }} type="text" className="col rounded-0  form-control" name="email" />
            <button  type="submit" className="btn col rounded-0 btn-primary">Submit</button>
        </form>
    ); 
}; 


export default EditUser; 