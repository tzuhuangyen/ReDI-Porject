import React, { useState, useEffect } from 'react';
import './App.css';
import Index from './Index';
import {
  ThemeGlobalProvider,
  useThemeGlobalContext,
} from './components/ThemeGlobalContext';

function App() {
  return (
    <ThemeGlobalProvider>
      <Index />
    </ThemeGlobalProvider>
  );
}

export default App;
