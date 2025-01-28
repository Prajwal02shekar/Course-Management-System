import React from 'react'
import './CourseCard.css'

const CourseCard = () => {
    return (
        <div className="founder-container">
            <div className="founder-image">
                <img src="https://avatars.githubusercontent.com/u/160094074?s=400&u=84ef8bd6483e2133a5b210984c377c90566dfecb&v=4" alt="Prajwal C" />
            </div>
            <div className="founder-content">
                <h2>Prajwal Instititions</h2>
                <p>
                    Prajwal Instititions has grown in stature over the years and remains
                    the most sought-after institution dedicated to Commerce, Management, and
                    Technology education.
                </p>
                <p>
                    Our Instititions is committed to the holistic development of students to
                    make an effective contribution to society. The students are trained in
                    leadership, social service, and critical thinking...
                </p>
                <p className="founder-name">
                    Prajwal, <br /> FOUNDER, Prajwal GROUP OF INSTITUTIONS
                </p>
                <button className="know-more-btn">Know More</button>
            </div>
        </div>
    )
}

export default CourseCard