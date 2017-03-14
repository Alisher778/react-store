import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import axios from 'axios';


export default class SearchBar extends Component {
  
constructor(props) {
  super(props);
  this.state = {search: '', result: [], printableResult: {}}
}

componentDidMount() {
  $.get('/api/products', (data)=>{
    this.setState({result: data})
  })
  
}

onSearchChange(e){
  e.preventDefault();
  this.setState({search: e.target.value})
}

another(term){
  return this.state.result.filter(function(data){
    let name = data.name.toLowerCase().indexOf(term.toLowerCase());
    let cat = data.category.toLowerCase().indexOf(term.toLowerCase());
    let price = data.price.toLowerCase().indexOf(term.toLowerCase());
    let des = data.description.toLowerCase().indexOf(term.toLowerCase());
    let af = [];
    if(name > -1 || cat > -1 || price > -1 || des > -1){
      return data;
    }
  })
}
   
  render() {
    
    const name = this.another(this.state.search);
    console.log(name)
    return(
        <div className="SearchBar">
          <input type="search" className="search" value={this.state.search} onChange={this.onSearchChange.bind(this)}/>

          <div>
            {name.map((name, i)=>{
              return(
                  <ul key={i}>
                    <li>{name.name}</li>
                    <li>{name.price}</li>
                    <li>{name.category}</li>
                  </ul>
                )
              })
            }
          </div>
        </div>
      )
  }
}