import './sectionHome.css'
import Container from './../../common/reponsive/container';
import SectionHeading from './sectionHeading';
import SectionContent from './sectionContent';

function SectionHome() {

    return (
        <section className="section-product">
            <Container className="home-product" wide>
                <SectionHeading/>
                <SectionContent l={3}/>
            </Container>
        </section>
    )
}
export default SectionHome