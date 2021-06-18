import { Tab, Tabs } from "@talentsoft/design-system";
import React from "react";
import { useHistory } from "react-router-dom";

export const Navigation = () => {
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  
  React.useEffect(() => {
    switch (history.location.pathname) {
      case '/':
        setValue(0);
        break;
      case '/classicForm':
      setValue(1);
      break;
      case '/talentsoftForm':
        setValue(2);
        break;
      case '/formGenerator':
        setValue(3);
        break;
      case '/manage':
        setValue(4);
        break;
      default:
        break;
    }
  }, [])

  const handleChange = React.useCallback(
    (event, newValue) => {
      setValue(newValue);
      switch (newValue) {
        case 0: {
          history.push("/");
          break;
        }
        case 1: {
          history.push("/classicForm");
          break;
        }
        case 2: {
          history.push("/talentsoftForm");
          break;
        }
        case 3: {
          history.push("/formGenerator");
          break;
        }
        case 4: {
          history.push("/manage");
          break;
        }
      }
    },
    [setValue]
  );
  return (
    <Tabs
      value={value}
      // @ts-ignore https://github.com/mui-org/material-ui/issues/17454
      onChange={handleChange}
    >
      <Tab label="Home" />
      <Tab label="Classic Form" />
      <Tab label="Talentsoft Form" />
      <Tab label="FormGenerator" />
      <Tab label="Manage Fields" />
    </Tabs>
  );
};
