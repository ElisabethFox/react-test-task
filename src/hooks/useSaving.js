import usePostData from './usePostData';

const useSaving = () => {
    const { postTitle, postText, postHeader, postImg } = usePostData();
    
    localStorage.setItem('title', JSON.stringify(postTitle));
    localStorage.setItem('text', JSON.stringify(postText));
    localStorage.setItem('header', JSON.stringify(postHeader));
    localStorage.setItem('img', JSON.stringify(postImg));
};

export default useSaving;