import './profilecontainer.css'
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
function ProfileContainer() {
    return (
        <div className="profile-container-class">
            <img
                className="profile-image"
                src="/images/my-image.jpeg"
                alt="Profile"
            />
            <div className="profile-name">Keshav Gupta</div>
            <p className="profile-bio">
                Software Engineer 2 @ Microsoft | Ex - Amazon
            </p>

            <p className='profile-quote'>
                "I let machines see the patterns that I can't."
            </p>

            <div className="contact-icons">
                <a href="mailto:guptakeshav2509@gmail.com">
                    <FaEnvelope size={32} style={{ color: "#e63946" }} />
                </a>
                <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} style={{ color: "#0077b5" }} />
                </a>
                <a href="https://github.com/kgupta786" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} style={{ color: "#ffffff" }} />
                </a>
            </div>
        </div>
    );
}

export default ProfileContainer