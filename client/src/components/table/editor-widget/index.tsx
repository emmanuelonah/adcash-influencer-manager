import React from 'react';

import { useBoolean } from 'hooks';
import { Portal } from 'components';

import { Header, Body, Container, EditButton, CancelButton } from './index.styles';

type EditorWidgetProp = {
  children: React.ReactNode;
};

export function EditorWidget({ children }: Readonly<EditorWidgetProp>) {
  const [isOpen, { toggle }] = useBoolean();

  return (
    <>
      <EditButton onClick={toggle}>Edit</EditButton>
      {isOpen && (
        <Portal elementType="editorwidget">
          <Container>
            <Header>
              <CancelButton onClick={toggle}>Cancel</CancelButton>
            </Header>
            <Body>{children}</Body>
          </Container>
        </Portal>
      )}
    </>
  );
}
