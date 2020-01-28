import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router";
import jsonData from '../../mockjson/data';
import getShowDetail from '../../utils/filterJsonWithId'
import './styles.scss'
import {IMDB_API_KEY} from '../../common/constants';
import {GET_IMDB_RATING_URL, IFRAME_YOUTUBE_URL} from '../../common/urls';
import Loader from '../../assets/images/loading.png';
import postersUtil from '../../utils/postersUtil';

const ShowDetails = () => {
    let { id } = useParams();
    let history = useHistory()
    const [showData, setShowData] = useState('')
    const [imdbRating, setImdbRating] = useState('')
    const [posters, setPosters] = useState('')

    const apiCall = (url) => {
        fetch(url).then(res => res.json())
        .then(res => setImdbRating(res.imdbRating))
    }

    useEffect(() => {
        const show = getShowDetail(jsonData.shows, 'imdbID', id)
        if(!show.length) {
            history.push('/notfound')
            return
        }
        setShowData(show[0])
        const images = postersUtil(require.context('../../assets/images/posters', false, /\.(jpg)$/));
        setPosters(images)
        const url = GET_IMDB_RATING_URL(IMDB_API_KEY, show[0].imdbID)
        apiCall(url)
    }, [])

    const goBack = () => {
        history.goBack();
    }
    if(!showData || !imdbRating) {
        return(
            <div className="loading-container">
                <img className="loader" src={Loader} />
            </div>
        )
    }
    return (
        <div className="details-container">
            <div className="details-bar">
                <p className="heading">SVIDEO</p>
                <button className="back-button" onClick={goBack}>BACK</button>
            </div>
            <div className="details-header">
                <p className="show-title">{showData && showData.title}</p>
                <p className="show-year">({showData && showData.year})</p>
                <div className="show-imdb">
                    <p>Rating</p>
                    <p>{imdbRating}</p>
                </div>
                <div className="poster-div">
                    <img className="show-poster" src={posters[showData.poster]} />
                </div>
                <p className="show-description">{showData && showData.description}</p>

            </div>
            <div className="show-trailer">
                {showData &&
                    <iframe className="trailer" src={IFRAME_YOUTUBE_URL(showData.trailer)} frameBorder="0" allowFullScreen=""></iframe>
                }
            </div>
        </div>
    )
}

export default ShowDetails;