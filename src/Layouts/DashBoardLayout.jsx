import Nav from '../Components/NavBar/Nav'
import SideBar from '../Components/SideBar/SideBar';


function DashBoardLayout({children}){
    return(
        <div>
            <Nav></Nav>

            <div>
                <SideBar></SideBar>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashBoardLayout;