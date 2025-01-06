import { Influencer } from 'InfluencerTypes';
import { composeClassNames as cx } from 'utils';
import { Modal, AsyncRenderer, SelectManager, SecondaryButton, LinkButton } from 'components';

import { useForm } from './useForm';
import { StyledForm, Input } from './form.styles';

function classNames(value: string) {
  const size = value.length;
  return cx(size > 50 && 'invalid', size > 0 && size < 51 && 'valid');
}

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
        className={classNames(form.firstName)}
        required
      />
      <Input
        name="lastName"
        placeholder="Last name"
        maxLength={50}
        value={form.lastName}
        onChange={form.onChangeLastName}
        className={classNames(form.lastName)}
        required
      />
      <SelectManager value={form.manager.id} onChange={form.onChangeManager} required />
      <LinkButton type="button" onClick={form.addInstagramInput}>
        Add more instagram handle
      </LinkButton>
      {form.instagramHandles.map(({ userName }, i) => (
        <Input
          key={`instagram-${i}`}
          name={`instagramHandle[${i}]`}
          placeholder="Instagram username"
          value={userName}
          onChange={(ev) => form.onChangeInstagramHandle(ev, i)}
          required
        />
      ))}
      <LinkButton type="button" onClick={form.addTiktokInput}>
        Add more tiktok handle
      </LinkButton>
      {form.tiktokHandles.map(({ userName }, i) => (
        <Input
          key={`tiktok-${i}`}
          name={`tiktokHandle[${i}]`}
          placeholder="Tiktok username"
          value={userName}
          onChange={(ev) => form.onChangeTiktokHandle(ev, i)}
          required
        />
      ))}
      <SecondaryButton type="submit">Submit</SecondaryButton>
    </StyledForm>
  );
}
