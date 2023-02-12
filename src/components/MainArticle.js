import React from 'react';
import './MainArticle.css';
import mainArticle from '../data/main-article.json';

const MainArticle = () => {
	return (
		<div className="main-article">
			<div className="row">
				<div className="col-xs-12">
					<img
						className="main-article-image"
						src={mainArticle.imageUrl}
						alt={mainArticle.title}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-lg-6">
					<h1 className="main-article-title">{mainArticle.title}</h1>
				</div>
				<div className="col-xs-12 col-lg-6 main-article-content">
					<p className="main-article-description">{mainArticle.description}</p>
					<a className="main-article-button" href="#">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default MainArticle;
