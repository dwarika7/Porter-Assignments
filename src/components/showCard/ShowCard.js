import React from 'react'
import propTypes from 'prop-types';
import './styles.scss'

const ShowCard = ({ icon, title, year, description, showDetails,imdbID }) => {
    return (
        <div className="card" onClick={() => showDetails(imdbID)}>
            <div className="poster-card">
                <img className="poster" src={icon} />
            </div>
            <div className="description-card">
                <p className="title">{title}</p>
                <p className="year">({year})</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

ShowCard.propTypes = {
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    showDetails: propTypes.func.isRequired,
    imdbID: propTypes.string.isRequired
}

export default ShowCard;