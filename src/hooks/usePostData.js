import { useContext } from 'react';
import { PostDataContext } from '../context/PostDataContext';

export const usePostData = () => useContext(PostDataContext);