import React from "react";

import { Container as BaseContainer } from "@usewaypoint/block-container";

import { ContainerProps } from "./ContainerPropsSchema";
import { ReaderBlock } from "../../reader/core";

export default function ContainerReader({ style, props }: ContainerProps) {
  const childrenIds = props?.childrenIds ?? [];
  return (
    <BaseContainer style={style}>
      {childrenIds.map((childId) => (
        <ReaderBlock key={childId} id={childId} />
      ))}
    </BaseContainer>
  );
}
