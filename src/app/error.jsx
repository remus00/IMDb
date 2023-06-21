"use client";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="text-center mt-10">
            <h1 className="font-bold">Something went wrong</h1>
            <button
                onClick={() => reset()}
                className="hover:text-amber-700 bg-amber-500 mt-4 px-4 py-4 rounded-xl font-bold"
            >
                TRY AGAIN
            </button>
        </div>
    );
};

export default Error;
