import { BrowserRouter } from 'react-router-dom';
import '../shared/styles/global.css';

import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
