import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';

import { CardList } from './components/card-list/card-list.component';

import { Layout, Menu, Divider, Table , Icon , Breadcrumb } from 'antd';
import { render } from '@testing-library/react';

import { SearchBox } from './components/search-box/search-box.component';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



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
       
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <h1>STUDENTS SEARCH LIST</h1>
                <p>In this project filter used..</p>
                
                <SearchBox 
                  placeholder='search students'
                  handleChange={e => this.setState({searchField: e.target.value})}
                />
                <Divider/>
                <CardList students={filteredStudents}>
                      
                </CardList>
              </Content>
            </Layout>
          </Layout>
        </Layout>




                  
              
      </div>
    );
  }
}

export default App;
