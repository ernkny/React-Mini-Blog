import React from 'react'
import  '../styles/HomeScreen.css'

const Loading = ({ color }: { color: string }) => {
    return (
      <div className="dots">
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
      </div>
    );
  };

export default Loading