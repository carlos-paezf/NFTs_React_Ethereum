import React from 'react'
import Banner from '../../components/home/Banner'
import Posts from '../../components/home/Posts'
import Layout from '../../hooks/Layout'


const Home = () => {
    return (
        <Layout>
            <Banner />
            <Posts />
        </Layout>
    )
}


export default Home