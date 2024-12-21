import React, { useState, useEffect } from 'react';

function ThemeChange() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    
 
 
    useEffect(() => {
        if (theme === 'light') {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    }, [theme]);

    return (
        <div>
            <h2>
                Change Theme
            </h2>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. <br />
                It has roots in a piece of classical Latin literature from 45 BC, <br />
                making it over 2000 years old.
            </p>
            <button style={{ backgroundColor: 'blue',color: 'white',
                    padding: '10px 20px',
                    borderRadius:'5px',
                    border: 'none',
                    cursor: 'pointer',}}

             onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeChange;
