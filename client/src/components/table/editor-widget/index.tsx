import React from 'react';

import { useBoolean } from 'hooks';
import { Portal, LinkButton, Heading1 } from 'components';

import { Header, Body, Container, CancelButton, ChildrenWrapper } from './index.styles';

type EditorWidgetProp = {
  title?: string;
  children: React.ReactNode;
};

export function EditorWidget({ title, children }: Readonly<EditorWidgetProp>) {
  const [isOpen, { toggle }] = useBoolean();

  return (
    <>
      <LinkButton type="button" onClick={toggle}>
        Edit
      </LinkButton>
      {isOpen && (
        <Portal elementType="editorwidget">
          <Container>
            <Header>
              <CancelButton onClick={toggle}>Cancel</CancelButton>
            </Header>
            <Body>
              {title && <Heading1>{title}</Heading1>}
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Body>
          </Container>
        </Portal>
      )}
    </>
  );
}
