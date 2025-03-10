import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/guest/Footer";
import Header from "../components/guest/Header";
import useCommon from "../hooks/useCommon";
import { imageBase } from "../config/Constant";


const ExploreGuides = () => {

    const location = useLocation();
    const type = location.state.type;

    const {
        getGuideList
    } = useCommon();

    const [guideArr, setGuideArr] = useState([]);

    const fetchGuides = async () => {
        const result = await getGuideList({ user_type: type });
        setGuideArr(result.data);
    }

    useEffect(() => {
        fetchGuides();
    }, [])

    return (
        <>
            <Header />
            <div className="explore-guides-articles-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="explore-guides-articles-in">
                                <h1>Explore Guides</h1>
                                <hr />
                                <h2>Our new guides</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row explore-guides-articles-inner">
                        {
                            guideArr.map((guide, index)=>(
                                <div className="col-lg-3" key={index}>
                                    <div className="explore-guides-articles-in">
                                        <a href="guides-detail.html">
                                            <div className="explore-guides-articles-image">
                                                <img src={`${imageBase}${guide.cover_image}`} alt="" />
                                            </div>
                                            <h3>{guide.title}</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry.</p>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="explore-guides-articles-wrap-btn">
                        <a href="contact-us.html">Contact Us</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ExploreGuides;