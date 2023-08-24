import InputForm from './InputForm';
import PostTextForm from './PostTextForm';
import HeaderToggle from './HeaderToggle';
import usePostData from '../../hooks/usePostData';

const PostEditor = () => {
    const { postData } = usePostData();
    const { title, postText, header } = postData;

    return (
        <div className="post-container post-editor">
            <h2 className="post-editor__title">Settings</h2>

            <InputForm title={title} />
            <PostTextForm text={postText} />

            <HeaderToggle title="header"/>
        </div>
    );
}
 
export default PostEditor;