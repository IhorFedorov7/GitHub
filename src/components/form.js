import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.reposMethod} >
                <input type="text" name="owner"  placeholder="" />
                <input type="hidden" name="repo"  placeholder="" />
                <button>Add</button>
            </form>
        );
    }
}

 /*class Form extends React.Component {
    state = {
      repo: 'vue',
      owner: 'vuejs'
    };
    
    handleChange = (name) =>(e) => {
      this.setState({
        name: e.target.value
      })
    };
    
    
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.reposMethod(this.state);
    };
    
    render() {
      const {repo, owner} = this.state;
      
      return (
        <form onSubmit={this.props.reposMethod}>
          <input type="text" name="owner" value={owner} onChange={this.handleChange('owner')}  placeholder="" />
          <input type="text" name="repo"  value={repo} onChange={this.handleChange('repo')} placeholder="" />
          <button>Add</button>
        </form>
      );
    }
  }*/

export default Form;