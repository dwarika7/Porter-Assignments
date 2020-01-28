import React from 'react';
import image404 from '../../assets/images/404.png';
// import { useHistory } from 'react-router-dom'
import './styles.scss'

const component404 = () => {
    // const history = useHistory()
    const homePage = () => {
        // history.push('/')
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

export default component404;