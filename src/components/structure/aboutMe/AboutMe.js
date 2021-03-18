import React, { Component } from 'react';
import Resume from "../../../resume.json";

class AboutMe extends Component {

  state = {
    hovered: false
  }

  render() {
    return (
      <div className="container">
        <img 
          alt="THATS ME"
          src={this.state.hovered ? "images/kissingface.png" : "images/smilingface.png"}
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          ></img>
        <br></br>
        <br></br>
        <h1 className="title">
          Howdie, I'm a Software Something
        </h1>
        <div className="aboutMe">
					{Resume.info.description}
          <br></br>
          <br></br>
          <div className="tags-container">
						{Resume.tags.map(tag => <div className="tag is-warning is-rounded">{tag}</div>)}
          </div>
        </div>
      </div>
    ) 
  }
}

export default AboutMe;
