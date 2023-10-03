import React from 'react'
import { GasStation_icon, Gauge_icon, Heart_icon, People_icon, Steering_icon } from '../assets'

function Card({data}) {
  return (
    <div className='card max-w-sm bg-contentbg p-3 rounded-2xl shadow-md '>
      <div className="img-cont ">
        <img src={data.img} alt="" className='w-full rounded-2xl'/>
      </div>
      <div className="content mt-3 px-3">
        <section className='flex justify-between items-center'>
            <h1 className='text-lg md:text-xl text-mainText'>{data.carName}</h1>
            <h1 className='text-sm font-semibold text-mainText border-2  border-mainblue border-dashed rounded-xl px-2 py-1' >{data.yearOfManufacture}</h1>
        </section>
        <div className="details">
            <section className='mt-5 flex items-center justify-start'>
                <div className="detail-content flex items-center gap-2 w-2/5">
                    <div className="img-cont w-5">
                        <img src={People_icon} alt="" className='w-full'/>
                    </div>
                    <div className="detail-cotent-text">
                        <p className='text-secondaryText text-sm font-normal'>{data.peopleCapacity} People</p>
                    </div>
                </div>

                <div className="detail-content flex items-center gap-2 w-3/5">
                    <div className="img-cont w-5">
                        <img src={GasStation_icon} alt="" className='w-full'/>
                    </div>
                    <div className="detail-cotent-text">
                        <p className='text-secondaryText text-sm font-normal'>{data.fuelType} </p>
                    </div>
                </div>
            </section>

            <section className='mt-5 flex items-center justify-start'>
                <div className="detail-content flex items-center gap-2 w-2/5">
                    <div className="img-cont w-5">
                        <img src={Gauge_icon} alt="" className='w-full'/>
                    </div>
                    <div className="detail-cotent-text">
                        <p className='text-secondaryText text-sm font-normal'>{data.range} </p>
                    </div>
                </div>

                <div className="detail-content flex items-center gap-2 w-3/5">
                    <div className="img-cont w-5">
                        <img src={Steering_icon} alt="" className='w-full'/>
                    </div>
                    <div className="detail-cotent-text">
                        <p className='text-secondaryText text-sm font-normal'>{data.gearbox}</p>
                    </div>
                </div>
            </section>

            <section className='mt-5 border-t-2 border-gray-200 w-full pt-3 flex justify-center items-center mb-4'>
                <h1 className='text-xl text-mainText w-3/5'>${data.rateForMonthRent} <span className='text-sm'>/month</span></h1>
                <div className='w-2/5 bg-r-100 flex justify-between items-center'>
                    <div className="img-cont heart w-9 bg-heartbluebg p-2 rounded-lg cursor-pointer">
                        <img src={Heart_icon} alt="" className='w-full' />
                    </div>
                    <button className='bg-mainblue text-white font-semibold px-2 py-2 rounded-md text-sm hover:bg-secondblue'>Rent now</button>
                </div>
            </section>
        </div>
      </div>
    </div>
  )
}

export default Card
