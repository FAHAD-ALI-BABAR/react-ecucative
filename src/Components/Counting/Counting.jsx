import React, { useState, useEffect } from "react";

const FunFactsSection = () => {
  const [teachersCount, setTeachersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    // Function to increment the count value
    const incrementCount = (setCount, targetCount) => {
      let currentCount = 0;
      const increment = targetCount / 100; // Adjust the division for smoother animation
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(interval);
        }
        setCount(Math.ceil(currentCount));
      }, 10); // this is speed of the intrval
    };

    incrementCount(setTeachersCount, 90);
    incrementCount(setCoursesCount, 500);
    incrementCount(setStudentsCount, 2000);
    incrementCount(setClientsCount, 5000);
  }, []);

  return (
    <section className="section-sm bg-primary">
      <div className="container">
        <div className="row">
          {/* funfacts item */}
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="text-center">
              <h2 className="count text-white">{teachersCount}</h2>
              <h5 className="text-white">TEACHERS</h5>
            </div>
          </div>
          {/* funfacts item */}
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="text-center">
              <h2 className="count text-white">{coursesCount}</h2>
              <h5 className="text-white">COURSES</h5>
            </div>
          </div>
          {/* funfacts item */}
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="text-center">
              <h2 className="count text-white">{studentsCount}</h2>
              <h5 className="text-white">STUDENTS</h5>
            </div>
          </div>
          {/* funfacts item */}
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div className="text-center">
              <h2 className="count text-white">{clientsCount}</h2>
              <h5 className="text-white">SATISFIED CLIENTS</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
