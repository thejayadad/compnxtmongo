import React from 'react'

const SingleDonut = ({title, desc, img, _id, username}) => {
  return (
    <div key={_id} className='bg-gray-300 p-6 rounded-lg' style={{minHeight: "400px", minWidth: "300px"}}>
    <figure><img
    className='h-60 rounded w-full object-cover object-center mb-6 '
    src={img} alt="donut" /></figure>
    <div className="flex flex-col gap-4">
    <h2 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
      {title}
      <div className="badge badge-secondary ml-4">{username}</div>
    </h2>
    <p className='text-lg text-gray-900 font-medium title-font mb-4'>{desc}</p>
    <div className="card-actions">
      <div className="badge badge-outline">Fashion</div> 
    </div>

    </div>
    </div>
  )
}

export default SingleDonut