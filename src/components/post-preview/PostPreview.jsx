import PostContentCard from "./PostContentCard";
import usePostData from "./../../hooks/usePostData";

const PostPreview = () => {
    const { postTitle, postText, postHeader } = usePostData();

    return (
        <div className="post-container post-preview">
            <PostContentCard title={postTitle} text={postText} header={postHeader} />
        </div>
    );
}
 
export default PostPreview;