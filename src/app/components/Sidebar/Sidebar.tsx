import React from 'react'
import AccountToggle from './AccountToggle'
// import Search from './Search'
import RouteSelect from './RouteSelect'
import Logout from './logout'

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 w-24 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        {/* <Search /> */}
        <RouteSelect />

      </div>
      <div>
        <Logout />
      </div>
    </div>
  )
}
export default Sidebar