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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {data.map((college, index) => (
                    <CollegeSection key={index} college={college} />
                ))}
            </div>
        </div>
    );
};

export default CollegeCard;