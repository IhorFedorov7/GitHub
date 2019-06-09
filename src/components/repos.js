import React from "react";
import "./repos.css"

const  Repos = props => {
    
    const { 
        repositories,
        removeRepo,
    } = props;

    return (
        <div id="container">
            <table>
                <thead>
                    <tr>
                        <th>Repository name</th>
                        <th>Stars</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        repositories.map( repo => (  
                            <tr key={repo.id}>
                                <td>{repo.full_name}</td>
                                <td>{repo.stargazers_count}</td>
                                <td id="right">
                                    <button 
                                        type="button"
                                        onClick={() => removeRepo(repo.id)}
                                    >
                                        <p>X</p>
                                    </button>
                                </td>
                            </tr> 
                        ))
                    }  
                </tbody>
            </table>
        </div>
    );
}

export default Repos;