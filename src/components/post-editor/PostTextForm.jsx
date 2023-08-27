import Form from 'react-bootstrap/Form';
import usePostData from '../../hooks/usePostData';

const PostTextForm = ({ text }) => {
    const context = usePostData();
    const { currentPostData, setPostData } = context;

    const handleChange = (e) => {
        e.preventDefault();
        localStorage.setItem('postText', JSON.stringify(e.target.value));
        const newPostData = {...currentPostData, 'postText': e.target.value};
        setPostData(newPostData);
    };

    return (
        <Form>
            <Form.Group className="">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        type="text"
                        name={text}
                        aria-label={text}
                        className="form"
                        placeholder='Some Post Text'
                        onChange={handleChange}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default PostTextForm;