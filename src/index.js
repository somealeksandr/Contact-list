import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./components/SearchComponent/search";
import ContactList from "./components/ContactList/ContactList";
import './index.css';

class App extends React.Component {
    state = {
        List : [
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
        ]
    }
    

    onDelete = (id) => {

        const index = this.state.List.findIndex(elem => elem.id === id);

        let ListNew = [];
        let counter = 0;
        for(let i=0; i<this.state.List.length; i++) {
            if(i !== index) {
                ListNew[counter] = this.state.List[i];
                counter++;
            }
        }
        this.setState(state => {
            return {
                List : ListNew
            };
        });
    };

    render() {

        return (
            <div className="container bootstrap snippet">
                <Search></Search>
                <ContactList ContactList={this.state.List} onDelete={this.onDelete}></ContactList>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
