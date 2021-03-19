import React from 'react';
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { deleteContact} from '../../actions/contactActions'
import { useDispatch } from 'react-redux'

const Contact = (props) => {
    const dispatch = useDispatch()
    const {name, email, phone, id} = props.contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"/>
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar name={name} size={45} className="mr-2" round={50}></Avatar>{name}</td>
            <td>{email}</td> 
            <td>{phone}</td> 
            <td>
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons">edit</span>
                </Link>
                    <button className="material-icons text-danger" onClick={()=>dispatch(deleteContact(id))}>remove_circle</button>

            </td>
        </tr>
    )

};

export default Contact;