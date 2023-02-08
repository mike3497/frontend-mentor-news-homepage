import React from 'react';
import './NewArticles.css';
import articles from '../data/new-articles.json';

const NewArticles = () => {
	return (
		<div className="new-articles">
			<h4 className="new-articles__title">New</h4>
			{articles.map((article) => (
				<div className="new-articles-content">
					<a className="new-articles-content__title" href="#">
						{article.title}
					</a>
					<p className="new-articles-content__description">
						{article.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default NewArticles;
