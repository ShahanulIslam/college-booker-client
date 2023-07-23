

// const CollegeSection = ({ college }) => {
//     console.log(college);
//     return (
//         <div className="card lg:card-side bg-base-100 shadow-xl">
//             <div className="w-1/2">
//                 <figure><img className="w-full h-full p-5" src={college.college_image} alt="Album" /></figure>
//             </div>
//             <div className="card-body w-1/2">
//                 <h4 className="font-semibold">College Name: {college.college_name}</h4>
//                 <span>Admission Date:{college.admission_dates}</span>
//                 <span>Events:
//                     <ul>
//                         {college.events.map((event, index) => (
//                             <li key={index}>{index + 1}.{event.event_name}</li>
//                         ))}
//                     </ul>
//                 </span>

//                 <div className="card-actions justify-end">
//                     <button className="btn btn-primary">Listen</button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default CollegeSection;

const CollegeSection = ({ college }) => {
    return (
        <>
            {/* card */}
            <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                {/* img */}
                <img
                    className="aspect-video w-96 p-5 rounded-t-2xl object-cover object-center"
                    src={college.college_image}
                />
                {/* text information */}
                <div className="p-4">
                    {/* <small className="text-blue-400 text-xs">College Name: {college.college_name}</small> */}
                    <h1 className="text-2xl font-medium text-slate-600 pb-2">College Name: {college.college_name}</h1>
                    {/* <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                        Dodge is an American brand of automobiles and a division of
                        Stellantis, based in Auburn Hills, Michigan..
                    </p> */}
                    <p className="font-semibold">Admission Date:{college.admission_dates}</p>
                    <p className="font-semibold">Research History:{college.research_history}</p>
                    <div className="flex justify-between space-y-2">
                        <div>
                            <span className="text-2xl">Events:</span>
                            <ul>
                                {college.events.map((event, index) => (
                                    <li key={index}>{index + 1}.{event.event_name}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="text-2xl">Sports:</span>
                            <ul>
                                {college.sports_categories.map((sports, index) => (
                                    <li key={index}>{index + 1}.{sports.category_name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button className="btn btn-primary my-4">View Details</button>
                </div>
            </div>
        </>

    );
};

export default CollegeSection;