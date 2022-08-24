import Link from "next/link"
import Head from "next/head"

function EbooksKB() {
   const RequestForEbook = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/63/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                   window.location.href = "/pdf/critical-skills-every-sales-manager-needs.pdf"
               }, 3000);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
      };
      xhttp.send("your-name=" + event.target.leadsquared_FirstName.value +
            "&your-email=" + event.target.leadsquared_EmailAddress.value +
            "&tel-547=" + event.target.leadsquared_Mobile.value +
            "&location=" + event.target.locations.value +
            "&organisation=" + event.target.organisation.value +
            "&designation=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +
            "&your-message=" + event.target.leadsquared_Notes.value +
            "&checkbox-640=" + event.target.chb1.value)

   }

   return (
      <>
         <Head>
            <title>ARE YOU A DIRECTIVE OR A SUPPORTIVE LEADER?</title>
            <meta name="description" content="Investing in learning and development of employees can be tough. Contact us for all general and non-sales enquiries and talk to our expert advisors and business counsellors to understand what program will suit your requirements best." />            
         </Head>   
  
  <section>
      <div className="img100">
          <img src="/assets/img/critical-skills-every-sales-manager-needs.jpg"  alt="diversity-equity-inclusion-pov"/>
      </div>
  </section>          
            
 <div className="what-did-area pt-45">
   <div className="container">
      <div className="row row-eq-height">
         <div className="col-lg-6 bgshd">
            <div className="what-did-content">
               <div className="section-title pt-20">                 
                  <h2 className="titleh2">ARE YOU A DIRECTIVE OR A SUPPORTIVE LEADER?</h2>
                  <b>ANSWER A FEW QUICK QUESTIONS TO FIND OUT!</b>
                  <p className="text-justify">
                      Forty years of Blanchard research has proven that the best leadership style is the one that matches the developmental needs of the person you’re working with. Is the direct report new and inexperienced about the task at hand? If so, more guidance and direction are called for. Are they experienced and skilled? In that case, they require less hands-on supervision and a more supportive style.
                  </p>
                 
                  <p className="text-justify">
                      All of us are at different levels of development depending on the task we are working on at any given time. To bring out the best in others, leadership must be tailored to both the individual and the situation. Giving people too much or too little direction has a negative impact on their development.
                  </p>
               </div>
            </div>
         </div>
         <div className="col-lg-6">
            <div className="img100">
            <img src="/assets/img/critical-skills-every-sales-manager-needs1.jpg" alt="Images"/>
            </div>
         </div>
      </div>
   </div>
</div>

    <div id="REQUEST" className="contact-area pt-45 pb-25 themebg mt-45">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className='text-center pb-25'>
                    <h3 className='titleh2'>Fill in your details to read more</h3>
                </div>
                <div className="contact-form">                  
                <form id="contactForm" method="post" onSubmit={RequestForEbook}>
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" name="leadsquared_FirstName" id="leadsquared_FirstName" className="form-control" placeholder="Your Name*" required />

                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Your Email*" required />

                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" name="leadsquared_Mobile" id="leadsquared_Mobile" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required />

                           </div>
                        </div>
                        
                         <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" name="locations" id="locations" className="form-control" placeholder="Location" />

                           </div>
                        </div>
                        
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" name="organisation" id="organisation" className="form-control" placeholder="Company Name*" required />

                           </div>
                        </div>
                        
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input type="text" name="designation" id="designation" className="form-control" placeholder="Designation" required />

                           </div>
                        </div>
                        
                        <div className="col-sm-12">
                           <div className="form-group">
                              <label>Referred By</label>
                              <select name="referredby" className="form-control">
                                 <option value="">---</option>
                                 <option value="Email">Email</option>
                                 <option value="Social Media">Social Media</option>
                                 <option value="Google Search">Google Search</option>
                                 <option value="Website">Website</option>
                                 <option value="Reference">Reference</option>
                                 <option value="Sales Representative">Sales Representative</option>
                              </select>
                           </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-12">
                           <div className="form-group pt-0">
                              <textarea name="leadsquared_Notes" className="form-control" id="leadsquared_Notes" cols="30" rows="3" placeholder="Your Message"></textarea>
                           </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-12">
                          <div className="agree-label">
                            <input type="checkbox" name="chb1" id="chb1" required />
                            <label for="chb1">*Subscribe to our newsletter to receive updates on our research, product news, and future webinars and Workshops.</label>
                          </div>
                        </div>
                        
                        

                        <div className="col-sm-12 col-md-12">
                           <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Send Message" />
                           <div id="msgSubmit" className="h3 text-center hidden"></div>
                           <div className="clearfix"></div>
                           <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                     </div>
                  </form>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
   )
}

export default EbooksKB