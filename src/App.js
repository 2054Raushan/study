import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';

import { CardList } from './components/card-list/card-list.component';

import { Layout, Menu, Divider, Table } from 'antd';
import { render } from '@testing-library/react';

import { SearchBox } from './components/search-box/search-box.component';


const { Header, Content } = Layout;

class App extends Component {
  constructor (){
    super();
    this.state = {

      students:[
        //creating hard coded students data.....
        // {
        //   name:'raushan',
        //   id:'stu1'
        // },
        // {
        //   name:'gaurav',
        //   id:'stu2'
        // },
        // {
        //   name:'madhur',
        //   id:'stud3'
        // }
      ],
      searchField : '',
      string: "hello i am coding like champ.....",
      raushan:"no i am only front end developer"
    };
  }

  //fetching dynamic content from online json file........
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({students: users }));
  }


  render(){

    const {students , searchField} = this.state;

    const filteredStudents = students.filter( students =>
      students.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
       
                  <h1>STUDENTS SEARCH LIST</h1>
                  
                  <SearchBox 
                    placeholder='search students'
                    handleChange={e => this.setState({searchField: e.target.value})}
                  />
                  <Divider/>
                  <CardList students={filteredStudents}>
                        
                  </CardList>
              
      </div>
    );
  }
}

export default App;
