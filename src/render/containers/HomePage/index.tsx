import { store, useAppSelector } from "@redux/index";
import Navbar from '../../components/Navbar/navbar';
import Toolbar from '../../components/ToolBar/Toolbar';
import Content from '../../components/content/content';
const HomePage = () => {
 
  return (
    <div
      className="flex flex-col w-screen h-screen  bg-stone-200 items-start  justify-start  text-black/85"
    >
    <Navbar/>
    <Toolbar/>
    <Content/>
    </div>
  );
};

export default HomePage;
