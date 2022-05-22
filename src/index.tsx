import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider} from 'react-query';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <App />
// );

const client = new QueryClient();


ReactDOM.render(
<QueryClientProvider client={client}>
<App/>
</QueryClientProvider>,
 document.getElementById('root'));
