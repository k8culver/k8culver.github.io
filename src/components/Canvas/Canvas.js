import React, { useRef, useEffect } from 'react';
import photo from '../../static/test-photo.jpeg';
import photoGrey from '../../static/test-photo-grey.png';

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
            canvas.width = imageGrey.width;
            canvas.height = imageGrey.height;
            ctx.drawImage(imageGrey, 0, 0);

        };
    
        const drawCircle = (x, y, radius) => {
            // ctx.clearRect(0, 0, canvas.width, canvas.height); // added this to clear the canvas
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0);
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
            ctx.drawImage(imageGrey, 0, 0);
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
            <img ref={imageRefGrey} src={photoGrey} alt="Hero Doodle" className='hidden' />
        </div>
    );
}

export default Canvas;
