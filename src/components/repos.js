import React from "react";

class Repos extends React.Component {
    render() {
        return (
            <div>
            {this.props.full_name &&
                <table>
                    <thead>
                        <tr>
                            <th>repository name</th>
                            <th>stars</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>{this.props.full_name}</td>
                                <td>{this.props.stargazers_count}</td>
                            </tr> 
                    </tbody>
                </table>
            } 
            <p>{ this.props.error}</p>
            </div>
        );
    }
}

export default Repos;