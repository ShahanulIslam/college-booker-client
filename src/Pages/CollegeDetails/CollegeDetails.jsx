import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const data = useLoaderData();

    if (!data) {
        return <div>Loading...</div>;
    }

    const { college_image, college_name, college_rating, admission_dates, research_history, research_count, events, sports_categories } = data;

    return (
        <div className='w-11/12 mx-auto'>
            <div className="college-details-container">
                <div className="college-details-header space-y-2">
                    <img src={college_image} alt={college_name} />
                    <h2 className='text-2xl'><span className='font-semibold'>College Name : </span>{college_name}</h2>
                    <p><span className='font-semibold'>Rating : </span>{college_rating}</p>
                    <p><span className='font-semibold'>Admission Dates : </span>{admission_dates}</p>
                    <p><span className='font-semibold'>Research History: : </span>{research_history}</p>
                    <p><span className='font-semibold'>Research Count:</span> {research_count}</p>
                </div>

                <div className="college-events space-y-2">
                    <h3>Events:</h3>
                    <ul>
                        {events.map((event, index) => (
                            <li key={index}>
                                <strong>{event.event_name}</strong> - {event.date}, {event.location}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="college-sports space-y-2">
                    <h3>Sports Categories:</h3>
                    <ul>
                        {sports_categories.map((category, index) => (
                            <li key={index}>
                                <strong>{category.category_name}</strong>: {category.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
