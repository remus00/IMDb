import Results from "@/components/Results";

async function SearchPage({ params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=212aa34a5e71fb2d80549e64932ff99c&query=${params.searchTerm}&language=en-US&include_adult=false`,
    );
    if (!res.ok) {
        throw new Error("Error Fetching Data");
    }
    const data = await res.json();
    const results = data.results;
    return (
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center pt-6 font-semibold">
                    No results found!
                </h1>
            )}

            {results && <Results results={results} />}
        </div>
    );
}

export default SearchPage;
