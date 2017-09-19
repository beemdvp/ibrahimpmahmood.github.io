/**
 * Created by Ibrahim on 05/09/2017.
 */
import React, { Component } from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import angular from '../../employee-system-angular.png';
import vue from '../../ecommerce-vuejs.png';
import react from '../../portfolio-react.png';

class Project extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: 'Employee management system',
          description:
            <div>
              <p><strong>Objective:</strong> Learn and implement best practices for Angular(4).</p>
              <br />
              <p><strong>Context: </strong> Design and develop an employee management system with the following:</p>
              <br />
              <ul>
                <li>A given company may have one or more branch.</li>
                <li>Each branch has multiple employees and an assigned branch manager.</li>
                <li>Employee information is recorded (basic details and salary) and is part of a department.</li>
              </ul>
            </div>,
          tags: ['Angular', 'Bulma', 'DjangoRestFramework', 'Postgres'],
          image: angular,
          url: 'http://employeesystem.herokuapp.com'
        },
        {
          title: 'Basic ecommerce system',
          description:
            <div>
              <p><strong>Objective:</strong> Learn and implement best practices for VueJs and Vuex.</p>
              <br />
              <p><strong>Context: </strong> Design and develop a foundation ecommerce system with the following:</p>
              <br />
              <ul>
                <li>Basic authentication with register and login.</li>
                <li>Cart functionality to add/remove multiple items with a total.</li>
                <li>Admin panel in order to create/edit products.</li>
              </ul>
            </div>,
          tags: ['VueJs', 'Material', 'DjangoRestFramework', 'Postgres'],
          image: vue,
          url: 'http://vuecommerce.herokuapp.com'
        },
        {
          title: 'Portfolio',
          description:
            <div>
            <p><strong>Objective:</strong> Present all personal projects currently being worked on and learn the
              basics of ReactJs</p>
            <br />
            <p><strong>Context: </strong> Design and develop a portfolio with the following:</p>
            <br />
            <ul>
              <li>Personal projects detailing what technology has been used and the context of the system.</li>
              <li>Demonstration that I have a comfortable understanding of all Javascript frameworks</li>
            </ul>
          </div>,
          tags: ['React', 'Sass', 'Github pages'],
          image: react,
          url: 'http://www.ibrahimpmahmood.github.io'
        }
      ],
    };

  }



  renderProjectCards() {


    return this.state.projects.map((project, index) => {
      return (
        <div className="column-3" key={index}>
          <ProjectCard project={project}/>
        </div>
      )
    })
  };

  componentDidMount() {
    const cardArr = document.getElementsByClassName('column-3');

    let maxHeight = 0;

    for (let i = 0; i < cardArr.length; i++) {
      if (maxHeight < cardArr[i].clientHeight) {
        maxHeight = cardArr[i].clientHeight
      }
    }

    for (let j = 0; j < cardArr.length; j++) {
      cardArr[j].style.height = `${maxHeight}px`;
    }

  }

  render() {
    return <div className="row" classID="projects" style={{'height': this.props.maxHeight}}>
      {this.renderProjectCards()}
    </div>
  }
}

export default Project