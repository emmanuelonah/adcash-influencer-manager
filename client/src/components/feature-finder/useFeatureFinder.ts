import { useState, useCallback } from 'react';

import allFeatures from './index.data.json';

export function useFeatureFinder() {
  const [features, setFeatures] = useState(allFeatures);

  const onSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value.toLowerCase().trim();

    if (!searchText) return setFeatures(allFeatures);

    const newFeatures = allFeatures.filter(({ name, path, keywords }) => {
      const searchableContent = (name + path + keywords.join('')).toLowerCase().trim();
      return searchableContent.includes(searchText);
    });

    setFeatures(newFeatures);
  }, []);

  return {
    features,
    onSearch,
  };
}
