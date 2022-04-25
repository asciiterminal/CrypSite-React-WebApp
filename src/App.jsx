import { useSelector } from 'react-redux';

import { ConfigProvider } from 'antd';

import Router from "./router/Router";

export default function App() {
  const customise = useSelector(state => state.customise)

  return (
    <ConfigProvider direction={customise.direction}>
      <Router />
    </ConfigProvider>
  );
}