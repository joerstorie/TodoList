import React from 'react';
import './Add.css';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: []
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.add = this.add.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleTermChange(event) {
        this.setState( {todo: event.target.value} )
    }
    
    add() {
        if (this.state.todo == false) {
            return;
        }
        this.props.onAdd(this.state.todo);
        document.getElementById("input").value = "";
    }

    keyPress(event) {
        if (event.keyCode == 13) {
            this.props.onAdd(this.state.todo);
            document.getElementById("input").value = "";
        }
    }

    render() {
        return (
            <div class="Add">
                <button className="AddButton TodoInput" onClick={this.add}>+</button>
                <input className="Input TodoInput" placeholder="enter new todo here..." onChange={this.handleTermChange} onKeyDown={this.keyPress} id="input"></input>
            </div>
        )
    }
}

export default Add;