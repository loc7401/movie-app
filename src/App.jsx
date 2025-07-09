import Header from './components/Header';
import MainSlide from './components/SwipperSlides';
import KindMovies from './components/KindMovies';

function App() {
    return (
        <div className="min-h-screen bg-[#131720]">
            <Header></Header>
            <MainSlide />
            <KindMovies />
        </div>
    );
}

export default App;
