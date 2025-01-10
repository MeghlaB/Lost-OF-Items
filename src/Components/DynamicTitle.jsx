import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DynamicTitle = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Lost&FoundItems | Home';
      case '/allItems':
        return 'Lost&FoundItems | AllItems';
      case '/addItems':
        return 'Add Lost & Found Item';
      case '/about':
        return 'Lost&FoundItems | About Us';
  
      case '/allrecovere':
        return 'All Recovered Items';
      case '/myItems':
        return ' Manage My Items';
      case '/updatePost/:id':
        return 'UpdatePost';
      case '/delatePosts':
        return 'DelatePost';
      case '/details/:id':
        return 'DetailsPost';
      default:
        return 'Lost & Found Items';
    }
  };

  return (
    <Helmet>
      <title>{getTitle()}</title>
    </Helmet>
  );
};

export default DynamicTitle;
