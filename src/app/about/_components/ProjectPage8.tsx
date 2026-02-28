import React from 'react'

const ProjectPage8 = () => {
    return (
        <section className="relative w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Aspect ratio container based on typical hero proportions (e.g. 1728 x 600 or responsive clamp) */}
            <div
                className="relative w-full flex items-center justify-center"
                style={{ minHeight: "clamp(300px, 40vw, 700px)" }}
            >
                {/* Background Photo */}
                <img
                    src="/assets/about_page/Projects Page 8.png"
                    alt="Team celebration"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
                />

                {/* Centered D'art Logo Text */}
                <img
                    src="/assets/about_page/Projects Page 8_text.png"
                    alt="D'Art Designer"
                    className="relative z-10 object-contain px-4 opacity-90"
                    style={{
                        width: "clamp(260px, 45vw, 840px)",
                        height: "auto",
                        mixBlendMode: "screen" // Adds subtle color burn into the background behind it
                    }}
                />
            </div>
        </section>
    )
}

export default ProjectPage8