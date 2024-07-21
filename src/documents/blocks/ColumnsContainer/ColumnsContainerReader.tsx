import React from "react";

import { ColumnsContainer as BaseColumnsContainer } from "@usewaypoint/block-columns-container";

import { ColumnsContainerProps } from "./ColumnsContainerPropsSchema";
import { ReaderBlock } from "../../reader/core";

export default function ColumnsContainerReader({
  style,
  props,
}: ColumnsContainerProps) {
  const { columns, ...restProps } = props ?? {};
  let cols = undefined;
  if (columns) {
    cols = columns.map((col) =>
      col.childrenIds.map((childId) => (
        <ReaderBlock key={childId} id={childId} />
      ))
    );
  }

  return (
    <BaseColumnsContainer props={restProps} columns={cols} style={style} />
  );
}
