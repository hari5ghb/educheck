import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayInstructors = () => {

    const [instructors, setInstructors] = useState([])
    const navigate = useNavigate();


    useEffect(()=>{

        axios.get("http://localhost:5000/api/instructors")
        .then((response)=>{
            setInstructors(response.data)
        })
        .catch((err)=>{
            console.error("Error ocuured : ", err)
        })

    }, [])

    return (
        <>
            <div className=' p-5 h-auto container mx-auto '>
                <div className='w-1/4 p-5 ml-auto m-2 '>
                    <button onClick={() => { navigate('/admindash/addinstructor') }} className='p-2 bg-green-500 text-white rounded-md hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105'>
                        Add Instructor
                    </button>
                </div>

                <div className="max-w-4xl mx-auto p-6 bg-slate-300 rounded-lg shadow-xl ">
                    <h2 className="text-2xl font-semibold text-center mb-6">Instructor List</h2>
                    {instructors.length === 0 ? (
                        <p className="text-center text-gray-500">No instructors available.</p>
                    ) : (
                        <div className="flex flex-wrap gap-6">
                            {instructors.map((instructor) => (
                                <div
                                    key={instructor.UserId}
                                    className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-1/4
                                     transition-all duration-300 ease-in-out hover:scale-105"
                                >
                                    <div className="text-md font-semibold text-gray-800">{instructor.Name}</div>
                                    <div className="text-sm text-red-500">{instructor.UserId}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DisplayInstructors;
