import React, { useContext, useState, useEffect } from "react";
import gsap from "gsap";
import ThemeContext from "../Contexts/ThemeContext";
import { eventsdata } from "../Components/events/eventsdata";
// import '../styles/events.css'
import EventSlider from "../Components/events/eventsslider";

const dl1 = [
  { name: "Timings", description: "9:00 AM to 5:00 PM" },
  { name: "Venue", description: "IIT Hyderabad" },
  { name: "Requirements", description: "Laptop and Internet" },
];

const dl2 = [
  { name: "Eligibility", description: "Class 8 and above" },
  { name: "Timings", description: "9:00 AM to 5:00 PM" },
  { name: "Venue", description: "IIT Hyderabad" },
  { name: "Requirements", description: "Laptop and Internet" },
];

const navoptions = ["Workshops", "Pronites", "Informals", ""];
const workshop=['Workshops-1','Workshops-2']

function Navigate() {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [WorkshopNavigate,setWorkshopNavigate]=useState(0)
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
              " rounded text-[.75rem] vvs:text-md vs:text-lg sm:px-5 leading-relaxed p-1 text-lg vs:px-3 vs:m-1 flex-wrap lg:p-3 lg:px-5 " +
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
            <div className={(index!=0?"block":'hidden')+" mb-10"}>
              {item.img.length > 0 ? (
                <EventSlider
                  imagesList={item.img}
                  size={width >= 850 ? 4 : 2}
                  height={index == 0 ? 1 : 3 / 5}
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
            <div
              className={
                (index == 0 ? "block " : "hidden ") + "text-golden lg:p-10"
              }
            >
              <div className="flex justify-evenly md:justify-center">
                {workshop.map((item,index)=>(
                  <button onClick={() => setWorkshopNavigate(index)} className={(WorkshopNavigate == index ? "bg-golden text-black " : 'bg-blue text-golden ') + "md:mx-5 px-2 rounded-md text-sm leading-loose font-century m-1 md:leading-loose lg:leading-loose mb-5 lg:text-lg"}>{item}</button>
                ))}
              </div>

              <div className={WorkshopNavigate==0?'block':'hidden'}>
                <div className={" mb-10"}>
                  {item.img1[0].length > 0 ? (
                    <EventSlider
                      imagesList={item.img1[0]}
                      size={width >= 850 ? 4 : 2}
                      height={index == 0 ? 1 : 3 / 5}
                    />
                  ) : undefined}
                </div>
                <p className="lg:text-[1.5rem]">
                  As an essential part of our annual techno-cultural fest,{" "}
                  <b>
                    <i>Elan & ηVision</i>
                  </b>
                  , we at IIT Hyderabad are conducting workshops on the{" "}
                  <b>7th and 8th of January, 2023</b>. We request that you
                  kindly urge your school's students to participate and benefit
                  from these workshops <br />
                  <br />
                </p>
                <h4 className="text-xl lg:text-3xl font-bold">
                  The topics we'll be looking at are:
                </h4>
                <ul className="list-disc mx-5 lg:text-2xl lg:mt-3">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Data Science</li>
                  <li>Ethical Hacking</li>
                  <li>Android Development</li>
                </ul>
                <br />
                <p>
                  The topics we have chosen are at their peak and are booming in
                  their prospects. These workshops will ensure that the students
                  gain basic knowledge, understanding and practical experience,
                  equipping them with the required skills for their bright future.{" "}
                  <br />
                  We are collaborating with Gummalla Technologies for these workshops.
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
                <p className="mb-5">
                  <b>
                    <b>Note:</b>
                  </b>{" "}
                  The participants shall choose any one(their favourite one) of
                  the above topics.
                </p>
                <a href="https://unstop.com/p/technical-workshop-elan-ivision-2023-indian-institute-of-technology-iit-hyderabad-566831" className="bg-golden text-blue p-2 rounded m-auto inline">Register Now</a>
              </div>

              <div className={WorkshopNavigate == 1 ? 'block' : 'hidden'}>
                <div className={" mb-10"}>
                  {item.img1[1].length > 0 ? (
                    <EventSlider
                      imagesList={item.img1[1]}
                      size={width >= 850 ? 4 : 2}
                      height={index == 0 ? 1 : 3 / 5}
                    />
                  ) : undefined}
                </div>
                <p className="lg:text-[1.5rem]">
                  As an essential part of our annual techno-cultural fest,{" "}
                  <b>
                    <i>Elan & ηVision</i>
                  </b>
                  , we at IIT Hyderabad are conducting workshops on the{" "}
                  <b>14th and 15th of January, 2023</b>. We request that you
                  kindly urge your school's students to participate and benefit
                  from these workshops <br />
                  <br />
                </p>
                <h4 className="text-xl lg:text-3xl font-bold">
                  The topics we'll be looking at are:
                </h4>
                <ul className="list-disc mx-5 lg:text-2xl lg:mt-3">
                  <li> Artificial Intelligence and Machine Learning</li>
                  <li>Humanoid Robotics</li>
                  <li>Virtual Reality</li>
                  <li>Blockchain Technology</li>
                  <li>Smart Farming</li>
                </ul>
                <br />
                <p>
                  The topics we have chosen are at their peak and are booming in their prospects. These workshops will ensure that the students gain basic knowledge, understanding and practical experience, equipping them with the required skills for their bright future.{" "}
                  <br />
                  

                  We are collaborating with Techradiance for these workshops.
                  Their well-experienced and reputed instructors are IITians and
                  have worked with many top MNCs like Google and Amazon.
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
                  As a part of these workshops, the participants shall receive a
                  project kit inclusive of the registration fee. At the end of the
                  workshop, the participants shall obtain certification from IIT
                  Hyderabad, Elan & ηVision
                </p>
                <br />
                <p className="mb-5">
                  <b>
                    <b>Note:</b>
                  </b>{" "}
                  The participants shall choose any one(their favourite one) of
                  the above topics.
                </p>
                <a href="https://techradiance.in/iit-workshop/" className="bg-golden text-blue p-2 rounded m-auto inline">Register Now</a>
              </div>
                    
              
            </div>
            <div className={index != 0 ? "block" : "hidden"}>
              <div className="text-golden font-cinzel text-center text-xl vs:text-3xl xs:text-4xl font-bold">
                Stay Tuned for updates!
              </div>
              <div className="text-white text-xl text-center">
                Follow our social media handles to never miss updates
              </div>
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
    <div className="mt-[76px] lg:mt-0 pb-[8rem] overflow-hidden bg-black bg-no-repeat bg-[position:left_top_-4rem,right_bottom_-.8rem] p-5 md:p-10 bg-[url('https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554934/elan/assets/designs/events_mobile_1_yjpk7o.svg'),url('https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554926/elan/assets/designs/events_mobile_2_px1vvh.svg')] max-[360px]:bg-[length:90vw] lg:bg-[url('https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554912/elan/assets/designs/competitions_desktop_1_iwencm.svg')] lg:bg-[right_top] lg:bg-[length:100px]">
      <h1 className="heading font-berkshire text-7xl vs:text-8xl text-golden pt-20 lg:pt-0 lg:text-[10rem] relative z-10">
        Events
      </h1>
      {<Navigate />}
    </div>
  );
}

export default Events;
