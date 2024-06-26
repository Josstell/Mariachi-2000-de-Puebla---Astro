import { css } from "@emotion/react";

export const Colors = {
  white: "#FFFFFF",
  whiteLighter: "#f5f5f5",
  dark: "#101118",
  darkLighter: "#20222e",
};

export const ThemeVar = css`
  :root {
    --primary: ${Colors.white};
    --primary-lighter: ${Colors.whiteLighter};
    --secondary: ${Colors.darkLighter};
    --tertiary: ${Colors.dark};
  }
`;

export const Theme = {
  primary: "var(--primary)",
  primaryLighter: "var(--primary-lighter)",
  secondary: "var(--secondary)",
  tertiary: "var(--tertiary)",
};
