import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList, onDelete, SetStarYellow}) => {
    const listItem = ContactList.map((item) => {
        return <ContactItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            description={item.description}
            gender={item.gender}
            facebook={item.facebook}
            twitter={item.twitter}
            linkedin={item.linkedin}
            skype={item.skype}
            messages={item.messages}
            favorite={item.favorite}
            onDelete={() => onDelete(item.id)}
            SetStarYellow={() => SetStarYellow(item.id)}
            favorite={item.favorite}
        ></ContactItem>

    })
    return (
        <Fragment>
            <h2>ContactList</h2>
            {listItem}
        </Fragment>
    );
}

export default ContactList;