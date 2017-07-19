/**
*
* Image
*
*/

import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt }) => {
  // don't do the blur thing with svgs, which are don't have a little blur thumbnail
  if (src.match(/.*\.svg$/)) {
    return <img src={src} alt={`missing image ❗ ${alt || src} ❗`} />;
  }

  // if we have specified a size in the image url, use it
  const match = src.match(/_s=(\d+)w(\d+)h/);
  console.log('match', match)
  if (match) {
    return (
      <div>
        <img
          id={`${src}-blur`}
          src={src.replace(/(\.\w\w\w)$/, '_blur$1')}
          alt={`missing image ❗ ${alt || src} ❗`}
        />

        <img src={src} alt={`❗ ${alt || src} ❗`} />

        <style jsx>
          {`
          div {
            position: relative;
            padding: 0;
            padding-bottom: 100%;
            height: 0;
          }

          img {
          }

          img:nth-of-type(1) {
            position: absolute;
            z-index: 2;
          }

        `}
        </style>
      </div>
    );
  }

  return (
    <div>
      <img
        id={`${src}-blur`}
        src={src.replace(/(\.\w\w\w)$/, '_blur$1')}
        alt={`missing image ❗ ${alt || src} ❗`}
      />

      <img src={src} alt={`❗ ${alt || src} ❗`} />

      <style jsx>
        {`
          div {
            position: relative;
            padding: 0;
            padding-bottom: 100%;
            height: 0;
          }

          img {
          }

          img:nth-of-type(1) {
            position: absolute;
            z-index: 2;
          }

        `}
      </style>
    </div>
  );
};

export default Image;
