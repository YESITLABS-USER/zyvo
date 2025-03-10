import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/guest/Footer";
import Header from "../components/guest/Header";
import useCommon from "../hooks/useCommon";
import { imageBase } from "../config/Constant";


const ExploreArticles = () => {

    const location = useLocation();
    const type = location.state.type;

    const {
        getArticleList
    } = useCommon();

    const [articleArr, setArticleArr] = useState([]);

    const fetchArticles = async () => {
        const result = await getArticleList({ user_type: type });
        setArticleArr(result.data);
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <>
            <Header />
                <div className="explore-guides-articles-wrap">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="explore-guides-articles-in">
                                    <h1>Explore Articles</h1>
                                    <hr />
                                    <h2>Our new articles</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row explore-guides-articles-inner">
                            {articleArr.map((article, index)=>(
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div className="explore-guides-articles-in">
                                        <a href="articles-detail.html">
                                            <div className="explore-guides-articles-image">
                                                <img src={`${imageBase}${article.cover_image}`} alt="" />
                                            </div>
                                            <h3>{article.title}</h3>
                                            <p>{article.description}</p>
                                        </a>
                                    </div>
                                </div>
                            ))}
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

export default ExploreArticles;