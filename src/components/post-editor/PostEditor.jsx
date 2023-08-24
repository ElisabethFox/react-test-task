import InputForm from './InputForm';
import PostTextForm from './PostTextForm';
import Toggle from './Toggle';

const PostEditor = () => {
    return (
        <div className="post-container post-editor">
            <h2 className="post-editor__title">Settings</h2>

            <InputForm title="title" />
            <PostTextForm text="Some post text" />

            <Toggle title="header"/>
            <InputForm title="header" />

            <Toggle title="image"/>


        </div>
    );
}
 
export default PostEditor;