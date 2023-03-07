import { Component } from 'react';

import './list-item.css';

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            favoutite: false
        }
    }

    onFavoutite = () => {
        this.setState(({favoutite}) => ({
            favoutite: !favoutite
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const { favoutite} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if (favoutite) {
            classNames += ' like';
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onFavoutite}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '₽'}/>
                <div className='d-flex justify-content-center align-items-center'>    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                                
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
