import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './experience'

 class Resume extends Component {
   render() {
     return (
       <div>
       <Grid>
         <Cell col = {4}>
         <h2 style = {{paddingTop: '2em'}}>Rafael Co Seteng</h2>
         <h4 style = {{color: 'grey'}}>Computer Science Student</h4>
         <hr style = {{borderTop: '3px solid #235fb2', width: '50%'}}/>
         <h5>Address</h5>
         <p> 1770 Broadway Street, Unit 237-A, Ann Arbor, Michigan, 48105</p>
         <h5>Phone</h5>
         <p> +1 (650) 505-9929</p>
         <h5>Email</h5>
         <p> coseteng@umich.edu </p>
         <hr style = {{borderTop: '3px solid #235fb2', width: '50%'}}/>
         </Cell>

         <Cell className = 'resume-right' col = {8}>
          <h2>Education</h2>

          <Education
          startYear= "September 2018"
          endYear = "May 2021"
          school = "University of Michigan"
          schoolDesc = "BS Computer Science"/>
          <hr style = {{borderTop: '3px solid #235fb2', width: '50%'}}/>

          <Experience
          startYear = "July 2019"
          endYear = "August 2019"
          work = "Coins.ph Mobile Wallet"
          position = "Software Engineering Intern"
          workDesc =
          "Utilized Postman to design, create, debug, and test merchant invoicing and payment gateway REST APIs with Python Flask.
          Created an API reference website and documented all the different API endpoints used by the application.

          Assisted with merchant and partner onboarding by creating SDKs for API requests in several languages through OpenAPI Codegen.

          Implemented continuous integration of generated SDKs through the use of Travis CI."
          />
          <Experience
          startYear = "August 2018"
          endYear = "August 2018"
          work = "BDO Investment and Capital Corporation"
          position = "Equity Research Summer Analyst"
          workDesc =
          "Conducted research on telecommunication companies and their feasibility through the Bloomberg Terminal and through contacting personnel through phone and email.
Created comprehensive reports, prospectuses, and decks for telecommunication companies that streamlined and summarized information for easier reading and analysis.
Participated in Management Committee meetings in which I presented about the current state of the Philippine Stock Exchange and gave projections for the next month based on political and economic factors.
"
          />
         </Cell>


       </Grid>

       </div>
     )
   }
 }

 export default Resume;
