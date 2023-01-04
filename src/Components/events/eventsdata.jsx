const pronites1 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554921/elan/assets/events/pronites_1_vcxymp.jpg";
const pronites2 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554922/elan/assets/events/pronites_2_hfzoao.jpg";
const pronites3 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554924/elan/assets/events/pronites_3_m8wt6r.webp";
const pronites4 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554944/elan/assets/events/pronites_4_wzwhhg.jpg";
const pronites5 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554951/elan/assets/events/pronites_5_c6u2z2.jpg";
const informals1 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554922/elan/assets/events/informals_1_dfwk8h.jpg";
const informals2 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554920/elan/assets/events/informals_2_fufzho.jpg";
const workshops1 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554939/elan/assets/events/workshop_ai_dfrrnn.png";
const workshops2 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554934/elan/assets/events/workshop_blockc_fbfleq.png";
const workshops3 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554944/elan/assets/events/workshop_farming_nlhdni.png";
const workshops4 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554941/elan/assets/events/workshop_humanoid_f63isq.png";
const workshops5 = "https://res.cloudinary.com/dky4ljqmf/image/upload/v1671554944/elan/assets/events/workshop_vr_cuvhyr.png";

const workshop7jan_1 ="https://res.cloudinary.com/dky4ljqmf/image/upload/v1672827640/elan/assets/events/workshop_4feb_appdev_itp7f1.jpg"
const workshop7jan_2 ="https://res.cloudinary.com/dky4ljqmf/image/upload/v1672827641/elan/assets/events/workshop_4feb_ai_o2jzd3.jpg"
const workshop7jan_3 ="https://res.cloudinary.com/dky4ljqmf/image/upload/v1672827640/elan/assets/events/workshop_4feb_hack_leqnj1.jpg"
const workshop7jan_4 ="https://res.cloudinary.com/dky4ljqmf/image/upload/v1672827638/elan/assets/events/workshop_4feb_data_kgixwg.jpg"
const workshop19mar_2 ="https://res.cloudinary.com/dky4ljqmf/image/upload/v1672824183/elan/assets/events/workshop_19mar_online_yshyfn.jpg"
const workshop19mar_1 ="https://res.cloudinary.com/dky4ljqmf/image/upload/v1672824170/elan/assets/events/workshop_19mar_offline_ulcqu1.jpg"


export const eventsdata=[
  
  {name:'Workshops',
  subnames:['Workshops-1','Workshops'],
    description: '',
    img:[],
    img1: [[workshop7jan_1, workshop7jan_2, workshop7jan_3, workshop7jan_4],[workshops1, workshops2, workshops3, workshops4, workshops5],[workshop19mar_1,workshop19mar_2]],
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