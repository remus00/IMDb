"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    };

    return (
        <form
            className="flex justify-between max-w-6xl mx-auto items-center px-4"
            onSubmit={handleSubmit}
        >
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search keywords..."
                className="w-full h-14 rounded-lg placeholder-gray-500 outline-none bg-transparent flex-1"
            />
            <button
                disabled={!search}
                type="submit"
                className="font-semibold disabled:bg-gray-400 bg-amber-600 px-6 py-2 rounded-xl active:scale-[0.98] transition duration-200"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBox;
