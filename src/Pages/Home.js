import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Brief } from '../Components/Brief'
import { Projects } from '../Components/Projects'
import { Reports } from '../Components/Reports'
import { Footer } from '../Components/Footer'

export const HomePage = () => {
    return (
        <main>
        <Navbar />
        <Brief />
        <Projects />
        <Reports />
        <Footer />
        </main>
    )
}
