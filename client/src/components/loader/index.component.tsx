import React, { useState, useEffect } from 'react';

import { VisuallyHidden } from 'components';

type LoaderPropTypes = {
  isLoading: boolean;
  time?: number;
  loader?: React.ReactNode;
};

/**
 * @Loader
 * This component provides an accessible loading indicator with the following features:
 * - Allows a server a maximum of `time` milliseconds to respond (default is 2000 milliseconds).
 *   A performant server response convention is 4000 milliseconds.
 * - Displays a loader after the specified time if the server has not responded.
 * - Hides the loader and shows "Finished loading" after loading is complete,
 *   providing feedback for accessibility device users.
 */
export function Loader({
  isLoading,
  time = 2000,
  loader = 'Loading...',
}: Readonly<LoaderPropTypes>) {
  const [showLoader, setShowLoader] = useState(false);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) setShowLoader(true);
    }, time);

    return () => clearTimeout(timeout);
  }, [isLoading, time]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (!isLoading && showLoader) {
      setShowLoader(false);
      setIsDoneLoading(true);
    }

    if (isDoneLoading) {
      timeout = setTimeout(() => setIsDoneLoading(false), 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isDoneLoading, isLoading, showLoader]);

  return (
    <>
      {isDoneLoading && <VisuallyHidden>Finished loading</VisuallyHidden>}

      {showLoader && loader}
    </>
  );
}
