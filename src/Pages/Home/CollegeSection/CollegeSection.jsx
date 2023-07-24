import { Link } from 'react-router-dom';

const CollegeSection = ({ college }) => {
    const { _id, college_image, college_name, admission_dates, research_history, events, sports_categories } = college
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
            <img src={college.college_image} alt={college.college_name} className="w-full h-48 object-cover" />
            <div className="px-4 py-5 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-2xl font-bold text-[#5F264A]  mb-2">{college.college_name}</h2>
                    <p className="text-sm text-gray-600 mb-2">Admission Dates: {college.admission_dates}</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border p-3 rounded-sm shadow-md">
                            <p className="text-sm text-black font-bold mb-2">Events:</p>
                            <ul className="text-sm text-gray-600 mb-2">
                                {college.events.map((event, index) => (
                                    <li key={index}>{index + 1}. {event.event_name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="border p-3 rounded-sm shadow-md">
                            <p className="text-sm text-black font-bold mb-2">Sports:</p>
                            <ul className="text-sm text-gray-600 mb-2">
                                {college.sports_categories.map((sport, index) => (
                                    <li key={index}>{index + 1}. {sport.category_name} </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-black my-4"><span className='text-black font-bold'>Research History:</span> {college.research_history}</p>
                </div>
                <Link to={`/cardDetails/${college._id}`} className="btn rounded-none text-white bg-[#95a9c2]">Details</Link>
            </div>
        </div>
    );
};

export default CollegeSection;
