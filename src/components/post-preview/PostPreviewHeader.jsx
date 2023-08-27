import Card from 'react-bootstrap/Card';

const PostPreviewHeader = ({ header }) => {
    if (!header) {
        return;
    }

    return (
        <Card.Header>{header}</Card.Header>
    );
}
 
export default PostPreviewHeader;