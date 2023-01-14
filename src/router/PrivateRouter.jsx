import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRouter = () => {
  const currentUser = true
  return (
    currentUser ? <Outlet /> : <Navigate to="/productDetail" />

  )
}

export default PrivateRouter