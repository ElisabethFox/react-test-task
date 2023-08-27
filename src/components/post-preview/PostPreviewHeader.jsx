import Card from 'react-bootstrap/Card';

const PostPreviewHeader = ({ header }) => {
    if (!localStorage.getItem('header')) {
        return;
    }

    return (
        <Card.Header>{header}</Card.Header>
    );
}
 
export default PostPreviewHeader;