import React from 'react';
import ContactList from './components/ContactList'
import ContactProvider from './contexts/ContactContext';
import Head from './components/Head'

const App = () => {
    return (
      <ContactProvider>
        <Head />
        <ContactList />
      </ContactProvider>
    );
  };

export default App;