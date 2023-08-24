import { createContext, useState } from 'react';

export const PostDataContext = createContext({});

const PostDataContextProvider = ({ children }) => {
    const titleData = JSON.parse(localStorage.getItem('title')) ?? 'Title';
    const postTextData = JSON.parse(localStorage.getItem('postText')) ?? 'Some post text';
    const headerData = JSON.parse(localStorage.getItem('header')) ?? 'Header';

    const currentPostData = {
        title: titleData,
        postText: postTextData,
        header: headerData,
    }
    
    const [postData, setPostData] = useState(currentPostData);

    return (
        <PostDataContext.Provider value={{ postData }}>
          {children}
        </PostDataContext.Provider>
      );
};

export default PostDataContextProvider;