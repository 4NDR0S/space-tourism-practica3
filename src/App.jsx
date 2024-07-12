import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Destination from './components/Destination/Destination'
import DestinationDetail from './components/Destination/DestinationDetail'
import Crew from './components/Crew/Crew'
import CrewDetail from './components/Crew/CrewDetail'
import Technology from './components/Technology/Technology'
import TechnologyDetail from './components/Technology/TechnologyDetail'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />

                <Route path="/destination" element={<Destination />}>
                    <Route path="moon" element={<DestinationDetail destination="Moon" />} />
                    <Route path="mars" element={<DestinationDetail destination="Mars" />} />
                    <Route path="europa" element={<DestinationDetail destination="Europa" />} />
                    <Route path="titan" element={<DestinationDetail destination="Titan" />} />
                    <Route index element={<Navigate to="moon" />} />
                </Route>

                <Route path="/crew" element={<Crew/>}>
                  <Route path="douglas" element={<CrewDetail crew="Douglas" />} />
                  <Route path="mark" element={<CrewDetail  crew="Mark" />} />
                  <Route path="victor" element={<CrewDetail  crew="Victor" />} />
                  <Route path="anousheh" element={<CrewDetail  crew="Anousheh" />} />
                  <Route index element={<Navigate to="douglas" />} />
                </Route>

                <Route path='/technology' element={<Technology/>}>
                  <Route path="launch" element={<TechnologyDetail techno="Launch" />} />
                  <Route path="spaceport" element={<TechnologyDetail  techno="Spaceport" />} />
                  <Route path="capsule" element={<TechnologyDetail  techno="Capsule" />} />
                  <Route index element={<Navigate to="launch" />} />
                </Route>


                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
