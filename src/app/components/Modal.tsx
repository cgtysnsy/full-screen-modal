"use client"
import React from 'react';


export default function Modal({onClose}) {
  
    return <div className='modal'>
        <p>This is some modal</p>
        <button onClick={onClose}>Close</button>
  </div>;
}
