import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();

    return (     
        <div>
            About

        <br>
        </br>
        <button onClick={() => navigate("/")}>Go To Home</button>

        </div>

    )
}

export default About