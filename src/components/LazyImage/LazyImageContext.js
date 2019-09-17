import React, { useState, useEffect, createContext } from "react";
import LazyLoad from "vanilla-lazyload";

const Context = createContext();
const options = { elements_selector: ".lazyImage__img" };

export const LazyImageProvider = ({ children }) => {
  const [lazyLoad, setLazyLoad] = useState(null);

  useEffect(() => {
    if (!lazyLoad) setLazyLoad(new LazyLoad(options));
    return () => lazyLoad && lazyLoad.destroy();
  }, [lazyLoad]);

  return <Context.Provider value={lazyLoad}>{children}</Context.Provider>;
};

export const withLazyImageContext = Component => props => (
  <Context.Consumer>
    {context => <Component {...props} lazyLoad={context} />}
  </Context.Consumer>
);
