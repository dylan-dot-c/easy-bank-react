import articles from "../assets/data/articles";
import Article from "./Article";

const LatestArticles = () => {
    return (
        <section className='mx-auto bg-light-gray p-8'>
            <div className='max-w-6xl mx-auto py-6 md:py-20'>
                <h2 className='text-center md:text-left'>Latest Articles</h2>
                <div className=' mx-auto grid md:grid-cols-4 grid-cols-1 s-4 gap-10 pt-8 md:pt-20'>
                    {articles.map((article) => {
                        return (
                            <Article
                                key={article.title}
                                image={article.image}
                                author={article.author}
                                description={article.description}
                                title={article.title}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LatestArticles;
