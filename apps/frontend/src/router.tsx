import { Routes, Route, Navigate } from "react-router-dom"
import React from "react"
import { HomePage } from "./app/pages/Home"
import { NotFoundPage } from "./app/pages/NotFound"
import { AboutUs } from "./app/pages/AboutUs"
import { Missions } from "./app/pages/Missions"
import { OldMission } from "./app/pages/oldMission"
import { SupportUs } from "./app/pages/SupportUs"
import { Blog } from "./app/pages/Blog"
import { BlogPage } from "./app/pages/BlogPage"
import { Navbar } from "./app/components/Navbar"
import { ListItem, ListItemSecondaryAction, Stack } from "@mui/material"
import {Helmet } from 'react-helmet'
import { LoginPage } from "./app/pages/LoginPage"
import { OurStory } from "./app/pages/OurStory"
export const Router: React.FC = () => {
    return (
        <>
        <Helmet>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="theme-color" content="black" />
        </Helmet>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/OldMission" element={<OldMission/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<SupportUs />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/blogPage" element={<BlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </>
    )
}                        