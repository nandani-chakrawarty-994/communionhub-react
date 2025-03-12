import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <motion.h1 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
            >
                Connecting People Across Faiths & Interests
            </motion.h1>
            <p>Join meaningful events and make new connections.</p>
            <button className="cta-button" onClick={() => navigate('/events')}>
                Explore Events
            </button>
        </div>
    );
};

export default Home;
