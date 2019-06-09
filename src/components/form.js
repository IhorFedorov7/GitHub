import React from "react";
import "./form.css";

const Form = props => {

    const { getRepos} = props;

    return (
        <div id="main"> 
            <p>Wireframe</p>
            <form onSubmit={getRepos} >
                <input type="text" name="owner" placeholder="Enter repository name, e.g. rubygarage/truemail" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default Form;