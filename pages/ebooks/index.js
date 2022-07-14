import Link from "next/link";
import Head from "next/head";

export default function Ebooks() {
    return (
        <>
        <Head>
        <title>Ebooks - Blanchard International</title>
        <meta name="description" content="Measuring the Impact and ROI of Leadership Training Read eBook 7 Ways Poor Leaders Are Costing Your Company Money Read eBook 3 Fatal Mistakes Managers Make When Coaching Their Teams Read eBook When It Comes to Customer Service, Is Your Business Flourishing or Failing? Read eBook 7 Warning Signs That Distrust Is Harming Your Organization"/>
        <link rel="icon" href="/favicon.ico" />
        </Head>

         <div className="inner-banner books-head-headbg">
            <div className="container">
                <div className="inner-title text-center">
                    <h3>Ebooks</h3>
                </div>
            </div>
            <div className="inner-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            </div>
            <div className="what-did-area pb-40 pt-45 style2 themebg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="what-did-left-content">
                        <div className="row row-eq-height eventsandworkshopbox">
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/ebook1.jpg" alt="Images"/>
                                    <h3>Measuring the Impact and ROI of Leadership Training</h3>                                    
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="#">
                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/ebook2.jpg" alt="Images"/>
                                    <h3>7 Ways Poor Leaders Are Costing Your Company Money</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#">
                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/ebook3.jpg" alt="Images"/>
                                    <h3>3 Fatal Mistakes Managers Make When Coaching Their Teams</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#">
                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/ebook4.jpg" alt="Images"/>
                                    <h3>When It Comes to Customer Service, Is Your Business Flourishing or Failing?</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#">
                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/ebook5.jpg" alt="Images"/>
                                    <h3>7 Warning Signs That Distrust Is Harming Your Organization</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#">
                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/ebook6.jpg" alt="Images"/>
                                    <h3>Why it’s Crucial for Your Leaders to Take a Situational Approach to Management</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#">
                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}