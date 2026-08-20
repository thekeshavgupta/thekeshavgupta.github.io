import NavContainer from './navcontainer';
import ProfileContainer from './profilecontainer';
import WorkExperience from './WorkExperience';
import Skills from './skills';
import Education from './Education';
import Research from './research';
import Projects from './projects';
import Footer from './footer';

function Container({ theme, toggleTheme }) {
    return (
        <div className="portfolio-container">
            <NavContainer theme={theme} toggleTheme={toggleTheme} />
            <main>
                <ProfileContainer />
                <WorkExperience />
                <Skills />
                <Education />
                <Research />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default Container;
