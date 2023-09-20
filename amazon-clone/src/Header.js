import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img
        className='header__logo'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpFZyC8kW-gUtRx_EZmfAUWj_G4uC19eB_A&usqp=CAU"
        />

        <div
        className="header__search">
            <input
            className='header__searchinput' type='text'
            />
            <SearchIcon
            className="header__searchIcon" />
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Hello user
                </span>

                <span 
                className='header__optionLineTwo'>
                    Sigh in
                </span>

            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Returns
                </span>

                <span 
                className='header__optionLineTwo'>
                    & Orders
                </span>
 
            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>
                    Your
                </span>

                <span 
                className='header__optionLineTwo'>
                    Prime
                </span>
            </div>
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
        </div>
    </div> 
  )
}

export default Header