import Card from 'react-bootstrap/Card';
import PostPreviewHeader from './PostPreviewHeader';

const PostContentCard = ( { title, text, header} ) => {

    return (
        <Card className="post-content__card">
          <PostPreviewHeader header={header} />
        <Card.Img variant="bottom" className="card-img" src={JSON.parse(localStorage.getItem('img'))} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
 
export default PostContentCard;