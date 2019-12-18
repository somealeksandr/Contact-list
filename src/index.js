import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactList from "./components/ContactList/ContactList";
import About from "./components/About/About";
import AddContact from "./components/AddContact/AddContact";
import NotFound from "./components/404/NotFound";
import Edit from "./components/Edit/Edit";
import MainMenu from "./components/MainMenu/MainMenu";

import './index.css';

class App extends React.Component {
    id = 100;
    state = {
        List: [
            {
                id: 1,
                name: "Jack Sparrow",
                description: "Captain",
                avatar: 45,
                gender: "men",
                facebook: "https://facebook.com/",
                twitter: "https://twitter.com/",
                linkedin: "https://linkedin.com/",
                skype: "https://skype.com/",
                messages: "https://messages.google.com/",
                favorite: false
            },
            {
                id: 2,
                name: "Chris Nolan",
                description: "Film director",
                avatar: 20,
                gender: "men",
                facebook: "https://facebook.com/",
                twitter: "https://twitter.com/",
                linkedin: "https://linkedin.com/",
                skype: "https://skype.com/",
                messages: "https://messages.google.com/",
                favorite: true
            },
            {
                id: 3,
                name: "Arnold Schwarzenegger",
                description: "Terminator",
                avatar: 36,
                gender: "men",
                facebook: "https://facebook.com/",
                twitter: "https://twitter.com/",
                linkedin: "https://linkedin.com/",
                skype: "https://skype.com/",
                messages: "https://messages.google.com/",
                favorite: false
            },
            {
                id: 4,
                name: "Alfred Hitchcock",
                description: "Producer",
                avatar: 47,
                gender: "men",
                facebook: "https://facebook.com/",
                twitter: "https://twitter.com/",
                linkedin: "https://linkedin.com/",
                skype: "https://skype.com/",
                messages: "https://messages.google.com/",
                favorite: true
            },
            {
                id: 5,
                name: "Sylvester Stallone",
                description: "Rembo",
                avatar: 20,
                gender: "men",
                facebook: "https://facebook.com/",
                twitter: "https://twitter.com/",
                linkedin: "https://linkedin.com/",
                skype: "https://skype.com/",
                messages: "https://messages.google.com/",
                favorite: false
            }
        ],
        Item: []
    }

    onDelete = (id) => {

        const index = this.state.List.findIndex(elem => elem.id === id);

        let ListNew = [];
        let counter = 0;
        for (let i = 0; i < this.state.List.length; i++) {
            if (i !== index) {
                ListNew[counter] = this.state.List[i];
                counter++;
            }
        }
        this.setState(state => {
            return {
                List: ListNew
            };
        });
    };

    SetStarYellow = id => {

        this.setState(() => {

            const index = this.state.List.findIndex(elem => elem.id === id);
            const newList = this.state.List.slice();
            newList[index].favorite = !newList[index].favorite;

            return {
                favorite: !this.newList
            }
        })
    }

    onAddNewContact = (name, description, avatar, gender) => {
        this.id++;
        const newContact = {
            id: this.id,
            name: name,
            description: description,
            avatar: avatar,
            gender: "men",
            favorite: false
        }
        console.log(newContact)
        console.log(name, description, avatar, gender)
        const newContactArr = [...this.state.List, newContact];
        this.setState( () => {
            return{
                List: newContactArr
            }
        })
    }
    onAddChange = id => {
        this.state.Item = [];
        const index = this.state.List.findIndex(elem => elem.id === id);
        const Object = this.state.List[index];
        this.Object = { id: this.state.List.length * 100 };
        const NewList = [...this.state.Item, Object];
        this.state.List.splice(index, 1);
        this.setState(() => {
          return {
            Item: NewList
          }
        })
      }

      EditContact = (name, description, avatar, gender, id) => {
        const index = this.state.List.findIndex(elem => elem.id === id);
        const Edited = {
          name: name,
          description: description,
          avatar: avatar,
          gender: gender,
          favorite: this.state.Item[0].favorite,
          id: this.state.Item[0].id
        };
        console.log(this.state.Item);
        const NewList = [...this.state.List, Edited];
        this.setState(() => {
          return {
            List: NewList
          };
        });
      };


    //   GetContactID = (id) => {
    //     const index = this.state.List.findIndex(elem => elem.id === id);
    //     for(let i = 0; i < this.state.List.length; i++) {
    //         if(i===index){
    //             let singleContact = {
    //                 id: this.id,
    //                 name: this.state.List[i].name,
    //                 description: this.state.List[i].description,
    //                 avatar: this.state.List[i].avatar,
    //                 gender: "men",
    //                 favorite: false
    //             }
    //         }
    //     }
    // }


    //   EditContact = (singleContact) => {
    //     singleContact = singleContact;
    //   }

    render() {
        return (
            <Router>
                <div className="container bootstrap snippet">
                    <MainMenu></MainMenu>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={() => (
                                <ContactList
                                    ContactList={this.state.List}
                                    onDelete={this.onDelete}
                                    SetStarYellow={this.SetStarYellow}
                                    onAddNewContact={this.onAddNewContact}
                                    onAddChange={this.onAddChange}
                                    // GetContactID={this.GetContactID}
                                />
                            )}
                        ></Route>
                        <Route path="/edit" exact component={() => (
                            <Edit
                            onAddChange={this.state.Item}
                            EditContact={this.EditContact}
                            />
                        )}></Route>
                        <Route path="/about" exact component={About}></Route>
                        <Route path="/add" exact component={() => (<AddContact AddNewContact={this.onAddNewContact}/>)}></Route>
                        <Route path="*" exact component={NotFound}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

{/* <ContactList ContactList={this.state.List} onDelete={this.onDelete} SetStarYellow={this.SetStarYellow}></ContactList> */ }

ReactDOM.render(<App />, document.getElementById('root'));
