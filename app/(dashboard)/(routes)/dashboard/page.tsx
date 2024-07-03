import {UserButton} from "@clerk/nextjs"
const DashBoardPage = () => {
    return (
       
        <div>
            <p>DahboardPage</p>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}
export default DashBoardPage;