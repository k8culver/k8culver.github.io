import Button from "../components/Button";

function Resume() {
    return (
        <>
            <h1 className="text-teal-light">Where I've worked</h1>
            <h3 className="text-teal-light">Pela — <i>Software Engineer</i></h3>
            <h5 className="text-teal-light">Feb 2020 - Dec 2022, Kelowna BC</h5>
            <ul className="text-white">
                <li>Acted as lead developer on replatform from headless React to Shopify.</li>
                <li>Built features for headless Gatsby TypeScript React ecommerce sites.</li>
                <li>Wrote endpoints for Node.js AWS Lambdas.</li>
                <li>Improved SEO, GA tracking, and conversion optimization.</li>
                <li>Took on extra responsibility training/mentoring junior developers, code reviews, writing Jest unit tests, QA, and UI/UX design.</li>
            </ul>
            <h3 className="text-teal-light">Cheeky Monkey Media — <i>Intermediate Full Stack Developer</i></h3>
            <h5 className="text-teal-light">Oct 2019 - Feb 2020, Kelowna BC</h5> 
            <ul className="text-white">
                <li>Improved internal React application and external React store locator.</li>
                <li>Improved and rebuilt PHP sites for agency clients.</li>
            </ul>
            <h3 className="text-teal-light">ChatterBlock — <i>Full Stack Software Developer</i></h3>
            <h5 className="text-teal-light">Sept 2017 - Aug 2019, Victoria BC</h5>
            <ul className="text-white">
                <li>Rebuilt customer user dashboard and business listing pages using PostgreSQL, Django/Python, JavaScript, and HTML/CSS.</li>
                <li>Independently designed and built front-end web application user dashboard.</li>
                <li>Contributed to QA and UI/UX design.</li>
            </ul>
            <div className="flex mt-10">
                <div className="sm:mr-4">
                    <Button text="Download My Resume" type="outline--purple" />
                </div>
                <Button text="Stalk My LinkedIn" type="outline--purple" link="https://www.linkedin.com/in/kate-culver-333388143" />
            </div>
        </>
    );
}

export default Resume;
