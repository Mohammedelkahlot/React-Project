
import Hiro from './componants/Hiro';
import About from './componants/About';
import Provide from './componants/Provide';
import ChooseMe from './componants/ChooseMe';
import Check from './componants/Check';
import Busniess from './componants/Busniess'
import  Expert from './componants/Expert';
import  Recent from './componants/Recent';
import Subscribe from './componants/Subscribe';
import Logos from './componants/Logods';

export default function Home() {
  return (
    <>
    <div className='max-x-[1220px]'>
 
      {/* <Heder/> */}
      <Hiro/>
      <About/>
      <Logos/>
      <Provide/>
      <ChooseMe/>
      <Check/>
      <Busniess/>
      <Expert/>
      <Recent/>
      <Subscribe/>
      {/* <Footer/> */}
    </div>
    </>
  );
}
