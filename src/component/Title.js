import React from 'react'

export default function Title(props) {
  const {name, title} = props;
  return (
    <div className="row">
        <div className="col-10 mx-auto my-2">
            <h1 className="text-capitalize font-weight-bold">
                {name}
            </h1>
            <strong className='text-blue'>{title}</strong>
        </div>
    </div>
  )
}
