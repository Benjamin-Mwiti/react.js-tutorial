import React, {useReducer} from 'react';
import './App.css';
/* import Counter from './Components/Counter';
import DC_Comics from './Components/DC_Comics';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/ConditionalRendering';
import NameList from './Components/NameList';
import Form from './Components/Form';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter'; */
// import ComponentC from './Components/ComponentC';
/* import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import HookCounter from './React Hooks/HookCounter';
import HookCounterTwo from './React Hooks/HookCounterTwo';
import HookCounterThree from './React Hooks/HookCounterThree';
import HookCounterFour from './React Hooks/HookCounterFour';
import UseEffectCounter from './React Hooks/UseEffectCounter';
import HookMouse from './React Hooks/HookMouse';
import MouseContainer from './React Hooks/MouseContainer';
import IntervalHookCounter from './React Hooks/IntervalHookCounter';
import ComponentC from './React Hooks/ComponentC';
import CounterOne from './React Hooks/CounterOne';
import CounterTwo from './React Hooks/CounterTwo';
import CounterThree from './React Hooks/CounterThree'; */
import AComponent from './React Hooks/AComponent';
import BComponent from './React Hooks/BComponent';
import CComponent from './React Hooks/CComponent';
import DataFetchingOne from './React Hooks/DataFetchingOne';
import DataFetchingTwo from './React Hooks/DataFetchingTwo';
import ParentComponent from './React Hooks/ParentComponent';
import Counter from './React Hooks/Counter';
import FocusInput from './React Hooks/FocusInput';
import ClassTimer from './React Hooks/ClassTimer';
import HookTimer from './React Hooks/HookTimer';
import DocTitleOne from './React Hooks/DocTitleOne';
import DocTitleTwo from './React Hooks/DocTitleTwo';
import CustomCounterOne from './React Hooks/CustomCounterOne';
import CustomCounterTwo from './React Hooks/CustomCounterTwo';
// import { UserProvider } from './Components/userContext';
// import Greet from './Components/Greet';
// import Welcome from './Components/Welcome';

/* export const UserContext = React.createContext();
export const ChannelContext = React.createContext(); */

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        case 'reset':
            return initialState;
            break;
    
        default:
            return state;
            break;
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CustomCounterOne/>
      <CustomCounterTwo/>
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <h2>Count - {count}</h2>
        <AComponent/>
        <BComponent/>
        <CComponent/>
      </CountContext.Provider> */}
      {/* <UserContext.Provider value={"Benjamin"}>
        <ChannelContext.Provider value={"Micate"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UserProvider value="Benjamin">
        <ComponentC/>
      </UserProvider> */}
    </div>
  );
}

export default App;
