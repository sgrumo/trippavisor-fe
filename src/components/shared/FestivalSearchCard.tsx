import Image from 'next/image'
import React from 'react'

type FestivalProps = {
  title: string
  imageSrc: string
  position: string
}

const FestivalSearchCard = () => (
  <div className="max-w-sm overflow-hidden rounded shadow-lg">
    <div className="relative h-64 w-96">
      <Image layout="fill" src="/assets/images/shared/logo.svg" alt="Logo" />
    </div>
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">Mountain</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
        #photography
      </span>
      <span className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
        #travel
      </span>
      <span className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
        #winter
      </span>
    </div>
  </div>
)

export default FestivalSearchCard
