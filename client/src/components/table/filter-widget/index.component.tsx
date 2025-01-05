import { SelectManager, SecondaryButton } from 'components';

import { StyledForm, Input } from './index.styles';

type FilterWidgetProps = {
  onFilter(event: React.FormEvent<HTMLFormElement>): void;
};

export function FilterWidget({ onFilter }: Readonly<FilterWidgetProps>) {
  return (
    <StyledForm onSubmit={onFilter}>
      <Input name="firstName" placeholder="First name" />
      <Input name="lastName" placeholder="Last name" />
      <SelectManager name="managerId" />
      <SecondaryButton type="submit">Filter</SecondaryButton>
    </StyledForm>
  );
}
