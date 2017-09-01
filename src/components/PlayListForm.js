import React, { Component } from 'react';
import '../styles/App.css';

class PlayListForm extends Component {
	constructor() {
    super();

    this.state = {
    	userName: "",
    	songArtist: "",
    	songTitle: "",
    	songNotes: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event){
  	this.setState({
  		[event.target.name]: event.target.value,
  	})
  }

  //////SO, THE FORM IS POSTING TO THE API!!
	addToList = (e) => {
	    e.preventDefault();
	    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
	    let listItem = JSON.stringify(this.state);

	    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
	      method: "POST",
	      body: listItem,
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	    }
	  }
	  ).then(response => {
	    console.log(response, "yay");

	  }).catch(err => {
	    console.log(err, "boo!");
	  });
	  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''})
	}


 /////RENDER A FORM TO TAKE THE INPUT HERE TO SEND TO THE API//////////

  render() { 	
    return (
    	<div className = "playlistForm">
    	<form onSubmit = {this.addToList}>
    	<label>User Name:</label>
    	<br />
    	<input type = "text" name = "userName" value = {this.state.userName} onChange = {this.handleChange}/>
    	<br />
    	<br />
    	<label>Artist/Band:</label>
    	<br />
    	<input type = "text" name = "songArtist" value = {this.state.songArtist} onChange = {this.handleChange}/>
    	<br />
    	<br />
    	<label>Song Title:</label>
    	<br />
    	<input type = "text" name = "songTitle" value = {this.state.songTitle} onChange = {this.handleChange}/>
    	<br />
    	<br />
    	<label>Notes About Song:</label>
    	<br />
    	<textarea name = "songNotes" value = {this.state.songNotes} onChange = {this.handleChange}/>
    	<br />
    	<br />
    	<button type = "submit">Submit</button>
    	</form>
      	</div>
    )
  }
}

export default PlayListForm
