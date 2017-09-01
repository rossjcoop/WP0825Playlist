import React, { Component } from 'react';
import PlayListItem from './PlayListItem';
import '../styles/App.css';

class PlayList extends Component {
	constructor() {
    super();

    this.state = {
    	songs: []
    };


  }


//State is a JS object that is shared between every react function in a react component. The State is initialized in the constructor either from default values or props.


//Props is a JS object passed as a parameter into the constructor of a react component.




	fetchData = (e) => {
	    e.preventDefault();
	    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
	      	return results.json();
	    }).then(data => {
	      	this.setState({songs: data});
	    })
	}




  	componentDidMount(){
	  	fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
	    	return results.json();
	    	}).then(data => {
	      		this.setState({songs: data});
	      		console.log("state", this.state.songs);
	    	})
   	}



  render() { 	
    return (
    	<div className = "playlist">
    		<button type="submit" onClick={this.fetchData}>Update List</button>
    		<div className = "playlistItem">
	    		{this.state.songs.map(item => (
	    			<PlayListItem song={item}/>
	    		))}
	    	</div>
      	</div>
    )
  }
}

export default PlayList


