import { SelectManager, SecondaryButton, DangerButton } from 'components';

import { StyledForm, Input, ButtonWrapper } from './index.styles';

type FilterWidgetProps = {
  onFilter(event: React.FormEvent<HTMLFormElement>): void;
  onReset(event: React.MouseEvent<HTMLButtonElement>): void;
};

export function FilterWidget({ onFilter, onReset }: Readonly<FilterWidgetProps>) {
  return (
    <StyledForm onSubmit={onFilter}>
      <Input name="firstName" placeholder="First name" />
      <Input name="lastName" placeholder="Last name" />
      <SelectManager name="managerId" />
      <ButtonWrapper>
        <DangerButton type="reset" onClick={onReset}>
          Reset
        </DangerButton>
        <SecondaryButton type="submit">Filter</SecondaryButton>
      </ButtonWrapper>
    </StyledForm>
  );
}
