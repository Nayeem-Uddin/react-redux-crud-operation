import React, { useState } from 'react';
import { addContact } from '../../actions/contactActions'
import { useDispatch } from 'react-redux'
import shortid from 'shortid';
import { useHistory } from 'react-router-dom'

const AddContact = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const createContact = (e) =>{
        e.preventDefault();
        const new_contact = {
            id:(shortid.generate()),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(new_contact))
        history.push("/")
        // console.log(name,phone,email);
    }

    return (
        <form onSubmit={(e)=> createContact(e)}>
            <div className="form-group">
                <input 
                type="text"
                className="form-control"
                placeholder="Enter your name"  
                value={name}  
                onChange={(e)=>setName(e.target.value)}    
                />
            </div>
            <div className="form-group">
                <input 
                type="text"
                className="form-control"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input 
                type="text"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" type="submit">Add Contact</button>
        </form>
    );
};

export default AddContact;