import Canvas from "../components/Canvas/Canvas";
import ContactForm from "../components/ContactForm";
import LotsOfBlocks from "../components/LotsOfBlocks/LotsOfBlocks";
import Timeline from "../components/Timeline/Timeline";
import WordMap from "../components/WordMap/WordMap";
import AboutMe from "../copy/AboutMe";
import Resume from "../copy/Resume";
import Reviews from "../components/Reviews/Reviews";

function Home() {
    const words = [
        { text: 'Python', value: 4, classes: 'text-purple', description: '2 years professional, university training' },
        { text: 'React', value: 5, classes: 'text-teal', description: '3 years professional' },
        { text: 'AWS', value: 2, classes: 'text-teal-light', description: '3 years professional' },
        { text: 'CSS', value: 5, classes: 'text-teal', description: '5 years professional' },
        { text: 'TypeScript', value: 3, classes: 'text-teal', description: '2.5 years professional' },
        { text: 'Node.js', value: 2, classes: 'text-purple', description: '2 years professional' },
        { text: 'Git', value: 4, classes: 'text-teal-light', description: '5 years professional' },
        { text: 'GraphQL', value: 3, classes: 'text-purple', description: '2.5 years professional' },
        { text: 'Java', value: 2, classes: 'text-purple', description: 'university training' },
        { text: 'MongoDB', value: 1, classes: 'text-purple', description: '2 years professional' },
        { text: 'Elasticsearch', value: 2, classes: 'text-teal-light', description: '2.5 years professional' },
        { text: 'SQL', value: 2, classes: 'text-purple', description: '2 years professional, university training' },
        { text: 'JavaScript', value: 5, classes: 'text-teal', description: '5 years professional' },
        { text: 'Jest', value: 2, classes: 'text-teal-light', description: '2 years professional' },
        { text: 'HTML', value: 5, classes: 'text-teal', description: '5 years professional' },
        { text: 'PostgreSQL', value: 1, classes: 'text-purple', description: '2 years professional' },
        { text: 'Agile', value: 4, classes: 'text-teal-light', description: '5 years professional' },
        { text: 'PHP', value: 1, classes: 'text-purple', description: '0.5 years professional' },
        { text: 'Assembly', value: 2, classes: 'text-purple', description: 'university training' },
        { text: 'Gatsby', value: 3, classes: 'text-teal-light', description: '2.5 years professional' },
        { text: 'C', value: 2, classes: 'text-purple', description: 'university training' },
        { text: 'Django', value: 4, classes: 'text-teal', description: '2 years professional' },
        { text: 'Figma', value: 3, classes: 'text-teal-light', description: '2 years professional' },
        { text: 'Insomnia', value: 3, classes: 'text-teal-light', description: '3 years professional' },
      ];

      const events = [
        {date: 202212, importance: 3, title: 'Software Engineer', company: 'Pela', event: 'Left Pela', image: 'pela.png'},
        {date: 202204, hideDate: true, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Started acting as lead developer'},
        {date: 202112, hideDate: true, importance: 1, title: 'Software Engineer', company: 'Pela', event: 'Started training and mentoring Jr. Developers'},
        {date: 202107, importance: 2, title: 'Software Engineer', company: 'Pela', event: 'Promoted to Software Engineer'},
        {date: 202012, hideDate: true, importance: 1, title: 'Software Engineer', company: 'Pela', event: 'Introduced to Node.js and AWS Lambda development'},
        {date: 202009, hideDate: true, importance: 1, title: 'Software Engineer', company: 'Pela', event: 'Introduced to GraphQL, TypeScript, and Gatsby Cloud'},
        {date: 202003, hideDate: true, importance: 1, title: 'Software Engineer', company: 'Pela', event: 'Introduced to Shopify and ecommerce development'},
        {date: 202002, importance: 3, title: 'Jr. Developer', company: 'Cheeky Monkey Media', event: 'Started at Pela, left Cheeky Monkey Media', image: 'pela.png'},
        {date: 201911, hideDate: true, importance: 1, title: 'Intermediate Full Stack Developer', company: 'Cheeky Monkey Media', event: 'Introduced to PHP'},
        {date: 201910, importance: 3, title: 'Intermediate Full Stack Developer', company: 'Cheeky Monkey Media', event: 'Started at Cheeky Monkey Media', image: 'cheekymonkey.png'},
        {date: 201908, importance: 3, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Left ChatterBlock', image: 'chatterblock.png'},
        {date: 201907, hideDate: true, importance: 1, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Introduced to React'},
        {date: 201906, hideDate: true, importance: 1, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Independently designed and built front-end web application user dashboard.'},
        {date: 201806, hideDate: true, importance: 1, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Rebuilt customer user dashboard and business listing pages'},
        {date: 201710, hideDate: true, importance: 1, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Introduced to Django, PostgreSQL, ElasticSearch, HTML, CSS, and JavaScript'},
        {date: 201709, importance: 3, title: 'Full Stack Software Developer', company: 'ChatterBlock', event: 'Started at ChatterBlock', image: 'chatterblock.png'},
        {date: 201708, importance: 3, title: 'Bachelor of Science', company: 'University of Victoria', event: 'Graduated from the University of Victoria', image: 'uvic.png'},
        {date: 201707, hideDate: true, importance: 1, company: 'University of Victoria', event: 'Studied Math, Computer Science, and Visual Arts'},
    ]


    return (
        <>
            <Canvas />
            <div className="container m-auto">
                <AboutMe />
            </div>
            <WordMap words={words} />
            <LotsOfBlocks components={<><Timeline events={events} /></>} color="teal" />
            <div className="container m-auto">
                <Reviews />
            </div>
            <LotsOfBlocks components={<ContactForm />} color="teal" />
            <p className="caption--small text-teal mb-0 pb-4">Conceptualized, designed, and developed by Kate Culver © 2023</p>
        </>
    );
}

export default Home;
