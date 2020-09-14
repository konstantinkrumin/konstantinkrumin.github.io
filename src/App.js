import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './helpers/fontAwesome';
import './styles/main.scss';

import englishText from './data/englishText';
import russianText from './data/russianText';

import Navbar from './components/navbar-components/Navbar';
import Footer from './components/footer-components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Context from './context';

export default function App() {
  const DEFAULT_TEXT_CONTENT = englishText;
  const DEFAULT_LANGUAGE_TOGGLE = false;

  const [textContent, setTextContent] = useState(DEFAULT_TEXT_CONTENT);
  const [languageToggle, setLanguageToggle] = useState(DEFAULT_LANGUAGE_TOGGLE);

  function handleSwitch() {
    languageToggle === false
      ? setTextContent(russianText)
      : setTextContent(englishText);
    setLanguageToggle(!languageToggle);
  }

  return (
    <Router>
      <Context.Provider value={{ textContent, FontAwesomeIcon, handleSwitch }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </Context.Provider>
    </Router>
  );
}
