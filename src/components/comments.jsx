import React, { Component } from 'react';
import axios from 'axios';
import './ProfilesComponent.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

class ProfilesComponent extends Component {
    constructor() {
        super();
        this.state = {
            profiles: [],
            searchItem: ''
        }

    }

    componentDidMount() {
        const result = axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((result) => (
                this.setState({ profiles: result.data })
            ));
    }

    render() {
    
        return (
            <div className='main-content'>
                <br></br>
                <div className='heading'>
                    <h1>Comments</h1>
                    <input type='text' onChange={(event) => {
                        this.setState({ searchItem: event.target.value });
                    }} />
                    <button className='btn btn-warning' onClick={() => {
                        let fileteredItem = this.state.profiles.filter(
                            (item) => {
                                if (item.name.toLowerCase().includes(this.state.searchItem.toLowerCase()))
                                    return true;
                                else
                                    return false;
                            }
                        );
                        this.setState({ profiles: fileteredItem });
                    }
                    }> Click Me </button>
                    {/* {this.setState({profiles: this.state.profiles})} */}
                    <h2>{this.state.searchItem}</h2>
                </div>


                <div>{this.state.profiles.map((profile, index) => {
                    return (
                        <div className='profileCard'>
                            <div className="card" style={{ "width": "400px" }}>
                                <div className="card-body">
                                    <h2 className="card-id">ID: {profile.id}</h2>
                                    <h4 className="card-title">Name: {profile.name}</h4>
                                    <p className="card-text">Email: {profile.email}</p>
                                    <p className="card-text">Description: {profile.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

                )
                }
                </div>

            </div>
        )
    }
}
export default ProfilesComponent;