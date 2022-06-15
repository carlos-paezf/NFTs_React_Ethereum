import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'

import Error404 from './containers/errors/Error404';
import Create from './containers/pages/Create';
import Home from './containers/pages/Home';
import store from './store'


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/create" element={<Create />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Router>
        </Provider>
    );
}


export default App;
