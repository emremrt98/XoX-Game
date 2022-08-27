import Xox from './xox';
import { useEffect, useState } from 'react';
import './main.css'


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
  const [res, setRes] = useState("");
  const result = () => {
    if (state === true) {
      setRes("Kazanan O");
    } else {
      setRes("Kazanan X")
    }
  }

  useEffect(() => {
    const { a0, a1, a2, a3, a4, a5, a6, a7, a8 } = control;
    let loseOrWin = false;


    if ((a0 === 'X' && a1 === 'X' && a2 === 'X') || (a0 === 'O' && a1 === 'O' && a2 === 'O')) {
      loseOrWin = true;
      result();

    } else if ((a3 === 'X' && a4 === 'X' && a5 === 'X') || (a3 === 'O' && a4 === 'O' && a5 === 'O')) {
      loseOrWin = true;
      result();

    } else if ((a6 === 'X' && a7 === 'X' && a8 === 'X') || (a6 === 'O' && a7 === 'O' && a8 === 'O')) {
      loseOrWin = true;
      result();

    } else if ((a0 === 'X' && a4 === 'X' && a8 === 'X') || (a0 === 'O' && a4 === 'O' && a8 === 'O')) {
      loseOrWin = true;
      result();

    } else if ((a6 === 'X' && a4 === 'X' && a2 === 'X') || (a6 === 'O' && a4 === 'O' && a2 === 'O')) {
      loseOrWin = true;
      result();

    } else if ((a6 === 'X' && a3 === 'X' && a0 === 'X') || (a6 === 'O' && a3 === 'O' && a0 === 'O')) {
      loseOrWin = true;
      result();

    } else if ((a1 === 'X' && a4 === 'X' && a7 === 'X') || (a1 === 'O' && a4 === 'O' && a7 === 'O')) {
      loseOrWin = true;
      result();

    } else if ((a2 === 'X' && a5 === 'X' && a8 === 'X') || (a2 === 'O' && a5 === 'O' && a8 === 'O')) {
      loseOrWin = true;
      result();

    }

    else if (a0 !== '' && a1 !== '' && a2 !== '' && a3 !== '' && a4 !== '' && a5 !== '' && a6 !== '' && a7 !== '' && a8 !== '' && state === false) {

      setRes("Berabere")
    }

  }, [control])
  return (

    <div >
      <h1 style={{ textAlign: "center" }}>{res}</h1>
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
      </div>



    </div >
  );
}

export default App;
