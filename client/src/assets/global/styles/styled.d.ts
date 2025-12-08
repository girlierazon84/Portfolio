// client/src/styles/styled.d.ts

import "styled-components";
import theme from "./theme";

type AppTheme = typeof theme;

// We intentionally extend without adding new members so styled-components
// picks up our theme shape, so we disable this lint rule here.
// eslint-disable @typescript-eslint/no-empty-interface
declare module "styled-components" {
    export interface DefaultTheme extends AppTheme {}
}
// eslint-enable @typescript-eslint/no-empty-interface
