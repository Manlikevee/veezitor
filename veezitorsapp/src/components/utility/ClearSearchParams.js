import React from 'react';

const ClearSearchParams = () => {
  const clearSearchParams = () => {
    // Get the current URL without query parameters
    const url = new URL(window.location);
    url.search = ''; // Clear the query string

    // Use the history API to replace the current entry
    window.history.replaceState({}, document.title, url.toString());
  };

  return (
    <button onClick={clearSearchParams}>Clear Search Params</button>
  );
};

export default ClearSearchParams;
