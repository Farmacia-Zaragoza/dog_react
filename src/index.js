import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

const el = document.getElementById('root');

ReactDOM.render(<App 
                      data-common={el.getAttribute('data-comm-any')}
                      data-spec={el.getAttribute('data-spec-any')}
                      data-lang-common={el.getAttribute('data-comm-lang')}
                      data-lang-spec={el.getAttribute('data-spec-lang')}
                      url={el.getAttribute('data-comm-any').slice(0,21)}/>
, document.getElementById('root'));
