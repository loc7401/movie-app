import Header from './components/Header';
import MainSlide from './components/SwipperSlides';
import CatalogNav from './components/Navbar/CatalogNav';
import ListMovie from './components/ListMovies';
function App() {
    return (
        <div className="min-h-screen bg-[#131720]">
            <Header></Header>
            <MainSlide></MainSlide>
            <CatalogNav></CatalogNav>
            <ListMovie />
        </div>
    );
}

export default App;
