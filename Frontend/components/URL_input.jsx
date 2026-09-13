import { useState } from "react"

export default function UrlInput({ setShowChat }) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const handleProcess = async () => {

        // console.log("Enter handleProcess part")
        if (!url) return

        console.log(url)

        try {
            // setLoading(true)

            console.log("got the url:", url)

            // API call here
            const response = await fetch("http://127.0.0.1:8000/api/process-video/", {
                method: "POST",

                body: JSON.stringify({
                    video_id: url,
                }),
            });

            const data = await response.json();

            console.log(data)

            setShowChat(true);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-[calc(100vh-80px)] bg-black text-white flex items-center justify-center px-2 overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-red-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-500/20 blur-3xl rounded-full" />

            {/* Main Box */}
            <div className="relative z-10 w-full flex flex-col items-center">

                {/* Logo */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-5xl font-bold shadow-2xl shadow-red-500/30 mb-8">
                    Y
                </div>

                {/* Heading */}
                <h1 className="font-mono text-5xl font-black text-center leading-tight mb-5">
                    Chat With Any
                    <span className="font-mono block text-red-500">
                        YouTube Video
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-400 text-lg text-center mb-12 leading-relaxed">
                    Paste a YouTube link and instantly ask questions,
                    summarize content, and interact with videos using AI.
                </p>

                {/* Input Box */}
                <div className="w-full max-w-5xl bg-zinc-900/80 border border-white/10 rounded-2xl p-2 flex items-center gap-3 shadow-2xl backdrop-blur-xl">

                    <input
                        type="text"
                        placeholder="Paste YouTube URL..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="flex-1 bg-transparent outline-none px-4 py-4 text-lg placeholder:text-zinc-500"
                    />

                    <button
                        onClick={handleProcess}
                        className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition-all duration-200 font-semibold shadow-lg shadow-red-500/20"
                    >
                        Process
                    </button>
                </div>

            </div>
        </div>
    )
}