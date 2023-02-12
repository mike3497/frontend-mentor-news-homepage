import ArticlesContainer from './components/ArticlesContainer';
import MainArticle from './components/MainArticle';
import Navbar from './components/Navbar';
import NewArticles from './components/NewArticles';

function App() {
	return (
		<main className="container">
			<div className="row">
				<div className="col-xs-12">
					<Navbar />
				</div>
			</div>
			<div className="row">
				<div className="col-md-8 col-xs-12">
					<MainArticle />
				</div>
				<div className="col-md-4 col-xs-12">
					<NewArticles />
				</div>
			</div>
			<ArticlesContainer />
		</main>
	);
}

export default App;
