import React from 'react';
import { useState } from 'react';

const initUrl = '';

function FileReview() {
  const [url, setUrl] = useState(initUrl);

  const showReview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setUrl(x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setUrl(initUrl);
    }
  };
  return (
    <>
      <label className="file-review">
        <input
          type={'file'}
          accept="image/*,video/*"
          onChange={showReview}
          id="field-upload"
        />
        <img src={url} alt="" className="img-review" />
      </label>
    </>
  );
}

export default FileReview;
