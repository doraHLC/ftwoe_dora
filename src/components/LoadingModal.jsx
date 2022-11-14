import React from 'react'
import loading from '../image/loading_2x.gif'

export default function LoadingModal () {
  return (
        <div className="modalCard-bg">
            <div className="z-50 fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
                <img
                    src={loading}
                    alt='loading'
                />
            </div>
        </div>
  )
}
