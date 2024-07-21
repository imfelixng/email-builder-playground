import React, { useMemo } from "react";

import { useDocument } from "../../documents/editor/EditorContext";

import HighlightedCodePanel from "./helper/HighlightedCodePanel";
import renderToStaticMarkup from "../../documents/renderer/renderToStaticMarkup";

export default function HtmlPanel() {
  const document = useDocument();
  const code = useMemo(
    () => renderToStaticMarkup(document, { rootBlockId: "root" }),
    [document]
  );
  return <HighlightedCodePanel type="html" value={code} />;
}
