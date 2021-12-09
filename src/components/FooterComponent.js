import React from 'react';

function Footer(props) {
    return(
        <footer className="mt-5 pt-5 pb-5 site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xs-12">
                        <h2>TruMusic</h2>
                        <p className="pr-5 text-white-50">Hello and Welcome! This is a mock streaming music website. I'm doing this as a
                            personal project to practice coding. </p>
                        <h3>
                            <a href="http://linkedin.com/" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin-square mr-1" /></a>{' '}
                            <a href="http://github.com/" target="_blank" rel="noreferrer noopener"><i className="fa fa-github-square" /></a>
                        </h3>
                    </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                            <ul className="m-0 p-0 ml-3">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/aboutus">The Developer</a></li>
                                <li><a href="/home">Pricing</a></li>
                                <li><a href="https://www.spotify.com" target="_blank" rel="noreferrer noopener">The Mock Site</a></li>
                                <li><a href="/home">Contact</a></li>
                            </ul>
                        </div>
                            <div className="col-lg-4 col-xs-12 location">
                                <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                                <p>51 Houston Drive Houston, TX 73206</p>
                                <p className="mb-0"><i className="fa fa-phone mr-3" />(861) 794-2070</p>
                                <p><i className="fa fa-envelope-o mr-3" />TruMusic@fanmade.com</p>
                            </div>
                </div>
                <div className="row mt-5">
                    <div className="col copyright">
                    <p className=""><small className="text-white-50">Made 2021. Free Practice.</small></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;