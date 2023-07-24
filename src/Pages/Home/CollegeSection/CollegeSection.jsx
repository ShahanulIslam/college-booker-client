import { Link } from "react-router-dom";


const CollegeSection = ({ college }) => {

    const { _id, college_image, college_name, admission_dates, research_history, events, sports_categories } = college

    return (
        <>
            {/* card */}
            <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                {/* img */}
                <img
                    className="aspect-video w-96 p-5 rounded-t-2xl object-cover object-center"
                    src={college_image}
                />
                {/* text information */}
                <div className="p-4">
                    {/* <small className="text-blue-400 text-xs">College Name: {college.college_name}</small> */}
                    <h1 className="text-2xl font-medium text-slate-600 pb-2">College Name: {college_name}</h1>
                    <p className="font-semibold">Admission Date:{admission_dates}</p>
                    <p className="font-semibold">Research History:{research_history}</p>
                    <div className="flex justify-between space-y-2">
                        <div>
                            <span className="text-2xl">Events:</span>
                            <ul>
                                {events.map((event, index) => (
                                    <li key={index}>{index + 1}.{event.event_name}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="text-2xl">Sports:</span>
                            <ul>
                                {sports_categories.map((sports, index) => (
                                    <li key={index}>{index + 1}.{sports.category_name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Link to={`cardDetails/${_id}`}>
                        <button className="btn btn-primary my-4">View Details</button>
                    </Link>
                </div>
            </div>
        </>

    );
};

export default CollegeSection;