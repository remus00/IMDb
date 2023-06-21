import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
    title: "IMDb clone",
    description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {/* HEADER */}
                    <Header />

                    {/* NAVBAR */}
                    <Navbar />

                    {/* SEARCH BOV */}
                    <SearchBox />

                    {children}
                </Providers>
            </body>
        </html>
    );
}
