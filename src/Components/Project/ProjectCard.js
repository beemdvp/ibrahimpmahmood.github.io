/**
 * Created by Ibrahim on 05/09/2017.
 */

import React, { Component } from 'react';
import './ProjectCard.css'

class ProjectCard extends Component {
  renderTags(tags) {
    return tags.map((tag, index) => {
      return <div className="tag" key={index}> {tag} </div>
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-title">
          {this.props.project.title} <br/> <button className="card-button"><a href={this.props.project.url} target="_blank">View Live</a></button>
        </div>
        <div className="card-image">
          <img src={this.props.project.image} alt={this.props.project.title}/>
        </div>
        <div className="card-tags">
          {this.renderTags(this.props.project.tags)}
        </div>
        <div className="card-description">
          {this.props.project.description}
        </div>
      </div>
    )
  }
}

export default ProjectCard