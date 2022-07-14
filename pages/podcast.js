import Link from "next/link";
import Head from "next/head";

export default function PodCast() {
    return (
        <>
        <Head>
        <title>Podcast - Blanchard International</title>
        <meta name="description" content="High Performance Habits: How Extraordinary People Become That Way with Brendon Burchard Click to download or get access to podcast How to Lead With Emotional Courage Click to download or get access to podcast The Happiness Equation with Neil Pasricha Click to download or get access to podcast"/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
         <div className="inner-banner books-head-headbg">
            <div className="container">
                <div className="inner-title text-center">
                    <h3>PodCast</h3>
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
                                    <img src="/assets/img/podcast1.jpg" alt="Images"/>
                                    <h3>High Performance Habits: How Extraordinary People Become...</h3>                                    
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="#"><a className="default-btn-two">Download Podcast<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast2.jpg" alt="Images"/>
                                    <h3>How to Lead With Emotional <br/>Courage</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#"><a className="default-btn-two">Download Podcast<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast3.jpg" alt="Images"/>
                                    <h3>The Happiness Equation with Neil Pasricha</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#"><a className="default-btn-two">Download Podcast<i className="bx bx-right-arrow-alt"></i></a></Link>
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