import React from 'react'
import Sidebar from './Sidebar'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex'>
       
            <Sidebar/>
        
      <div className='max-w-[calc(100% - 240px)]'>{children}</div>
    </div>
  )
}

export default MainLayout
