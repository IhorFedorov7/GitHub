import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Repos from "./components/repos";

//const API_KEY = "37ebe34a652581158987717baf749ad424249e4b";



class App extends React.Component {

  gettingRepos = async (event) => {
    event.preventDefault();

    var owner = event.target.elements.name.value;
    var repo = event.target.elements.name.value;
        
    const api_url = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form reposMethod={this.gettingRepos} />
        <Repos />
      </div>
    );
  }
}

export default App;