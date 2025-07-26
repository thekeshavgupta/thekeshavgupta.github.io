import './WorkExperience.css'
function WorkExperience() {
    return (
        <div className="experience-main-class">
            <div className='experience-box'>
                <p className='experience-head'><span class="microsoft-text"> Microsoft</span></p>
                <p className='experience-head-location'>Software Engineer 2 - (Nov'24 - Present)</p>
                <p className='experience'>
                    <ul>
                        <li>Led analysis and enhancement of Bing Hotel Answers' price coverage, expanding hotel price visibility across various geographies.</li>
                        <li>Optimized triggering logic to improve precision and recall, resulting in more accurate and relevant hotel answers for user queries.</li>
                    </ul>
                </p>
            </div>
            <div className='experience-box'>
                <p className='experience-head'><span class="amazon-text"> Amazon</span></p>
                <p className='experience-head-location'>Software Development Engineer - (Jan'21 - Nov'24)</p>
                <p className='experience'>
                    <ul>
                        <li>Collaborated with multiple teams at Amazon to develop scalable, maintainable systems using Kotlin, Spark, and Scala. Played a key role in optimizing the Ordering Checkout Process in Just Walk Out (JWO) systems, significantly reducing on-call operational load and improving system reliability.</li>
                        <li>Designed and implemented full-stack features for a unified research portal, including frontend webpages and backend services. This portal enabled researchers to efficiently evaluate dataset outputs and review annotation summaries, streamlining the research workflow under Amazon Go.</li>
                        <li>Delivered impactful features that improved the efficiency and accuracy of annotators working with large datasets, enhancing the overall data annotation pipeline and contributing to higher-quality training data for downstream machine learning models.</li>
                    </ul>
                </p>
            </div>

            <div className='experience-box'>
                <p className='experience-head'><span class="optum-text"> Optum Global Solutions India Pvt. Ltd.</span></p>
                <p className='experience-head-location'>Software Engineer - (Jul'20 - Jan'21)</p>
                <p className='experience'>
                    <ul>
                        <li>Understood the key details about healthcare systems as well as learnt certain big data technologies such as Spark &
                            Hadoop during probation period.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default WorkExperience