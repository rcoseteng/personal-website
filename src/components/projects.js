import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl'


 class Projects extends Component {
   constructor(props) {
     super(props);
     this.state = { activeTab: 0 }
   }
   toggleCategories() {
     if (this.state.activeTab == 0) {
       return (
         <div>
         <Card shadow = {5} style = {{minWidth: '450', margin: "auto"}}>
            <CardTitle style = {{color: '#fgh', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/500px-Python-logo-notext.svg.png) center / cover'}}>
            DJ 183
            </CardTitle>
            <CardText>
              Online Music Guessing Quiz created through Python Flask.
            </CardText>
            <CardMenu style = {{color: "#fff"}}>
              <IconButton name = "share" />
            </CardMenu>
         </Card>
         </div>
       )
     } else if (this.state.activeTab == 1){
     return (
       <div>
       <Card shadow = {5} style = {{minWidth: '450', margin: "auto"}}>
          <CardTitle style = {{color: '#fgh', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1000px-Swift_logo.svg.png) center / cover'}}>
          Cryptocurrency Tracker
          </CardTitle>
          <CardText>
            iOS application that tracks the exchange rate between USD and several cryptocurrencies.
          </CardText>
          <CardMenu style = {{color: "#fff"}}>
            <IconButton name = "share" />
          </CardMenu>
       </Card>
       </div>
     )}
   }
   render() {
     return (
       <div className = "category-tabs">
       <Tabs activeTab ={this.state.activeTab} onChange = {(tabID) => this.setState({ activeTab: tabID})} ripple>
       <Tab>Python</Tab>
       <Tab>Swift</Tab>
       </Tabs>
       <section className = "projects-grid">
       <Grid className = 'projects-grid'>
        <Cell col = {12}>
          {this.toggleCategories()}
        </Cell>
      </Grid>
       </section>
       </div>
     )
   }
 }

 export default Projects;
