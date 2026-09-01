import { Outlet } from 'react-router-dom';
import Nav from '../Components/NavBar/Nav'
import SideBar from '../Components/SideBar/SideBar';


function DashBoardLayout({children}){
    return(
        <div className='min-h-screen bg-slate-50'>
            <Nav></Nav>

            <div className='flex'>
                <SideBar></SideBar>
                <main className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8' >
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    )
}

export default DashBoardLayout;