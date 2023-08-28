import { Card } from 'react-bootstrap';
import useToggleData from '../../hooks/useToggleData';

const PostPreviewImg = ({ img }) => {
  const { isImgToggleActive } = useToggleData();

  if (isImgToggleActive || localStorage.getItem('img')) {
    return <Card.Img variant="bottom" className="card-img" src={img} />;
  }
};

export default PostPreviewImg;
