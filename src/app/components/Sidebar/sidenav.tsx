import TopBar from '../Dashboard/TopBar'
import AccountToggle from './AccountToggle'
// import Search from './Search'
import Logout from './logout'
import NavLink from './navlink'

const SideNav = () => {
  return (
    // Adding flex layout to the wrapper so Logout stays pushed to the bottom
    <div className="flex h-full flex-col justify-between p-2 border-r border-gray-100">
      
      {/* Top Section */}
      <div className="overflow-y-auto sticky top-4 w-full">
        <AccountToggle />
        {/* <Search /> */}
        <NavLink />
      </div>
      
      {/* Bottom Section */}
      <div className="w-full pb-4">
        <Logout />
      </div>

    </div>
  )
}
export default SideNav
