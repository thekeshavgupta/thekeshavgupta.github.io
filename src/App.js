import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

const Card = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const App = () => {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Profile Card */}
        <Card className="profile-card">
          <img src="/images/my-image.jpeg" alt="Profile" className="profile-image profile-image-container" />
          <div className="profile-info">
            <h1 className="profile-name">Keshav Gupta</h1>
            <p className="profile-designation">Software Engineer 2 @ Microsoft</p>
            {/* <p className="profile-quote">"Even when the loss function seems insurmountable, remember that every step brings you closer to convergence."</p> */}
          </div>
        </Card>

        {/* Contact & Intro */}
        <div className="contact-intro-section">
          <div className='contacts'>
            <Card className="ed-card">
              <ul>
                <li>B.E. in Computer Engineering from TIET, Patiala</li>
              </ul>
            </Card>
            <div className="contact-card">
              <div className="contact-icons">
                <a href="mailto:guptakeshav2509@gmail.com">
                  <FaEnvelope style={{ color: "#e63946" }} className="contact-icons" />
                </a>
                <a href="https://www.linkedin.com/in/kgupta786" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ color: "#0077b5" }} className="contact-icons" />
                </a>
                <a href="https://github.com/kgupta786" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="contact-icons" />
                </a>
              </div>
            </div>
          </div>
          <Card className="intro-card">
            <ul>
              <li>Passionate about crafting intelligent systems that make a difference. With expertise in machine learning, deep learning, and NLP, I specialize in building innovative solutions for real-world challenges.</li>
              <li> Whether it's working with healthcare datasets like MIMIC-III or creating engaging web applications, I thrive on blending data, technology, and creativity to drive meaningful impact.</li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 class="experience-title">Experience</h2>
          <div class="experience-container">
            <div class="experience-item">
              <div class="experience-line"></div>
              <div class="experience-content">
                <h3 class="experience-job-title">Software Engineer 2 (Nov'2024 - Present)</h3>
                <p class="experience-company">Microsoft(India)</p>
                <p class="experience-description">
                  <ul>
                    <li>Worked on price coverage analysis for Bing Hotels, focusing on evaluating and improving price visibility.</li>
                    <li>Currently involved in answer triggering, ensuring the delivery of accurate and relevant hotel related answers on Bing.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="experience-item">
              <div class="experience-line"></div>
              <div class="experience-content">
                <h3 class="experience-job-title">Software Development Engineer (Jan'2021 - Nov'2024)</h3>
                <p class="experience-company">Amazon(India)</p>
                <p class="experience-description">
                  <ul>
                    <li>Worked across multiple teams inside Amazon writing effective, scalable and maintainable code across various systems.</li>
                    <li>Worked in ASSET Team under Amazon GO which is responsible for enabling JWO(Just Walk Out) tech stores across different regions as well as retail integration.</li>
                    <li>Worked in ML-Productivity team under Amazon-GO. The team is responsible for building certain tools and technologies which enable the research engineers to train as well as evaluate the deep learning models.</li>
                    <li>Before joining ML-Productivity team, I spent around 1 year in PACT team a.k.a Profitability and Allocation of Cost for transportation responsible for doing allocations of costs of shipments through
                      various methodologies.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="experience-item">
              <div class="experience-line"></div>
              <div class="experience-content">
                <h3 class="experience-job-title">Software Engineer (Jul'2020 - Jan'2021)</h3>
                <p class="experience-company">Optum Global Solutions India Pvt. Ltd.</p>
                <p class="experience-description">
                  <ul>
                    <li>Learnt about certain big data technologies such as Hadoop, Spark during probation period in Maserati team.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <h2 class="publication-title">Publications</h2>
          <div class="publication-container">
            <div class="publication-item">
              <div class="publication-line"></div>
              <div class="publication-content">
                <h3 class="publication-job-title">An adaptive framework to image watermarking based on the TSVR and G.A in lifting wavelet transform domain</h3>
                <p class="publication-company"><a href='https://link.springer.com/article/10.1007/s11042-020-08634-x' class="custom-link">Springer Link Publication</a></p>
                <p class="publication-description">
                  <ul>
                    <li>A novel adaptive gray scale image watermarking approach based on the combination of machine learning (ML) algorithms in wavelet domain is presented in this reasearch paper.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Projects Section */}
        <div>
          <h2 class="project-title">Side-Projects</h2>
          <div class="project-container">
            <div class="project-item">
              <div class="project-line"></div>
              <div class="project-content">
                <p class="project-description">
                  KisanMate is a mobile application designed to assist farmers in identifying crop diseases and gathering essential nutrient information to improve crop quality. The app leverages a Convolutional Neural Network (CNN) model with an accuracy of approximately 90% for disease prediction. Built using technologies like Flutter for the frontend, Python and Deep Learning for the backend, and Flask for the API layer, the app is deployed using Heroku for seamless access. KisanMate empowers farmers with smart, AI-driven insights to enhance agricultural productivity.
                </p>
                {/* <p class="project-company"><a href='' class="custom-link">Github Project</a></p> */}
              </div>
            </div>
            <div class="project-item">
              <div class="project-line"></div>
              <div class="project-content">
                <p class="project-description">
                  Aid for Blind is an intelligent navigation system developed to assist elderly visually impaired individuals in moving safely and independently. The smart stick integrates a Machine Learning model with ~85% accuracy to detect and alert users about nearby obstacles. Built using technologies such as Python, Deep Learning, YOLO for object detection, OpenCV for image processing, and Raspberry Pi for hardware integration, the project aims to enhance mobility and improve the quality of life for the blind.
                </p>
                {/* <p class="project-company"><a href='' class="custom-link">Github Project</a></p> */}
              </div>
            </div>
            <div class="project-item">
              <div class="project-line"></div>
              <div class="project-content">
                <p class="project-description">
                  The Spell Checker App is designed to detect and notify users of misspelled words within a given text input. It leverages the NLTK corpus for a comprehensive dictionary of valid words and uses the Minimum Edit Distance algorithm to suggest accurate corrections. This application demonstrates effective use of Natural Language Processing techniques for improving text accuracy and user communication.
                </p>
                {/* <p class="project-company"><a href='' class="custom-link">Github Project</a></p> */}
              </div>
            </div>

            <div class="project-item">
              <div class="project-line"></div>
              <div class="project-content">
                <p class="project-description">
                  A content-based recommendation system designed to suggest movies to users based on their preferences. Developed using Python, the system utilizes fundamental data structures such as maps and strings to analyze and match user interests with relevant movie data. The project showcases efficient data handling and algorithmic logic for personalized content delivery.
                </p>
                {/* <p class="project-company"><a href='' class="custom-link">Github Project</a></p> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;