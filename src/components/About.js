import React, { Component } from 'react';
import Pdf from "../documents/resume.pdf";

export default class About extends Component {
  render() {
   const resumeData = this.props.resumeData;
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{ resumeData.aboutme }</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2 className="contact">Contact Links
                        {
                           resumeData.socialLinks && resumeData.socialLinks.map(item => {
                              if (item.name === "resume") {
                                 return (undefined);
                              } 
                              
                              return (
                                 <li key={item.name}>
                                    <a href={item.url} rel="noopener noreferrer" target="_blank">
                                       <i className={item.className}></i>
                                    </a>
                                 </li>
                              )
                           })
                        }
                     </h2>
                     {/* <h2>Resume</h2> */}
                     <h2 className="resume">Resume
                        <li key="resume">
                           <a href={Pdf} rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-file-text"></i>
                           </a>
                        </li>
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}