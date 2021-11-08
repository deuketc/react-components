import FunctionalComponent from './components/01_FunctionalComponent/FunctionalComponent';
import ComponentFragments from './components/02_Fragments/Fragments';
import ComponentPropsParent from './components/03_Props/PropsParent';
import ComponentState from './components/04_ComponentState/ComponentState';
import ComponentWithStyle from './components/05_CSSModules/ComponentWithStyle';
import FetchDataComponent from './components/06_FetchingData/FetchDataComponent';
import UsingCustomHook from './components/07_CustomHook/UsingCustomHook';

function App() {
  return (
    <main>
      <FunctionalComponent />
      <hr />
      <ComponentFragments />
      <hr />
      <ComponentPropsParent />
      <hr />
      <ComponentState />
      <hr />
      <ComponentWithStyle />
      <hr />
      <FetchDataComponent />
      <hr />
      <UsingCustomHook />
    </main>
  );
}

export default App;
