import React, { useContext, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

import ThemeContext from '../Contexts/ThemeContext'
import '../styles/homepage.css'
import elanLogo from '../assets/logo_white.png'
import caPortalIcon from '../assets/ca_portal_icon.svg'
import valenrowIcon from '../assets/valenrow_icon.svg'
import sec1BottomGraphics from '../assets/moon_line_rings.svg'
import book from '../assets/book.svg'
import aboutLeft from '../assets/about_left.svg'
import aboutRight from '../assets/about_right.svg'
import valenrowLogo from '../assets/valenrow_logo.svg'
import sec1DecorLeft from '../assets/sec1_decor_left.svg'
import sec1BottomGraphicsLarge from '../assets/moon_line_rings_large.svg'
import aboutTop from '../assets/about_top.svg'
import aboutBtmR from '../assets/about_bottom_right.svg'
import aboutBtmC from '../assets/about_bottom_center.svg'
import aboutBtmL from '../assets/about_bottom_left.svg'
import aboutBtmLMob from '../assets/about_bottom_left_mobile.svg'
import aboutBtmRMob from '../assets/about_bottom_right_mobile.svg'
import timelineJug from '../assets/timeline_jug.svg'
import timelineBtm from '../assets/timeline_btm.svg'
import exploreBg from '../assets/explore.svg'
import galleryBg from '../assets/gallery.svg'
import galleryBtmBg from '../assets/gallery_btm.svg'
import statsBg from '../assets/stats.svg'


function HomePage() {
  const context = useContext(ThemeContext)

  const exploreBtnRef = useRef(null)
  const timelineRef = useRef(null)
  const timelineParentRef = useRef(null)
  const exploreRef = useRef(null)
  const giantDivRef = useRef(null)
  const pt1Ref = useRef(null)
  const pt2Ref = useRef(null)
  const pt3Ref = useRef(null)
  const pt4Ref = useRef(null)
  const pt5Ref = useRef(null)
  const pt6Ref = useRef(null)
  const highlightedCircleRef = useRef(null)
  const scrollDivRef = useRef(null)
  const firstImgRef = useRef(null)
  const secondImgRef = useRef(null)
  const thirdImgRef = useRef(null)
  const fourthImgRef = useRef(null)
  const fifthImgRef = useRef(null)
  const sixthImgRef = useRef(null)

  useEffect(() => {
    const timelineDiv = timelineRef.current;
    const scrollDiv = scrollDivRef.current;
    const giantDiv = giantDivRef.current;
    const sections = document.getElementsByClassName('curr-year-imgs');

    const ctx = gsap.context(() => {
      // const tlDefaults = {
      //   ease: "slow.inOut",
      //   duration: 1.25
      // };
      gsap.to(scrollDiv, {
        scrollTrigger: {
          trigger: timelineDiv,
          // markers: true,
          start: '70% 50%',
          end: 'bottom+=20%',
          scrub: true,
        },
        scrollTo: 'max',
      })
      ScrollTrigger.create({
        trigger: timelineDiv,
        pin: giantDiv,
        // markers: true,
        // id: 'giant-div-marker',
        start: '70% 50%',
        end: 'bottom+=80%',
        scrub: true,
      })


    });

    return () => ctx.revert(); // cleanup!
  }, []);

  const [highlightedCircleYPos, sethighlightedCircleYPos] = useState(20)

  // set scrollable div's scroll position in sync with the highlighted circle
  // doing two things in here: 1. on clicking the a point, highlighted circle moves to that point
  // 2. scrollable div's scroll position moves to corresponding image
  function ptClickHandler(e) {
    const pointNum = Number(e.target.getAttribute('pointnum'))

    switch (pointNum) {
      case 1:
        scrollDivRef.current.scrollTop = firstImgRef.current.offsetTop;
        sethighlightedCircleYPos(pt1Ref.current.cy.baseVal.value);
        break;
      case 2:
        scrollDivRef.current.scrollTop = secondImgRef.current.offsetTop;
        sethighlightedCircleYPos(pt2Ref.current.cy.baseVal.value);
        break;
      case 3:
        scrollDivRef.current.scrollTop = thirdImgRef.current.offsetTop;
        sethighlightedCircleYPos(pt3Ref.current.cy.baseVal.value);
        break;
      case 4:
        scrollDivRef.current.scrollTop = fourthImgRef.current.offsetTop;
        sethighlightedCircleYPos(pt4Ref.current.cy.baseVal.value);
        break;
      case 5:
        scrollDivRef.current.scrollTop = fifthImgRef.current.offsetTop;
        sethighlightedCircleYPos(pt5Ref.current.cy.baseVal.value);
        break;
      case 6:
        scrollDivRef.current.scrollTop = sixthImgRef.current.offsetTop;
        sethighlightedCircleYPos(pt6Ref.current.cy.baseVal.value);
        break;
    }
  }

  // set circle position in sync with the scrollable div's scroll distance
  function scrollHandler(e) {
    const scrollTopVal = e.target.scrollTop;

    if (scrollTopVal < secondImgRef.current.offsetTop) sethighlightedCircleYPos(pt1Ref.current.cy.baseVal.value);
    else if (scrollTopVal >= secondImgRef.current.offsetTop && scrollTopVal < thirdImgRef.current.offsetTop) sethighlightedCircleYPos(pt2Ref.current.cy.baseVal.value);
    else if (scrollTopVal >= thirdImgRef.current.offsetTop && scrollTopVal < fourthImgRef.current.offsetTop) sethighlightedCircleYPos(pt3Ref.current.cy.baseVal.value);
    else if (scrollTopVal >= fourthImgRef.current.offsetTop && scrollTopVal < fifthImgRef.current.offsetTop) sethighlightedCircleYPos(pt4Ref.current.cy.baseVal.value);
    else if (scrollTopVal >= fifthImgRef.current.offsetTop && scrollTopVal < sixthImgRef.current.offsetTop) sethighlightedCircleYPos(pt5Ref.current.cy.baseVal.value);
    else if (scrollTopVal >= sixthImgRef.current.offsetTop) sethighlightedCircleYPos(pt6Ref.current.cy.baseVal.value);
  }

  return (
    <div className={context.theme}>
      <div className='dark:bg-black pt-20 md:pt-0' ref={giantDivRef}>
        {/* Intro */}
        <div className='dark:text-white mb-10 lg:mb-20 font-cinzel font-bold sm:h-[80vh] relative'>
          {/* left decoration */}
          <div className='hidden sm:block absolute h-[50vh] lg:h-[60vh] left-3.5 top-5'>
            <img className='h-full' src={sec1DecorLeft} />
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:justify-center'>
            {/* elan and valenrow logos' div */}
            <div className='flex flex-col items-center justify-center sm:py-8 sm:absolute bottom-[10%] lg:bottom-[15%]'>
              <div>
                <img src={elanLogo} className='h-16' />
              </div>

              <div className='py-6 sm:px-8'>
                <img className='sm:h-[14vh]' alt='valenrow_logo' src={valenrowLogo} />
              </div>
            </div>

            {/* buttons div for mobiles */}
            <div className='sm:hidden flex flex-col items-center'>
              <a className='bg-red text-golden py-4 px-8 rounded-md my-4'>Merch</a>
              <a href='https://ca.elan.org.in' target='_blank' className='bg-green py-2.5 px-2.5 rounded-md flex items-center my-4'>
                <img src={caPortalIcon} className='h-8 pr-2.5' alt='icon' />
                <div>CA Portal</div>
              </a>
              <div className='flex items-center text-center bg-yellow py-5 px-3.5 rounded-lg h-16 w-44 my-4 relative' style={{ borderRadius: '40px' }}>
                <img src={valenrowIcon} className='h-24 absolute -top-2' alt='icon' />
                <div className='absolute left-12 text-sm' ref={exploreBtnRef} onClick={() => exploreBtnRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Explore Valenrow</div>
              </div>
            </div>

            <div className='sm:hidden pt-6'>
              <img src={sec1BottomGraphics} alt='graphic' />
            </div>
          </div>

          {/* buttons div for desktops */}
          <div className='hidden sm:flex flex-col items-center absolute top-20 right-16 lg:right-32 text-[2.6vh] lg:text-[3vh]'>
            <a href='/' className='flex items-center bg-red text-golden py-4 px-6 rounded-md my-4 h-[10vh]'>
              <div>Merch</div>
            </a>

            <a href='https://ca.elan.org.in' target='_blank' className='bg-green p-0 rounded-md flex items-center justify-evenly my-4 w-[34vw] lg:w-[15vw] h-[10vh]'>
              <img src={caPortalIcon} className='w-1/6' alt='icon' />
              <div>CA Portal</div>
            </a>

            <div className='flex items-center justify-evenly text-center bg-yellow rounded-[40px] h-[10vh] sm:w-[40vw] lg:w-[16vw] p-3 my-4 text-[2.5vh] overflow-visible cursor-pointer'>
              <img src={valenrowIcon} className='h-[13vh] pt-2' alt='icon' />
              <div className='' ref={exploreBtnRef} onClick={() => exploreBtnRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Explore Valenrow</div>
            </div>
          </div>

          {/* large moon line graphics */}
          <div className='hidden sm:flex items-center justify-center w-[100vw] absolute bottom-0 h-24 px-20'>
            <img className='w-full' src={sec1BottomGraphicsLarge} />
          </div>
        </div>


        {/* About Us */}
        <div className='dark:bg-black text-golden py-8 lg:pt-20 border-y-2 dark:border-golden relative z-10'>
          <div className='flex justify-evenly sm:justify-around sm:px-20'>
            <img className='w-[12vw]' alt='graphic' src={aboutLeft} />
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-cinzel font-bold z-10'>About Us</h1>
            <img className='w-[12vw]' alt='graphic' src={aboutRight} />
          </div>

          <div className='flex p-6 md:pl-10 lg:p-20 pb-0 items-center text-base md:text-2xl'>
            <div>
              <p>Elan and ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. It is entirely organized by IITH students.</p>
              {/* 2nd para for desktops */}
              <p className='hidden lg:block relative z-10'>
                Elan refers to the cultural part and ηVision cites the technological part of the fest. This festival features several professional and semi-professional crowd-pulling events and promises to be a grand event showcasing the best of cultural performances, technical solutions, and student community advances 2022
              </p>
            </div>
            <img className='h-[12vh] lg:h-[26vh] pl-5 lg:pl-20 lg:pr-28 md:mb-10' alt='book' src={book} />
          </div>
          {/* 2nd para for mobiles */}
          <p className='px-6 pt-0 md:pl-10 md:text-2xl lg:hidden relative z-10'>Elan refers to the cultural part and ηVision cites the technological part of the fest.This festival features several professional and semi-professional crowd-pulling events and promises to be a grand event showcasing the best of cultural performances, technical solutions, and student community advances 2022</p>

          {/* bg graphics */}
          {/* desktop */}
          <div className='hidden lg:block absolute top-0 left-[22%] h-[28%]'><img src={aboutTop} className='h-full'></img></div>
          <div className='hidden lg:block absolute bottom-0 left-[1%] h-[30%]'><img src={aboutBtmL} className='h-full'></img></div>
          <div className='hidden lg:block absolute bottom-0 left-[36%] h-[25%]'><img src={aboutBtmC} className='h-full'></img></div>
          <div className='hidden lg:block absolute bottom-0 right-[1%] h-[33%]'><img src={aboutBtmR} className='h-full'></img></div>
          {/* mobile */}
          <div className='lg:hidden absolute -bottom-[10%] left-0 h-[45%]'><img src={aboutBtmLMob} className='h-full'></img></div>
          <div className='lg:hidden absolute -bottom-[10%] right-0 h-[45%]'><img src={aboutBtmRMob} className='h-full'></img></div>
        </div>


        {/* Timeline */}
        <div ref={timelineParentRef} className='text-golden py-10 lg:px-16 lg:text-xl relative'>
          <h1 className='font-berkshire text-5xl lg:text-8xl px-10 lg:px-0'>Timeline</h1>

          <div ref={timelineRef} className='flex pt-11 items-center justify-evenly'>
            <div>
              <svg width="100" height="250">
                <line x1={29} y1={20} x2={29} y2={220} stroke='#FED395' strokeWidth={1} />
                {/* circles and corresponding years  */}
                <circle className='cursor-pointer' ref={pt1Ref} pointnum={1} onClick={ptClickHandler} cx={29} cy={20} r='0.8vh' fill='white' stroke='#FED395' />
                <text x={55} y={25} fill='#FED395'>2017</text>
                <circle className='cursor-pointer' ref={pt2Ref} pointnum={2} onClick={ptClickHandler} cx={29} cy={60} r='0.8vh' fill='white' stroke='#FED395' />
                <text x={55} y={65} fill='#FED395'>2018</text>
                <circle className='cursor-pointer' ref={pt3Ref} pointnum={3} onClick={ptClickHandler} cx={29} cy={100} r='0.8vh' fill='white' stroke='#FED395' />
                <text x={55} y={105} fill='#FED395'>2019</text>
                <circle className='cursor-pointer' ref={pt4Ref} pointnum={4} onClick={ptClickHandler} cx={29} cy={140} r='0.8vh' fill='white' stroke='#FED395' />
                <text x={55} y={145} fill='#FED395'>2020</text>
                <circle className='cursor-pointer' ref={pt5Ref} pointnum={5} onClick={ptClickHandler} cx={29} cy={180} r='0.8vh' fill='white' stroke='#FED395' />
                <text x={55} y={185} fill='#FED395'>2021</text>
                <circle className='cursor-pointer' ref={pt6Ref} pointnum={6} onClick={ptClickHandler} cx={29} cy={220} r='0.8vh' fill='white' stroke='#FED395' />
                <text x={55} y={225} fill='#FED395'>2022</text>
                {/* highlighted circle */}
                <circle ref={highlightedCircleRef} cx={29} cy={highlightedCircleYPos} r='0.8vh' fill='#FED395' />
              </svg>
            </div>

            <div onScroll={scrollHandler} ref={scrollDivRef} className='bg-white h-[30vh] lg:h-[50vh] w-[40vw] overflow-y-auto scroll-smooth relative z-10'>
              <div className='curr-year-imgs h-full w-full'>
                <div ref={firstImgRef} className='p-3 flex justify-center'><img className='h-full' src='https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/source/classic350612f277880878.jpg' /></div>
                <div ref={secondImgRef} className='h-1/2 w-full p-3 flex justify-center'><img className='h-full' src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' /></div>
              </div>

              <div className='curr-year-imgs h-full w-full'>
                <div ref={thirdImgRef} className='h-1/2 w-full p-3 flex justify-center'><img className='h-full' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' /></div>
                <div ref={fourthImgRef} className='h-1/2 w-full p-3 flex justify-center'><img className='h-full' src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg' /></div>
              </div>

              <div className='curr-year-imgs h-full w-full'>
                <div ref={fifthImgRef} className='h-1/2 w-full p-3 flex justify-center'><img className='h-full' src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg' /></div>
                <div ref={sixthImgRef} className='h-1/2 w-full p-3 flex justify-center'><img className='h-full' src='https://wallup.net/wp-content/uploads/2016/01/288160-space-universe-stars-Milky_Way.jpg' /></div>
              </div>

              <div className='curr-year-imgs h-1/2 w-full'>
                <div ref={firstImgRef} className='p-3 flex justify-center'><img className='h-full' src='https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/source/classic350612f277880878.jpg' /></div>
              </div>
            </div>
          </div>

          {/* background imgs */}
          <div className='absolute h-[70%] -top-[20%] right-0' ><img className='h-full' src={timelineJug}></img></div>
          <div className='absolute h-[75%] left-0 -bottom-[40%] z-10' ><img className='h-full' src={timelineBtm}></img></div>
        </div>

        {/* Explore */}
        <div ref={exploreRef} className='dark:bg-black text-golden py-10 lg:px-16 box-content h-[30vh] lg:h-[60vh] relative'>
          {/* bg images */}
          <div className='absolute h-[55%] right-0 bottom-[10%]' ><img className='h-full' src={exploreBg}></img></div>

        <h1 className='font-berkshire text-5xl lg:text-8xl px-10 lg:px-0 z-20 relative'>Explore</h1>

        </div>

        {/* Gallery */}
        <div className='dark:bg-black text-golden py-10 lg:px-16 box-content relative h-[40vh] lg:h-[80vh]'>
          {/* bg images */}
          <div className='absolute h-[85%] left-0 top-[10%]' ><img className='h-full' src={galleryBg}></img></div>
          <div className='absolute h-[70%] right-0 -bottom-[20%]' ><img className='h-full' src={galleryBtmBg}></img></div>

          <h1 className='font-berkshire text-5xl lg:text-8xl px-10 lg:px-0 z-20 relative'>Gallery</h1>

        </div>

        {/* Stats */}
        <div className='text-golden py-10 lg:px-16 box-content relative h-[30vh] lg:h-[70vh]'>
          {/* bg images */}
          <div className='absolute h-[85%] left-0 top-[5%]' ><img className='h-full' src={statsBg}></img></div>

          <h1 className='font-berkshire text-5xl lg:text-8xl px-10 lg:px-0 z-20 relative'>Stats</h1>

        </div>
      </div>


    </div>
  )
}

export default HomePage