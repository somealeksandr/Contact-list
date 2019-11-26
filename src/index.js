import React from 'react';
import ReactDOM from 'react-dom';
import Search  from "./components/SearchComponent/search";
import ContactList from "./components/ContactList/ContactList";
import './index.css';


const App = () =>{
    return(
        <div className="container bootstrap snippet">
            <Search></Search>
            <ContactList></ContactList>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
