import { Navigate, Route, Routes } from "react-router-dom"

import { Navbar } from "../ui"
import { LoginPage } from "../auth"
import { DCPage,HeroesRoutes,MarvelPage } from "../heroes"

export const AppRouter = () => {
  return (
    <>        
        <Routes>            
            <Route path="login" element={ <LoginPage /> }/>             
            <Route path="/*" element={ <HeroesRoutes /> }/>             
        </Routes>
    </>
  )
}
