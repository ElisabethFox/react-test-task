import { createContext, useState } from 'react';

export const PostDataContext = createContext({});

const PostDataContextProvider = ({ children }) => {
    const titleData = JSON.parse(localStorage.getItem('title')) ?? 'Title';
    const postTextData = JSON.parse(localStorage.getItem('postText')) ?? 'Some Post Text';
    const headerData = JSON.parse(localStorage.getItem('header')) ?? 'Header';
    const imgData = JSON.parse(localStorage.getItem('img')) ?? '';

    const currentPostData = {
        title: titleData,
        postText: postTextData,
        header: headerData,
        img: imgData,
    }
    
    const [postData, setPostData] = useState(currentPostData);


    console.log(postData)

    return (
        <PostDataContext.Provider value={{ postData, setPostData, currentPostData }}>
          {children}
        </PostDataContext.Provider>
      );
};

export default PostDataContextProvider;