import Article from './components/Article';
import ArticlesContainer from './components/ArticlesContainer';
import MainArticle from './components/MainArticle';
import Navbar from './components/Navbar';
import NewArticles from './components/NewArticles';
import articles from './data/articles.json';

function App() {
	return (
		<main className="container">
			<div className="row">
				<div className="col-sm-12">
					<Navbar />
				</div>
			</div>
			<div className="row">
				<div className="col-sm-8">
					<MainArticle />
				</div>
				<div className="col-sm-4">
					<NewArticles />
				</div>
			</div>
			<ArticlesContainer />
		</main>
	);
}

export default App;
