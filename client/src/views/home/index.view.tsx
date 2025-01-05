import { ROUTES } from 'routes';
import { formatDate } from 'utils';
import { PageWrapper } from 'layouts';
import { AsyncRenderer, Table } from 'components';
import { useGetInfluencersPresenter } from 'models';
import { InfluencerResponse } from 'InfluencerTypes';

import { Manager } from './components/manager';
import { AddInfluencer, AddInfluencerWrapper } from './index.styles';
import { SocialMediaHandles } from './components/social-media-handles';

export function Home() {
  const { isLoading, error, data, hasData } = useGetInfluencersPresenter();

  return (
    <PageWrapper>
      <AddInfluencerWrapper>
        <AddInfluencer to={ROUTES.addInfluencer}>Add influencer</AddInfluencer>
      </AddInfluencerWrapper>
      <AsyncRenderer<InfluencerResponse[]>
        isLoading={isLoading}
        error={error}
        data={data}
        hasData={hasData}
        loader={<Table.Loader />}
      >
        {(data: InfluencerResponse[]) => (
          <Table.Root>
            <Table.Header>
              <Table.Th>Name</Table.Th>
              <Table.Th>Social Medias</Table.Th>
              <Table.Th>Manager</Table.Th>
              <Table.Th>Created At</Table.Th>
            </Table.Header>

            <Table.Body>
              {data.map((influencer) => (
                <Table.Tr key={influencer._id}>
                  <Table.Td>
                    {influencer.firstName} {influencer.lastName}
                  </Table.Td>
                  <Table.Td>
                    <SocialMediaHandles socialMediaHandles={influencer.socialMediaHandles} />
                  </Table.Td>
                  <Table.Td>
                    <Manager manager={influencer.manager} />
                  </Table.Td>
                  <Table.Td>{formatDate(influencer.createdAt)}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Body>
          </Table.Root>
        )}
      </AsyncRenderer>
    </PageWrapper>
  );
}
