import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Vloger = lazy(() => import('./pages/Vloger'));
const Playlist = lazy(() => import('./pages/Playlist'));
const Japan = lazy(() => import('./pages/Japan'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/today' element={<Today />} />
                    <Route path='/vloger' element={<Vloger />} />
                    <Route path='/playlist' element={<Playlist />} />
                    <Route path='/japan' element={<Japan />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
