import TitleForm from './TitleForm';
import PostTextForm from './PostTextForm';
import HeaderToggle from './HeaderToggle';
import ImageToggle from './ImageToggle';
import SaveButton from './SaveButton';

const PostEditor = () => {
    return (
        <div className="post-container post-editor">
            <h2 className="post-editor__title">Settings</h2>

            <TitleForm name="Title" />
            <PostTextForm name="Post Text" />

            <HeaderToggle name="Header" />
            <ImageToggle name="Image" />

            <SaveButton name="Save" />
        </div>
    );
}
 
export default PostEditor;