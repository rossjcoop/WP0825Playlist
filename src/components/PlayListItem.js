import React, { Component } from 'react';
import '../styles/App.css';

class PlayListItem extends Component {
	

  render() { 

  	let spanStyle = {
  		"textShadow": "2px 2px black",
  		"color": "white"
  	}



    return (
    	<div className = "PlaylistCard">
	    	<div className = "playCard">
	    		<span><span style={spanStyle}>User:</span> {this.props.song.userName}</span>
	    		<br />
	    		<span><span style={spanStyle}>Artist:</span> {this.props.song.songArtist}</span>
	    		<br />
	    		<span><span style={spanStyle}>Title:</span> {this.props.song.songTitle}</span>
	    		<br />
	    		<p><span style={spanStyle}>Notes:</span> {this.props.song.songNotes}</p>
	      	</div>
      	</div>
    )
  }
}


export default PlayListItem