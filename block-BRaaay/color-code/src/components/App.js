import Colors  from "./Colors";
import colors from './colors.json'


function App() {
  return Object.keys(colors).map(key => <Colors name={key} allCOlors={colors[key]}/>);
}

export default App;
