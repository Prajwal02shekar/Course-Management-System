import React from "react";
import "./Testimonials.css";

const testimonialsData = [
    {
        name: "Pavan",
        role: "Student",
        course: "BSC",
        image: "https://avatars.githubusercontent.com/u/160094074?s=400&u=84ef8bd6483e2133a5b210984c377c90566dfecb&v=4",
        testimonial:
            "Our College is a hub of civility, camaraderie, and positivity. With an exceptional faculty dedicated to preparing and inspiring students for a bright future, the campus provides a holistic environment encompassing student activities, housing, and overall campus life.",
    },
    {
        name: "Rahul S",
        role: "Student",
        course: "B.Tech in Computer Science",
        image: "https://avatars.githubusercontent.com/u/160094074?s=400&u=84ef8bd6483e2133a5b210984c377c90566dfecb&v=4",
        testimonial:
            "Being part of this college has been a transformative experience. The faculty’s commitment to student success is truly commendable. The guidance from professors has helped me build strong technical skills.",
    },
    {
        name: "Naveen",
        role: "Student",
        course: "BCA",
        image: "https://avatars.githubusercontent.com/u/160094074?s=400&u=84ef8bd6483e2133a5b210984c377c90566dfecb&v=4",
        testimonial:
            "Choosing this college for my MBA was one of the best decisions. The structured curriculum, leadership programs, and networking opportunities have contributed immensely to my personal and professional growth.",
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h2>Testimonials</h2>
            <div className="testimonials-list">
                {testimonialsData.map((student, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={student.image} alt={student.name} className="student-image" />
                        <h3 className="student-name">{student.name}</h3>
                        <p className="student-role">{student.role}</p>
                        <p className="student-course">{student.course}</p>
                        <p className="testimonial-text">"{student.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
