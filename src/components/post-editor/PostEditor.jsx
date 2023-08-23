import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import TitleForm from './TitleForm';
import PostTextForm from './PostTextForm';

const PostEditor = () => {
    return (
        <div className="post-container post-editor">
            <h2 className="post-editor__title">Settings</h2>

            <TitleForm />
            <PostTextForm />

            <ToggleButtonGroup name="toggle" type="radio" variant="primary">
                <ToggleButton value={false}>

                </ToggleButton>

                <ToggleButton value={true}>
                    
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
 
export default PostEditor;