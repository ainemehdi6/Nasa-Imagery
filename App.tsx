// App.tsx

import React from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/NasaImageryFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
const App = () => {
  //return <LoginScreen />;
  //return <TermsScreen />;
  //return <NasaImageryFeedScreen />;
  return <QueryClientProvider client={queryClient}><StarshipFeedScreen /></QueryClientProvider>
};

export default App;