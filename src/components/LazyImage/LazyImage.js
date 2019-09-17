import React, { useEffect } from "react";
import { withLazyImageContext } from "./LazyImageContext";


const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

  useEffect(() => {
    if (lazyLoad) lazyLoad.update();
  }, [src, aspectRatio, lazyLoad]);

  return (
    
      <img className="lazyImage__img" src={src} className="dogImage" alt="dog" />
    
  );
};

export default withLazyImageContext(LazyImage);
