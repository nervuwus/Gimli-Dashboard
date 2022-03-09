import React from 'react';

import './styles/base.css';

function App() {

  return (

    <div>
        <div className="flex flex-col items-center">
        <h1 className="text-7xl font-bold underline text-center">Gimli Dashboard</h1>
        <nav className="text-center border-2 rounded-sm border-black bordre-solid py-10 my-10 w-1/2">
            <a className="text-blue-800 hover:underline hover:font-bold" href="http://localhost:4000/auth">Connection</a> { " | " }
            <a className="text-blue-800 hover:underline hover:font-bold" href="https://discord.com/oauth2/authorize?client_id=873999791430967296&scope=bot&permissions=12818312313" target='_blank'>Invite</a> { " | " }
            <a className="text-blue-800 hover:underline hover:font-bold" href="http://localhost:3000/about">About</a>
        </nav>

        <h2 className="font-bold text-4xl">Choose your flavour</h2>
        </div>

        <div className="relative">
            <div className="absolute left-2 border-2 rounded-sm border-red-600 bordre-solid py-10 my-10 w-2/5 text-center">Communism</div>
            <div className="absolute right-2 border-2 rounded-sm border-blue-600 border-solid py-10 my-10 w-2/5 text-center">Capitalism</div>
        </div>
    </div>
  );
}

export default App;
