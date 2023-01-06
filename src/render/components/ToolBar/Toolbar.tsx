
import FileLogo from "@assets/icons/system-icons/beschaftigungsmoglichkeiten.png";
import FolderLogo from "@assets/icons/system-icons/leerer-ordner.png";
import CutLogo from "@assets/icons/system-icons/cut.png";
import PasteLogo from "@assets/icons/system-icons/paste.png";
import CopyLogo from "@assets/icons/system-icons/copy.png";
import ArchiveLogo from "@assets/icons/system-icons/dateispeicher.png";
import PrintLogo from "@assets/icons/system-icons/printer.png";
import SaveLogo from "@assets/icons/system-icons/save.png";
import UndoLogo from "@assets/icons/system-icons/undo.png";
import SearchLogo from "@assets/icons/system-icons/search.png";
import CancelLogo from "@assets/icons/system-icons/cancel.png";
export default function Toolbar (){
    return (
        <div className="flex gap-4 py-3 px-3 top-0 items-center justify-start text-sm bg-stone-200  w-full
         border-b-black/10 border-[1px] ">
         <img src={FileLogo} height={22} width={22} className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <img src={FolderLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <img src={ArchiveLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <img src={CancelLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <img src={SaveLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <div className="h-full w-[1px] bg-black/10"></div>
         <img src={UndoLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <div className="h-full w-[1px] bg-black/10"></div>
         <img src={CutLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <img src={CopyLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <img src={PasteLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
         <img src={SearchLogo} height={22} width={22}className="drop-shadow-md cursor-pointer transform hover:scale-125"/>
        </div>
    );
}
