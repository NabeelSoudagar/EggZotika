import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

    // Load images
    useEffect(() => {
        const frameCount = 192;
        const loadedImages = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const formattedIndex = i.toString().padStart(3, '0');
            img.src = `/frames/ezgif-frame-${formattedIndex}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsImagesLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    useGSAP(() => {
        if (!isImagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Initial Resize
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const render = (index) => {
            if (images[index]) {
                const img = images[index];
                const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(
                    img,
                    0,
                    0,
                    img.width,
                    img.height,
                    centerShift_x,
                    centerShift_y,
                    img.width * ratio,
                    img.height * ratio
                );
            }
        };

        const frameObject = { frame: 0 };

        // Pin the animation to the entire page scroll
        gsap.to(frameObject, {
            frame: images.length - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
            onUpdate: () => render(Math.round(frameObject.frame))
        });

        // Initial render
        render(0);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(Math.round(frameObject.frame));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, { dependencies: [isImagesLoaded, images] });

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                pointerEvents: 'none' // Click-through
            }}
        />
    );
};

export default BackgroundAnimation;
