import React, { useContext, useState, useEffect } from "react";
import gsap from "gsap";
import ThemeContext from "../Contexts/ThemeContext";
import { eventsdata } from "../Components/events/eventsdata";
import Hii from "../Components/events/eventsCard"
// import '../styles/events.css'
import EventSlider from "../Components/events/eventsslider";
import EventsImgVidSlider from "../Components/events/eventsImgVidSlider";
import InfiCard from "../Components/events/InfiCard";
const dl1 = [
  { name: "Timings", description: "10.00 am - 4.30 pm" },
  { name: "Venue", description: "IIT Hyderabad" },
  { name: "Requirements", description: "Laptop and Internet" },
];

const dl2 = [
  { name: "Timings", description: "9:00 AM to 5:00 PM" },
  { name: "Venue", description: "IIT Hyderabad" },
  // { name: "Requirements", description: "Laptop and Internet" },
];

const dl31 = [
  { name: "Date", description: "19th March 2023" },
  { name: "Timings", description: "3:00 PM - 5:00 PM" },
  { name: "Venue", description: "IIT Hyderabad" },
  { name: "Registration fee", description: "1000" },
  { name: "Requirements", description: "Camera(preferably) / Mobile phones" },
]

const dl32 = [
  { name: "Date", description: "19th March 2023" },
  { name: "Time", description: "3: 00 PM - 4: 00 PM" },
  { name: "Registration fee", description: "300" },
]

const navoptions = ["Workshops", "Pronites", "Informals", ""];
const workshop = [];
for (let i = 0; i < eventsdata[0].img1.length; ++i) {
  workshop.push('Workshop-' + (i + 1));
}
// const workshop = ['Workshop-1', 'Workshop-2', 'Workshop-3','Work']

