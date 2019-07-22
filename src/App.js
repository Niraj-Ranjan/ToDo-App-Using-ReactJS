import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component{
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
      
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    console.log(newItem);

    const updatedItems = [...this.state.items, newItem];
    console.log(updatedItems);
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
    
  }

  clearList = () =>{
    this.setState({
      items: []
    });
  }

  handleDelete = id => {
    const filterList = this.state.items.filter(item =>
      item.id !==id
    );
    this.setState({
      items: filterList
    });

  }

  handleEdit = id => {
    console.log(id);
    const filterList = this.state.items.filter(item =>
      item.id !==id
    );

    const selectedItem = this.state.items.find(item => item.id === id)
    console.log(selectedItem);
    
    this.setState({
      items: filterList,
      item: selectedItem.title,
      id: id,
      editItem: "true"
     
    });

    console.log(this.state.id);
    console.log(this.state.editItem);
    
    

  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className = "col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              To Do Input
            </h3>
            <TodoInput item = {this.state.item} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}
             editItem = {this.state.editItem}></TodoInput>
            <TodoList 
              items={this.state.items} 
              clearList = {this.clearList}
              handleDelete={this.handleDelete}
              handleEdit = {this.handleEdit}

              ></TodoList>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
