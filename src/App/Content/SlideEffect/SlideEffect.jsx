import React from 'react'
import { Carousel } from 'antd';
import {photos} from '../../_shared/useFlickr/callFlickrEffect/__mocks__/getRecentFlickr'

const contentStyle = {
  height: '160px',
  width:'650px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default () => (
  <Carousel autoplay>
    {photos.map((photo, index) => (
      <div key={index}>
        <img
          style={contentStyle}
          src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg"}
          alt={photo.title}
        />
      </div>
    ))}
  </Carousel>
);
