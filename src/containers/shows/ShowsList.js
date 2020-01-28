import React, { useState, useEffect } from 'react';
import './styles.scss';
import jsonData from '../../mockjson/data';
import ShowCard from '../../components/showCard/ShowCard'
import InputField from '../../components/inputField/InputField'
import searchString from '../../utils/subsStringCheck'
import { useHistory } from "react-router-dom";
import postersUtil from '../../utils/postersUtil';


function ShowsList() {
    const history = useHistory()
    const [showsList, updateShowsList] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [posters, setPosters] = useState('')

    useEffect(() =>{
        updateShowsList(jsonData.shows);
        const images = postersUtil(require.context('../../assets/images/posters', false, /\.(jpg)$/));
        setPosters(images)
    },[])

    const searchShow = (event) => {
        setSearchValue(event.target.value)
        let filteredShows = []
        if (event.target.value) {
            filteredShows = jsonData.shows.filter(show => searchString(show.title, event.target.value) || 
                                                            searchString(show.year, event.target.value) || 
                                                            searchString(show.description, event.target.value))
            updateShowsList(filteredShows)
        }
        else {
            updateShowsList(jsonData.shows)
        }
    }

    const showDetailsHandler = (value) => {
        history.push(`show/${value}`)
    }

    return (
        <div className="main-container">
            <div className="header-container">
                <div className="heading">
                    <p>SVIDEO</p>
                </div>
                <div className="input-div">
                    <InputField value={searchValue} searchHandler={searchShow} />
                </div>
            </div>
            <div className="card-body">
                {showsList && showsList.map((ele, index) => {
                    return (<ShowCard key={index} icon={posters[ele.poster]} title={ele.title} year={ele.year} description={ele.description} showDetails={showDetailsHandler} imdbID={ele.imdbID}/>)
                })}
            </div>
        </div>
    )
}

export default ShowsList;
