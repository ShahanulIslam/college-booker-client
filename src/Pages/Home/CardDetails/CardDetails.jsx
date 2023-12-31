
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const data = useLoaderData();

    // if (!data) {
    //     return <div>Loading...</div>;
    // }

    const { college_image, college_name, admission_dates, admission_process, research_history, events, sports_categories } = data;

    return (
        <div className="w-11/12 mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="p-5" src={college_image} alt={college_name} /></figure>
                <div className="card-body">
                    <h2><span className='font-bold'>College Name : </span>{college_name}</h2>
                    <p><span className='font-bold'>Admission Dates : </span> {admission_dates}</p>
                    <p><span className='font-bold'>Admission Process : </span>{admission_process}</p>
                    <p><span className='font-bold'>Research History : </span>{research_history}</p>

                    <h3 className='font-semi-bold text-2xl'>Events:</h3>
                    <ul>
                        {events.map((event, index) => (
                            <li key={index}>
                                <strong>{event.event_name}</strong> - {event.date}, {event.location}
                            </li>
                        ))}
                    </ul>

                    <h3 className='font-semi-bold text-2xl'>Sports Categories:</h3>
                    <ul>
                        {sports_categories.map((category, index) => (
                            <li key={index}>
                                <strong>{category.category_name}</strong>: {category.description}
                            </li>
                        ))}
                    </ul>

                    <div className="card-actions justify-end">
                        <button className="btn bg-[#95a9c2]">Visit College Website</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
