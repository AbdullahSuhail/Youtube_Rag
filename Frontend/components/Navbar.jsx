export default function Navbar() {
    return (
        <nav className="w-full bg-black text-white px-8 py-5 flex items-center justify-between shadow-2xl">

            {/* Left Side */}
            <div className="flex items-center gap-4 cursor-pointer">


                {/* <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-2xl font-black shadow-lg shadow-red-500/30">
                    Y
                </div> */}

                {/* Title */}
                <div>
                    <h1 className="font-[Poppins] text-xl font-black tracking-tight">
                        YouTube RAG
                    </h1>

                    <p className="text-sm text-zinc-400 mt-1">
                        Chat with any YouTube video
                    </p>
                </div>
            </div>

            {/* Center Links */}
            <div className="hidden md:flex items-center gap-10 text-zinc-300 font-medium">

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">

                <button className=" font-[Poppins] hidden md:flex items-center gap-2 px-3 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition duration-200 border border-zinc-800">
                    GitHub
                </button>

                <button className="md:hidden w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-xl">
                    ☰
                </button>

            </div>
        </nav>
    )
}