import React, { useRef, useEffect, useState } from 'react';
import photo from '../../static/IMG_1553.PNG';
import photoGrey from '../../static/IMG_1552.PNG';
import reset from '../../static/reset.svg';

// Adapted from solution found here: https://stackoverflow.com/questions/46292350/make-ball-follow-mouse-on-canvas
function Canvas() {
    const canvasRef = useRef(null);
    const resetRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const reset = resetRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
        const imageGrey = new Image();
        image.src = photo;
        imageGrey.src = photoGrey;
    
        imageGrey.onload = () => {
            canvas.width = window.innerWidth;
            canvas.height = (imageGrey.height/imageGrey.width)*window.innerWidth;
            ctx.drawImage(imageGrey, 0, 0, canvas.width, canvas.height);
            type(window.innerWidth > 700 ? canvas.width/8 : canvas.width/20, canvas.height/4, false);
        };

        const typeOut = (i, text, x, y) => {
            setTimeout(() => {
                ctx.fillStyle = '#f4fafc';
                ctx.fillText(text[i], x, y);
                if (i < text.length - 1) {
                    typeOut(i + 1, text, x + ctx.measureText(text[i]).width, y);
                }
            }, 60);
        };

        const type = (x, y, isInstant) => {
            ctx.save();
            ctx.font = window.innerWidth > 700 ? '32px Bitter' : '26px Bitter';
            const text = 'Hello, my name is Kate.';
            if(isInstant) {
                ctx.fillStyle = '#f4fafc';
                ctx.fillText('Hello, my name is Kate.', x, y);
            } else {
                typeOut(0, text, x, y);
            }
        };
    
        const drawCircle = (x, y, radius) => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            ctx.restore();
        };
        
        const handleMouseMove = (e) => {
            reset.classList.remove('hidden');
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const radius = 80; // Adjust the radius size as desired
            drawCircle(x, y, radius);
        };
    
        const handleReset = () => {
            reset.classList.add('hidden');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imageGrey, 0, 0, canvas.width, canvas.height);
            type(window.innerWidth > 700 ? canvas.width/8 : canvas.width/20, canvas.height/4, true);
        };
    
        canvas.addEventListener('mousemove', handleMouseMove);
        reset.addEventListener('click', handleReset);
    
        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            reset.removeEventListener('click', handleReset);
        };
    }, []);


    return (
        <div>
            <canvas ref={canvasRef} className='transition' />
            <img ref={resetRef} src={reset} alt="Reset" className='w-8 float-right mr-4 cursor-pointer hidden' />
        </div>
    );
}

export default Canvas;
