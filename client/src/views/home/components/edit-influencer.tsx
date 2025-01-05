import { Influencer } from 'InfluencerTypes';
import { AsyncRenderer, SelectManager, PrimaryButton, Modal } from 'components';

import { StyledForm } from './edit-influencer.styles';
import { useEditInfluencer } from './useEditInfluencer';

type EditInfluencerProps = {
  influencerId: string;
};

export function EditInfluencer({ influencerId }: Readonly<EditInfluencerProps>) {
  const influencer = useEditInfluencer();

  return (
    <StyledForm onSubmit={influencer.onSubmit(influencerId)}>
      <AsyncRenderer<Influencer>
        isLoading={influencer.isPending}
        error={influencer.error}
        hasData={true}
      >
        {(_) => (
          <Modal open={influencer.isSuccess} type="success" position="center">
            Influencer updated successfully
          </Modal>
        )}
      </AsyncRenderer>
      <SelectManager placeholder="Update manager" required />
      <PrimaryButton type="submit">Save</PrimaryButton>
    </StyledForm>
  );
}
