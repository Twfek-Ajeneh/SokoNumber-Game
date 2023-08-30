//import react
import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';

//import components
import Home from '../pages/Home/Home';
import Game from '../pages/Game/Game';
import NotFound from '../pages/Not Found Page/NotFound';

function AllRoutes(){
    return (
        <Routes>
            <Route index element = {<Navigate replace to='/sokonumber'/>} />
            <Route path="/sokonumber/*" >
                <Route index element = {<Navigate replace to='home'/>} />
                <Route path='home'  element = {<Home />} />
                <Route path='play/:level/:method' element = {<Game />}/>
                <Route path="*" element = {<NotFound />} />
            </Route>
            <Route path="*" element = {<NotFound />} />
        </Routes>
    );
}

export default AllRoutes;