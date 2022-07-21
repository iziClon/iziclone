import React, { FC, useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';

import { storage } from '../../firebase';
import css from './CreateProductPage.module.css';

const CreateProductPage: FC = () => {
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const handleChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const imageListRef = ref(storage, 'images/');

  const addImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // @ts-ignore
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // @ts-ignore
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <div>
        <p>Подати оголошення</p>
        <input type="file" onChange={handleChange}/>
        <button onClick={addImage} type="button">Додати фото</button>
        {imageList.map((url) => {
          return <img  className={css.image} src={url} alt='image' />
        })}
        {/*<img  className={css.image} src={imageList} alt={imageList} />*/}
      </div>
    </div>
  );
};

export { CreateProductPage };
