import PostContentCard from "./PostContentCard";
import usePostData from "./../../hooks/usePostData";

const PostPreview = () => {
    const { postData } = usePostData();
    const { title, postText, header } = postData;

    return (
        <div className="post-container post-preview">
            <PostContentCard title={title} text={postText} header={header} />
        </div>
    );
}
 
export default PostPreview;