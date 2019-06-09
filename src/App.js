import React, { useState } from "react";
import Form from "./components/form";
import Repos from "./components/repos";
import reposService, { validateRepos } from "./reposService";
import "./App.css";

const App = () => {

  const [repositories,  setRepositories] = useState([]);
  const [error,  setError] = useState("");

  const getRepos = (e) => {
    e.preventDefault();
    setError("");

    const { value } = e.target.elements.owner;

    if(!validateRepos(value)) { 
      setError("Repository not found");
      return; 
    };

      reposService(
        value,
        repositories,
        setRepositories,
      )
      .catch(()=>{
        setError("Repository not found");
      })

      e.target.elements.owner.value ="";
  }
  const removeRepo = repo_id => {
    setRepositories(repositories.filter(r => r.id !== repo_id))
  }

  return (
    <div id="block">
      <Form getRepos={getRepos} />
      <p id="eroor">{error}</p>
      {repositories.length ? 
      <Repos 
        repositories={repositories}
        removeRepo={removeRepo}
      /> : ""}
    </div>
  );
}



export default App;