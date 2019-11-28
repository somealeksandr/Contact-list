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
            gender: "men"
        },
        {
            name: "Cris Nollan",
            description: "Producer",
            avatar: 20,
            gender: "men"
        },
        {
            name: "Arnold Swarzeneger",
            description: "Terminator",
            avatar: 36,
            gender: "men"
        },
        {
            name: "Alfred Hitchcok",
            description: "Producer",
            avatar: 47,
            gender: "men"
        },
        {
            name: "Silvestr Stalone",
            description: "Rembo",
            avatar: 20,
            gender: "women"
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
