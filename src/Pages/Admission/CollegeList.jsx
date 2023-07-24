
import { Link, useLoaderData } from 'react-router-dom';

const CollegeList = () => {
    const collegeData = useLoaderData();
    console.log(collegeData);
    return (
        <div className='my-10 px-12'>
            <div className='grid grid-cols-3 gap-8'>
                {
                    collegeData.map(college => <Link to={`/admission/${college._id}`} key={college._id} className='flex items-center gap-4 bordered p-4 rounded-xl border-2 border-[#95a9c2] hover:bg-gray-100 shadow-lg'>
                        <img className='rounded-full h-20 w-20 shadow-xl' src={college.college_image} alt="" />
                        <div>
                            <h4 className='font-bold text-  xl'>{college.college_name}</h4>
                            <p className='text-sm  text-gray-600'>{college.admission_dates}</p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default CollegeList;
