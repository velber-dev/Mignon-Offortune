import React, { useState, useEffect, createRef } from "react";

function useImageSize(ratio: number = 1) {
    const [imageSize, setImageSize] = useState(0);

    const imageRef: React.RefObject<HTMLImageElement> = createRef();

    function windowResize() {
        if (imageRef.current) {
            const newImageSize: number = imageRef.current.offsetWidth * ratio;

            if (newImageSize != imageSize) {
                setImageSize(newImageSize);
            }
        }
    }

    useEffect(() => {
        windowResize();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", windowResize);

        return () => {
            window.removeEventListener("resize", windowResize);
        };
    });

    return { imageSize, imageRef };
}

export default useImageSize;
