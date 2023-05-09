import React from 'react'
import Link from 'next/link'

export default function Notfound() {
  return (
    <>
        <div className='col-md-6 mx-auto mt-1'>
          <img src='notfound.png' alt='notound' className='w-100 h-75'></img>
          <Link href='/'><button className='btn btn-primary mt-3 col-4 mx-auto d-grid'>Go home</button></Link>
        </div>
    </>
  )
}
Notfound.getLayout = function pageLayout(page){
  return (
     <> {page}</>
  )
}
