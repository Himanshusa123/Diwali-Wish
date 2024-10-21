import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Greeting() {
    const router = useRouter();
    const { name } = router.query; // Get the user's name from the URL
    const [userName, setUserName] = useState("Friend"); // Default to "Friend"

    useEffect(() => {
        if (name) {
            setUserName(name);
        }
    }, [name]);

    const goBack = () => {
        router.back(); // Go back to the previous page
    };

    return (
        <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] h-screen flex justify-center items-center">
            <div className="text-center bg-white bg-opacity-90 rounded-lg p-8 shadow-lg relative z-10 max-w-[90%] mx-auto">
                <h1 className="text-[5em] text-[#ff5722] mb-4 sm:text-[3em] md:text-[2.5em] lg:text-[2em]">
                    🌟 Happy Diwali, <span className="font-bold">{userName}</span>! 🎉
                </h1>
                <p className="text-xl text-gray-800 my-3 sm:text-lg md:text-base lg:text-md">
                    May this Diwali bring you joy, prosperity, and happiness!
                </p>
                <p className="text-xl text-gray-800 my-3 sm:text-lg md:text-base lg:text-md">
                    Wishing you and your family a wonderful celebration filled with love and light!
                </p>
                <button 
                    className="bg-[#ff5722] text-white rounded-md py-3 px-6 text-lg transition-colors duration-300 hover:bg-[#e64a19] w-full sm:w-auto"
                    onClick={goBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
}
