import { Icon } from "../icon/Icon";
import {animateScroll as scroll} from 'react-scroll';

export const Logo: React.FC = () => {
  return (
    <a onClick={()=>{scroll.scrollToTop()}} style={{color: "#7572d5"}}>
      <Icon iconId={"code"} />
    </a>
  );
};

