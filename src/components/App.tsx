import React, { useState } from 'react'
import './App.scss'
import TestComponent from './TestComponent/TestComponent'
import { Outlet, Link } from 'react-router-dom';
import jpg from '../assets/jpg.jpg'
import png from '../assets/png.png'
import Svg from '../assets/svg.svg'


export const App = () => {

    const [count, setCount] = useState<number>(0)
    const increment = () => {
        setCount(prev => prev + 1)
    }

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>DESKTOP</div>
    // }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>MOBILE</div>
    // }

    return (  
        <>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <h6>h6</h6>
            <div>
                <img src={jpg} width={100} alt="jpg" />
                <img src={png} width={100} alt="png" />
            </div>
            <div>
                <Svg style={{color: 'red'}} width={50} height={50}/>
            </div>
            <Link to={'/'}>home</Link>
            <br />
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <div>hello world</div>
            <Outlet />
            <button onClick={increment}><span>+</span></button>
            <h3>{count}</h3>
            <TestComponent />
        </>
    );
}
