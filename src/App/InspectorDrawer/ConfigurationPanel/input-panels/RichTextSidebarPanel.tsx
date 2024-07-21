import React, { useState } from "react";

import BaseSidebarPanel from "./helpers/BaseSidebarPanel";
import MultiStylePropertyPanel from "./helpers/style-inputs/MultiStylePropertyPanel";
import { RichTextProps } from "../../../../documents/blocks/block-rich-text";

type RichTextSidebarPanelProps = {
  data: RichTextProps;
  setData: (v: RichTextProps) => void;
};
export default function RichTextSidebarPanel({
  data,
  setData,
}: RichTextSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);

  const updateData = (d: any) => {
    // const res = RichTextPropsSchema.safeParse(d);
    // if (res.success) {
    //   setData(res.data);
    //   setErrors(null);
    // } else {
    //   setErrors(res.error);
    // }
    setData(d);
    setErrors(null);
  };

  return (
    <BaseSidebarPanel title="Rich Text block">
      <MultiStylePropertyPanel
        names={[
          "color",
          "backgroundColor",
          "fontFamily",
          "fontSize",
          "fontWeight",
          "textAlign",
          "padding",
        ]}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
