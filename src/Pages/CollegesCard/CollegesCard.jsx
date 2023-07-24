

import React from 'react';
import { Link } from 'react-router-dom';

const CollegesCard = ({ college }) => {
  const { _id, college_image, college_name, college_rating, admission_dates, research_count } = college;

  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <img src={college_image} alt={college_name} className="w-full h-44 object-cover rounded-t-lg" />
      <div className="card-body">
        <h2 className="card-title text-xl font-bold mb-2">{college_name}</h2>
        <p>Rating: {college_rating}</p>
        <p>Admission Dates: {admission_dates}</p>
        <p>Research Count: {research_count}</p>
        <div className="card-actions justify-end">
          <Link to={`/collegeDetails/${_id}`} className="btn bg-[#95a9c2]">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegesCard;
