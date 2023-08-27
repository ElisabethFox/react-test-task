import InputForm from './InputForm';
import PostTextForm from './PostTextForm';
import HeaderToggle from './HeaderToggle';
import usePostData from '../../hooks/usePostData';
import ImageToggle from './ImageToggle';
import SaveButton from './SaveButton';

const PostEditor = () => {
    const context = usePostData();
    const { currentPostData, setPostData } = context;

    const handleChange = (elementName, e) => {
        e.preventDefault();
        localStorage.setItem(elementName, JSON.stringify(e.target.value));
        setPostData({...currentPostData, [elementName]: e.target.value});
    };

    return (
        <div className="post-container post-editor">
            <h2 className="post-editor__title">Settings</h2>

            <InputForm name="Title" handleChange={handleChange} />
            <PostTextForm name="Post Text" handleChange={handleChange} />

            <HeaderToggle name="Header" handleChange={handleChange} />
            <ImageToggle name="Image"/>

            <SaveButton />
        </div>
    );
}
 
export default PostEditor;