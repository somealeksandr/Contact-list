import React from "react";
import "./AddContact.css"

class AddContact extends React.Component{

state = {
    name: "",
    description: "",
    avatar: null,
    gender: ""
}

    GetName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    GetDesc = e => {
        this.setState({
            description: e.target.value
        })
    }
    GetAvatar = e => {
        this.setState({
            avatar: e.target.value
        })
    }
    GetGender = e => {
        this.setState({
            gender: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {name, description, avatar, gender} = this.state;
        this.props.AddNewContact(name, description, avatar, gender);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}> 
                <label>Name</label>
                <input type="text" placeholder="Your name" name="name" onChange={this.GetName}/>
                <label>Description</label>
                <input type="text" placeholder="Your description" name="description" onChange={this.GetDesc}/>
                <label>Your photo</label>
                <input type="number" name="avatar" onChange={this.GetAvatar}/>
                <label>Gender</label>
                <select onChange={this.GetGender}>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                </select>
                <button type="submit" className="submit">Submit</button>
            </form>
            
        );
    }
}
export default AddContact;