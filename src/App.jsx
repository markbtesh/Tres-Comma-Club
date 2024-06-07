import { BrowserRouter } from 'react-router-dom';

import { About, Hero, Particles} from'./components';
const App = () => {
  

  return (
     
    <BrowserRouter>
    
    <div className="relative z-0 bg-gradient-to-r from-[#eff4f8] to-[white] ">
      <div className=" overflow-x-hidden">
       
        <Hero />
     
         </div>
         <About />
         
         
      </div>
      </BrowserRouter>
  )

}

export default App
