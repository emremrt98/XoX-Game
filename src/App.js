import Xox from './xox';
import { useState } from 'react';
import './main.css'

function App() {
  const [state, setState] = useState(true);
  const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];



  return (

    < div >
      <div className="App">
        <div>
          <Xox value={0} state={state} setState={setState} />
          <Xox value={1} state={state} setState={setState} />
          <Xox value={2} state={state} setState={setState} />
        </div>
        <div>
          <Xox value={3} state={state} setState={setState} />
          <Xox value={4} state={state} setState={setState} />
          <Xox value={5} state={state} setState={setState} />
        </div>
        <div>
          <Xox value={6} state={state} setState={setState} />
          <Xox value={7} state={state} setState={setState} />
          <Xox value={8} state={state} setState={setState} />
        </div>
      </div>

    </div >
  );
}

export default App;
