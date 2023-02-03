// const pronites1 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/pronites_1_vcxymp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876312865";
// const pronites2 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/pronites_2_hfzoao.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876311470";
// const pronites3 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/pronites_3_m8wt6r.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673876311360";
// const pronites4 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/pronites_4_wzwhhg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876311522";
// const pronites5 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/pronites_5_c6u2z2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876309309";
// const informals1 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/informals_1_dfwk8h.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876309921";
// const informals2 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/informals_2_fufzho.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876307594";
// const workshops1 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_ai_dfrrnn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673876310648";
// const workshops2 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_blockc_fbfleq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673876311852";
// const workshops3 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_farming_nlhdni.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673876308613";
// const workshops4 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_humanoid_f63isq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673876308261";
// const workshops5 = "https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_vr_cuvhyr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673876308004";

// const workshop7jan_1 ="https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_4feb_appdev_itp7f1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876308408"
// const workshop7jan_2 ="https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_4feb_ai_o2jzd3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876309162"
// const workshop7jan_3 ="https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_4feb_hack_leqnj1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876308902"
// const workshop7jan_4 ="https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_4feb_data_kgixwg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876311811"
// const workshop19mar_2 ="https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_19mar_online_yshyfn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876308926"
// const workshop19mar_1 ="https://ik.imagekit.io/himanshukumargupta/Elan/events/workshop_19mar_offline_ulcqu1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876307833"


import breakfree from "../../assets/competitions/breakfree.jpg";
import glitz from "../../assets/competitions/glitz.jpg";

import pronites1 from "../../assets/events/pronites_1.jpg";
import pronites2 from "../../assets/events/pronites_2.jpg";
import pronites3 from "../../assets/events/pronites_3.webp";
import pronites4 from "../../assets/events/pronites_4.jpg";
import pronites5 from "../../assets/events/pronites_5.jpg";
import informals1 from "../../assets/events/informals_1.jpeg";
import informals2 from "../../assets/events/informals_2.jpeg";
// import workshops1 from "../../assets/events/workshop_ai.png";
// import workshops2 from "../../assets/events/workshop_blockc.png";
// import workshops3 from "../../assets/events/workshop_farming.png";
// import workshops4 from "../../assets/events/workshop_humanoid.png";
// import workshops5 from "../../assets/events/workshop_vr.png";
import workshop7jan_1 from "../../assets/events/workshop_4feb_ai.jpg";
import workshop7jan_2 from "../../assets/events/workshop_4feb_appdev.jpg";
import workshop7jan_3 from "../../assets/events/workshop_4feb_data.jpg";
import workshop7jan_4 from "../../assets/events/workshop_4feb_hack.jpg";
import workshop19mar_2 from "../../assets/events/workshop_19mar_offline.jpg";
import workshop19mar_1 from "../../assets/events/workshop_19mar_online.jpg";
import workshop19feb_1 from "../../assets/events/workshop_19feb_ai.jpeg";
import workshop19feb_ai_2 from "../../assets/events/workshop_19feb_ai2.jpeg"



