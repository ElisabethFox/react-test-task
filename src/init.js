import App from './components/App';
import PostDataContextProvider from './context/PostDataContext';
import ToggleContextProvider from './context/ToggleContext';

const init = () => {
  return (
    <PostDataContextProvider>
      <ToggleContextProvider>
        <App />
      </ToggleContextProvider>
    </PostDataContextProvider>
  );
};

export default init;
