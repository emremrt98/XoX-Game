import Xox from './xox';
import { useEffect, useState } from 'react';
import './main.css'
import { Alert } from 'bootstrap';

function App() {
  const [state, setState] = useState(true);

  const [control, setControl] = useState({
    a0: "",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    a5: "",
    a6: "",
    a7: "",
    a8: ""
  })

  useEffect(() => {
    const { a0, a1, a2, a3, a4, a5, a6, a7, a8 } = control;

    const winner = (state ? "O" : "X")
    const win1 = (a0 === 'X' && a1 === 'X' && a2 === 'X') || (a0 === 'O' && a1 === 'O' && a2 === 'O');
    const win2 = (a3 === 'X' && a4 === 'X' && a5 === 'X') || (a3 === 'O' && a4 === 'O' && a5 === 'O');
    const win3 = (a6 === 'X' && a7 === 'X' && a8 === 'X') || (a6 === 'O' && a7 === 'O' && a8 === 'O');
    const win4 = (a0 === 'X' && a4 === 'X' && a8 === 'X') || (a0 === 'O' && a4 === 'O' && a8 === 'O');
    const win5 = (a6 === 'X' && a4 === 'X' && a2 === 'X') || (a6 === 'O' && a4 === 'O' && a2 === 'O');
    const win6 = (a6 === 'X' && a3 === 'X' && a0 === 'X') || (a6 === 'O' && a3 === 'O' && a0 === 'O');
    const win7 = (a1 === 'X' && a4 === 'X' && a7 === 'X') || (a1 === 'O' && a4 === 'O' && a7 === 'O');
    const win8 = (a2 === 'X' && a5 === 'X' && a8 === 'X') || (a2 === 'O' && a5 === 'O' && a8 === 'O')
    if (win1) {
      alert(`Kazanan ${winner}`)
    } else if (win2) {
      alert(`Kazanan ${winner}`)
    } else if (win3) {
      alert(`Kazanan ${winner}`)
    } else if (win4) {
      alert(`Kazanan ${winner}`)
    } else if (win5) {
      alert(`Kazanan ${winner}`)
    } else if (win6) {
      alert(`Kazanan ${winner}`)
    } else if (win7) {
      alert(`Kazanan ${winner}`)
    } else if (win8) {
      alert(`Kazanan ${winner}`)
    }
  }, [control])
  return (

    <div className='App'>

      <div>
        <Xox setControl={setControl} value={"a0"} state={state} setState={setState} />
        <Xox setControl={setControl} value={"a3"} state={state} setState={setState} />
        <Xox setControl={setControl} value={"a6"} state={state} setState={setState} />
      </div>
      <div>
        <Xox setControl={setControl} value={"a1"} state={state} setState={setState} />
        <Xox setControl={setControl} value={"a4"} state={state} setState={setState} />
        <Xox setControl={setControl} value={"a7"} state={state} setState={setState} />
      </div>
      <div>
        <Xox setControl={setControl} value={"a2"} state={state} setState={setState} />
        <Xox setControl={setControl} value={"a5"} state={state} setState={setState} />
        <Xox setControl={setControl} value={"a8"} state={state} setState={setState} />
      </div>



    </div >
  );
}

export default App;
