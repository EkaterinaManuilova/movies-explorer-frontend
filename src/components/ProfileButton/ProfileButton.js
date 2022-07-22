import React from 'react'
import './ProfileButton.css'
import { NavLink } from 'react-router-dom'
// import Button from '../Button/Button'

function ProfileButton({ onClose }) {
    return (
        <NavLink
            className="profile-button__link"
            to="/profile"
            onClick={onClose}
        >
            Аккаунт
        </NavLink>
    )
}

export default ProfileButton
