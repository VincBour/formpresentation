import React from "react";
import {
  ThemeProvider,
  CultureProvider,
  DatePickerUtilsProvider,
  ToasterProvider,
  CssBaseline,
} from "@talentsoft/design-system";

import DateFnsUtils from "@date-io/date-fns";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

const DesignSystemProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider scope="myUniqueScope">
      <DatePickerUtilsProvider utils={DateFnsUtils}>
        <ToasterProvider>
          <CultureProvider culture="en-GB">
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
          </CultureProvider>
        </ToasterProvider>
      </DatePickerUtilsProvider>
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
