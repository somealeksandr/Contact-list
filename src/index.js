import React from 'react';
import ReactDOM from 'react-dom';
import Search  from "./components/SearchComponent/search";
import ContactList from "./components/ContactList/ContactList";
import './index.css';

class App extends React.Component{
    List = [
        {
            name: "Jack Sparrow",
            description: "Captain",
            avatar: 45,
            gender: "men",
            facebook: "https://facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://linkedin.com/",
            skype: "https://skype.com/",
            messages: "https://messages.google.com/"
        },
        {
            name: "Chris Nolan",
            description: "Film director",
            avatar: 20,
            gender: "men",
            facebook: "https://facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://linkedin.com/",
            skype: "https://skype.com/",
            messages: "https://messages.google.com/"
        },
        {
            name: "Arnold Schwarzenegger",
            description: "Terminator",
            avatar: 36,
            gender: "men",
            facebook: "https://facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://linkedin.com/",
            skype: "https://skype.com/",
            messages: "https://messages.google.com/"
        },
        {
            name: "Alfred Hitchcock",
            description: "Producer",
            avatar: 47,
            gender: "men",
            facebook: "https://facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://linkedin.com/",
            skype: "https://skype.com/",
            messages: "https://messages.google.com/"
        },
        {
            name: "Sylvester Stallone",
            description: "Rembo",
            avatar: 20,
            gender: "men",
            facebook: "https://facebook.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://linkedin.com/",
            skype: "https://skype.com/",
            messages: "https://messages.google.com/"
        }
        ];
       
    render() {
        
        return(
            <div className="container bootstrap snippet">
                <Search></Search>
                <ContactList ContactList={this.List}></ContactList>
            </div>
        );
    }
}
     


ReactDOM.render(<App />, document.getElementById('root'));
