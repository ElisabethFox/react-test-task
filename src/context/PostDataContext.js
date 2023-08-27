import { createContext, useState } from 'react';

export const PostDataContext = createContext({});

const PostDataContextProvider = ({ children }) => {
    const titleData = JSON.parse(localStorage.getItem('title')) ?? null;
    const postTextData = JSON.parse(localStorage.getItem('postText')) ?? null;
    const headerData = JSON.parse(localStorage.getItem('header')) ?? null;

    const currentPostData = {
        title: titleData,
        postText: postTextData,
        header: headerData,
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