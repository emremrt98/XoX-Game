import Xox from './xox';
import { useState } from 'react';
import './main.css'
function App() {
  const [state, setState] = useState(true);

  return (
    <div >
      <div className="App">
        <div>
          <Xox state={state} setState={setState} />
          <Xox state={state} setState={setState} />
          <Xox state={state} setState={setState} />
        </div>
        <div>
          <Xox state={state} setState={setState} />
          <Xox state={state} setState={setState} />
          <Xox state={state} setState={setState} />
        </div>
        <div>
          <Xox state={state} setState={setState} />
          <Xox state={state} setState={setState} />
          <Xox state={state} setState={setState} />
        </div>
      </div>

    </div>
  );
}

export default App;
