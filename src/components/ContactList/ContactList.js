import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ContactList}) => {
    console.log(ContactList);
    const listItem = ContactList.map((item)=> {
        return <ContactItem avatar={item.avatar} name={item.name} description={item.description} gender={item.gender} ></ContactItem>
    })
    return(
        <Fragment>
            <h2>ContactList</h2>
            {listItem}
        </Fragment> 
    );
}

export default ContactList;