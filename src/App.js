import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css'

import Grid from './components/display/Grid'
import Single from './components/display/Single'
import Header from './components/display/Header'
import Loader from './components/display/Loader'

const apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA&ta' +
        'g=&rating=G'

const photosToDisplayPerPage = 5

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            results: [],
            isLoading: true,
            activePhotoId: null
        }
    }
    componentDidMount() {
        this.searchForNumberOfPhotos(photosToDisplayPerPage)
    }
    callPhotosApi = () => {
        return fetch(apiUrl)
    }
    searchForNumberOfPhotos = (number) => {
        for (let i = 0; i < number; i++) {
            this.searchPhoto()
        }
    }
    searchPhoto = () => {
        this.setState({
            isLoading: true
        }, () => {
            this
                .callPhotosApi()
                .then(blob => blob.json())
                .then(data => this.setPhotosList(data.data))
                .then(() => this.setState(prevState => ({isLoading: false})))
                .catch(error => this.setState({
                    error: error.toString()
                }))
        })
    }
    setPhotosList = (result) => {
        const {results} = this.state
        this.setState({
            results: [
                ...results,
                result
            ]
        })
    }
    onHandlePhotoClick = (e) => {
        // get id of clicked photo, it stored in html via data
        if (e && e.target && e.target.getAttribute('data-id')) {
            const targetPhotoId = e
                .target
                .getAttribute('data-id')
                .toString()
                .trim()
            this.setState({activePhotoId: targetPhotoId})
        }
    }
    onHandleRefresh = () => {
        this.setState({
            results: []
        }, () => {
            this.searchForNumberOfPhotos(photosToDisplayPerPage)
        })
    }
    render() {
        const {results, isLoading, activePhotoId} = this.state
        const loadMore = (number) => this.searchForNumberOfPhotos(number)
        const handleClick = (e) => this.onHandlePhotoClick(e)
        const handleRefresh = () => this.onHandleRefresh()
        return (
            <Router>
                <div className="App">
                    <Header handleRefresh={handleRefresh}/>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={() => (
                            <div onClick={handleClick}>
                                <Grid
                                    loadMore={loadMore}
                                    photosToDisplayPerPage={photosToDisplayPerPage}
                                    isLoading={isLoading}
                                    photos={results} />
                            </div>
                        )}/>
                        <Route
                            path='/view/:photoId'
                            render={() => (<Single activeId={activePhotoId} photos={results} onClick={handleClick}/>)}/>
                    </Switch>
                    {isLoading && <Loader/>}
                </div>
            </Router>
        )
    }
}
export default App;
