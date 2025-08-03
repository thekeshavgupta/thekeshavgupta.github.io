import './projects.css'
import { FaGithub } from "react-icons/fa";
function Projects() {
    return (
        <div className="projects-main-class">
            <div className='projects-box'>
                <p className='projects-head'>Side <span class="magic-word"> Projects</span></p>
                <ul>
                    <li>
                        <p className='projects-head-location'>V.I.B.E : Visual Inference through Bias Elimination <a href="https://github.com/thekeshavgupta/VIBE" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="contact-icons" color='white'/>
                        </a></p>
                        <p className='projects'>
                            VIBE is a text-based adversarial learning framework that removes biases from learned representations by jointly training a task classifier and an adversary to produce fair, attribute-invariant predictions. 
                        </p>
                        <div className='projects-images'>
                            <img className='project-image' src="/images/vibe/v2.png" alt="VIBE Project Image 2" />
                            <img className='project-image' src="/images/vibe/v3.png" alt="VIBE Project Image 2" />

                        </div>
                    </li>
                    <li>
                        <p className='projects-head-location'>AURA : Autonomous Updation with Reinforced Adaptation in Gradient Descent</p>
                        <p className='projects'>
                            AURA is a novel optimization approach inspired by reinforcement learning, designed to enhance the performance of gradient descent. By observing the current state of environment variables and adapting the update strategy accordingly, AURA aims to achieve faster convergence and lower error rates compared to traditional gradient descent methods.
                        </p>
                    </li>
                    <li>
                        <p className='projects-head-location'>KisanMate</p>
                        <p className='projects'>
                            KisanMate is a mobile application developed under the guidance of Prof. Dr. P.S. Rana to assist farmers in crop disease prediction and nutrient analysis. It uses a CNN model with ~90% accuracy to enhance crop quality. The app was built using Flutter, Python, Deep Learning, Flask, and deployed via Heroku.
                        </p>
                    </li>
                    <li>
                        <p className='projects-head-location'>Aid for blind - Smart Stick</p>
                        <p className='projects'>
                            Aid for Blind is a smart stick developed under the guidance of Prof. Dr. Rajesh Mehta to assist visually impaired and elderly individuals with easier navigation. It incorporates a machine learning model with ~85% accuracy and leverages technologies such as Python, Deep Learning, YOLO, OpenCV, and Raspberry Pi.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects