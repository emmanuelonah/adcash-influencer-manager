import { Manager as ManagerT } from 'InfluencerTypes';

import iconAvatar from './icn-avatar.png';

import { ManagerWrapper, Img } from './manager.styles';

type ManagerProps = {
  manager: ManagerT;
};

export function Manager({ manager }: Readonly<ManagerProps>) {
  return (
    <ManagerWrapper>
      <Img src={manager.imgUrl ?? iconAvatar} alt={manager.firstName} />
      <p>
        {manager.firstName} {manager.lastName}
      </p>
    </ManagerWrapper>
  );
}
