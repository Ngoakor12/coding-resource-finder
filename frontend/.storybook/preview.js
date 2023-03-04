import { ContextProvider } from "../src/AppContext";
import "../src/App.css";
import { BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <Story />
      </Router>
    </ContextProvider>
  ),
];
