import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-row flex-1 p-4">
            <div className="flex flex-col flex-1 justify-center items-start rounded-2xl gap-8">
                <div className="flex flex-col justify-start items-start gap-4">
                    <p className="text-7xl">Research,<br />without the noise</p>

                    <p className="pr-24 text-gray-500">An AI-powered research assistant that searches, summarizes, and critiques information — so you can focus on thinking, not digging.</p>
                </div>

                <button className="flex flex-row justify-between items-center px-2 py-2 bg-black rounded-full gap-2 cursor-pointer hover:scale-105 transition-all duration-200">
                    <p className="text-white font-montserrat-alternates pl-2">TRY IT NOW</p>

                    <div className="flex aspect-square h-full rounded-full relative p-1 bg-white">
                        <Image src="/arrow-pointing-top-right.svg" alt="arrow" fill />
                    </div>
                </button>
            </div>

            <div className="flex flex-col flex-1 justify-center items-start relative rounded-2xl overflow-clip bg-red-300">
                <Image src="/hero-image.png" alt="hero-image" fill />
            </div>
        </main>
    )
}
