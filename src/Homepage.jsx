
import Navbar from '../Pages/Navbar';
import { Link } from 'react-router-dom';
import { Carousel } from "flowbite-react";

const Homepage = () => {
    const searchList = document.getElementById('search-list');
    return (
        <>
            <Navbar />

            <div className='relative bg-black'>

                <marquee className=" text-yellow-300 text-xl font-righteous bg-black h-10">Here’s a quick message for movie lovers:

                    🎬 Exciting  Movies  on  the  Horizon! 🎬
                    From high-octane action to heartfelt dramas, there are some incredible films on the way that you won’t want to miss! Get ready for edge-of-your-seat thrillers, imaginative sci-fi adventures, and laugh-out-loud comedies. Stay tuned and make plans with your favorite people because cinema is about to deliver some unforgettable experiences. Grab your popcorn and let the countdown begin! 🎥🍿</marquee>

                <img src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" alt="" className='h-[950px] sm:h-[500px] w-full blur-sm ' />



                <div className='flex justify-center items-center absolute top-[60px]  left-14 '>
                    <div className="sm:h-[450px] h-[650px] sm:w-[800px] w-[1100px]">
                        <Carousel>
                        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://i.ytimg.com/vi/1mXBoXFu_eU/maxresdefault.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6720/1366720-i-c30300a11e8d" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://wallpapers.com/images/featured/peaky-blinders-mf0te5aaoy07nn99.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://images.ottplay.com/images/pushpa-2-1712495363.jpg?impolicy=ottplay-20210210&width=1200&height=675&format=webp&quality=50" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://www.koimoi.com/wp-content/new-galleries/2023/07/kanguva-poster-suriya-turns-into-a-mighty-warrior-as-he-surprises-fans-with-his-first-look-on-his-48th-birthday.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <img src="https://m.media-amazon.com/images/I/71QKqGokUrL.jpg" className="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        </Carousel>
                    </div>
                </div>




                <Link to={"/harypoter"}>
                    <img src="https://play-lh.googleusercontent.com/DENNOIDDAkvQTsLvfZMuEh9llKmm5GTk23PAxx6ltzsAk8sKQFNcboIH8rGypqxkHUI=s1920-w1920-h1080" alt="" className='absolute h-64 sm:h-56  sm:right-8 right-40 top-14 shadow-2xl sm:w-[400px] w-[450px] rounded-2xl border-2 border-slate-700 cursor-pointer transform transition-transform duration-300 hover:scale-105 backdrop-blur-xl' />
                </Link>
                <Link to={"/batman"}>

                    <img src="https://static.posters.cz/image/hp/66923.jpg" alt="" className='absolute sm:h-[210px] h-[260px] sm:right-8  right-40 sm:top-[300px] top-[340px] shadow-2xl rounded-2xl w-[450px] sm:w-[400px]  border-2 border-slate-700 cursor-pointer transform transition-transform duration-300 hover:scale-105' />
                </Link>
            </div>


        </>
    );
};

export default Homepage;
