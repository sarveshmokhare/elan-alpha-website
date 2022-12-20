import React, { useContext, useState } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import appdev from "../assets/competitions/appdev.jpg";
import arduino from "../assets/competitions/arduino.jpg";
import { eventsdata } from "../Components/events/eventsdata";
// import '../styles/events.css'
import EventSlider from "../Components/events/eventsslider";

const dl = [
  { name: "Eligibility", description: "Class 8 and above" },
  { name: "Timings", description: "9:00 am to 5:00 pm" },
  { name: "Venue", description: "IIT Hyderabad" },
  { name: "Requirements", description: "Laptop and Internet" },
];

const navoptions = ["Workshops", "Pronites", "Informals", ""];

function Navigate() {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
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
              "pronites_btn rounded text-[.75rem] vvs:text-lg vs:text-xl sm:px-5 leading-relaxed p-1 text-lg vs:px-3 vs:m-1 flex-wrap lg:p-3 lg:px-5 " +
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
            <div className="mb-10">
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
              <p className="lg:text-[1.5rem]">
                As an essential part of our annual techno-cultural fest,{" "}
                <b>
                  <i>Elan & ηVision</i>
                </b>
                , we at IIT Hyderabad are conducting workshops on the{" "}
                <b>17th and 18th of December, 2022</b>. We request that you
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
                <li>Smart Farming</li>
              </ul>
              <br />
              <p>
                The topics we have chosen are at their peak and are booming in
                their prospects. These workshops will ensure that the students
                gain basic knowledge, understanding and practical experience,
                equipping them with the required skills for their bright future.{" "}
                <br />
                We are collaborating with Techradiance for these workshops.
                Their well-experienced and reputed instructors are IITians and
                have worked with many top MNCs like Google and Amazon.
              </p>
              <br />
              <dl>
                {dl.map((dl_item) => (
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
              <p>
                <b>
                  <b>Note:</b>
                </b>{" "}
                The participants shall choose any one(their favourite one) of
                the above topics.
              </p>
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
  const context = useContext(ThemeContext);

  return (
    <div className="mt-[76px] lg:mt-0 overflow-hidden bg-black bg-no-repeat bg-[position:left_top_-4rem,right_bottom_-.8rem] p-10 bg-[url('./assets/designs/events_mobile_1.svg'),url('./assets/designs/events_mobile_2.svg')] max-[360px]:bg-[length:90vw] lg:bg-[url('./assets/designs/competitions_desktop_1.svg')] lg:bg-[right_top] lg:bg-[length:100px]">
      <h1 className="heading font-berkshire text-7xl vs:text-8xl text-golden pt-16 lg:pt-0 lg:text-[10rem] relative z-10">
        Events
      </h1>
      {<Navigate />}
    </div>
  );
}

export default Events;
