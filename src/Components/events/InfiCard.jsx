



export default function InfiCard({ data }) {



  return (

    data.map((item, index) => (

      <div className={"my-10 block w-full xs:w-1/2 lg:w-1/4"}>
        <div className='m-2 bg-blue rounded-tl-2xl rounded-br-2xl overflow-hidden'>

          <div className='font-cinzel text-[5vw] vvs:text-3xl md:text-3xl lg:text-2xl xl:text-3xl text-golden text-center font-bold m-5'>{item.name}</div>
          <div className="text-golden m-3">
            {item.description}
          </div>
          <div className='flex justify-evenly py-5'>
            {item.linkPresent && <a href={item.reglink}>
              <button className="bg-golden text-black rounded-md text-sm xl:text-md px-1 font-century m-1 leading-loose">Register Now</button></a>}

          </div>
        </div>

      </div>
    ))

  )
}

