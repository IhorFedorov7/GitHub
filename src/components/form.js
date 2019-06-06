import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.reposMethod}>
                <input type="text" name="owner"  placeholder="" />
                name="repo"
                <button>Add</button>
            </form>
        );
    }
}

export default Form;