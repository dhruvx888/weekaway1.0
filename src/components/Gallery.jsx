import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16 '>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover rounded-md border-4 border-white shadow-lg' src="https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264433.jpg?t=st=1714146703~exp=1714150303~hmac=a5aa16d4c340a13c28008cc141ff5f149bb5e24109dbb8ead41f003185dad959&w=826" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-md border-4 border-white shadow-lg' src="https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264435.jpg?t=st=1714146787~exp=1714150387~hmac=cee31a3868ca6081198eeb8069108888c8bb44d04860e4ad08faf9390d5c1f24&w=826" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-md border-4 border-white shadow-lg' src="https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island-sunrise-time_1232-4482.jpg?t=st=1714146830~exp=1714150430~hmac=21dee1b4ddab9881072e38a8cbc833bf000593d06c5bce913ff3c2b53102a050&w=826" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-md border-4 border-white shadow-lg' src="https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264434.jpg?t=st=1714146862~exp=1714150462~hmac=1e8b97fda14c89d3554b22e8d35a941e85bbe1da44d810c57bc35d7f10ce8190&w=826" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover rounded-md border-4 border-white shadow-lg' src="https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264452.jpg?t=st=1714146888~exp=1714150488~hmac=217f107996bc04f83e2ed3d1c4eb19440efc2eea357cb9bc8c84c227b464b802&w=826" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery