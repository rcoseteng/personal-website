import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


 class Landing extends Component {
   render() {
     return (
       <div style={{width: '100%', margin: 'auto'}}>
          <Grid className = 'landing-grid'>
            <Cell col = {12}>
            <img
             src = "https://i.imgur.com/FmEJM25.png"
             alt = "avatar"
             className = "avatar-img"
             />
            <div className = 'banner-text'>
              <h1>Rafael Co Seteng</h1>

              <h2>Computer Science Student at the University of Michigan</h2>
              <hr/>



              <p> HTML/CSS | C++ | Javascript | Python | Swift | React </p>
              <div className = 'social-links'>
                <a href = "https://www.linkedin.com/in/rafael-coseteng" target = "_blank">
                  <i className = "fa fa-linkedin-square" rel = "noopener noreferrer" aria-hidden = "true" />
                  </a>
                <a href = "https://github.com/rcoseteng" target = "_blank">
                  <i className = "fa fa-github-square" rel = "noopener noreferrer" aria-hidden = "true" />
                </a>
                <a href="mailto:coseteng@umich.edu" target="_top">
                  <i className = "fa fa-envelope" rel = "noopener noreferrer" aria-hidden = "true" />
                </a>

              </div>
            </div>
            </Cell>
          </Grid>
       </div>
     )
   }
 }

 export default Landing;
