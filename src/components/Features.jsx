import logo5 from '../../public/logo5.png';
import logo4 from '../../public/logo4.png';
import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';
import logo3 from '../../public/logo3.png';

function Features() {

    const features_logos = [
        {id:1, src:logo5, alt:'Logo1'},
        {id:2, src:logo4, alt:'Logo2'},
        {id:3, src:logo1, alt:'Logo3'},
        {id:4, src:logo2, alt:'Logo4'},
        {id:5, src:logo3, alt:'Logo5'},
    ]

    return (
        <section id="features" className="mt-5">
                <div className="trusted-by">
                    <h4 className="lead text-center mt-5">Trusted By</h4>
                    <div className="row">
                            {features_logos.map((logo) => {
                                return (
                                    <div className="logo">
                                        <div className="img-wrapper">
                                            <img className="l-img" key={logo.id} src={logo.src} alt={logo.alt}/>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div className="features_content">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 px-5 pt-5">
                            <h6 className="features mb-3">FEATURES</h6>
                            <h1>Giving Your Business
                            Some Great Ideas</h1>
                            <p className="my-3 features_content_left_text">Every designer needs the right tools to do the perfect job. Thankfully, we can do that. I design products that are more than pretty. I make them shippable and usable.</p>
                            <div className="btn-group">
                                <div className="nav-btn-bg"></div>
                                <button className="nav-btn btn-navbar btn-lg">Contact Us</button>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6">
                            <div className="container mt-2">
                                <div className="row">
                                        <div className="col-lg-6 col-sm-12 mt-5 mb-2 card-padding-left">
                                            <div className="card">
                                                <img src="https://s3-alpha-sig.figma.com/img/4eff/37d1/3e39677e5f28d4f0ae3b478323884388?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yy2Ntu~wVznxVe5N47~sdll9C3AKq4E0ltwv3ov4cuiU7iYP0PVf5S4nde--vXWeliqcCDA1Tjycs-1crW9Ooo0VRLa6Gejc49Mca6UM6WEDD6CQpVwUnt21He-HjliL0o-Imzt3Lrq~guN~~bh3wrxdTUTIUejmmcb-uWz6VDTnLJY5gVlqtFdQ24pA92qf8j8-fKPzKmDzdDMmeKwsd8~VmX-DxMa8ixd9n53xnuzxUB0CQ4qNX5ue~wUMoQhkh~zV-QM23MOUmU08Kh2k2WRE-afStEaRbEYUL6U5e6Mb2f9EBRvixdgPAvurBpRpCLcM8cc4ySUjnUjvlIOKKA__" alt="" className="card-img-top img-fluid img-black"/>
                                                <div className="card-body">
                                                    <h5 class="card-title">UX Experience</h5>
                                                    <p className="lead">I design products that are more than pretty. I make them  usable.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 mb-5">
                                        <div className="card">
                                                <img src="https://s3-alpha-sig.figma.com/img/1438/9ca0/cbb52a3ccb5e87be6daf92f76e1eebba?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wc0LXREyGbk9CVjHbjRu2hB~sG6aNTLh6paWvV1jRmQ6VfI24X2T92yqdwAZQpyMreYIbnkfW5tKddOMm0EJhumqofOQbRgrk3o22Exgz23exJk3x0dwBZH7eeuepDBfw2QqEe3hn-PBr58Yc7WW46~QuRWAaBfv63Owj31mA0GeEQoBJdibkdrAQopI2sPgIvjQvEu7oS73y6grN8Q8vDu4a9qn5wOD9ZkixyTC5GaJhF6ZGQig0pwW03soaGLGgseSS67QGpvfl7V5AFD2AUMbShvU9FCC4oH8AkD7u9qxNMc46W-5wjfzqRPPV4K4979~-kE4z~r9uRa2zyVD-Q__" alt="" className="card-img-top img-fluid"/>
                                                <div className="card-body">
                                                    <h5 class="card-title">UI Design</h5>
                                                    <p className="lead">I design products that are more than pretty. I make them  usable.</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 mt-5 mb-2 card-padding-left">
                                        <div className="card">
                                                <img src="https://s3-alpha-sig.figma.com/img/f30d/bcf6/8d160a369217f58e2449ae9462132df4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0MvzPj5jih4weQMB~vRJ2TILRNYZ4UQHC7~orSKrQgMYsQPmTjkiSE~SKM0KR5thyQdMOOqXWcYJ1X3Tiwvzr88yZFiKM1YEco0i8cK~qHM84Dsd3ZlgvZgF4jAWasFCmSY4avmWzzHiMYeY1x3IkDVqKCLNEg8Hutp6yiLVGHXzBLXA0gSR9D5rzx7-oeyObM~FrvEuxdZOP~pglBWeUDkZ9KYhwvKpKWO02vj1B6VEXvir9Pv7R~h28uXslpZkjArxoKs~wm5b-cC-15Ri~IREYVdicA5cyOL~xf6jYIF6~YSKihl0uwg0vyFQz7IZuRjMPLBe2BHogC0byTs7w__" alt="" className="card-img-top img-fluid img-black"/>
                                                <div className="card-body">
                                                    <h5 class="card-title">Product Analysis</h5>
                                                    <p className="lead">I design products that are more than pretty. I make them  usable.</p>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 mb-5">
                                        <div className="card">
                                                <img src="https://s3-alpha-sig.figma.com/img/fa6d/ab77/088281894893d6cd57044b5e4fa81f1d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cz-zTbPxO2yQIZha-y7x0IPr5ja2WXfd9oBw9JdEZHLfq0JpBYdlfgpYzakSohJHz-7cJC5Qw5aWtQ5LnM0gGyPbuSFKmKC5EpxMvCTAOCQm7vatuVFIZpwjfyocwHVa3ZCGbFGI8Xinz36ig2HUYB-gGRmvwlSA6cTwDfkPc7hDDckaXCve~XdSmiOUYEEYnN4RrhWs~T6kQZe3y2MlYOzURRR2SujEvf-vd9zR-BEx0ivrrMEpZTq6drj5FT4LHzI75K5m6fybmieWjqdgLzA43BxRdSzq1oD4GYzGho3EpMymzstZz0ZwssLlJ53A705ICxs5tq9TrJ37xr73IA__" alt="" className="card-img-top img-fluid img-black"/>
                                                <div className="card-body">
                                                    <h5 class="card-title">UX Experience</h5>
                                                    <p className="lead">I design products that are more than pretty. I make them  usable.</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features_content_footer">
                    <div className="row mx-5">
                        <div className="col-lg-3">
                            <div className="features_content_footer_text">
                                <h1>12K+</h1>
                                <h6>Project Complete</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="features_content_footer_text">
                                <h1>7K+</h1>
                                <h6>Happy Client</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="features_content_footer_text">
                                <h1>10+</h1>
                                <h6>Years Experience</h6>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="features_content_footer_text">
                                <h1>270+</h1>
                                <h6>Win Awards</h6>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
    
}

export default Features;