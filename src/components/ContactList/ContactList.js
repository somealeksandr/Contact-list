import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem/ContactItem";
import Search from "../SearchComponent/search";


const ContactList = ({ ContactList, onDelete, SetStarYellow, onAddChange, GetContactID}) => {
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
            onAddChange={() => onAddChange(item.id)}
            // GetContactID={() => GetContactID(item.id)}
            favorite={item.favorite}
        ></ContactItem>

    })
    return (
        <Fragment>
            <Search></Search>
            {listItem}
        </Fragment>
    );
}

export default ContactList;