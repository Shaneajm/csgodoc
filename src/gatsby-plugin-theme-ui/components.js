import React from "react";

import GuideList from "../components/guide-list";
import CodeBlock from "../components/code-block";

export default {
  GuideList,
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>
};
