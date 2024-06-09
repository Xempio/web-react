import Blog from "./Blog";
import Features from "./Features";
import Works from "./Works";
import Customer from "./Customer";
import Faq from "./Faq";
import Footer from "./Footer";
function Home() {
    
    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <span className="brand-txt">XEST <br/> FOLIO</span>
                    </a>
                    <button className="navbar-toggler d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto m_nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item ms-5 btn-group">
                                <div className="nav-btn-bg"></div>
                                <button className="nav-btn btn-navbar btn-lg">Contact Me</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <section id="book-call" className="mt-5 justify-content-center">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="content mt-5 text-center">
                            <h1 className="miami">
                                MIAMI
                            </h1>
                            <h1 className="walker">
                                WALKE<span>R</span>
                            </h1>
                            <div className="book-call-content-text text-center mx-4">
                                <p className="lead px-5"><b>Award Wining product designer based in Georgia. We
                                create user-friendly interfaces for fast-growing startups.</b></p>
                            </div>
                            <div className="btn-group">
                                <div className="nav-btn-bg"></div>
                                <button className="nav-btn btn-navbar btn-lg">Contact Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="girl-img mt-5">
                            <img src="https://s3-alpha-sig.figma.com/img/1092/6744/1d4170b4296d86b66d4817862b98a5c0?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-XoUqAU-cD9YeA7trWPaSxtC0gblCRwhosh4v0NR9Q5BY9xkCKUGY5Prd83i~rox5T7KTqgOHTH8njQApw441dYJZbOMp4Ye4V~DIS4Eh4Y074J79620yRHqXF0Qmqxto9eB9YOejpTboOj9FtkOHZAXfPbwt4TPyUBEIK3Q0Y5ZEq5x0QRthH-MrkFeme0xY3GK93a0uZhCSP0HG~8yt7YE6KsW4za16~rhMZ14F9PUFAN5aotYIQY3hOeB88VcNMqPGUMorkXlibuD1j0Ck1fJzUVTLYDAToTsQT-Brudi85lw1fdI0xi9N1rwwvpl1B9wmhqYgph7jhj0kKzFg__" height='699px' width="560px"/>
                        </div>
                    </div>
                </div>
            </section>

            <Features></Features>
            <Works></Works>
            <Blog></Blog>
            <Customer></Customer>
            <Faq></Faq>
            <Footer></Footer>
        </>
    );
}


export default Home;