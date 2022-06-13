import React from 'react'
import Footer from '../components/navigation/Footer'
import NavBar from '../components/navigation/NavBar'
import { ToastContainer } from 'react-toastify'


const Layout = (props) => {
    return (
        <>
            <NavBar />
            <ToastContainer autoClose={5000} />
            {props.children}
            <Footer />
        </>
    )
}


export default Layout