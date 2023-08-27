import { createContext, useState } from 'react';

export const PostDataContext = createContext({});

const PostDataContextProvider = ({ children }) => {

    const initPostData = {
        title: JSON.parse(localStorage.getItem('title')) ?? 'Title',
        postText: JSON.parse(localStorage.getItem('postText')) ?? 'Some Post Text',
        header: JSON.parse(localStorage.getItem('header')) ?? 'Header',
        img: JSON.parse(localStorage.getItem('img')) ?? '',
    }

    const [postTitle, setPostTitle] = useState(initPostData.title);
    const [postText, setPostText] = useState(initPostData.postText);
    const [postHeader, setPostHeader] = useState(initPostData.header);


    return (
        <PostDataContext.Provider value={{ 
          postTitle,
          setPostTitle,
          postText,
          setPostText,
          postHeader,
          setPostHeader,
        }}>
          {children}
        </PostDataContext.Provider>
      );
};

export default PostDataContextProvider;