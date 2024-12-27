import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import ClientThemeWrapper from "./theme/ClientThemeWrapper";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ClientThemeWrapper>
          <Routes />
        </ClientThemeWrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
