import Card from 'react-bootstrap/Card';
import useToggleData from '../../hooks/useToggleData';

const PostPreviewHeader = ({ header }) => {
  const { isHeaderToggleActive } = useToggleData();

  if (isHeaderToggleActive || localStorage.getItem('header')) {
    return <Card.Header>{header}</Card.Header>;
  }
};

export default PostPreviewHeader;
