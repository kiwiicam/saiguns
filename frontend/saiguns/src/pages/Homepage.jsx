import React from 'react'
import { useEffect } from 'react';
import '../css/Homepage.css'
function Homepage() {
    useEffect(() => {
        const h1 = document.querySelector('.filter h1');
        const p = document.querySelector('.filter p');
        if (h1) {
            setTimeout(() => {
                h1.classList.add('animate');
                p.classList.add('animate');
            }, 300);
        }
    }, []);
    return (
        <>
        <div className="filter">
            <div className="home">
                <h1>Carvell's Auctions</h1>
                <p>New Zealands Specialist Firearms Auction House since 1990</p>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium, aspernatur illo nihil porro at, consequuntur id quidem voluptatem commodi aut exercitationem consectetur repellat cupiditate nemo, voluptatibus similique sapiente nobis.</p>
        </>
    )
}

export default Homepage
