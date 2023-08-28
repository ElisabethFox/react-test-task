import PostContentCard from './PostContentCard';
import usePostData from './../../hooks/usePostData';

const PostPreview = () => {
  const { postTitle, postText, postHeader, postImg } = usePostData();

  return (
    <div className="post-container post-preview">
      <PostContentCard
        title={postTitle}
        text={postText}
        header={postHeader}
        img={postImg}
      />
    </div>
  );
};

export default PostPreview;
