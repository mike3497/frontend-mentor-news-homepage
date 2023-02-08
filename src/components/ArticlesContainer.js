import React from 'react';
import articles from '../data/articles.json';
import Article from './Article';
import './ArticlesContainer.css';

const ArticlesContainer = () => {
	return (
		<div className="row articles-container">
			{articles.map((article) => (
				<div key={article.id} className="col-sm-4">
					<Article article={article} />
				</div>
			))}
		</div>
	);
};

export default ArticlesContainer;
