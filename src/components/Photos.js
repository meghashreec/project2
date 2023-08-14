import  { Component } from 'react'
import axios from 'axios';
import './Photos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';


export class Photos extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            searchItem: ''
        }
        
    }

    componentDidMount() {
        const result = axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((result) => (
                this.setState({ photos: result.data })
            ));
    }


  render() {
    return (
      <div>
         <div>
                <h1>Photos</h1>
                <input  type='text' onChange={(event) => {
                    this.setState({ searchItem: event.target.value });
                }} />
               
                
                <button className='btn btn-light'  onClick={()=>{
                    let fileteredItem = this.state.photos.filter(
                        (item) => {
                            if(item.title.toLowerCase().includes(this.state.searchItem.toLowerCase()))
                                return true;
                            else    
                                return false;
                        }
                    );
                    this.setState({photos: fileteredItem});
                }    
                }> search</button>
                
                <h2>{this.state.searchItem}</h2>
                <div>{this.state.photos.map((photos, index) => {
                    return (
                        <div className='photos' style={{margin:"20px",display:"inline-block"}}>
                            <div class="card text-bg-light mb-3" style={{"max-width": "20rem"}}>
                            <div class="card-header">ID:{photos.id}</div>
                                <div className="card-body">
                                <img
                            src={photos.url}
                            alt={'Photo of ' + photos.id}
                            style={{
                            width: "300px",
                            height: "100px",
                            padding:"10px"
                                }}
                             />
                                    <p className="card-text">Title:{photos.title}</p>
                                    {/* <a href="#" class="card-link">{photos.url}</a><br></br><br></br> */}
                                    <a href="#" class="card-link">{photos.thumbnailUrl}</a>
                                </div>
                            </div>
                        </div>
                    )
                }

                )
                }
                </div>
                </div>
               
      </div>
    )
  }
}

export default Photos