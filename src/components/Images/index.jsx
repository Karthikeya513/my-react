import React from 'react';
import './index.css';

const courses = [
  { id: 1, title: 'Commerce', image: 'https://blog.upes.ac.in/wp-content/uploads/2019/08/students-1.jpg' },
  { id: 2, title: 'Engineering', image: 'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/10/16/Pictures/_0f42887a-93b7-11e6-ab84-dfe1f1607a79.jpg' },
  { id: 3, title: 'B.Arch', image: 'https://serc.res.in/sites/default/files/Tech-Visit-5-4-20231.jpg' },
  { id: 4, title: 'Ayurvedic', image: 'https://timess3spore.s3.amazonaws.com/ndata/et_images/mobile_image_webp/ca4e77f7ca1a9165650eb825e3fb74eepic%20for%20portal%20(18).webp' },
  { id: 5, title: 'Management', image: 'https://www.cmrit.ac.in/wp-content/uploads/2023/05/Entrepreneurship-and-Innovation-Opportunities-for-MBA-Students.png' },
  { id: 6, title: 'Law', image: 'https://blog.ipleaders.in/wp-content/uploads/2018/05/AF3D185F-7BB0-469B-BE90-AC300CDA4D79.jpeg' },
];

const CoursesSection = () => {
  return (
    <div className="courses-section">
      <div className="header">
        <h3>VERTEXPACE COURSES</h3>
        <h1>Most Featured Courses</h1>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
