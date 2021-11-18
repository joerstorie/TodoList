import React from 'react';
import './List.css';
import Item from '../Item/Item.js';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='List'>
            {
                this.props.todoList && this.props.todoList.map((todo,index) => {
                    return <Item todo={todo} onRemove={this.props.onRemove} id={index}/>
                    }
                )
            }
            </div>
                )    
            }
        }

export default List;