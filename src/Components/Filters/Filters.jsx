import React from 'react'
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin } from 'react-icons/fa';
import classNames from 'classnames';
import tech1 from "../../Images/teacher1.jpg"
import tech2 from "../../Images/teacher2.jpg"
import tech3 from "../../Images/teacher3.jpg"
const Filters = () => {
    const [filter, setFilter] = useState('all');

  const teachers = [
    {
      name: 'Jacke Masito',
      image: tech1,
      category: ['arts', 'law'],
      social: {
        facebook: '#',
        twitter: '#',
        google: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Clark Malik',
      image:  tech2,
      category: ['bio-science','pharmacy'],
      social: {
        facebook: '#',
        twitter: '#',
        google: '#',
        linkedin: '#',
      },
    },
    {
      name: 'John Doe',
      image:  tech3,
      category: ['business-study','science'],
      social: {
        facebook: '#',
        twitter: '#',
        google: '#',
        linkedin: '#',
      },
    },
    // Add the rest of the teachers here...
    {
        name: 'Clark Malik',
        image: tech2,
        category: ['social-science'],
        social: {
          facebook: '#',
          twitter: '#',
          google: '#',
          linkedin: '#',
        },
      },
   
     
      
  ];

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Arts', value: 'arts' },
    { label: 'Biological Science', value: 'bio-science' },
    { label: 'Business Studies', value: 'business-study' },
    { label: 'Law', value: 'law' },
    { label: 'Pharmacy', value: 'pharmacy' },
    { label: 'Science', value: 'science' },
    { label: 'Social Science', value: 'social-science' },
  ];

  const filteredTeachers = filter === 'all'
    ? teachers
    : teachers.filter(teacher => teacher.category.includes(filter));

  return (
    <>
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="list-inline text-center filter-controls mb-5">
              {categories.map(cat => (
                <li
                  key={cat.value}
                  className={classNames('list-inline-item', 'm-3', 'text-uppercase', { active: filter === cat.value })}
                  onClick={() => setFilter(cat.value)}
                >
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          {filteredTeachers.map((teacher, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mb-5">
              <div className="card border-0 rounded-0 hover-shadow">
                <img className="card-img-top rounded-0" src={teacher.image} alt="teacher" />
                <div className="card-body">
                  <a href="#">
                    <h4 className="card-title" style={{color:"black"}}>{teacher.name}</h4>
                  </a>
                  <p>Teacher</p>
                  <ul className="list-inline">
                    {teacher.social.facebook && (
                      <li className="list-inline-item">
                        <FaFacebook style={{color:"#ffbc3b"}} />
                      </li>
                    )}
                    {teacher.social.twitter && (
                      <li className="list-inline-item">
                        <FaTwitter style={{color:"#ffbc3b"}} />
                      </li>
                    )}
                    {teacher.social.google && (
                      <li className="list-inline-item">
                       <FaGoogle style={{color:"#ffbc3b"}} />
                      </li>
                    )}
                    {teacher.social.linkedin && (
                      <li className="list-inline-item">
                        <FaLinkedin style={{color:"#ffbc3b"}} />
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Filters