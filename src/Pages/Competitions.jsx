import React, { useContext, useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
import arrow from '../assets/designs/competitions_arrow.svg'


function Navigate() {
  const [Navigatevalue, setNavigateValue] = useState(0)
  const [sliderValue,setSliderValue]=useState(1)

  return (
    <div className='z-0'>
      <div className='flex justify-evenly pb-10'>
        <button onClick={() => setNavigateValue(0)} className={"rounded h-10 px-8 m-1 " + (Navigatevalue == 0 ? "bg-golden text-black" : "bg-black text-golden")} >Techy</button>
        <button onClick={() => setNavigateValue(1)} className={"rounded h-10 px-8 m-1 " + (Navigatevalue == 1 ? "bg-golden text-black" : "bg-black text-golden")}>Culti</button>
      </div>
      <img src={arrow} alt="arrow" className='m-auto mb-10 w-11/12 block relative lg:hidden' />
      {/* <div className='absolute'> */}
        <input type="range" min={1} max={Navigatevalue==1?11:13} defaultValue={0} id="slider" onChange={(e)=>{
            setSliderValue(e.target.value)
        }} className="w-10/12  top-[-55px] right-0 bg-golden block m-auto relative lg:hidden" />
      {/* </div> */}
      <div className={(Navigatevalue == 1 ? "flex flex-wrap justify-evenly" : "hidden")}>
        <div className={'my-10 w-full ' + (sliderValue == 1 ? "block" : "hidden") + " lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>CAMPUS IDOL</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>When your passion is singing ,nothing can stop you from bringing your music to
            life.Campus Idol is the perfect platform to help you share love and happiness through your song!
          </div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 2 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>BREAKFREE</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Is dancing your passion? Does the zen of dance breathe life into your torrid
            day?
            This
            is where you can show off your moves to the masses and shine. It is one of the biggest and most
            glamorous events of the fest. Participants can perform any dance form (except classical).</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 3 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>STAND UP COMEDY</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>The advent of social media and online pop culture has brought about a radical
            change in
            the Indian comedy circles as well. The past decade saw the rise of stand up comedians and now
            it’s
            your
            turn. Can you enthrall the audience with your wacky humor? Can you brighten up someone’s day?
            This
            is
            the event where you can test your skills against other similarly talented folk and try to come
            out
            on
            top.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 4 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>BEAT TRIPPERS</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Coordination is what matters when it comes to a group performance. It is a
            group
            dance
            event where one can show off their individual talents or spellbind the crowd with their
            coordination.
            It's time to move and shake and drop it.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 5 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>DOODLE CREATION</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Doodling is a fun way of expressing yourself! It is not just a stress buster
            but
            also
            unlocks the subconscious creativity within you. In these times of pandemic , the elan & nvision
            is
            here
            to your rescue with its very own doodle art competition! Get ready to show off your doodles !
          </div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 6 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>GLITZ & GLAMAOUR</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Modelling is not just about beauty, it is about the way you portray yourself
            with
            confidence and glamour yet keeping simplicity in you alive! A platform for all those young
            ladies
            out
            there who always dreamt of being a model. Elan & ηvision 2022 gives you the opportunity to take
            the
            first step towards your passion.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 7 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>PAINT THE SCREEN</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Today the world is all about digitalization.So,Elan and nvision presents you
            with
            an
            amazing opportunity to put all your imagination without any bound to digitize your art and get
            along.
          </div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 8 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>ART ATTACK</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Painting is not about what one sees but what one can make others see! This
            theme-based
            painting competition is an opportunity to bring your imagination and creativity together on the
            paper
            alive.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 9 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>FILMFARE FIESTA</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Short films are a catalyst for creative potential. Once again this year, ELAN &
            NVISION
            is hosting FILMFARE FIESTA to unleash the creativity in you. Make your own short film, enthrall
            and
            captivate movie buffs with your creativity. The stage at Elan & ηvision 2020 is set for you. Get
            judged
            by esteemed people in the film industry.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 10 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>PICELECTIC</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>A photograph is the pause button of life. Photography is the best way to
            capture a
            moment and save it forever! It is an austere and blazing poetry of the real. So, keep your
            camera
            ready
            to capture the perfect moment and show us your talent!</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 11 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>NRITYANGALI</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Dance is much more than an art- it is a sport , a way to express one’s self, a
            way
            to
            celebrate and much more. It embodies all forms of physical art and learning. Classical dance is
            the
            fusion of the mind's emotions and the body's articulate movements. It takes the viewers to a
            completely
            different world of calmness and imagination. We, at elan invite you to celebrate the beauty of
            Indian
            classical dance. Come and mesmerize the audience with your grace, expressions and soulful
            talent!
          </div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
      </div>

      <div className={(Navigatevalue == 0 ? "flex flex-wrap justify-evenly" : "hidden")}>
        <div className={'my-10 w-full ' + (sliderValue == 1 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>MACHINA DOCTRINA</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>If making machines learn is your forté, this is the perfect event for you. Test
            and
            hone your skills in ML and Data Analytics by participating in Machina doctrinas, one of the
            coolest
            events in the fest!.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 2 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>PROQUEST</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Experience the Competitive Programming Competition , for all participants of
            all
            levels
            of expertise. This event ensures that even an absolute beginner is able to solve something</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 3 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>Enigma</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Find the mysterious secret techniques to decrypt the given texts/messages.
            Clear
            all
            the levels in the allotted time to become the ultimate cryptacker. It's a pen and paper event.
            Each
            team
            has to decode a series of crypted messages.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 4 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>APP DEVELOPMENT</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>This competition challenges participants to create innovative applications on
            mobile
            platforms - Android, iOS and Windows Phone. Grab the chance to Influence with creativity and
            innovation
            by designing a peculiar app.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
        <div className={'my-10 w-full ' + (sliderValue == 5 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>WEB DEVELOPMENT</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>An event that empowers the creative and technically proficient future Web
            professionals.Participants can Innovate and Inspire by designing a creative Website in this
            competition.
          </div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 6 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>QUADCOPTER</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Drones are the objects that the world is looking up to, literally! <br />
            Design a drone and compete to see if it has got the moves to dance past all the obstacles</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 7 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>CIRCUIT BUILDING</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>The aim of this competition is to judge the problem solving skills and
            understanding of
            the basic circuit designing concepts of the students. Each team has to build a circuit as per
            the
            requirement keeping in mind the efficiency factor.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 8 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>ROBO WARS</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>The main challenge of the competition is to immobilize the other bot within a
            stipulated time under certain constraints. <br />
            A minacious cunning mind that could design a bot under given constraints in a way that maximizes
            the opponent's damage and minimizes its own would.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 9 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>CAD PRO</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Contrive a way to outsmart your opponents in designing a CAD model.An
            on-the-spot
            designing round to show off your expertise in designing.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 10 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>HACKATHON</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>A unique hackathon on emerging digital technologies to engage with tech
            enthusiasts. It
            offers an array of challenges across multiple levels.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 11 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>GAME JAM</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>Developing a game is the new meta. Game Jam is an event that enables one to
            create
            a
            game from scratch and within the time barrier.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 12 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>PAPER PRESENTATION</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>In this event, contestants prepare a presentation that showcases and
            effectively
            presents new ideas related to any field or even an entire business plan. The main idea of the
            event
            is
            to analyze a topic and think with a new bent of mind.</div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>

        <div className={'my-10 w-full ' + (sliderValue == 13 ? "block" : "hidden")+" lg:block w-1/3"}>
          <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>DEEPN</div>
          <div className='text-xs text-golden text-thin font-century lg:hidden'>If Technology had a face now, it would be ‘AI’. An on-spot challenge that would
            test
            your understanding of Deep Learning.
          </div>
          <div className='flex justify-evenly mt-5'>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
            <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Competitions() {
  const context = useContext(ThemeContext)



  return (
    <div className={context.theme + " bg-black bg-no-repeat p-10 bg-[position:left_top_-5rem_,_right_bottom_-4.5rem] bg-[url('./assets/designs/competitions_mobile_1.svg'),url('./assets/designs/competitions_mobile_2.svg')]"}>
      <h1 className='heading font-berkshire text-8xl text-center text-golden pt-16 relative z-10 md:text-9xl'>
        Competitions
      </h1>
      {<Navigate />}
    </div>
  )
}

export default Competitions