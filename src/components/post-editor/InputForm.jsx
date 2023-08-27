import Form from 'react-bootstrap/Form';
import usePostData from '../../hooks/usePostData';

const InputForm = ({ title }) => {
    const context = usePostData();
    const { currentPostData, setPostData } = context;

    const handleChange = (e) => {
        e.preventDefault();
        localStorage.setItem('title', JSON.stringify(e.target.value));
        const newPostData = {...currentPostData, 'title': e.target.value};
        setPostData(newPostData);
    };

    return (
        <Form>
            <Form.Group className="mb-10">
                    <Form.Control
                        as="input"
                        type="text"
                        name={title}
                        aria-label='Title'
                        className="form"
                        placeholder='Title'
                        onChange={handleChange}
                    />
            </Form.Group>
        </Form>
    );
}
 
export default InputForm;