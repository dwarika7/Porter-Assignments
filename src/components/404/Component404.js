import React from 'react'
import { useHistory } from 'react-router-dom'
import image404 from '../../assets/images/404.jpeg';
import './styles.scss'

const Component404 = () => {
    let history = useHistory();
    const homePage = () => {
        history.push('/')
    }
    return (
    <div className="not-found-container">
        <div class="not-found-header">
            <button className="not-found-button" onClick={homePage}>Go To Home Page</button>
        </div>
        <div class="not-found-body">
            <img src={image404} />
        </div>
    </div>
    )
}

export default Component404;