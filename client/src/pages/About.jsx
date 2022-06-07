import Heading from "../components/Heading"
import '../css/About.css'
const About = () => {
    return (
        <main id="about">
            <Heading 
                text={"About this website"}
                underline={true}
            />
            <div className="site-disclaimer">
                <p>This site was created only for demonstrational purposes.</p>
                <p>The payment system works only with test credit card data.</p>
                <p>Users are not encouraged to enter any of theirs sensitive data, such as passwords, credit card data etc. on this website.</p>
                <p>Website author does not profit from this website.</p>
                <p>Information presented on this website is not to be taken seriously.</p>
            </div>
        </main>
    )
}

export default About