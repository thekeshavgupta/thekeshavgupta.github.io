import './navcontainer.css';

function NavContainer({ activeTab, setActiveTab }) {
    const tabs = ['Overview', 'Education', 'Work Experience', 'Research Work', 'Projects'];

    return (
        <div className="main-container">
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    <span>{tab}</span>
                </div>
            ))}
        </div>
    );
}

export default NavContainer;
