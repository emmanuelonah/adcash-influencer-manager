import { Influencer } from 'InfluencerTypes';
import { Modal, AsyncRenderer, SelectManager, SecondaryButton, LinkButton } from 'components';

import IconRemove from 'design-system/assets/icn-red-cancel.png';

import { useForm } from './useForm';
import { StyledForm, Input, HandleWrapper, RemoveHandle } from './form.styles';

const ZERO = 0;

export function Form() {
  const form = useForm();

  return (
    <StyledForm onSubmit={form.onSubmit}>
      <AsyncRenderer<Influencer> isLoading={form.isPending} error={form.error} hasData={true}>
        {(_) => (
          <Modal open={form.isSuccess} type="success">
            Influencer created successfully
          </Modal>
        )}
      </AsyncRenderer>
      <Input
        name="firstName"
        placeholder="First name"
        maxLength={50}
        value={form.firstName}
        onChange={form.onChangeFirstName}
        className={form.nameValidationClassName(form.firstName)}
        required
      />
      <Input
        name="lastName"
        placeholder="Last name"
        maxLength={50}
        value={form.lastName}
        onChange={form.onChangeLastName}
        className={form.nameValidationClassName(form.lastName)}
        required
      />
      <SelectManager value={form.manager.id} onChange={form.onChangeManager} required />
      <LinkButton type="button" onClick={form.addInstagramInput}>
        Add more instagram handle
      </LinkButton>
      {form.instagramHandles.map(({ userName }, i) => (
        <HandleWrapper key={`instagram-${i}`}>
          <Input
            name={`instagramHandle[${i}]`}
            placeholder="Instagram username"
            value={userName}
            onChange={(ev) => form.onChangeInstagramHandle(ev, i)}
            className={form.instagramValidationClassName(i)}
            required
          />
          {i != ZERO && (
            <RemoveHandle
              type="button"
              title="Remove handle"
              aria-label="Remove handle"
              onClick={() => form.onRemoveInstagramHandle(i)}
            >
              <img src={IconRemove} alt="Remove handle" />
            </RemoveHandle>
          )}
        </HandleWrapper>
      ))}
      <LinkButton type="button" onClick={form.addTiktokInput}>
        Add more tiktok handle
      </LinkButton>
      {form.tiktokHandles.map(({ userName }, i) => (
        <HandleWrapper key={`tiktok-${i}`}>
          <Input
            name={`tiktokHandle[${i}]`}
            placeholder="Tiktok username"
            value={userName}
            onChange={(ev) => form.onChangeTiktokHandle(ev, i)}
            className={form.tiktokValidationClassName(i)}
            required
          />
          {i != ZERO && (
            <RemoveHandle
              type="button"
              title="Remove handle"
              aria-label="Remove handle"
              onClick={() => form.onRemoveTiktokHandle(i)}
            >
              <img src={IconRemove} alt="Remove handle" />
            </RemoveHandle>
          )}
        </HandleWrapper>
      ))}
      <SecondaryButton type="submit" disabled={form.isSubmitDisabled}>
        Submit
      </SecondaryButton>
    </StyledForm>
  );
}
