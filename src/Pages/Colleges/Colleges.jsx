// College.js

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CollegesCard from '../CollegesCard/CollegesCard';

const College = () => {
    const colleges = useLoaderData();

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {colleges.map((college, index) => (
                    <CollegesCard key={index} college={college} />
                ))}
            </div>
        </div>
    );
};

export default College;
