import { useState } from "react";
import { incrementCounter, decrementCounter } from "@redux/reducers/count";
import { incrementChar, decrementChar } from "@redux/reducers/characters";
import ReactLogo from "@assets/icons/logo.svg";
import FileViewer from '../../components/FileViewer/Fileviewer'; 
import StatusLine from '../../components/StatusLine/StatusLine';
export default function Content(){
return(
      <div className="h-full w-full flex flex-col flex-nowrap justify-between">
      <div className="bg-slate-stone px-3 h-full">
            <FileViewer/>
     </div>       
<div>
            <StatusLine/>
   </div>
      </div>
);

}
