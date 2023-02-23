import React, { useState, useEffect } from 'react';
import './Alert.css';

export default function Alert({ message, color }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [])

    return visible ? (
        <div className={'alert alert-' + color}>
            <p>{message}</p>
        </div >
    ) : null
}