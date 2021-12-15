import React from 'react'
import './Dashboard.scss'
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPropertyForm from '../../components/AddPropertyForm/AddPropertyForm';

const Dashboard = () => {
    return (
        <>
            <Nav />
            {/* <Home /> */}
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/addproperty" element={<AddPropertyForm />} />
                {/* <Route path="/album/:albumId" element={<AlbumInfo albumsArr={filteredAlbums} />} /> */}

            </Routes>

        </>
    )
}

export default Dashboard
