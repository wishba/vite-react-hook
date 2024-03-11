import React, { useContext } from 'react'
import { UserContext } from '../App'

function PropDrillingLV3() {
  const user = useContext(UserContext)

  return (
    <p>{`Hello again, ${user}!`}</p>
  )
}

export default PropDrillingLV3