import React from 'react';

import managers from 'models/influencer/managers.json';

import { Select, sharedInputStyles } from './index.styles';

type PrimitiveSelectPropTypes = React.ComponentPropsWithoutRef<'select'>;
type SelectManagerElement = React.ElementRef<'select'>;
interface SelectManagerProps extends PrimitiveSelectPropTypes {
  placeholder?: string;
}

const SelectManager = React.forwardRef<SelectManagerElement, SelectManagerProps>(
  function SelectManager({ placeholder, ...restProps }, forwardedRef) {
    return (
      <Select {...restProps} ref={forwardedRef}>
        <option value="">{placeholder ?? 'Select manager'}</option>
        {managers.map((manager) => (
          <option key={manager.id} value={manager.id}>
            {manager.firstName} {manager.lastName}
          </option>
        ))}
      </Select>
    );
  }
);

export { SelectManager, sharedInputStyles };