function Navigate() {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [WorkshopNavigate, setWorkshopNavigate] = useState(0)
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div>
      <div
        id="options"
        className="flex justify-evenly pb-10 relative top-[0px]"
      >
        {eventsdata.map((nav_item, index) => (
          <button
            onClick={() => setValue(index)}
            className={
              "rounded text-[.75rem] vvs:text-md vs:text-lg sm:px-5 leading-relaxed p-1 text-lg vs:px-3 vs:m-1 flex-wrap lg:p-3 lg:px-5 " +
              (value == index ? "bg-golden text-black" : "bg-blue text-golden")
            }
          >
            {nav_item.name}
          </button>
        ))}
      </div>

      <div id="content">
        {eventsdata.map((item, index) => (
          <div className={value == index ? "block mb-10" : "hidden"}>
            <div className="sub_heading font-cinzel text-4xl vs:text-6xl text-golden font-bold">
              {item.name}
            </div>
            {/* {index != 0 && index != 3} */}
            <div className={(index ==1 ? "block" : 'hidden') + " mb-10"}>
              {item.img.length > 0 ? (
                <EventSlider
                  imagesList={item.img}
                  size={width >= 850 ? 4 : 2}
                  height={1}
                  typeList={[0,0,0,0,0,0,0,0]}
                />
              ) : undefined}
            </div>
            <div className="text-golden text-xl">{item.description}</div>
            <ul className="mt-5">
              {item.examples.map((examples_item) => (
                <li>
                  <div className="text-golden bold-normal text-lg list-disc">
                    {examples_item.name}
                  </div>
                  <div className="text-golden ml-5">
                    {examples_item.description}
                  </div>
                </li>
              ))}
            </ul>
            {index == 0 &&
              <div
                className={
                  (index == 0 ? "block " : "hidden ") + "text-golden lg:p-10"
                }
              >
                <div className="flex flex-wrap justify-evenly md:justify-center">
                  {workshop.map((item, index) => (
                    <button onClick={() => setWorkshopNavigate(index)} className={(WorkshopNavigate == index ? "bg-golden text-black " : 'bg-blue text-golden ') + "md:mx-5 px-2 rounded-md text-sm leading-loose font-century m-1 md:leading-loose lg:leading-loose mb-5 lg:text-lg"}>{item}</button>
                  ))}
                </div>

                <div className={WorkshopNavigate == 0 ? 'block' : 'hidden'}>
                  <div className={" mb-10"}>
                    {item.img1[0].length > 0 ? (
                      <EventsImgVidSlider
                        imagesList={item.img1[0]}
                        size={width >= 850 ? 4 : 2}
                        height={index == 0 ? 1 : 3 / 5}
                        typeList={Array(item.img1[0].length).fill(0)}
                      />
                    ) : undefined}
                  </div>
                  <p className="lg:text-[1.5rem]">
                    As an essential part of our annual techno-cultural fest,{" "}
                    <b>
                      <i>Elan & ηVision</i>
                    </b>
                    , we at IIT Hyderabad are conducting workshops on the{" "}
                    <b>18th and 19th of February, 2023</b>.
                    <br />
                  </p>
                  <br />
                  <h4 className="text-xl lg:text-3xl font-bold">
                    The topics we'll be looking at is:
                  </h4>
                  <ul className="list-disc mx-5 lg:text-2xl lg:mt-3">
                    <li>Artificial Intelligence and Machine Learning</li>
                  </ul>
                  <br />
                  <p>
                    The topics we have included are at their peak and are booming in
                    their prospects.{" "}
                    <br />
                    We are collaborating with wingfotech for these workshops.
                  </p>
                  <br />
                  <dl>
                    {dl1.map((dl_item) => (
                      <div>
                        <dt className="font-bold lg:text-2xl ">{dl_item.name}:</dt>
                        <dd className="px-5 lg:text-2xl">{dl_item.description}</dd>
                      </div>
                    ))}
                  </dl>

                  <br />
                  <p>
                    At the end of the workshop, the participants shall obtain certification from Elan & ηVision, IIT Hyderabad.

                  </p>
                  <br />
                  {/* <p className="mb-5">
                  <b>
                    <b>Note:</b>
                  </b>{" "}
                  The participants shall choose any one(their favourite one) of
                  the above topics.
                </p> */}
                  <a href="https://utkraanti.mojo.page/workshop-at-iit-hyderabad" className="bg-golden text-blue p-2 rounded m-auto inline">Register Now</a>
                </div>
                {[1, 1, 1, 1, 1, 1].map((item, index) => (

                  <div className={WorkshopNavigate == index + 1 ? 'block' : 'hidden'}>
                    <div className={" mb-10"}>
                      {eventsdata[0].img1[index + 1].length > 0 ? (
                        <EventsImgVidSlider
                          imagesList={eventsdata[0].img1[index + 1]}
                          size={width >= 850 ? 4 : 2}
                          height={index == 0 ? 1 : 3 / 5}
                          typeList={[0, 0]}
                        />
                      ) : undefined}
                    </div>
                    <p className="lg:text-[1.5rem]">
                      As an essential part of our annual techno-cultural fest,{" "}
                      <b>
                        <i>Elan & ηVision</i>
                      </b>
                      , we at IIT Hyderabad are conducting workshops on the{" "}
                      <b>18th and 19th of February, 2023</b>.
                      <br />
                    </p>
                    <h4 className="text-xl lg:text-3xl font-bold">
                      The topics we'll be looking at is:
                    </h4>
                    <ul className="list-disc mx-5 lg:text-2xl lg:mt-3">
                      <li>{eventsdata[0].topicName[index + 1]}</li>
                    </ul>
                    <br />
                    <p>
                      The topics we have included are at their peak and are booming in
                      their prospects.{" "}
                      <br />
                      We are collaborating with {index == 0 ? 'Wingfotech' :'OSSEB'} for these workshops. <br />
                      {(index == 4) && "These workshops are open for school students as well."}
                    </p>
                    <br />
                    <dl>
                      {dl2.map((dl_item) => (
                        <div>
                          <dt className="font-bold lg:text-2xl ">{dl_item.name}:</dt>
                          <dd className="px-5 lg:text-2xl">{dl_item.description}</dd>
                        </div>
                      ))}
                    </dl>

                    <br />
                    <p>
                      At the end of the workshop, the participants shall obtain certification from Elan & ηVision, IIT Hyderabad.

                    </p>
                    <br />

                    <a href={eventsdata[0].regLink[index + 1]} className="bg-golden text-blue p-2 rounded m-auto inline mr-2">Register Now</a>
                    
                      <a href={eventsdata[0].docsLink[index +1]} className="bg-golden text-blue p-2 rounded m-auto inline">Learn more</a>
                  
                  </div>

                ))
                }


                <div className={WorkshopNavigate == 7 ? 'block' : 'hidden'}>
                  <div className={" mb-10"}>
                    {item.img1[7].length > 0 ? (
                      <EventsImgVidSlider
                        imagesList={item.img1[7]}
                        size={width >= 850 ? 4 : 2}
                        height={index == 0 ? 1 : 3 / 5}
                        typeList={[0,0]}
                      />
                    ) : undefined}
                  </div>
                  <p className="lg:text-[1.5rem]">
                    As an essential part of our annual techno-cultural fest,{" "}
                    <b>
                      <i>Elan & ηVision</i>
                    </b>
                    , we at IIT Hyderabad are conducting a workshop on the{" "}
                    <b>19th March 2023</b>.
                    <br /><br />

                    <div className="lg:text-[1rem] text-[1rem]">
                      For this session, we will be working together with "The Soil Society"  and Pubarun Basu will be the instructor.
                      <br />

                      Pubarun Basu is a 21-year-old photographer whose work has been published by international organizations such as National Geographic, Forbes, The Guardian, and many more. He made it to the Forbes 30 under 30 Asia 2022 -The Arts list. He was declared as the "Youth Photographer of the Year'' in the Sony World Photography Awards 2021 - organized by the World Photography Organization, making him the first Indian to win this title. He was awarded the Indica Cultural Photography Grant 2021 to develop his project on the tribal communities of North-East India. He was the recipient of the M.P. Birla Award for Excellence in Co-Curricular Activities in 2019.
                    </div>

                    Visit his <a className="text-white" href="https://linktr.ee/pubarun.basu">linktree</a> to know more.
                    <br /><br />
                    <div className="lg:text-[1.2rem] text-[1rem]">
                      <b>Theme:</b>  The Realm of Coexistence - Photographing the Wonders of Nature
                      <br /><br />
                      More Details:

                      THE WORKSHOP IS CONDUCTED IN BOTH ONLINE AND OFFLINE MODE.

                    </div>

                    <div className="flex flex-col sm:flex-row mt-5">
                      <dl className="w-full sm:w-1/2 pb-5">
                        <div className="font-extrabold">OFFLINE MODE</div>
                        {dl31.map((dl_item) => (
                          <div>
                            <dt className="font-bold lg:text-xl ">{dl_item.name}:</dt>
                            <dd className="px-5 lg:text-xl">{dl_item.description}</dd>
                          </div>
                        ))}
                      </dl>

                      <dl className="w-full sm:w-1/2 pb-5">
                        <div className="font-extrabold">ONLINE MODE</div>

                        {dl32.map((dl_item) => (
                          <div>
                            <dt className="font-bold lg:text-xl ">{dl_item.name}:</dt>
                            <dd className="px-5 lg:text-xl">{dl_item.description}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <br />
                    <div className="text-[1rem] mb-5">
                      At the end of the workshop, the participants shall obtain certification from Elan & ηVision, IIT Hyderabad in Collaboration with The Soil Society.
                    </div>
                  </p>
                  <a href="https://unstop.com/workshop/photography-workshop-elan-nvision-2023-indian-institute-of-technology-iit-hyderabad-576690" className="bg-golden text-blue p-2 rounded m-auto inline">Register Now</a>


                </div>

              </div>
            }

            <div className={(index == 3 ? "flex" : "hidden") + " xs:flex-row flex-col w-full justify-evenly"}>
              <Hii data={eventsdata[3].types}></Hii>
            </div>

            <div className={index == 1 ? "block" : "hidden"}>

              {eventsdata[1].types.map((pronites_item,index)=>(
                <ul>
                  <h2 className="text-golden text-3xl mb-2 mt-8">{pronites_item.name}</h2>
                  {pronites_item.lists.map((list_item)=>(
                    <li className="text-sm text-golden sm:text-lg">{list_item}</li>
                  ))}

                </ul>
              ))}
    


            </div>

            <div className={(index == 2 ? "flex" : "hidden") + " xs:flex-row flex-wrap flex-col w-full justify-evenly"}>
              <InfiCard data={eventsdata[2].topics}></InfiCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Events() {
  useEffect(() => {
    const ctx = gsap.context(() => {

    })
    gsap.set(
      document.querySelector("header"),
      { opacity: 1, }
    );

    return () => { ctx.revert(); }
  }, [])

  const context = useContext(ThemeContext);

  return (
    <div className="mt-[76px] lg:mt-0 pb-[8rem] overflow-hidden bg-black bg-no-repeat bg-[position:left_top_-4rem,right_bottom_-.8rem] p-5 md:p-10 bg-[url('https://ik.imagekit.io/himanshukumargupta/Elan/designs/events_mobile_1_yjpk7o.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876200676'),url('https://ik.imagekit.io/himanshukumargupta/Elan/designs/events_mobile_2_px1vvh.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876196728')] max-[360px]:bg-[length:90vw] lg:bg-[url('https://ik.imagekit.io/himanshukumargupta/Elan/designs/competitions_desktop_1_iwencm.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876198582')] lg:bg-[right_top] lg:bg-[length:100px]">
      <h1 className="heading font-berkshire text-7xl vs:text-8xl text-golden pt-20 lg:pt-0 lg:text-[10rem] relative z-10">
        Events
      </h1>
      {<Navigate />}
    </div>
  );
}

export default Events;
