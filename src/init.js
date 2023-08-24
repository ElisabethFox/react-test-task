import App from "./components/App";
import PostDataContextProvider from "./context/PostDataContext";


const init = () => {

    return (
        <PostDataContextProvider>
            <App />
        </PostDataContextProvider>
    )

};

export default init;