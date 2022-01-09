import './App.css';
import React from 'react';
import { Trans } from "@lingui/macro";
import { i18n } from "@lingui/core";

import { locales, dynamicActivate } from './i18n';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="h3-title"><Trans>Language switcher example: </Trans></h3>
        <div className="lang-container">
          {Object.values(locales).map((locale, index) => (
            <button type="button" onClick={() => dynamicActivate(Object.keys(locales)[index])} key={locale}>
              {locale}
            </button>
          ))}
        </div>
        <h3><Trans>Date formatter example:</Trans></h3>
        <div>
          <Trans>
          Today is {i18n.date(new Date(), {})}
          </Trans>
        </div>
      </header>
    </div>
  );
}

export default App;
