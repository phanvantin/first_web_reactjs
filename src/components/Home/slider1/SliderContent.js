import React from 'react';
import styleData from './styleData';

function SliderContent() {


  return (
    <div className="banner-left__content">
        <ul className="banner-left--contents">
          {
            styleData.map((content,index)=> {
              return <li key={index} className="content-item" >{content.content}</li>
            })
          }
        </ul>
    </div>
  );
}

export default SliderContent;