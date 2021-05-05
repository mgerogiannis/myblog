import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Michail Gerogiannis Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns download">
                 <form method="get" action="mgerogianniscv.pdf">
                  <p>
                     <button type="submit" className="button"><i className="fa fa-download"></i>Download Resume</button>
                  </p>
                 </form>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
