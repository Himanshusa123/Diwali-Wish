import { useEffect, useState } from "react";

export default function Home() {
    const [countdown, setCountdown] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    const [name, setName] = useState("");

    useEffect(() => {
        const countdownDate = new Date("Oct 31, 2024 00:00:00").getTime();

        const timerInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(timerInterval);
                setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const handleSubmit = () => {
        if (name) {
            window.location.href = `/greeting?name=${encodeURIComponent(name)}`;
        } else {
            alert("Please enter your name!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
            <div className="bg-blue-900 bg-opacity-80 p-12 rounded-lg shadow-2xl text-center min-w-[390px] min-h-[350px]">
                <h1 className="text-5xl font-extrabold text-yellow-300 mb-4 shadow-lg festive-title">
                    ✨ Happy Diwali! ✨
                </h1>
                <p className="text-3xl text-red-400 mb-4 font-light font-serif welcome-text">
                    Celebrate the festival of lights with joy, love, and prosperity!
                </p>
                <p className="text-2xl text-lime-300 mb-4 font-cursive input-prompt">
                    Enter your name to receive personalized wishes:
                </p>
                <input
    className="px-6 py-3 mb-4 border border-yellow-300 rounded-lg text-lg bg-yellow-200 text-orange-600 transition duration-300 focus:outline-none focus:border-black focus:bg-red-200 mr-3"
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
/>

                <button
                    className="px-6 py-3 bg-red-600 text-white rounded-lg text-xl transition duration-300 transform hover:bg-yellow-400 hover:scale-105 active:scale-95 butt hover:text-red-600"
                    onClick={handleSubmit}
                >
                    Submit
                </button>

                <div className="mt-8 text-center">
                    <h2 className="text-3xl italic text-teal-300 mb-4">
                        Countdown to Diwali:
                    </h2>
                    <div className="flex justify-center space-x-6 mt-4">
                        {Object.entries(countdown).map(([key, value]) => (
                            <div key={key} className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-6 shadow-lg time-unit">
                                <span className="text-5xl font-bold text-pink-500 transition duration-300">
                                    {value}
                                </span>
                                <div className="text-sm text-purple-200 font-semibold capitalize">
                                    {key}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
