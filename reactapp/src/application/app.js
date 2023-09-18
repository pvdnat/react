import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"

import UserSignIn from "./CommonComponent/UserSignIn";
import NotFound from "./CommonComponent/NotFound";
import Success from "./CommonComponent/Success";
import Product from "./CommonComponent/Product";
import Header from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";

export default class Application extends Component {

        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Success name="Van Phan" address="Boston"/>} />
                            <Route path="/UserSignIn" element={<UserSignIn user={"User"} password={"123"}/>}/>
                            <Route path="/Product" element={<Product name="Random Product" price="Random Price"/>} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer />
                    </Suspense>
                </Router>
            )
        }
}