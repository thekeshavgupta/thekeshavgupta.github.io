import Navbar from './Navbar';
import Hero from './Hero';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsBento from './SkillsBento';
import EducationShowcase from './EducationShowcase';
import ResearchTimeline from './ResearchTimeline';
import ProjectsSlider from './ProjectsSlider';
import Footer from './Footer';

function Container({ theme, toggleTheme }) {
    return (
        <div className="portfolio-app-root">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <ExperienceTimeline />
                <SkillsBento />
                <EducationShowcase />
                <ResearchTimeline />
                <ProjectsSlider />
            </main>
            <Footer />
        </div>
    );
}

export default Container;
