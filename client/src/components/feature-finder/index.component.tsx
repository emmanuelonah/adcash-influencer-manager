import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useBoolean } from 'hooks';
import { Tooltip } from 'components';

import { useFeatureFinder } from './useFeatureFinder';
import { Input, Item } from './index.styles';

export function FeatureFinder() {
  const { features, onSearch } = useFeatureFinder();
  const [isOpen, { setToTrue, setToFalse }] = useBoolean();
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef}>
      <Input
        type="search"
        name="feature"
        placeholder="Find feature quickly 🔦🤩🏎️"
        onChange={onSearch}
        onFocus={setToTrue}
      />
      <Tooltip open={isOpen} onClose={setToFalse} excludedRefs={[wrapperRef]}>
        <ul>
          {features.map((feature) => (
            <Item key={feature.id}>
              <Link to={feature.path}>{feature.name}</Link>
            </Item>
          ))}
        </ul>
      </Tooltip>
    </div>
  );
}
