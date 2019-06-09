import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Repos from "./components/repos";

class App extends React.Component {

  state = {
    full_name: undefined,
    stargazers_count: undefined,
    error: undefined
  }

  gettingRepos = async (e) => {
    e.preventDefault();

    let owner = e.target.elements.owner.value;

    if(owner) {
      const api_url = await fetch(`https://api.github.com/repos/${owner}`);
      const data = await api_url.json();

      this.setState({
        full_name: data.full_name,
        stargazers_count: data.stargazers_count,
        error: undefined 
      });
    } else {
      this.setState({
        full_name: undefined,
        stargazers_count: undefined,
        error: "Сори" 
      });
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form reposMethod={this.gettingRepos} />
        <Repos 
          full_name={this.state.full_name}
          stargazers_count={this.state.stargazers_count}
          error={this.state.error}
        />
      </div>
    );
  }
}



export default App;