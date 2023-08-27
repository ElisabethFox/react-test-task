import Button from 'react-bootstrap/Button';
import useSaving from '../../hooks/useSaving';
import usePostData from '../../hooks/usePostData';
import { toast } from 'react-toastify';

const SaveButton = () => {
    const { postTitle, postText, postHeader, postImg } = usePostData();
    
    const handleClick = () => {
        localStorage.setItem('title', JSON.stringify(postTitle));
        localStorage.setItem('text', JSON.stringify(postText));
        localStorage.setItem('header', JSON.stringify(postHeader));
        localStorage.setItem('img', JSON.stringify(postImg));

        toast.info('Post Saved!');
    };

    return (
        <Button variant="primary" onClick={handleClick}>Save</Button>
    );
}
 
export default SaveButton;