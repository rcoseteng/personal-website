import React, { Component } from 'react';
import { Grid, Cell, DataTable, TableHeader } from 'react-mdl'


 class About extends Component {
   render() {
     return (
       <div style={{width: '100%', margin: 'auto'}}>
          <Grid className = 'about-grid'>
            <Cell col = {12}>
            <div className = 'about-text'>
              <h1><b>About Me</b></h1>
              <p> I am currently a junior at the University of Michigan - Ann Arbor, majoring in Computer Science.

I am actively looking for opportunities in fields related to financial technology, iOS development, and Web Development. 

  </p>
            </div>
            <div className = 'table-title'>
              <h1><b>Coursework</b></h1>
            </div>
              <DataTable className = 'table'
                shadow={0}
                rows={[
                    {CourseCode: 'EECS 183', CourseName: 'Elementary Programming Concepts'},
                    {CourseCode: 'EECS 280', CourseName: 'Programming and Intro Data Structures'},
                    {CourseCode: 'EECS 203', CourseName: 'Discrete Mathematics'},
                    {CourseCode: 'EECS 281', CourseName: 'Data Structures and Algorithms'},
                    {CourseCode: 'ECON 451', CourseName: 'Intermediate Introduction to Statistics and Econometrics'}
                ]}
            >
                <TableHeader name="CourseCode" tooltip="The Course Code">Course Code</TableHeader>
                <TableHeader name="CourseName" tooltip="Full Name of Course">Course Name</TableHeader>
            </DataTable>
            </Cell>
          </Grid>
       </div>

     )
   }
 }

 export default About;
