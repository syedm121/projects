import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';
import About from './pages/About.jsx';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';
function App() {
 



  return (
   <FeedbackProvider>
    <Router>
      <Header/>
      <Route path='/' exact >
      <div className='container'> 
        <Feedbackform />
        <Feedbackstats />
        <FeedbackList  />
        <AboutIconLink/>
      </div>
      </Route>
     
      <Route path='/about' component={About} />
    </Router>
  </FeedbackProvider>
  );
}

export default App;
