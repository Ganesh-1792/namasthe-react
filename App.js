import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div className='header'>
            <div className = 'logo-container'>
                <img className='logo' src='https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?t=st=1730894722~exp=1730898322~hmac=6920582a828b8f2685387a87f75647965f90b48bb5ed078a36d6fd546b22513c&w=740' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestoCard = () => {
    return (
        <div className='restocard'>
            <img className='resto-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/dabf99d0-5c51-480b-9895-bce02d2bde9f_e9ffa04d-e57a-4548-a085-0cc9c2e465cc.JPG" alt="rest-logo" />
            <h2>Megana Foods</h2>
            <h4>Indian, Chinese, Arabian</h4>
            <h4>4.4 Starts</h4>
            <h4>28 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='card-container'>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            <RestoCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);