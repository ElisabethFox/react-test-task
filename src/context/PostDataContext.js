import { createContext, useState } from 'react';

export const PostDataContext = createContext({});

const PostDataContextProvider = ({ children }) => {
  const initPostData = {
    title: JSON.parse(localStorage.getItem('title')) ?? 'Title',
    text: JSON.parse(localStorage.getItem('text')) ?? 'Some Post Text',
    header: JSON.parse(localStorage.getItem('header')) ?? 'Header',
    img: JSON.parse(localStorage.getItem('img')) ?? '',
  };

  const [postTitle, setPostTitle] = useState(initPostData.title);
  const [postText, setPostText] = useState(initPostData.text);
  const [postHeader, setPostHeader] = useState(initPostData.header);
  const [postImg, setPostImg] = useState(initPostData.img);

  return (
    <PostDataContext.Provider
      value={{
        postTitle,
        setPostTitle,
        postText,
        setPostText,
        postHeader,
        setPostHeader,
        postImg,
        setPostImg,
      }}
    >
      {children}
    </PostDataContext.Provider>
  );
};

export default PostDataContextProvider;
