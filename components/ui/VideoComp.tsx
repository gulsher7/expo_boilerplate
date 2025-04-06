import React from 'react'

export default function VideoComp() {
    return (
        <div className="my-8">
        <div className="flex justify-center">
            <div className="relative w-[300px] h-[600px] rounded-[36px] bg-black border-[14px] border-gray-800 shadow-xl overflow-hidden flex items-center justify-center">
                {/* Phone notch */}
                <div className="absolute top-0 w-[120px] h-[20px] bg-gray-800 rounded-b-[14px] z-10"></div>

                {/* Power button */}
                <div className="absolute right-[-14px] top-[120px] h-[60px] w-[4px] bg-gray-700 rounded-r-md"></div>

                {/* Volume buttons */}
                <div className="absolute left-[-14px] top-[100px] h-[40px] w-[4px] bg-gray-700 rounded-l-md"></div>
                <div className="absolute left-[-14px] top-[160px] h-[40px] w-[4px] bg-gray-700 rounded-l-md"></div>

                <video
                    className="w-full h-full object-cover"
                    controls={true}
                    poster="/video-thumbnail.png"
                    autoPlay={true}
                    loop={true}

                >
                    <source src="/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        </div>
    )
}
