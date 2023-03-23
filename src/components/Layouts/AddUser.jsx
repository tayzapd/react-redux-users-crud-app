import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/actions";
export const AddUser = () => {
    const dispatch = useDispatch(); 
    const [user,setUser] = useState({});
    return (
        
        <form className="col  d-flex flex-row justify-content-center mt-4 " onSubmit={(e) => {
                e.preventDefault();
                dispatch(addUser(user));
                setUser({});
            }} >
            <input placeholder="username"  onChange={(e) => { setUser({...user,[e.target.name]:e.target.value}) }} type="text" className="col rounded-0  form-control" name="username" />
            <input placeholder="email"  onChange={(e) => { setUser({...user,[e.target.name]:e.target.value}) }} type="text" className="col rounded-0  form-control" name="email" />
            <button  type="submit" className="btn col rounded-0 btn-primary">Submit</button>
        </form>
    )
}