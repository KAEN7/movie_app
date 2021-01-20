import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return <nav>
        {/* Link는 HTML에 href와 비슷하다고 생각하면 됨, to='링크'를 걸어주면됨 */}
        <Link to='/'>Home</Link> 
        <Link to='/about'>About</Link>
    </nav>
}

export default Navigation;