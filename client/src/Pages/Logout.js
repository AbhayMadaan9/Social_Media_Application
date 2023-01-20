import React from 'react'
import {AuthContext} from '../Context/authContext'

export default function Logout() {
    //const [Signout, setSignout] = React.useState(false)
    const {logout} = React.useContext(AuthContext)
    React.useEffect(() => {
        logout();
    }, [])
  return (
    <div>
        <img src="https://user-images.githubusercontent.com/32613743/75488507-da3ad580-5986-11ea-9871-a451718e5053.png" alt="logout successfully" width="100%"/>
    </div>
  )
}
