import React from 'react'

const SingleDonut = () => {
  return (
    <div className='border=0 w-50 mt-8 bg-primary-100 shadow-xl border-white-100 '>
    <figure><img src="https://images.pexels.com/photos/6142740/pexels-photo-6142740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="donut" /></figure>
    <div className="flex flex-col gap-4 p-3">
    <h2 className="card-title">
      Donut Title!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>

    </div>
    </div>
  )
}

export default SingleDonut