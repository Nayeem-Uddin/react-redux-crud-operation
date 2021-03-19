import React, { useEffect, useState } from 'react';
import { getContact,updateContact } from '../../actions/contactActions'
import { useDispatch, useSelector  } from 'react-redux'
import shortid from 'shortid';
import { useHistory, useParams } from 'react-router-dom'

const EditContact = () => {
    const {id} = useParams()
    // alert(id)
    const dispatch = useDispatch();
    const history = useHistory()
    const contact = useSelector((state) => state.contact.contact);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    useEffect(() => {
        if (contact != null) {
          setName(contact.name);
          setPhone(contact.phone);
          setEmail(contact.email);
        }
        dispatch(getContact(id));
      }, [contact]);

      const onUpdateContact = (e) =>{
        e.preventDefault()
      }
      const update_contact = Object.assign (contact, {
          name: name,
          phone: phone,
          email: email
      })
    //   console.log(updateContact);
    dispatch(updateContact(update_contact))
    return (
        <form onSubmit={(e)=> onUpdateContact(e)}>
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
            <button className="btn btn-primary" type="submit">Update Contact</button>
        </form>
    );
};

export default EditContact;