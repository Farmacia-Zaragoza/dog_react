import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

const el = document.getElementById('root');

ReactDOM.render(<App 
                      data-common={el.getAttribute('data-comm')}
                      data-spec={el.getAttribute('data-spec')}
                      url={el.getAttribute('data-comm').slice(0,21)}/>
, document.getElementById('root'));
