import './navcontainer.css';
function NavContainer() {
    return (
        <div className="main-container">
            <div className="nav-item active">
                <span>Overview</span>
            </div>
            <div className="nav-item">
                {/* <span className="icon">📦</span> */}
                <span>Education</span>
                {/* <span className="badge">4</span> */}
            </div>
            <div className="nav-item">
                {/* <span className="icon">🗂️</span> */}
                <span>Work Experience</span>
            </div>
            <div className="nav-item">
                {/* <span className="icon">📦</span> */}
                <span>Research work</span>
            </div>
            <div className="nav-item">
                {/* <span className="icon">⭐</span> */}
                <span>Projects</span>
            </div>
            <div className="nav-item">
                {/* <span className="icon">⭐</span> */}
                <span>Misc</span>
            </div>
        </div>
    );
}

export default NavContainer