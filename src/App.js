import React , {Component} from 'react';
import './App.css';
import {  CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/searchBox/searchBox.coponent";

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchValue : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({ monsters : users}) )
  }

  handleChange= (e) => {
   this.setState( { searchValue : e.target.value });
  }

  render(){
    const { monsters, searchValue } = this.state;
    const filterMonster = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  return (
    <div className="App">
     <h1>Monsters Rolodex</h1>
     <SearchBox  placeholder="search monster" searchWord={(e) => this.handleChange(e)}/>
     <CardList monster={filterMonster}/>
    </div>
  );
}
}
export default App;
