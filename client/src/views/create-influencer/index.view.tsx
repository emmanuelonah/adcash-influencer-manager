import { Link } from 'react-router-dom';

import { ROUTES } from 'routes';
import { PageWrapper } from 'layouts';

import { Form } from './components/form';

export function CreateInfluencer() {
  return (
    <PageWrapper>
      <title>📸 Create influencer | Adcash influencer manager</title>
      <Link to={ROUTES.home}>👈 Back</Link>
      <Form />
    </PageWrapper>
  );
}
