import Card from 'react-bootstrap/Card';
import PostPreviewHeader from './PostPreviewHeader';
import PostPreviewImg from './PostPreviewImg';

const PostContentCard = ({ title, text, header, img }) => {
  return (
    <Card className="post-content__card">
      <PostPreviewHeader header={header} />
      <PostPreviewImg img={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostContentCard;
