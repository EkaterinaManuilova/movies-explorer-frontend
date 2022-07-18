import './InfoTooltip.css'
import React from 'react'
import { useEffect, useState } from 'react'
import Success from '../../images/success.svg'
import Fail from '../../images/fail.svg'

function InfoTooltip({ onClose, isRegSuccess }) {
    const [isOpenInfoTooltip, setIsOPenInfoTooltip] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsOPenInfoTooltip(false), 6000)
        return () => clearTimeout(timer)
    })

    useEffect(() => {
        if (!isOpenInfoTooltip) return
        const closeByEscape = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', closeByEscape)
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpenInfoTooltip, onClose])

    const closeByOverlay = (event) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className={isOpenInfoTooltip ? 'popup popup_opened' : 'popup'}
            onClick={closeByOverlay}
        >
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close-button"
                    onClick={onClose}
                />
                <div className="popup__form-container">
                    <img
                        className="popup__image"
                        src={isRegSuccess ? Success : Fail}
                        alt={isRegSuccess ? 'Иконка Успешно' : 'Иконка Ошибка'}
                    />
                    <p className="popup__message">
                        {isRegSuccess
                            ? 'Успешно'
                            : 'Что-то пошло не так! Попробуйте ещё раз.'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip
