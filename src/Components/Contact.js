import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha';

class Contact extends Component {

   constructor(props) {
      super(props)
  
      this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
      this.verifyCallback = this.verifyCallback.bind(this);
  
      this.state = {
        isVerified: false
      }
    }

    recaptchaLoaded() {
      console.log('capcha successfully loaded');
    }
  
  
    verifyCallback(response) {
      if (response) {
        this.setState({
          isVerified: true
        })
      }
    }
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_vkh7rrr', e.target, 'user_P9WDzgSNHtDYIPtCsBusi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={sendEmail} id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button disabled={this.state.isVerified === false} className="submit">Submit</button>
                  </div>
                  <Recaptcha
                     sitekey="6Lft_skaAAAAAHCTNT8EMq8tnp9GOd80OIU-uNIt"
                     render="explicit"
                     onloadCallback={this.recaptchaLoaded}
                     verifyCallback={this.verifyCallback}
                   />
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
