import { ContextProvider } from "../src/appContext";
import "../src/App.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ContextProvider>
      <Story />
    </ContextProvider>
  ),
];
