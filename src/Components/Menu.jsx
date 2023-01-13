import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import caPortalIcon from "../assets/miscellaneous/ca_portal_icon_lnilgn.svg";
import competitionsCard from "../assets/miscellaneous/competitions_card_ri5ryb.svg";
import eventsCard from "../assets/miscellaneous/events_card_bx8xeq.svg";
import litfestCard from "../assets/miscellaneous/litfest_card_t7hbxr.svg";
import menuRing from "../assets/miscellaneous/menu_ring_tb4lzi.svg";
import teamCard from "../assets/miscellaneous/team_card_elww7i.svg";
import valenrowIcon from "../assets/miscellaneous/valenrow_icon.svg";

function Menu(props) {
  const toggleMenu = props.toggleMenu;
  const menuOpen = props.menuOpen;

  const menuDiv = useRef(null);

  if (menuOpen) {
    const tl = gsap.timeline();
    tl.to(menuDiv.current, { height: "100vh" });
    // tl.to('.event-name', { fontSize: '1.875rem', stagger: 0.15,  }, '<')
  } else {
    const tl = gsap.timeline();
    tl.to(menuDiv.current, { height: 0 });
    // tl.to('.event-name', { fontSize: 0, })
  }

  const eventsData = {
    route: "/events",
    card: eventsCard,
    subtitles: ["Pronites", "Infi", "Workshops"],
  };
  const competitionsData = {
    route: "/competitions",
    card: competitionsCard,
    subtitles: ["Culti", "Techy"],
  };
  const litfestData = {
    route: "/litfest",
    card: litfestCard,
    subtitles: ["Inked Verse", "What if?", "Any many more..."],
  };
  const teamData = {
    route: "/teams",
    card: teamCard,
    subtitles: [],
  };
  const [hoveredTitle, setHoveredTitle] = useState(eventsData);

  function eventsHoverHandler(e) {
    hoveredTitle !== eventsData
      ? setHoveredTitle(eventsData)
      : setHoveredTitle(eventsData);

    gsap.to(e.target.querySelector(".event-name"), { x: 10, duration: 0.3 });
    gsap.to(e.target.querySelector(".ring-icon"), {
      height: 12,
      duration: 0.3,
    });
  }
  function competitionsHoverHandler(e) {
    hoveredTitle !== competitionsData
      ? setHoveredTitle(competitionsData)
      : setHoveredTitle(eventsData);

    gsap.to(e.target.querySelector(".event-name"), { x: 10, duration: 0.3 });
    gsap.to(e.target.querySelector(".ring-icon"), {
      height: 12,
      duration: 0.3,
    });
  }
  function litfestHoverHandler(e) {
    hoveredTitle !== litfestData
      ? setHoveredTitle(litfestData)
      : setHoveredTitle(eventsData);

    gsap.to(e.target.querySelector(".event-name"), { x: 10, duration: 0.3 });
    gsap.to(e.target.querySelector(".ring-icon"), {
      height: 12,
      duration: 0.3,
    });
  }
  function teamHoverHandler(e) {
    hoveredTitle !== teamData
      ? setHoveredTitle(teamData)
      : setHoveredTitle(eventsData);

    gsap.to(e.target.querySelector(".event-name"), { x: 10, duration: 0.3 });
    gsap.to(e.target.querySelector(".ring-icon"), {
      height: 12,
      duration: 0.3,
    });
  }
  function linksHoverHandler(e) {
    gsap.to(e.target.querySelector(".event-name"), { x: 10, duration: 0.3 });
    gsap.to(e.target.querySelector(".ring-icon"), {
      height: 12,
      duration: 0.3,
    });
  }
  function linksLeaveHandler(e) {
    gsap.to(e.target.querySelector(".event-name"), { x: 0, duration: 0.3 });
    gsap.to(e.target.querySelector(".ring-icon"), { height: 0, duration: 0.3 });
  }

  return (
    <div
      ref={menuDiv}
      className="h-0 w-screen overflow-y-scroll bg-black fixed top-0 z-50 text-white"
    >
      {/* menu and close wala div */}
      <div className="flex justify-between px-4 sm:px-5 py-5 text-lg pb-10">
        <Link className="flex items-center" to="/" onClick={toggleMenu}>
          <div className="h-4 pr-2 sm:block">
            <img className="h-full" src={menuRing} alt="icon" />
          </div>
          <h3>Home</h3>
        </Link>
        <h3 className="text-golden cursor-pointer" onClick={props.toggleMenu}>
          Close
        </h3>
      </div>

      {/* main div */}
      <div className="flex pl-6 sm:pr-8 items-center justify-around sm:justify-evenly text-2xl sm:text-3xl h-[54%] md:h-[70%]">
        {/* links div */}
        <div className="flex flex-col w-1/3 lg:w-1/5">
          <div className="flex flex-col">
            <Link
              onMouseEnter={eventsHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 flex items-center"
              onClick={toggleMenu}
              to="/events"
            >
              <div className="ring-icon h-0">
                <img className="h-full" src={menuRing}></img>
              </div>
              <div className="event-name hover:text-golden">Events</div>
            </Link>

            <Link
              onMouseEnter={competitionsHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 flex items-center"
              onClick={toggleMenu}
              to="/competitions"
            >
              <div className="ring-icon h-0">
                <img className="h-full" src={menuRing}></img>
              </div>
              <div className="event-name hover:text-golden">Competitions</div>
            </Link>

            <Link
              onMouseEnter={litfestHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 flex items-center"
              onClick={toggleMenu}
              to="/litfest"
            >
              <div className="ring-icon h-0">
                <img className="h-full" src={menuRing}></img>
              </div>
              <div className="event-name hover:text-golden">LitFest</div>
            </Link>

            <Link
              onMouseEnter={linksHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 flex items-center"
              onClick={toggleMenu}
              to="/socialCause"
            >
              <div className="ring-icon h-0">
                <img className="h-full" src={menuRing}></img>
              </div>
              <div className="event-name hover:text-golden">Social Cause</div>
            </Link>

            <Link
              onMouseEnter={linksHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 flex items-center"
              onClick={toggleMenu}
              to="/sponsors"
            >
              <div className="ring-icon h-0">
                <img className="h-full" src={menuRing}></img>
              </div>
              <div className="event-name hover:text-golden">Sponsors</div>
            </Link>

            <Link
              onMouseEnter={teamHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 flex items-center"
              onClick={toggleMenu}
              to="/team"
            >
              <div className="ring-icon h-0">
                <img className="h-full" src={menuRing}></img>
              </div>
              <div className="event-name hover:text-golden">Team</div>
            </Link>

            {/* <Link
              onMouseEnter={linksHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 sm:hidden"
              onClick={toggleMenu}
              to="/"
            >
              Schedule
            </Link> */}

            {/* <Link
              onMouseEnter={linksHoverHandler}
              onMouseLeave={linksLeaveHandler}
              className="py-4 sm:hidden"
              onClick={toggleMenu}
              to="/"
            >
              Contact us
            </Link> */}
          </div>
        </div>

        {/* card and buttons div */}
        <div className="w-1/2 sm:w-3/4 lg:w-1/2 flex flex-col items-center justify-center">
          {/* card div */}
          <div className="hidden sm:flex justify-center h-[] my-5">
            <Link
              className="h-"
              onClick={toggleMenu}
              to={hoveredTitle.route}
            >
              <div className="h-52 lg:h-64">
                <img className="h-full" alt="card" src={hoveredTitle.card} />
              </div>

              <div className="flex justify-evenly text-golden text-xl my-6">
                {hoveredTitle.subtitles.map((title, ind) => {
                  return <p key={ind}>{title}</p>;
                })}
              </div>
            </Link>
          </div>

          {/* buttons div */}
          <div
            className="font-cinzel font-bold text-base flex flex-col sm:flex-row w-full items-center justify-between"
            onClick={toggleMenu}
          >
            <a
              className="bg-[#AD002A] text-golden py-4 px-8 rounded-md my-4"
              href="https://forms.gle/LRMDuMdp79D2yU6ZA"
              target="_blank"
            >
              <p>Merch</p>
            </a>

            <button className="bg-green py-2.5 px-2.5 rounded-md my-4">
              <a
                className="flex items-center"
                href="https://ca.elan.org.in"
                target="_blank"
              >
                <img src={caPortalIcon} className="h-8 pr-2.5" alt="icon" />
                <div>CA Portal</div>
              </a>
            </button>

            <div onClick={toggleMenu}>
              <Link
                className="flex items-center text-center bg-yellow py-5 px-3.5 rounded-lg h-16 w-44 my-4 relative"
                style={{ borderRadius: "40px" }}
                to="/valenrow"
                onClick={toggleMenu}
              >
                <img
                  src={valenrowIcon}
                  className="h-24 absolute -top-2"
                  alt="icon"
                  onClick={toggleMenu}
                />
                <div className="absolute left-12 text-sm text-">
                  Explore Valenrow
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* last div for desktop */}
      <div className="">
        <div className="hidden sm:flex justify-around text-lg w-1/3 sm:w-5/12">
          {/* <Link className="p-8" onClick={toggleMenu} to="/">
            Schedule
          </Link> */}
          {/* <Link className="p-8" onClick={toggleMenu} to="/">
            Contact Us
          </Link> */}
        </div>

        {/* buttons div */}
        {/* <div className='font-cinzel font-bold text-base hidden sm:flex flex-col sm:flex-row w-full items-center justify-between w-3/5'>
                    <a className='bg-red text-golden py-4 px-8 rounded-md my-4'>Merch</a>
                    <a className='bg-green py-2.5 px-2.5 rounded-md flex items-center my-4' href='https://ca.elan.org.in' target='_blank'>
                        <img src={caPortalIcon} className='h-8 pr-2.5' alt='icon' />
                        <div>CA Portal</div>
                    </a>
                    <Link className='flex items-center text-center bg-yellow py-5 px-3.5 rounded-lg h-16 w-44 my-4 relative' style={{ borderRadius: '40px' }} to='/' onClick={props.toggleMenu}>
                        <img src={valenrowIcon} className='h-24 absolute -top-2' alt='icon' />
                        <div className='absolute left-12 text-sm'>Explore Valenrow</div>
                    </Link>
                </div> */}
      </div>
    </div>
  );
}

export default Menu;
