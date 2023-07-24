import { useEffect, useState } from "react";
import CollegeSection from "../CollegeSection/CollegeSection";
import { useLoaderData } from "react-router-dom";




const CollegeCard = () => {

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("data.json")
    //         .then(res => res.json())
    //         .then(data => setData(data));
    // }, []);
    const data = useLoaderData()

    console.log(data);

    return (
        <div className="w-11/12 mx-auto mt-12">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Explore Top Colleges</h1>
                <p className="text-gray-600">Discover your dream college from our curated list.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {data.map((college, index) => (
                    <CollegeSection key={index} college={college} />
                ))}
            </div>
        </div>
    );
};

export default CollegeCard;