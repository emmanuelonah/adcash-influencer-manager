import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Modal } from 'components';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>;

export const SuccessModal: StoryFn<typeof Modal> = () => (
  <Modal type="success" open position="top">
    Success submitted Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Modal>
);

export const ErrorModal: StoryFn<typeof Modal> = () => (
  <Modal type="error" open position="bottom">
    Failed to submit Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Modal>
);
