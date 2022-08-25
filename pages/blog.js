import Link from 'next/link'
import Head from 'next/head'
import  moment from 'moment'

export async function getServerSideProps() {
   const res = await fetch('https://blanchard-admins.herokuapp.com/api/posts')
   const posts = await res.json()

   const cat = await fetch('https://blanchard-admins.herokuapp.com/api/categories')
   const cats = await cat.json()

   return {
     props: {
       posts, 
       cats,    
     },
   }
 }

export default function index({posts, cats}) {
  
  return (
    <>

    
        <Head>
        <title>Blog - Blanchard International</title>
        <meta name="description" content="Blanchard Research and Training LLP is the leading training provider in South Asia, with expertise in leadership development across hierarchies. Having a global establishment of over 35 years and operational in India since 2008 by Mr Yogesh Sood who is a veteran in business operations and leadership development."/>
        <link rel="icon" href="/favicon.ico" />
        </Head>


  <div className="blog-widget-area pt-45 pb-70">
  <div className="container">
    <h2 className="titleh2 text-center padding-b20">Leadership and Management Related Blogs</h2>
    <div className="row">
        <div className="col-sm-8">
            <div className="row">
               
            {
             posts.map((getpost)=>{
                 return(
                    <div className="col-sm-6">
                      <div className="blog-item">
                      <a href={getpost.posturl}>
                      <img src={getpost.ImageURL} alt={getpost.ImageAlt}/>
                      </a>
                        <div className="content">
                        <span><i className='bx bx-time'></i>{moment(getpost.ModifiedDate).format('MMMM DD Y')}</span>
                        <h3><a href={getpost.posturl}>{getpost.Title}</a></h3>                        
                        </div>
                      </div>
                    </div>           
                 );
                })
            }
            </div>
        </div>
        
        <div className="col-sm-4">
            <div className="side-bar-area">
               <div className="side-bar-widget">
                  <h3 className="title">Recent Blogs</h3>
                  <div className="widget-popular-post">
                  {
             posts.slice(0,5).map((getpost)=>{             
                        return(
                     <article className="item">
                        <a href={getpost.posturl} className="thumb">
                           <span className="full-image cover bg1" role="img">
                           <img src={getpost.ImageURL} alt={getpost.ImageAlt}/>
                           </span>
                        </a>
                        <div className="info">
                           <p><i className='bx bx-time'></i>{moment(getpost.ModifiedDate).format('MMMM DD Y')}</p>
                           <h4 className="title-text">
                           <a href={getpost.posturl}>{getpost.Title}</a>
                           </h4>
                        </div>
                     </article>
                      );                 
                    })
                }
                  
                  </div>
               </div>
               <div className="side-bar-widget">
                  <h3 className="title">Categories</h3>
                 
                  <div className="side-bar-categories">
                     <ul>
                        {
                          cats.map((getats)=>{
                            return(
                              <li><a href="#">{getats.Name}</a></li>
                            )
                          })
                        }
                     </ul>
                  </div> 
               </div>
               
               <div className="side-bar-widget">
                  <h3 className="title">Upcoming Workshops</h3>
                 <div className="widget-popular-post">                     

                     <article className="item">
                        <a href="https://blanchardinternational.co.in/events-workshops/virtual-public-workshop#REQUEST" className="thumb">
                           <span className="full-image cover bg1" role="img">
                               <img src="/assets/img/workshop1.jpg" alt="Images" />
                           </span>
                        </a>
                        <div className="info">
                           <p><i className='bx bx-time'></i> September 13th, 2022</p>
                           <h4 className="title-text">
                              <a href="https://blanchardinternational.co.in/events-workshops/virtual-public-workshop#REQUEST">Blanchard Management Essentials - Virtual</a>
                           </h4>
                        </div>
                     </article>
                  
                  </div>
               </div>
               
               <div className="side-bar-widget d-none">
                  <h3 className="title">Upcoming Webinar</h3>
                 <div className="widget-popular-post">                     
                     
                     <article className="item">
                        <a href="https://blanchardinternational.co.in/events-workshops/program-experience-webinar/#REQUEST" className="thumb">
                           <span className="full-image cover bg1" role="img">
                               <img src="/assets/img/webi1.jpg" alt="Images" />
                           </span>
                        </a>
                        <div className="info">
                           <p><i className='bx bx-time'></i> June 3rd, 2022</p>
                           <h4 className="title-text">
                              <a href="https://blanchardinternational.co.in/events-workshops/program-experience-webinar/#REQUEST">Developing Self Leaders—A Competitive Advantage for Organisations (Self Leadership)</a>
                           </h4>
                        </div>
                     </article>

                     <article className="item">
                        <a href="https://blanchardinternational.co.in/events-workshops/program-experience-webinar/#REQUEST" className="thumb">
                           <span className="full-image cover bg1" role="img">
                               <img src="/assets/img/webi2.jpg" alt="Images" />
                           </span>
                        </a>
                        <div className="info">
                           <p><i className='bx bx-time'></i> June 17th, 2022</p>
                           <h4 className="title-text">
                              <a href="https://blanchardinternational.co.in/events-workshops/program-experience-webinar/#REQUEST">4 Critical Focus Areas for Building a High Performance Team (Team Leadership)</a>
                           </h4>
                        </div>
                     </article>

                     <article className="item">
                        <a href="https://blanchardinternational.co.in/events-workshops/program-experience-webinar/#REQUEST" className="thumb">
                           <span className="full-image cover bg1" role="img">
                               <img src="/assets/img/webi3.jpg" alt="Images" />
                           </span>
                        </a>
                        <div className="info">
                           <p><i className='bx bx-time'></i> July 8th, 2022</p>
                           <h4 className="title-text">
                              <a href="https://blanchardinternational.co.in/events-workshops/program-experience-webinar/#REQUEST">Prepare Your Leaders to Lead Situationally: Breakthrough for a Hybrid Workplace (The SLII Experience™ - Virtual)</a>
                           </h4>
                        </div>
                     </article>
                  
                  </div>
               </div>
               
               <div className="side-bar-widget">
                  <h3 className="title">Resources</h3>
                 
                  <div className="side-bar-categories">
                     <ul>
                         
                        <li>
                           <a href="https://blanchardinternational.co.in/ebooks">Ebooks</a>
                        </li>
                        <li>
                           <a href="https://blanchardinternational.co.in/elearning">Elearning</a>
                        </li>
                        <li>
                           <a href="https://blanchardinternational.co.in/podcast">Podcast</a>
                        </li>
                      
                     </ul>
                  </div> 
               </div>
               
               {/* <div className="side-bar-widget">
                  <h3 className="title">Popular Tags</h3>
                  <ul className="side-bar-widget-tag">
                     <li><a href="#">Vision,</a></li>
                  </ul>
               </div> */}

               <div className="side-bar-widget">
                  <h3 className="title">Follow Us On</h3>
                  <ul className="blog-social-link">
                     <li>
                        <a href="https://www.facebook.com/blanchardresearchandtrainingindia" target="_blank">
                           <i className='bx bxl-facebook'></i>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.linkedin.com/company/blanchard-research-and-training-india/" target="_blank">
                           <i className='bx bxl-linkedin'></i>
                        </a>
                     </li>
                     <li>
                        <a href="https://twitter.com/blanchard_india" target="_blank">
                           <i className='bx bxl-twitter'></i>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.youtube.com/c/BlanchardinternationalIndia" target="_blank">
                           <i className='bx bxl-youtube'></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

    </div>
  </div>
</div>
 
 
         
    </>
  )
}

