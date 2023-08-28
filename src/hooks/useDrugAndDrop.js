import usePostData from './usePostData';

const useDrugAndDrop = () => {
  const { setPostImg } = usePostData();
  const reader = new FileReader();

  function handleChange(e) {
    reader.addEventListener('load', function () {
      setPostImg(this.result);
    });

    reader.readAsDataURL(e.target.files[0]);
  }

  return handleChange;
};

export default useDrugAndDrop;
