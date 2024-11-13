import React from 'react';
import { useEffect, useState } from 'react';

const movies = () => {
    const [data, setData] = useState([]);

    function apicall() {
        fetch("https://www.omdbapi.com/?s=batman&apikey=79b25d3")
            .then(response => response.json())
            .then(json => {
                if (json.Search) {
                    setData(json.Search);  // Set data to the array of movies under `Search`
                } else {
                    setData([]); // If `Search` key doesn't exist, set data to an empty array
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    console.log(data);



    useEffect(() => {
        apicall()
        console.log(data);

    }, []);
    return (
        <>
            <div className='flex justify-center relative z-0 border'>
            <img src="https://cdn.pixabay.com/photo/2024/06/22/16/55/ai-generated-8846672_640.jpg" className='w-full relative ' alt="" />
                <div className='grid grid-cols-4 gap-12 place-content-center absolute'>

                    {data.map((list, index) => (
                        <li key={index} className='border p-2 h-80 w-80 shadow-xl grid gap-1 cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-white'>
                            <div className='flex justify-center'>
                                <img src={list.Poster} alt={`${list.Title} poster`} className='h-60 w-fit flex bg-cover' />
                            </div>
                            <p>{list.Title}</p> {/* Added movie title */}
                        </li>
                    ))}

                </div>
            </div>
        </>
    );
};

export default movies;