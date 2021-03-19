import React from 'react';
import { useSelector } from 'react-redux'
import Contact from './Contact';

const Contacts = () => {
    const contacts = useSelector(state => state.contact.contacts)
    console.log(contacts);
    return (
        <div>
            <table className="table shadow">
                <thead>
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => (<Contact contact={contact} key={contact.id}></Contact>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;