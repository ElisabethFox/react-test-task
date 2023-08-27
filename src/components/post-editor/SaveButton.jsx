import Button from 'react-bootstrap/Button';
import useSaving from '../../hooks/useSaving';
import usePostData from '../../hooks/usePostData';
import { toast } from 'react-toastify';

const SaveButton = ({ name }) => {
    const { postTitle, postText, postHeader, postImg } = usePostData();
    
    const handleClick = () => {
        localStorage.setItem('title', JSON.stringify(postTitle));
        localStorage.setItem('text', JSON.stringify(postText));
        localStorage.setItem('header', JSON.stringify(postHeader));
        localStorage.setItem('img', JSON.stringify(postImg));

        toast.info('Post Saved!');
    };

    return (
        <Button
            className="save__button"
            variant="primary" 
            onClick={handleClick}
        >
        {name}
        </Button>
    );
}
 
export default SaveButton;