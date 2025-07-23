import { Routes, Route } from 'react-router-dom';

import Home from '../src/Page/Home';
import MovieDetail from './Page/MovieDetail';
import Header from '../src/components/Header';

function App() {
    return (
        <div className="min-h-screen bg-[#131720] pb-6">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie/:slug" element={<MovieDetail />}></Route>
            </Routes>
        </div>
    );
}

export default App;
