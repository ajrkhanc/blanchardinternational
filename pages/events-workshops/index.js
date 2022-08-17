import Link from "next/link";
import Head from "next/head";

export default function EventsAndWorkshop() {
    return (
        <>
        <Head>
        <title>Know More About Blanchard Events and Workshops</title>
        <meta name="description" content="Blanchard's learning courses and webinars build business management and leadership skills required to increase team’s productivity and optimize organizational performance. Blanchard online learning empowers individuals and organizations."/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className="inner-banner events-workshop-headbg">
   <div className="container">
      <div className="inner-title text-center">
         <h3>EXPLORE OUR UPCOMING TRAININGS <br/>COMPLIMENTARY AND PAID EVENTS</h3>
         <ul>
            <li>
               <Link href="/"><a>Home</a></Link>
            </li>
            <li>Events & Workshop</li>
         </ul>
      </div>
   </div>
   <div className="inner-lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
   </div>
</div>
<div className="what-did-area pb-40 pt-45 style2">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-lg-12">
            <h2 className='text-center'>It’s time to empower <span className="green-bg">your leaders</span></h2>
            <h2 className="titleh2 text-center pb-25">Register and learn more about our workshops</h2>
            <div className="what-did-left-content">
               <div className="row row-eq-height eventsandworkshopbox">

                  
                  <div className="col-sm-4">
                     <div className="choose-card">
                        <img src="/assets/img/workshopformain1.jpg" alt="Images"/>
                        <h3>Blanchard Management Essentials - Virtual</h3>
                        <p>September 13th, 2022</p>
                        <div className='row eventsbottomarea2 text-center'>
                           <div className='col-sm-12'>
                              <a href="/events-workshops/virtual-public-workshop#REQUEST" className="default-btn-two">REQUEST INFO<i className="bx bx-right-arrow-alt"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                 
               </div>
            </div>
            <div className='text-center'>                           
               <a href="/events-workshops/virtual-public-workshop" className="default-btn-two">VIEW ALL WORKSHOPS<i className="bx bx-right-arrow-alt"></i></a>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="what-did-area pb-40 pt-45 style2 themebg d-none">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-lg-12">
            <h2 className='text-center'>An hour of learning <span className="green-bg">with us</span></h2>
            <h2 className="titleh2 text-center pb-25">Join our complimentary webinars</h2>
            <div className="what-did-left-content">
               <div className="row row-eq-height eventsandworkshopbox">
                  

                  <div className="col-sm-4">
                     <div className="choose-card">
                        <img src="/assets/img/webi3.jpg" alt="Images"/>
                        <h3>The Manager Who Can Coach: Bringing Coaching Skills into Your Organization</h3>
                        <p className="text-justify">August 26th, 2022</p>
                        <div className='row text-center eventsbottomarea2'>
                           <div className='col-sm-12'>
                              <a href="/events-workshops/program-experience-webinar/#REQUEST" className="default-btn-two">RESGISTER NOW <i className="bx bx-right-arrow-alt"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>

               <div className="col-sm-4">
                     <div className="choose-card">
                        <img src="/assets/img/webi1.jpg" alt="Images"/>
                        <h3>When It Comes to Customer Loyalty, Is Your Business Flourishing or Failing?</h3>
                        <p className="text-justify">September 2nd, 2022</p>
                        <div className='row text-center eventsbottomarea2'>
                           <div className='col-sm-12'>
                              <a href="/events-workshops/program-experience-webinar/#REQUEST" className="default-btn-two">RESGISTER NOW <i className="bx bx-right-arrow-alt"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-4">
                     <div className="choose-card">
                        <img src="/assets/img/webi1.jpg" alt="Images"/>
                        <h3>Create Creative & Innovative Workforce through Self Leadership Skills</h3>
                        <p className="text-justify">September 16th, 2022</p>
                        <div className='row text-center eventsbottomarea2'>
                           <div className='col-sm-12'>
                              <a href="/events-workshops/program-experience-webinar/#REQUEST" className="default-btn-two">RESGISTER NOW <i className="bx bx-right-arrow-alt"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  
                  
               </div>
            </div>
            <div className='text-center'>
               <a href="/events-workshops/program-experience-webinar" className="default-btn-two">VIEW ALL WEBINARS<i className="bx bx-right-arrow-alt"></i></a>
            </div>
         </div>
      </div>
   </div>
</div>

        </>
    )
}