import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.renderAction = this.renderAction.bind(this);
    }

    renderAction() {
        return <button className="Item-action" onClick={this.removeItem}>-</button>
    }

    removeItem() {
        this.props.onRemove(this.props.todo);
    }

    render() {
        return (
            <li className="Item">
                {this.props.todo}
                {this.renderAction()}
            </li>
        )
    }
}

export default Item;