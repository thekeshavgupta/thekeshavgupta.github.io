import Detail from './detail';
import './detailcontainer.css';
import ProfileContainer from './profilecontainer';
function DetailContainer() {
    return (
        <div className="main-detail-container">
            <ProfileContainer />
            <Detail/>
        </div>
    );
}

export default DetailContainer