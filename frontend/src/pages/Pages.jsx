import React from 'react'
import Blog from '../components/blog/Blog'
import Features from '../components/features/Features'
import Hero from '../components/hero/Hero'
import Services from '../components/service/Services'

const Pages = () => {
    return (
        <>
            <Hero />
            <Features />
            <Services />
            <Blog />
        </>
    )
}

export default Pages