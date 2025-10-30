import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>

        <div className='absolute w-full h-[90vh] bg-black/15'/>

        <img src="https://img.freepik.com/free-photo/top-view-lake-by-road-captured-daytime_181624-41231.jpg?t=st=1714137341~exp=1714140941~hmac=18800a8b74ac7a297b203dd76664a1ac9cc6e0e067402b433159a4af74a39d05&w=996"
        className='w-full h-full object-cover' />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-[70vh] flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Social Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim numquam tenetur nemo, quibusdam maiores fugit voluptas consectetur molestiae accusamus eum? Optio in, earum ratione veniam modi perspiciatis tenetur qui?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero