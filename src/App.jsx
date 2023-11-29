import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from'./components';
const App = () => {
  

  return (
     
    <BrowserRouter>
    <div className="relative z-0 bg-gradient-to-r from-[#9D3E1A] to-blue-700 ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-x-hidden">
        <Navbar />
        <Hero />

         </div>
         <About />
         <Tech />
         <Works />
         <div className="relative z-0">
          <Contact />
          <StarsCanvas />
         </div>
      </div>
      </BrowserRouter>
  )

}

export default App
