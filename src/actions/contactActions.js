//add actions
import {add_contact, delete_contact, get_contact,update_contact} from '../types/types'

export const addContact = (contact) =>{
    return {
        type : add_contact,
        payload:contact
    }
}

//delete contact
export const deleteContact = (id) =>{
    return {
        type : delete_contact,
        payload:id
    }
}

//get a contact
export const getContact = (id) =>{
    return {
        type: get_contact,
        payload: id
    }
}
//update contact
export const updateContact = (contact) =>{
    return{
        type:update_contact,
        payload:contact
    }
}
