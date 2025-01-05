import { useRef } from 'react';
import { Info } from '@styled-icons/material-outlined';

import { useBoolean } from 'hooks';
import { Tooltip } from 'components';
import { InfluencerModel } from 'models';
import { designTokens } from 'design-system';
import { SocialMediaHandle } from 'InfluencerTypes';

import { ViewAccounts, ListItem, Link } from './social-media-handles.styles';

const Icons = {
  instagram: designTokens.assets.IconInstagram,
  tiktok: designTokens.assets.IconTiktok,
};

type SocialMediaHandlesProps = {
  socialMediaHandles: SocialMediaHandle[];
};

export function SocialMediaHandles({ socialMediaHandles }: Readonly<SocialMediaHandlesProps>) {
  const [isOpen, { toggle, setToFalse }] = useBoolean();
  const viewAccountsRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <ViewAccounts ref={viewAccountsRef} onClick={toggle}>
        <Info size={15} />
        <span>View Accounts</span>
      </ViewAccounts>
      <Tooltip open={isOpen} onClose={setToFalse} excludedRefs={[viewAccountsRef]}>
        <ul>
          {socialMediaHandles.map(({ type, userName }, i) => {
            const Icon = Icons[type];
            return (
              <ListItem key={i.toString()}>
                <Link href={InfluencerModel.makeSocialMediaUrl(type, userName)} target="_blank">
                  <Icon />
                  <span>{userName}</span>
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </Tooltip>
    </>
  );
}