export const eventsdata = [

  {
    name: 'Workshops',
    subnames: ['Workshops-1', 'Workshops'],
    description: '',
    img: [],
    img1: [[workshop19feb_1, workshop19feb_ai_2], [workshop7jan_1, workshop7jan_2, workshop7jan_3, workshop7jan_4], [workshop19mar_1, workshop19mar_2]],
    reglink: ["https://techradiance.in/iit-workshop/", "https://unstop.com/workshop/technical-workshop-elan-nvision-2023-indian-institute-of-technology-iit-hyderabad-566831"],
    examples: []

  },
  {
    name: 'Pronites',
    description: '',
    img1: [[], [], []]
    // 'Apart from the competitions our fest never fails to amuse people with fun and exciting shows',
    , img: [pronites1, pronites2, pronites3, pronites4, pronites5],
    examples: [
      //   {
      //   name: 'Sunburn - lost stories',
      //   description: 'Lost stories is an Indian DJ/ producer  and are best known for their amazing tracks, which have an amazing blend of Indian folk and electronic music.'
      // },
      // { name: 'Navjot Ahuja' },
      // { name: 'Alchemy' },
      // { name: 'The Touchdown' },
      // {
      //   name: 'Zakir khan',
      //   description: 'With about 7.13 million subscribers on youtube, Zakir khan is one of India’s biggest stand - up comedians who has performed to sold - out audiences all over the world.'
      // },
      // {
      //   name: 'Darshan Raval',
      //   description: 'The Young and Emerging singing sensation, Darshan Raval is an Indian singer, songwriter, composer, and actor who sings songs mostly in Hindi and Gujarati.'
      // },
      // { name: 'The Yellow Diary' },
      // {
      //   name: 'The Rave Republic',
      //   description: 'Rave Republic is a Singaporean DJ duo best known for their pop - EDM crossover productions signed to Warner Music Singapore.'
      // },
      // { name: 'When Chai Met Toast' }
    ]
  },
  {
    name: 'Informals',
    img1: [[], [], []],
    description: ''
    // 'From foodathons to thrilling treasure hunts, infi gives a memorable experience for gangs of friends with various crowd-pulling games where everything is marvelous. Infi is a place that ensures that the participants grab a bagful of memories.'
    , img: [informals1, informals2],
    examples: [
      // {name:'PUBG'},
      //   {name: 'DOTA'},
      //   {name:'COD : call of duty'},
      //   {name:'FIFA'},
      //   {name:'CS : GO'},
      //   {name:'VALORANT'},
      //   {name:'TUG OF WAR'},
      //   {name:'SPIN THE WHEEL'},
      //   {name:'RED LIGHT GREEN LGHT'},
      //   {name:'DODGE BALL'},
      //   {name:'TWISTER'},
      //   {name:'OFFLINE EVENTS'}
    ]

  },
  {
    name: 'Biggies',
    description: ''
    // 'From foodathons to thrilling treasure hunts, infi gives a memorable experience for gangs of friends with various crowd-pulling games where everything is marvelous. Infi is a place that ensures that the participants grab a bagful of memories.'
    ,
    img1: [[], [], []],
    img: [
      // informals1, informals2;\
    ],
    examples: [
      // {name:'PUBG'},
      //   {name: 'DOTA'},
      //   {name:'COD : call of duty'},
      //   {name:'FIFA'},
      //   {name:'CS : GO'},
      //   {name:'VALORANT'},
      //   {name:'TUG OF WAR'},
      //   {name:'SPIN THE WHEEL'},
      //   {name:'RED LIGHT GREEN LGHT'},
      //   {name:'DODGE BALL'},
      //   {name:'TWISTER'},
      //   {name:'OFFLINE EVENTS'}
    ],

    types: [
      {
        name: "Glitz & Glamour",
        reglink: "https://unstop.com/p/glitz-and-glamour-elan-nvision-2023-indian-institute-of-technology-iit-hyderabad-592863",
        sublink: "",
        documentation:
          "https://docs.google.com/document/d/1vYz61w_uMz9aE5rKKIlocSPe5Vx1hQiAHB_nt9N__Us/edit?usp=sharing",
        img: glitz,
        details:
          "Modelling is not just about beauty, it is about the way you portray yourself with confidence and glamour yet keeping simplicity in you alive! A platform  for all those young ladies out there who always dreamt of being a model.\nElan & ηvision 2023 gives you the opportunity to take the first step towards your passion.",
        format: [],
        timeline: { event: ' 19th February, 2023' },
        prizes: ['All the participants will receive participation certificates by Elan and ηVision, IIT Hyderabad in collaboration with So Star.', 'Top 3 winners will get an opportunity to go to the So Star finale(Winners of So Star Finale can win 1 Lakh cash prizes)', 'Prizes worth ₹12, 000 are up for grabs'],
        rules: ['This is the So Star Hyderabad audition conducted in IIT Hyderabad', 'This is an Offline pageant conducted for both women and men.', 'Event consists of 3 rounds and the results are decided by the judge. ', 'For round 1, participants will have to walk on the ramp', 'For round 2, participants will have to give their introduction in less than 1 minute.  ', 'Selected candidates will go for round 3.', 'In round 3, participants need to answer the questions asked by judges', 'The registration can be done through online or offline mode', 'Offline registrations close 1hr before the start of the event', 'Only 1 entry is allowed per participant. ', 'Age of the participant should be 18 - 28 years', 'Height of the participant should be 5 feet 3 inches or above ', 'Women are supposed to wear a plain black dress', 'Men are supposed to wear a plain black t - shirt and a jeans', 'Any illegal or unethical act related to the competition will lead to immediate disqualification. ', 'The decision of the organizers and judges shall be final and binding.', 'The organizing team has the complete right to change the prize money if the participation is less than ten.', 'Participants are expected to arrive at the venue 1hr before the start of the event', 'Registration fees - Rs100(Every participant will have full access to all the shows in the fest)', 'The event will be held in IIT Hyderabad campus during the fest.(Time, transportation and other details will be provided for the registered people).'],
        judging: ['Body language', 'Confidence', 'Attention to detail with accessories', 'Appreciation of current fashion trends', 'Grooming'],
        contact: [{
          name: 'Dhruv Parashar',
          contact: 9958461340
        },
        {
          name: 'Sameer Kendal',
          contact: 8802323383
        },
        {
          name: 'Siddhartha kommu',
          contact: 8328686004
        },
        {
          name: 'So Star',
          contact: 8790968482
        }
        ]

      },
      {
        name: "Breakfree",
        reglink: "https://unstop.com/creative-cultural-event/breakfree-elan-nvision-2023-indian-institute-of-technology-iit-hyderabad-594932",
        sublink: "",
        documetation: 'https://docs.google.com/document/d/1pzpTx8S8wuq0pDtpWWlYoeypnF06Wu0Crbqe258gRM4/edit?usp=sharing',
        format: ['This is a solo dance competition.', 'This competition is open to all age groups.', 'There will be only one round and the results are decided by the judge.', 'You will have to send us the recorded video of the performance through form, prior to the deadline.', 'The submissions can be sent via our website : elan.org.in', 'The selected submissions will be streamed on a video-conferencing app and will be evaluated live by the judges.', 'The list of participants selected will be sent to all the participants through email.', 'Bonus : If you upload your entry on instagram with #elannvision and #elannvision2022, we will upload the top entries on our competitions page - @elan_nvision.competitions. If you have a private account, submit a screenshot of your post, one hour after uploading it.'],
        timeline: { event: '18th Feb 2023' },
        rules:
          ['SOLO:\n', 'This is an offline solo dance competition.', 'This is the Hyderabad audition conducted by Hip Hop International, India', 'This competition is open to all age groups. ', 'There will be only one round and the results are decided by the judge. ', 'All dance forms are accepted except classical dance.', 'Only 1 entry is allowed per participant.', 'Registration can be online or on - spot during Elan & ηvision 2023.', 'On - Spot Registration closes one hour before the start of the event.', 'All the participants need to be at the Venue 1hr before the event starts.', 'The duration of the performance should be 1.30 - 2mins. ', 'The use of props is allowed. ', 'The participants should bring their own song track in a Pen drive and submit the same to our team 10 mins before your performance ', 'Spilling of any substance that might damage the stage is strictly not allowed', 'Violation of any of the above will result in a penalty ', 'Songs containing vulgar or explicit lyrics will not be allowed.Contestants who perform in an obscene or vulgar manner will be disqualified from the competition. ', 'Any illegal or unethical act related to the competition will lead to immediate disqualification. ', 'The decision of the organizers and judges shall be final and binding. ', 'The organizing team has the complete right to change the prize money if the participation is less than ten.', 'Registration fee: 100 Rs per participant(Every participant will have full access to all the shows in the fest)', 'The event will be held in IIT Hyderabad campus during the fest.(Time, transportation and other details will be provided for the registered people)\n\n', 'DUO/TRIO:\n', 'This is an offline Duo/Trio dance competition. ', 'This is the Hyderabad audition conducted by Hip Hop International, India', 'This competition is open to all age groups. ', 'There will be only one round and the results are decided by the judge. ', 'All dance forms are accepted except classical dance.', 'Head of the team should register with the participant names and contact.', 'Only 1 entry is allowed per participant(same participant cannot participate in  different groups ) ', 'Registration can be online or on- spot during Elan & ηvision 2023.', 'On - Spot Registration closes one hour before the start of the event.', 'All the participants need to be at the Venue 1hr before the event starts.', 'The duration of the performance should be 2 - 3mins. ', 'The use of props is allowed. ', 'The teams should bring their own song track in a Pen drive and submit the same to our team 10 mins before your performance ', 'Spilling of any substance that might damage the stage is strictly not allowed', 'Violation of any of the above will result in a penalty ', 'Songs containing vulgar or explicit lyrics will not be allowed.Contestants who perform in an obscene or vulgar manner will be disqualified from the competition. ', 'Any illegal or unethical act related to the competition will lead to immediate disqualification. ', 'The decision of the organizers and judges shall be final and binding. ', 'The organizing team has the complete right to change the prize money if the participation is less than six.', 'Registration fee: 150 Rs per team(Every participant will have full access to all the shows in the fest)', 'The event will be held in IIT Hyderabad campus during the fest.(Time, transportation and other details will be provided for the registered people).', '\n\n', 'This is a group dance competition with minimum 4 to maximum 18 members in a group and at any point of time at least 4 members should be present on the stage', 'This is the Hyderabad audition conducted by Hip Hop International, India', 'This competition is open to all age groups. ', 'There will be only one round and the results are decided by the judge. ', 'All dance forms are accepted except classical dance.', 'Head of the team should register with the participant names and contact.', 'Only 1 entry is allowed per participant(same participant cannot participate in different groups ) ', 'Registration can be online or on - spot during Elan & ηvision 2023.', 'On - Spot Registration closes one hour before the start of the event.', 'All the participants need to be at the Venue 1hr before the event starts.', 'The duration of the performance should be 3 - 7mins.', 'The use of props is allowed. ', 'The maximum stage time for the performance including time to set up props, entering, leaving,….is 8mins', 'The teams should bring their own song track in a Pen drive and submit the same to our team 10 mins before your performance ', 'Spilling of any substance that might damage the stage is strictly not allowed', 'Violation of any of the above will result in a penalty ', 'Songs containing vulgar or explicit lyrics will not be allowed.Contestants who perform in an obscene or vulgar manner will be disqualified from the competition. ', 'Any illegal or unethical act related to the competition will lead to immediate disqualification. ', 'The decision of the organizers and judges shall be final and binding. ', 'The organizing team has the complete right to change the prize money if the participation is less than five.', 'Registration fee: 200 Rs per team(Every participant will have full access to all the shows in the fest)', 'The event will be held in IIT Hyderabad campus during the fest.(Time, transportation and other details will be provided for the registered people).'],

        img: breakfree,
        details:
          "Is dancing your passion? Does the zen of dance breathe life into your torrid day? This is where you can show off your moves to the masses and shine. It is one of the biggest and most glamorous events of the fest. It's time to move and shake and drop it.",
        judging: ['Choreography', 'Creativity', 'Energy', 'Difficulty of Execution', 'Attire', 'Music Mix'
        ],
        prizes: ['For solo:\n', 'All the participants will receive a certificate of participation issued by Elan and ηVision, IIT Hyderabad.', 'Top 3 Winners get to go to the Finale of Hip Hop international India.', 'Prizes worth ₹15000 are up for grabs\n\n', 'For Duo/Trio:\n', 'All the participants will receive a certificate of participation issued by Elan and ηVision, IIT Hyderabad.', 'Top 3 Winners get to go to the Finale of Hip Hop international India.', 'Prizes worth ₹18000 are up for grabs\n\n', 'For group\n', ' All the participants will receive a certificate of participation issued by Elan and ηVision, IIT Hyderabad. ', 'Top 3 Winners get to go to the Finale of Hip Hop international India.', 'Prizes worth ₹30000 are up for grabs'],
        contact:
          [{
            name: 'Dhruv agrawal',
            contact: 9754011653
          },
          {
            name: 'Rakesh varshith',
            contact: 6281086630
          },
          {
            name: 'Karike Purvi',
            contact: 6281177048
          },
          {
            name: 'Yagna Sri',
            contact: 9951785469
          },
          {
            name: 'Hansika',
            contact: 9550088565
          },
          {
            name: 'Prakhar',
            contact: 7482911955
          },
          {
            name: 'Prathamesh malve',
            contact: 9420750964
          },
          {
            name: 'Nikita',
            contact: 9380720149
          },
          {
            name: 'Deekshitha yakasiri',
            contact: 7995927170
          },
          {
            name: 'Himasree Penmetsa',
            contact: 9492544567
          },
          {
            name: 'B.Sam gnana vivek',
            contact: 9676288762
          }
          ]

      },
    ]

  },
  
]