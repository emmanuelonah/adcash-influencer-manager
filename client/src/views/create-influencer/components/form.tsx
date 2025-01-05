import managers from 'models/influencer/managers.json';

import { Influencer } from 'InfluencerTypes';
import { Modal, AsyncRenderer } from 'components';
import { composeClassNames as cx } from 'utils';

import { useForm } from './useForm';
import { StyledForm, Input, AddButton, Select, SubmitButton } from './form.styles';

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
          <>
            <Modal open={form.isError} type="error">
              {form.error}
            </Modal>
            <Modal open={form.isSuccess} type="success">
              Influencer created successfully
            </Modal>
          </>
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
      <Select name="manager" value={form.manager.id} onChange={form.onChangeManager} required>
        <option value="">Select manager</option>
        {managers.map((manager) => (
          <option key={manager.id} value={manager.id}>
            {manager.firstName} {manager.lastName}
          </option>
        ))}
      </Select>
      <AddButton type="button" onClick={form.addInstagramInput}>
        Add more instagram handle
      </AddButton>
      {form.instagramHandles.map(({ userName }, i) => (
        <Input
          key={`instagram-${i}`}
          name={`instagramHandle[${i}]`}
          placeholder="Instagram username"
          value={userName}
          onChange={(ev) => form.onChangeInstagramHandle(ev, i)}
        />
      ))}
      <AddButton type="button" onClick={form.addTiktokInput}>
        Add more tiktok handle
      </AddButton>{' '}
      {form.tiktokHandles.map(({ userName }, i) => (
        <Input
          key={`tiktok-${i}`}
          name={`tiktokHandle[${i}]`}
          placeholder="Tiktok username"
          value={userName}
          onChange={(ev) => form.onChangeTiktokHandle(ev, i)}
        />
      ))}
      <SubmitButton type="submit">Submit</SubmitButton>
    </StyledForm>
  );
}
