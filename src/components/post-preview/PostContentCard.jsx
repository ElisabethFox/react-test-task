import Card from 'react-bootstrap/Card';

const PostContentCard = ( { title, text, header} ) => {
    return (
        <Card className="post-content__card">
        <Card.Header>{header}</Card.Header>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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