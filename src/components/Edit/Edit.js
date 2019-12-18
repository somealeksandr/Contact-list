import React from "react";

class Edit extends React.Component{

    state = {
        name: this.name,
        description: this.description,
        avatar: this.avatar,
        gender: this.gender,
    }

    GetGender = e => {
        this.setState({
          gender: e.target.value
        });
      };
      GetName = e => {
        this.setState({
          name: e.target.value
        });
      };
      GetDesc = e => {
        this.setState({
          description: e.target.value
        });
      };
      GetAvatar = e => {
        this.setState({
          avatar: e.target.value
        });
      };
      GetId = () => {
        console.log(this.id);
        this.setState({
          id: this.id
        });
      };



      onChanged = e => {
        const { name, description, avatar, gender, id } = this.state;
        this.GetId();
        this.props.EditContact(name, description, avatar, gender, id);
        e.preventDefault();
        console.log(this.gender, this.id);
      };

    render() {
        this.props.onAddChange.map(item => {
            this.name = item.name;
            this.description = item.description;
            this.avatar = item.avatar;
            this.gender = item.gender;
            this.id = item.id;
          });
          if (this.state.gender === undefined) {
            this.state.gender = this.gender;
          }
          if (this.state.avatar === undefined) {
            this.state.avatar = this.avatar;
          }
        //   let url = `https://randomuser.me/api/portraits/${this.state.gender}/${this.state.avatar}.jpg`;
        return(
            <form onSubmit={this.onChanged}> 
                <label>Name</label>
                <input type="text" placeholder={this.name} name="name" onChange={this.GetName}/>
                <label>Description</label>
                <input type="text" placeholder={this.description} name="description" onChange={this.GetDesc}/>
                <label>Your photo</label>
                <input type="number" placeholder={this.avatar} name="avatar" onChange={this.GetAvatar}/>
                <label>Gender</label>
                <select onChange={this.GetGender}>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                </select>
                <button type="submit" className="submit">Change</button>
            </form>
        )
    }
}

export default Edit;