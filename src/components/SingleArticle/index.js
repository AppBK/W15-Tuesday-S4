import './SingleArticle.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector(state=>state.articleState.entries);
  const article = articles.find(art => art.id === id);
  
  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
      />
      <p>
        {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;