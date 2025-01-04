import React from 'react';

import { Loader, ErrorText } from 'components';

import { NoData } from './index.styles';

type AsyncRendererPropTypes<DataType> = {
  isLoading: boolean;
  hasData: boolean;
  data?: DataType;
  error?: string | null;
  loader?: React.ReactNode;
  children(data?: DataType): React.ReactNode;
};

export function AsyncRenderer<DataType>({
  isLoading,
  error,
  data,
  hasData,
  children,
  loader,
}: Readonly<AsyncRendererPropTypes<DataType>>) {
  if (isLoading) return <Loader isLoading={isLoading} loader={loader} />;

  if (error) return <ErrorText>{error}</ErrorText>;

  if (!hasData) return <NoData>No data</NoData>;

  return <>{children(data)}</>;
}
