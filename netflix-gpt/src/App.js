

import Body from "./component/Body";
import {ErrorBoundary} from 'react-error-boundary'

function App() {
  return (
    <ErrorBoundary>
      <div >
        <Body />
      </div>
    </ErrorBoundary>
  );
}

export default App;
