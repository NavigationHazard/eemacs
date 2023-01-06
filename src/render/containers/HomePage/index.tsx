import { store, useAppSelector } from "@redux/index";
import ReactLogo from "@assets/icons/logo.svg";
import { useState } from "react";
import { incrementCounter, decrementCounter } from "@redux/reducers/count";
import { incrementChar, decrementChar } from "@redux/reducers/characters";

const HomePage = () => {
  const [show, setShow] = useState(true);

  const state = useAppSelector((state) => state);

  const increment = () => {
    store.dispatch(incrementChar());
    store.dispatch(incrementCounter(1));
  };

  const decrement = () => {
    store.dispatch(decrementChar(1));
    store.dispatch(decrementCounter());
  };

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex flex-col w-screen h-screen bg-slate-50 items-center justify-center p-12 text-black/85"
    >
      <img
        onClick={() => window.electron.openUrl("https://github.com/NavigationHazard/eemacs")}
        src={ReactLogo}
        className="mb-12 cursor-pointer"
        height={800}
        width={800}
      />

      <div className="font-bold mb-4">
       EMACS + Electron  = ♥
      </div>

      <div className="flex flex-row text-slate-700">
        By&nbsp;
        <div
          className="cursor-pointer hover:text-blue-400 hover:underline"
          onClick={() =>
            window.electron.openUrl("https://github.com/NavigationHazard/eemacs")
          }
        >
          <strong>NavigationHazard</strong>
        </div>
      </div>


      <div className="cursor-pointer p-4" onClick={() => setShow(!show)}>
        Click here to {show ? "hide" : "show"} your <strong>Redux</strong> store
      </div>

      <div className="flex flex-row text-slate-50">
        <button className="mr-4" onClick={increment}>
            Like          
        </button>
        <button onClick={decrement}>Dislike</button>
      </div>

      <div className="text-slate-50 p-2">
        <button
          onClick={async () => {
            window.electron.openPath(await window.store.getPath());
          }}
        >
          Open Store
        </button>
      </div>

      <div className="flex justify-center w-72">
        <button
          className="text-slate-50 mr-auto w-24 text-right"
          onClick={window.electron.quit}
        >
          Exit / Quit
        </button>
        <button className="text-slate-50 w-24" onClick={window.electron.minimize}>
          Minimize
        </button>
        <button
          className="text-slate-50 ml-auto w-24 text-left"
          onClick={window.electron.maximize}
        >
          Maximize
        </button>
      </div>
    </div>
  );
};

export default HomePage;
