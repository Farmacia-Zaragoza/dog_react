import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

const el = document.getElementById('root');

ReactDOM.render(<App 
                      data-common={el.getAttribute('data-common')}
                      data-spec={el.getAttribute('data-spec')}
                      data-lang-common={el.getAttribute('data-lang-common')}
                      data-lang-spec={el.getAttribute('data-lang-spec')}/>
, document.getElementById('root'));
