import React, { useRef, useEffect, useState } from 'react';
import photo from '../../static/IMG_1551.PNG';
import photoGrey from '../../static/IMG_1552.PNG';

// Addapted from solution found here: https://stackoverflow.com/questions/46292350/make-ball-follow-mouse-on-canvas
function Canvas() {
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const imageRefGrey = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = imageRef.current;
        const imageGrey = imageRefGrey.current;
    
        imageGrey.onload = () => {
            canvas.width = window.innerWidth;
            canvas.height = (imageGrey.height/imageGrey.width)*window.innerWidth;
            ctx.drawImage(imageGrey, 0, 0, canvas.width, canvas.height);
            type(canvas.width/8, canvas.height/4, false);
        };

        const typeOut = (i, text, x, y) => {
            setTimeout(() => {
                ctx.fillText(text[i], x, y);
                if (i < text.length - 1) {
                    typeOut(i + 1, text, x + ctx.measureText(text[i]).width, y);
                }
            }, 100);
        };

        const type = (x, y, isInstant) => {
            ctx.save();
            ctx.font = '32px Bitter';
            const text = 'Hello, my name is Kate.';
            if(isInstant) {
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
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const radius = 80; // Adjust the radius size as desired
            drawCircle(x, y, radius);
        };
    
        const handleMouseOut = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imageGrey, 0, 0, canvas.width, canvas.height);
            type(canvas.width/8, canvas.height/4, true);
        };
    
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);
    
        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);


    return (
        <div>
            <canvas ref={canvasRef} className='transition' />
            <img ref={imageRef} src={photo} alt="Hero Doodle" className='hidden' />
            <img ref={imageRefGrey} src={photoGrey} alt="Hero Doodle Grey" className='hidden' />
        </div>
    );
}

export default Canvas;
