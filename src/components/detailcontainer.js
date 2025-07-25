import './detail.css';
import './detailcontainer.css';
import ProfileContainer from './profilecontainer';
import Education from './Education';
import Overview from './Overview';
import WorkExperience from './WorkExperience';
function DetailContainer({ activeTab }) {
    return (
        <div className="main-detail-container">
            <ProfileContainer />
            <div className="detail-class">
                {activeTab === 'Overview' && <Overview />}
                {activeTab === 'Education' && <Education />}
                {activeTab === 'Work Experience' && <WorkExperience />}
                {/* Add other conditions when components are ready */}
            </div>
        </div>
    );
}

export default DetailContainer