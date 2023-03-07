import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import  '../filter-panel/filter-panel.css';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../list/list';
import EmployeesAddForm from '../add-form/add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Мобильный телефон', salary: 15000, id: 1},
                {name: 'Зимняя куртка', salary: 8000, id: 2},
                {name: 'Монитор для компьютера', salary: 10000, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,     
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    handleClickFilter = (type) => {
        this.setState(({data}) => { 
            return {
                data: data.sort((a, b) => a[type] > b[type] ? 1 : -1)
            }
        })
    }

    render() {
        const abc =  <AppFilter onFilter={this.handleClickFilter}/>
        console.log(abc);
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="filter-panel">
                    {abc}
                </div>
                
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;