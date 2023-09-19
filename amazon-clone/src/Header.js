import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img
        className='header__logo'
        src="amazon.png"
        />

        <div
        className="header__searchin">
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Hello user
                </span>

            </div>
            <div className='header__option'>
                <span 
                className='header__optionLineTwo'>
                    Hello user
                </span>

            </div>
            <div className='header__option'>
            <span 
            className='header__optionLineThree'>
                Hello user
                </span>

            </div>
        </div>
    </div> 
  )
}

export default Header