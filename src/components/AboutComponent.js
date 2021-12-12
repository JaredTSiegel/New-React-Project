import React from "react";

function About() {
    return (
        <div className="purple">
            <div class="container">
                <h1 class="text-center mb-4"> The Developer</h1>
                <p class="text-center"><strong>Jared Siegel</strong></p>
                    <div class="d-flex justify-content-center">
                        <img src="images/Jared picture 2nd.png" width="200px" height="325px" alt="Jared" />
                    </div>
                        <h5 class="text-center mt-5">The Intro</h5>
                        <p class="text-center">by Jared Siegel</p>
                        <p class="text-center p-1">Hello, everyone! My name is Jared. This is my second project. After my first intital project, I am working on another one. The first project I attempted was a website called Drake Shield Cyber Security. Unphased by the design, I decided to do another project to test my skills and practice what I already know. I still don't know everything, but I'm working on it as you read this page. Hopefully, I will start to understand the more advanced properties of HTML, CSS, and JavaScript. Thank you for reading and enjoy navigating the site.</p>
                        <p class="text-center"><em>Links to my Github and Linkedin below</em></p>
            </div>
        </div>
    );
}

export default About;