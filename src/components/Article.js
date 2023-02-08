import React from 'react';
import './Article.css';

const Article = (props) => {
	const { imageUrl, number, title, description } = props.article;

	return (
		<div className="article">
			<img className="article__img" src={imageUrl} alt={title} />
			<div className="article-content">
				<h5 className="article-content__number">{number}</h5>
				<a className="article-content__title" href="#">
					{title}
				</a>
				<p className="article-content__description">{description}</p>
			</div>
		</div>
	);
};

export default Article;
