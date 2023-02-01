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



export const eventsdata=[
  
  {name:'Workshops',
  subnames:['Workshops-1','Workshops'],
    description: '',
    img:[],
    img1: [[workshop19feb_1, workshop19feb_1], [workshop7jan_1, workshop7jan_2, workshop7jan_3, workshop7jan_4],[workshop19mar_1,workshop19mar_2]],
    reglink: ["https://techradiance.in/iit-workshop/","https://unstop.com/workshop/technical-workshop-elan-nvision-2023-indian-institute-of-technology-iit-hyderabad-566831"],
    examples: []

},
  {
    name: 'Pronites',
    description:'' ,
    img1:[[],[],[]]
    // 'Apart from the competitions our fest never fails to amuse people with fun and exciting shows',
    ,img: [pronites1, pronites2, pronites3, pronites4, pronites5],
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
  {name:'Informals',
  img1:[[],[],[]],
    description: ''
    // 'From foodathons to thrilling treasure hunts, infi gives a memorable experience for gangs of friends with various crowd-pulling games where everything is marvelous. Infi is a place that ensures that the participants grab a bagful of memories.'
    ,img:[informals1,informals2],
    examples:[
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
    img1:[[],[],[]],
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
    ]

  },
]