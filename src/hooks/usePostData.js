import { useContext } from 'react';
import { PostDataContext } from '../context/PostDataContext';

const usePostData = () => useContext(PostDataContext);

export default usePostData;
