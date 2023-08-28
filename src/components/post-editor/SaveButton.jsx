import Button from 'react-bootstrap/Button';
import usePostData from '../../hooks/usePostData';
import { toast } from 'react-toastify';
import useToggleData from '../../hooks/useToggleData';

const SaveButton = ({ name }) => {
  const { postTitle, postText, postHeader, postImg } = usePostData();
  const { isHeaderToggleActive, isImgToggleActive } = useToggleData();

  const handleClick = () => {
    localStorage.setItem('title', JSON.stringify(postTitle));
    localStorage.setItem('text', JSON.stringify(postText));

    if (isHeaderToggleActive) {
      localStorage.setItem('header', JSON.stringify(postHeader));
    }

    if (isImgToggleActive) {
      localStorage.setItem('img', JSON.stringify(postImg));
    }

    toast.info('Post Saved!');
  };

  return (
    <Button className="save__button" variant="primary" onClick={handleClick}>
      {name}
    </Button>
  );
};

export default SaveButton;
