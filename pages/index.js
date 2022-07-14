import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <>
    <Head>
    <title>Leadership Training in India | Leadership Training Programs - Blanchard</title>
            <meta name="description" content="Lead the winning path with Leadership training programs in India. Acquiring Leadership training by the experts help in the development of the individuals."/>
    <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1039427466993495'); 
fbq('track', 'PageView');
          `,
            }}
          />

<noscript>
 <img height="1" width="1" 
src="https://www.facebook.com/tr?id=1039427466993495&ev=PageView
&noscript=1"/>
</noscript>
    </Head>

      <div>
        <img src="assets/img/home-page-banner.jpg" alt="Images"/>
      </div>
	  
  <div className="what-did-area pt-45">
   <div className="container">
      <div className="row row-eq-height">
         <div className="col-lg-6 bgshd">
            <div className="what-did-content">
               <div className="section-title pt-20">                 
                  <h2 className="titleh2">Lead the winning path with Leadership Training Programs in India</h2>
                  <p className="text-justify">Enhancing the growth of the organization starts with improving the capabilities of the people in it. There is an imminent need to hone the skills of the employees as they will proliferate long-term benefits for the company. How is it achievable? We believe it’s by becoming extraordinary. This can be done by attending Leadership Training Programs in India.</p>
               </div>
            </div>
         </div>
         <div className="col-lg-6">
            <div className="">
               <div className="row">
                  <div className="col-lg-6 col-md-6">
                     <div className="what-did-right">
                        <div className="content">
                           <img src="/assets/img/40y.png" alt="Images"/>
                           <h3>Years Of Experience</h3>
                        </div>
                        <div className="what-did-right-img">
                           <img src="/assets/img/what-did-img1.jpg" alt="Images"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="what-did-right">
                        <div className="what-did-right-img">
                           <img src="/assets/img/what-did-img2.jpg" alt="Images"/>
                        </div>
                        <div className="content">                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
	  
      <div className="what-did-area pt-20 pb-70">
         <div className="container">
            <div className="row row-eq-height">
               <div className="col-lg-6 bgleftcol">
                  <div className="">
                     <img src="assets/img/kbhomeabout.jpg" alt="Images"/>                      
                  </div>
               </div>
               <div className="col-lg-6 bgshd">
                  <div className="what-did-content what-did-content-rs">
                     <div className="section-title-two">                         
                        <h2 className="titleh2">Accomplish your business goals with Corporate Training Companies in India</h2>
                        <p className="text-justify pt-0">
                           We develop leadership capabilities of people through our time-tested training modules that are suitable for each level of their leadership journey. We bring about a real change in people’s behaviors, skills, and habits that lead an organization towards a higher level of success. With an array of corporate companies in India, it might become tough to select the one that suits your needs. This is where we’ve gained a competitive advantage in providing expert services in the areas of Individual, Leadership, Business and Organizational excellence, and have been servicing top business giants in India for more than 22 years.
                        </p>
						<p className="text-justify">
						  Our consultants have 1000+ years of accumulated professional experience and are located across the region. Connect with us to know how we can help your organization achieve greater heights and why you can count on us while looking for top corporate organizations in India.
						</p>
                     </div>                     
                  </div>
               </div>
            </div>
         </div>
      </div>
	  
	  <div className="what-did-area style1">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-12">
                  <div className="what-did-left-content">
                     <div className="row row-eq-height height100h">
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center">
                              <img src="assets/img/1-06.png" width="120px" alt="Images"/>
                              <h3>PERSONAL LEADERSHIP QUALITY ENHANCEMENT</h3>                             
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center">
                              <img src="assets/img/1-04.png" width="120px" alt="Images"/>
                              <h3>CONTINUOUS IMPROVEMENT</h3>                             
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center">
                              <img src="assets/img/1-03.png" width="120px" alt="Images"/>
                              <h3>BETTER DELEGATION OF WORK</h3>                              
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center">
                              <img src="assets/img/1-02.png" width="120px" alt="Images"/>
                              <h3>APPRAISALS AND PERFORMANCE MANAGEMENT</h3>                             
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-12 bgshd pt-10">
                  <div className="what-did-content what-did-content-rs">
                     <div className="section-title-two">
                        <p className="text-justify">
                           The importance of training is much more than the ones mentioned above. It helps to develop the leadership styles of professionals and enlightens them about the difference between a boss and a leader so that they can adopt an optimistic and practical attitude towards their work.
                        </p>
						<p className="text-justify">
						  Leadership training has taken an important role in identifying a global module to include role-defying methods to employees. Special emphasis is given to the improvement of management skills for career progression. Leadership is incomplete without management and engagement. Thus, it has always been a focus of this program to induce more and more sessions on these two critical aspects.
						</p>
						  <h4 className="titleh4">Did we take the necessary steps to improve employee engagement skills?</h4>
						  <p>
						    Focusing on the ways to improve employee engagement, the session is dedicated to making people more empathetic and humble towards their juniors as well as peers.
						  </p>
						  <ul className="point2">
							  <li>Engaged employees market your company</li>
							  <li>More productivity when employees are engaged</li>
							  <li>Lesser attrition of employees, leading to longevity and loyalty</li>
							  <li>Engaged employees are optimally motivated and feel positive at work</li>
							  <li>Employees become more creative when they are focused on the jobs</li>
							  <li>They communicate better and work together as a team</li>							 
						  </ul>
                     </div>                     
                  </div>
               </div>
            </div>
         </div>
      </div>
	  
	  <div className="what-did-area pb-40 pt-45 style2">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-12">
			   <h2 className="titleh2 text-center">HOW WE WORK WITH YOU</h2>
			   <p className="text-center">We start by understanding your most critical challenges and then design a plan that achieves your desired outcomes and impact.</p>
			   <h4 className="titleh4 text-center pb-25 style3">Your Path to Creating the Best Managers </h4>
                  <div className="what-did-left-content">
                     <div className="row row-eq-height height100p">
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql">
                              <img src="assets/img/listen.png" alt="Images"/>
                              <h3>1. Listen</h3>
							  <p>Acknowledge your necessities, huddles, and targets.</p>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql">
                              <img src="assets/img/planning.png" alt="Images"/>
                              <h3>2. Plan</h3>
							  <p>Prescribe the most efficient training strategy to accomplish your targets.</p>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql">
                              <img src="assets/img/process.png" alt="Images"/>
                              <h3>3. Execute</h3>
							  <p>Assists you to deliver the training  program in various ways to fulfil your needs.</p>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <div className="what-did-left-card text-center homeboxeql">
                              <img src="assets/img/data.png" alt="Images"/>
                              <h3>4. Evaluate</h3>
							  <p>Determines the  program’s development and makes alterations to maximize impacts.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
	  
	  <div className="what-did-area">
         <div className="container-fluid m0p0">
            <div className="row row-eq-height m0p0">
               <div className="col-lg-6 m0p0">
                  <div className="">
                     <img src="assets/img/ken-photo.jpg" alt="Images"/>                      
                  </div>
               </div>
               <div className="col-lg-6 m0p0 stylecc">
                  <div className="what-did-content what-did-content-rs kbinfo">
                     <div className="section-title-two">                         
                        <h2>Meet Our <br/><span className="green-bg">Founder</span></h2>
                        <p className="text-justify">
                           Few people have influenced the day-to-day management of people and companies more than Ken Blanchard. A prominent, sought-after author, speaker, and business consultant, Dr. Blanchard is respected for his lifetime of groundbreaking research and thought leadership that has influenced the day-to-day management and leadership of people and companies throughout the world.
                        </p>						
                     </div>                     
                  </div>
               </div>
            </div>
         </div>
      </div>
	  
	  <div className="blog-widget-area pt-45 pb-25 d-none">
         <div className="container">
		    <h2 className="titleh2 text-center padding-b20">READ STORY</h2>
            <div className="row">
               <div className="col-lg-4">
                  <div className="blog-item">
                     <a href="#">
                     <img src="assets/img/blog-style1.jpg" alt="Images"/>
                     </a>
                     <div className="content">
                        <span><i className='bx bx-time'></i> 20 January, 2021</span>
                        <h3><a href="#">Failure – An Attempt to Success</a></h3>
                        <p>Failure is a part of life that everyone experiences some...</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="blog-item">
                     <a href="#">
                     <img src="assets/img/blog-style2.jpg" alt="Images"/>
                     </a>
                     <div className="content">
                        <span><i className='bx bx-time'></i> 22 January, 2021</span>
                        <h3><a href="#">The Importance of Giving and...</a></h3>
                        <p>Creating a culture of feedback is synonymous with creating a...</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="blog-item">
                     <a href="#">
                     <img src="assets/img/blog-style3.jpg" alt="Images"/>
                     </a>
                     <div className="content">
                        <span><i className='bx bx-time'></i> 23 January, 2021</span>
                        <h3><a href="#">Hybrid work: The Future of...</a></h3>
                        <p>In the midst of the pandemic, companies have evolved into...</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-12 text-center">
                  <div className="services-more-btn">
                  <a className="default-btn btn-bg1 border-radius-5" href="/blog">Load More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
	  
	   
     <div className="brand-area brand-bg2">
         <div className="container">
               <Slider {...settings}>
                  <div key={1}>
                     <img src="assets/img/boston-1.png" alt="Images"/>
                  </div>
                  <div key={2}>
                     <img src="assets/img/tcs.png" alt="Images"/>
                  </div>
                  <div key={3}>
                     <img src="assets/img/optum.png" alt="Images"/>
                  </div>
                  <div key={4}>
                     <img src="assets/img/nthrive.png" alt="Images"/>
                  </div>
                  <div key={5}>
                     <img src="assets/img/mcm.png" alt="Images"/>
                  </div>
                  <div key={6}>
                     <img src="assets/img/hp.png" alt="Images"/>
                  </div>
                  <div key={7}>
                    <img src="assets/img/hero.png" alt="Images"/>
                  </div>
                  <div key={8}>
                    <img src="assets/img/hcl.png" alt="Images"/>
                  </div>
                  <div key={9}>
                    <img src="assets/img/fA.png" alt="Images"/>
                  </div>
               </Slider>
            
         </div>
      </div>
    </>
  )
}
