import React, { useContext, useState, useRef } from "react";
import { HeadCard, CoordCard, OCCard } from "../Components/TeamCard";
import "../styles/team.css";
import OC2021 from "../assets/Team/2021/Overall_head.jpeg";
import OC2022 from "../assets/Team/2022/Krati Arela_Overall Head-1.webp";
// 2023 team
import OC2023 from "../assets/Team/2023/Heads/OC_photo.png";
// heads
import Ishani from "../assets/Team/2023/Heads/Creatives_Multimedia_Ishani.jpg";
import Prasanth from "../assets/Team/2023/Heads/Creatives_Multimedia_Prasanth.png";
import Deekshita from "../assets/Team/2023/Heads/Culti_Deekshitha.jpg";
import Aditya from "../assets/Team/2023/Heads/Finance_Infra_Aditya.jpg";
import Madhumita from "../assets/Team/2023/Heads/Hospi_trans_Madhumitha.jpg";
import KNV from "../assets/Team/2023/Heads/PR, Infi, Web_ Kethari Narasimha Vardhan.jpg";
import Utkarsh from "../assets/Team/2023/Heads/Pronites_Utkarsh.jpeg";
import Keerthan from "../assets/Team/2023/Heads/Publicity_Keerthan.jpg";
import Devang from "../assets/Team/2023/Heads/Sponsorship_Devang.jpg";
import VarunAditya from "../assets/Team/2023/Heads/Techy_ Workshops_Varunaditya Singhal.jpg";
// Coords
import Aayush from "../assets/Team/2023/Coords/Creatives_Aayush.jpg";
import Harsh from "../assets/Team/2023/Coords/Creatives_Harsh.jpg";
import Prem from "../assets/Team/2023/Coords/Creatives_Prem Chand Boda.jpg";
import Siddarth from "../assets/Team/2023/Coords/Creatives_Siddarth S.jpeg";
import Siri from "../assets/Team/2023/Coords/Creatives_Siri.jpeg";
import Sudhesh from "../assets/Team/2023/Coords/Creatives_Sudhesh.jpg";
import Surabhi from "../assets/Team/2023/Coords/Creatives_Surabhi.jpg";
import Kaustubh from "../assets/Team/2023/Coords/Culti _ Biggies_Kaustubh.jpg";
import Srijan from "../assets/Team/2023/Coords/Culti _ Biggies_SRIJAN.jpg";
import Anushka from "../assets/Team/2023/Coords/culti_ biggies _anushkagarg.jpg";
import Shreyas from "../assets/Team/2023/Coords/EML_Shreyas Wankhede.jpg";
import Harthik from "../assets/Team/2023/Coords/Finance_Harthik.jpg";
import Mehul from "../assets/Team/2023/Coords/Hospitality_Mehul.jpeg";
import Palthi from "../assets/Team/2023/Coords/Hospitality_Palthi Bhargav.jpg";
import Rishitha from "../assets/Team/2023/Coords/Hospitality_Rishitha M.jpg";
import Varshini from "../assets/Team/2023/Coords/Hospitality_Varshini.jpeg";
import Rishika from "../assets/Team/2023/Coords/Informals_Rishika.jpeg";
import Sumedh from "../assets/Team/2023/Coords/Informals_Sumedh.jpg";
import Asit from "../assets/Team/2023/Coords/Infra_Asit.jpeg";
import Amandeep from "../assets/Team/2023/Coords/Infrastructure_Amandeep.jpg";
import Mahima from "../assets/Team/2023/Coords/Litr_Beaula_Mahima_V.jpg";
import Sathwik from "../assets/Team/2023/Coords/Litr_Sathwik.jpg";
import Anand from "../assets/Team/2023/Coords/Multimedia_Anand.jpg";
import Kuntal from "../assets/Team/2023/Coords/Multimedia_Kuntal.jpg";
import Omi from "../assets/Team/2023/Coords/Multimedia_Omi.jpeg";
import Diva from "../assets/Team/2023/Coords/PR_Diva.jpg";
import Ashutosh from "../assets/Team/2023/Coords/PR_Sai Ashutosh_.jpg";
import Sreya from "../assets/Team/2023/Coords/Public relations _sreya_.jpg";
import Gaurang from "../assets/Team/2023/Coords/Production_Gaurang.jpg";
import Sneha from "../assets/Team/2023/Coords/Pronites_Sneha.jpeg";
import Aryan from "../assets/Team/2023/Coords/Publicity_Aryan.jpeg";
import Hemang from "../assets/Team/2023/Coords/Publicity_Hemang Nimma.jpg";
import Sahasra from "../assets/Team/2023/Coords/Publicity_Sahasra.jpg";
import Arnav from "../assets/Team/2023/Coords/Security_Arnav.jpg";
import Yoshita from "../assets/Team/2023/Coords/Social cause_Yoshita.jpeg";
import Rishi from "../assets/Team/2023/Coords/Sponsorship_ Rishi Kumar Ravulapelly.jpg";
import Ananya from "../assets/Team/2023/Coords/Sponsorship_Ananya.jpeg";
import Himanshu from "../assets/Team/2023/Coords/Sponsorship_Himanshu.jpeg";
import Mayuri from "../assets/Team/2023/Coords/Sponsorship_Mayuri_chourasia .jpg";
import Pradeep from "../assets/Team/2023/Coords/Sponsorship_Pradeep.jpg";
import Rani from "../assets/Team/2023/Coords/Sponsorship_Rani K Raman.jpg";
import Yash from "../assets/Team/2023/Coords/Sponsorship_Yash Ramteke.jpeg";
import AdityaSridhar from "../assets/Team/2023/Coords/Techy_Aditya.jpeg";
import Aman from "../assets/Team/2023/Coords/Techy_AmanJagtap.jpg";
import Dhanushika from "../assets/Team/2023/Coords/Techy_Dhanushikaa .jpg";
import VaraPrasad from "../assets/Team/2023/Coords/Transport_vara prasad ch.jpg";
import Abhishek from "../assets/Team/2023/Coords/Web_Abhishek Ghosh.jpg";
import HimanshuGupta from "../assets/Team/2023/Coords/web_Himanshu Kumar Gupta.jpg";
import Sarvesh from "../assets/Team/2023/Coords/Web_Sarvesh.jpeg";
import Manoj from "../assets/Team/2023/Coords/Workshop_Manoj Kumar Reddy.jpg";
import Geetha from "../assets/Team/2023/Coords/Workshops_GEETHA BHAVANA.jpg";

import { team2021, team2022 } from "../Components/TeamData";
function Teams() {
  const [year, setyear] = useState("2023");
  const [current, setIsCurrent] = useState("Heads");
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(true);
  const [isActive5, setIsActive5] = useState(false);
  // desktop scroll
  const [isClass1, setIsClass1] = useState(true);
  const [isClass2, setIsClass2] = useState(false);
  const [isClass3, setIsClass3] = useState(false);
  const [isClass4, setIsClass4] = useState(false);
  const [isClass5, setIsClass5] = useState(false);
  const [isClass6, setIsClass6] = useState(false);
  const [isClass7, setIsClass7] = useState(false);
  const [isClass8, setIsClass8] = useState(false);
  const [isClass9, setIsClass9] = useState(false);
  const [isClass10, setIsClass10] = useState(false);
  const [isClass11, setIsClass11] = useState(false);

  const OC = useRef(null);
  const PR = useRef(null);
  const Web = useRef(null);
  const Publicity = useRef(null);
  const Sponsorship = useRef(null);
  const Finance = useRef(null);
  const Creatives = useRef(null);
  const Culti = useRef(null);
  const Techy = useRef(null);
  const Hospitality = useRef(null);
  const Production = useRef(null);

  const handleScroll = (event) => {
    console.log("scrollTop:", event.currentTarget.scrollTop);
    var y = event.currentTarget.scrollTop;
    if (y >= 0 && y < 354.399) {
      setIsClass1(true);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 354.399 && y < 1521) {
      setIsClass1(false);
      setIsClass2(true);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 1521 && y < 1863.1) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(true);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 1863.1 && y < 2650.5) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(true);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 2650.5 && y < 4155.2) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(true);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 4155.2 && y < 4872) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(true);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 4872 && y < 6713) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(true);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 6713 && y < 8292) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(true);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 8292 && y < 9456) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(true);
      setIsClass10(false);
      setIsClass11(false);
    } else if (y >= 9456 && y < 10618) {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(true);
      setIsClass11(false);
    } else {
      setIsClass1(false);
      setIsClass2(false);
      setIsClass3(false);
      setIsClass4(false);
      setIsClass5(false);
      setIsClass6(false);
      setIsClass7(false);
      setIsClass8(false);
      setIsClass9(false);
      setIsClass10(false);
      setIsClass11(true);
    }
  };

  return (
    <div className="bg-[#080f24] flex flex-col team">
      <h1 className="main-heading ">Team</h1>

      <div className="button">
        <button
          onClick={() => {
            setyear("2023");
            setIsActive1(true);
            setIsActive2(false);
            setIsActive3(false);
          }}
          className={isActive1 ? "years active" : "years"}
        >
          2023
        </button>
        <button
          onClick={() => {
            setyear("2022");
            setIsActive1(false);
            setIsActive2(true);
            setIsActive3(false);
          }}
          className={isActive2 ? "years active" : "years"}
        >
          2022
        </button>
        <button
          onClick={() => {
            setyear("2021");
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(true);
          }}
          className={isActive3 ? "years active" : "years"}
        >
          2021
        </button>
      </div>

      {year === "2023" ? (
        <div>
          <h1 className="heading1">Elan and ηVision Team 2023</h1>
          {/* <h3 className="text-left text-white text-lg hidden sm:block">Overall Coordinator</h3> */}
          <div className=" hidden lg:block ">
            <div className="flex flex-wrap flex-row">
              <div className="index m-4 h-[55vh] w-[30%] pl-8 py-8 relative flex flex-col">
                <button onClick={() =>OC.current.scrollIntoView()} className={isClass1 ? "button3 active3" : "button3"}>
                  Overall Coordinator
                </button>
                <button onClick={() =>PR.current.scrollIntoView()} className={isClass2 ? "button3 active3" : "button3"}>
                  Public Relations
                </button>
                <button onClick={() =>Web.current.scrollIntoView()} className={isClass3 ? "button3 active3" : "button3"}>
                  DevOps
                </button>
                <button onClick={() =>Publicity.current.scrollIntoView()} className={isClass4 ? "button3 active3" : "button3"}>
                  Publicity
                </button>

                <button onClick={() =>Sponsorship.current.scrollIntoView()} className={isClass5 ? "button3 active3" : "button3"}>
                  Sponsorship
                </button>
                <button onClick={() =>Finance.current.scrollIntoView()} className={isClass6 ? "button3 active3" : "button3"}>
                  Finance & Infra
                </button>
                <button onClick={() =>Creatives.current.scrollIntoView()} className={isClass7 ? "button3 active3" : "button3"}>
                  Creatives & Multimedia
                </button>
                <button onClick={() =>Culti.current.scrollIntoView()} className={isClass8 ? "button3 active3" : "button3"}>
                  Culti & Biggies, Social Cause, EML & Litr
                </button>
                <button onClick={() =>Techy.current.scrollIntoView()} className={isClass9 ? "button3 active3" : "button3"}>
                  Techy & Workshop
                </button>
                <button onClick={() =>Hospitality.current.scrollIntoView()} className={isClass10 ? "button3 active3" : "button3"}>
                  Hospitality & Transport
                </button>
                <button onClick={() =>Production.current.scrollIntoView()} className={isClass11 ? "button3 active3" : "button3"}>
                  Pronites,Production & Security
                </button>
              </div>
              <div
                onScroll={handleScroll}
                className="index-content w-[60%] m-4 h-[80vh] justify-center overflow-y-auto scroll-smooth relative"
              >
                <div className="flex flex-col items-center ">
                  <div ref={OC}>
                    <OCCard
                      Name="Swapnish Sahare"
                      Image={OC2023}
                      Phone="+91 7030753158"
                      Instagram="https://www.instagram.com/swapnish.ss"
                    />
                  </div>
                  <div ref={PR}>
                  <HeadCard
                    Name="K N Vardhan"
                    Image={KNV}
                    Role="Public Relations, Informals & Web Head"
                    Phone="+91 96527 93113"
                    Instagram="https://www.instagram.com/kn_vardhan"
                    Linkedin="https://www.linkedin.com/in/kethari-narasimha-vardhan/"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="H Sai Ashutosh"
                      Role="Public Relations Coordinator"
                      Image={Ashutosh}
                      Phone="+91 6301180305"
                    />
                    <CoordCard
                      Name="Diva Jaiwar"
                      Role="Public Relations Coordinator"
                      Image={Diva}
                      Phone="+91 8319556225"
                    />
                    <CoordCard
                      Name="Seeram Lakshmi Sreya"
                      Role="Public Relations Coordinator"
                      Image={Sreya}
                      Phone="+91 9391322582"
                    />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Rishika Devarakonda"
                      Role="Informals Coordinator"
                      Image={Rishika}
                      Phone="+91 9160066672"
                    />
                    <CoordCard
                      Name="Sumedh Kashikar"
                      Role="Infromals Coordinator"
                      Image={Sumedh}
                      Phone="+91 7601041880"
                    />
                  </div>
                  <div ref={Web} className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Sarvesh Mokhare"
                      Role="DevOps Coordinator"
                      Image={Sarvesh}
                      Phone="+91 9156833197"
                    />
                    <CoordCard
                      Name="Himanshu Gupta"
                      Role="DevOps Coordinator"
                      Image={HimanshuGupta}
                      Phone="+91 8009800905"
                    />
                    <CoordCard
                      Name="Abhishek Ghosh"
                      Role="DevOps Coordinator"
                      Image={Abhishek}
                      Phone="+91 8009825702"
                    />
                  </div>
                  <div ref={Publicity}>
                  <HeadCard
                    Name="Sree Keerthan Reddy"
                    Image={Keerthan}
                    Role="Publicity Head"
                    Phone="+91 7981520032"
                    Instagram="https://www.instagram.com/keerthan26_22"
                    Linkedin="https://www.linkedin.com/in/sree-keerthan-reddy-peram-a562bb201/"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Aryan Sharan Reddy"
                      Role="Publicity Coordinator"
                      Image={Aryan}
                      Phone="+91 8374064960"
                    />
                    <CoordCard
                      Name="Hemang Nimma"
                      Role="Publicity Coordinator"
                      Image={Hemang}
                      Phone="+91 9731918202"
                    />
                    <CoordCard
                      Name="Sahasra Todupunuri"
                      Role="Publicity Coordinator"
                      Image={Sahasra}
                      Phone="+91 7842742788"
                    />
                  </div>
                  <div ref={Sponsorship}>
                  <HeadCard
                    Name="Devang Sardal"
                    Image={Devang}
                    Role="Sponsorship Head"
                    Phone="+91 9136093007"
                    Instagram="https://www.instagram.com/devang_s_3007"
                    Linkedin="https://www.linkedin.com/in/devang-sardal-456601222/"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Rani K Raman"
                      Role="Sponsorship Coordinator"
                      Image={Rani}
                      Phone="+91 7292888540"
                    />
                    <CoordCard
                      Name="Ananya Varshney"
                      Role="Sponsorship Coordinator"
                      Image={Ananya}
                      Phone="+91 8088577412"
                    />
                    <CoordCard
                      Name="Mayuri Chourasia"
                      Role="Sponsorship Coordinator"
                      Image={Mayuri}
                      Phone="+91 9136542860"
                    />
                    <CoordCard
                      Name="Himanshu Jindal"
                      Role="Sponsorship Coordinator"
                      Image={Himanshu}
                      Phone="+91 8777875738"
                    />
                    <CoordCard
                      Name="Pradeep Mundlik"
                      Role="Sponsorship Coordinator"
                      Image={Pradeep}
                      Phone="+91 7040146995"
                    />
                    <CoordCard
                      Name="Ravulapelly Rishi Kumar"
                      Role="Sponsorship Coordinator"
                      Image={Rishi}
                      Phone="+91 9908106184"
                    />
                    <CoordCard
                      Name="Yash Ramteke"
                      Role="Sponsorship Coordinator"
                      Image={Yash}
                      Phone="+91 9696333035"
                    />
                  </div>
                  <div ref={Finance}>
                  <HeadCard
                    Name="Aditya Nimbal"
                    Image={Aditya}
                    Role="Finance & Infra Head"
                    Phone="+91 9818664119"
                    Instagram="https://www.instagram.com/adityanimbal_2002"
                    Linkedin="https://www.linkedin.com/in/aditya-nimbal-29b601222/"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Harthik Kancham"
                      Role="Finance Coordinator"
                      Image={Harthik}
                      Phone="+91 9154641925"
                    />
                    <CoordCard
                      Name="Asit Desai"
                      Role="Infra Coordinator"
                      Image={Asit}
                      Phone="+91 9405467723"
                    />
                    <CoordCard
                      Name="Amandeep Saha"
                      Role="Infra Coordinator"
                      Image={Amandeep}
                      Phone="+91 7328098261"
                    />
                  </div>
                  <div ref={Creatives} className="flex flex-wrap flex-row justify-center">
                    <HeadCard
                      Name="Ishani Churi"
                      Image={Ishani}
                      Role="Creatives & Multimedia Head"
                      Phone="+91 9152233084"
                      Instagram="https://www.instagram.com/ishanichuri"
                    />
                    <HeadCard
                      Name="Prasanath Tata"
                      Image={Prasanth}
                      Role="Creatives & Multimedia Head"
                      Phone="+91 9000180912"
                      Instagram="https://www.instagram.com/prashtata"
                      Linkedin="https://www.linkedin.com/in/prasanth-tata-a35b0b204/"
                    />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Aayush Prabhu"
                      Role="Creatives Coordinator"
                      Image={Aayush}
                      Phone="+91 9022542752"
                    />
                    <CoordCard
                      Name="Boda Premchand"
                      Role="Creatives Coordinator"
                      Image={Prem}
                      Phone="+91 7013640047"
                    />
                    <CoordCard
                      Name="Harshwardhan Kupekar"
                      Role="Creatives Coordinator"
                      Image={Harsh}
                      Phone="+91 9307696254"
                    />
                    <CoordCard
                      Name="Siddarth Saha"
                      Role="Creatives Coordinator"
                      Image={Siddarth}
                      Phone="+91 9810552384"
                    />
                    <CoordCard
                      Name="Siri Shankarathota"
                      Role="Creatives Coordinator"
                      Image={Siri}
                      Phone="+91 7760087535"
                    />
                    <CoordCard
                      Name="Sudhesh Venkatachalaam"
                      Role="Creatives Coordinator"
                      Image={Sudhesh}
                      Phone="+91 9003941032"
                    />
                    <CoordCard
                      Name="Surabhi Moorthy"
                      Role="Creatives Coordinator"
                      Image={Surabhi}
                    />
                  </div>
                  <div className="flex flex-row flex-wrap justify-center">
                    <CoordCard
                      Name="Anand Sharma"
                      Role="Multimedia Coordinator"
                      Image={Anand}
                      Phone="+91 9111280778"
                    />
                    <CoordCard
                      Name="Kuntal Suman"
                      Role="Multimedia Coordinator"
                      Image={Kuntal}
                      Phone="+91 8578001808"
                    />
                    <CoordCard
                      Name="Omkaradithya Pujari"
                      Role="Multimedia Coordinator"
                      Image={Omi}
                      Phone="+91 9483299738"
                    />
                  </div>
                  <div ref={Culti}>
                  <HeadCard
                    Name="Mekala Deekshitha Reddy"
                    Image={Deekshita}
                    Role="Culti & Biggies Head"
                    Phone="+91 7330784699"
                    Instagram="https://www.instagram.com/_deekshitha_5"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Srijan Shahi"
                      Role="Culti & Biggies Coordinator"
                      Image={Srijan}
                      Phone="+91 7023425801"
                    />
                    <CoordCard
                      Name="Anushka Garg "
                      Role="Culti & Biggies Coordinator"
                      Image={Anushka}
                      Phone="+91 8602932029"
                    />
                    <CoordCard
                      Name="Kaustubh Gupta"
                      Role="Culti & Biggies Coordinator"
                      Image={Kaustubh}
                      Phone="+91 8982255359"
                    />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Yoshita Kondapalli"
                      Role="Social Cause Coordinator"
                      Image={Yoshita}
                      Phone="+91 6281164252"
                    />
                    <CoordCard
                      Name="Shreyas Wankhede"
                      Role="EML Coordinator"
                      Image={Shreyas}
                      Phone="+91 8657452003"
                    />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Beaula Mahima V"
                      Role="Litr Coordinator"
                      Image={Mahima}
                      Phone="+91 9003124379"
                    />
                    <CoordCard
                      Name="Gnana Sathwik Sai"
                      Role="Litr Coordinator"
                      Image={Sathwik}
                      Phone="+91 6361705847"
                    />
                  </div>
                  <div  ref={Techy}>
                  <HeadCard
                    Name="Varunaditya Singhal"
                    Image={VarunAditya}
                    Role="Techy and Workshops Head"
                    Phone="+91 7015715920"
                    Instagram="https://www.instagram.com/varunaditya.singhal"
                    Linkedin="https://www.linkedin.com/in/varunaditya-singhal-3a2389182/"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Aditya Sridhar"
                      Role="Techy Coordinator"
                      Image={AdityaSridhar}
                      Phone="+91 9840527743"
                    />
                    <CoordCard
                      Name="Dhanushika S"
                      Role="Techy Coordinator"
                      Image={Dhanushika}
                      Phone="+91 6381950947"
                    />
                    <CoordCard
                      Name="Aman Jagtap"
                      Role="Techy Coordinator"
                      Image={Aman}
                      Phone="+91 7235915379"
                    />
                    <CoordCard
                      Name="K Sai Geetha Bhavana"
                      Role="Workshops Coordinator"
                      Image={Geetha}
                      Phone="+91 7396433871"
                    />
                    <CoordCard
                      Name="Manoj Kumar Reddy"
                      Role="Worshops Coordinator"
                      Image={Manoj}
                      Phone="+91 7569421250"
                    />
                  </div>
                  <div ref={Hospitality}>
                  <HeadCard
                    Name="Madhumita Katam"
                    Image={Madhumita}
                    Role="Hospitality & Transport Head"
                    Phone="+91 8309567379"
                    Instagram="https://www.instagram.com/madhumitha_katam"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Palthi Bhargav"
                      Role="Hospitality Coordinator"
                      Image={Palthi}
                      Phone="+91 9959912411"
                    />
                    <CoordCard
                      Name="Mehul Srivastava"
                      Role="Hospitslity Coordinator"
                      Image={Mehul}
                      Phone="+91 6395263137"
                    />
                    <CoordCard
                      Name="Rishita Mudunuri"
                      Role="Hospitality Coordinator"
                      Image={Rishitha}
                      Phone="+91 6300320166"
                    />
                    <CoordCard
                      Name="Varshini Jonnala"
                      Role="Hospitality Coordinator"
                      Image={Varshini}
                      Phone="+91 9938014729"
                    />
                    <CoordCard
                      Name="Ch Vara Prasad"
                      Role="Transport Coordinator"
                      Image={VaraPrasad}
                      Phone="+91 6305712585"
                    />
                  </div>
                  <div ref={Production}>
                  <HeadCard
                    Name="Utkarsh Srivastava"
                    Image={Utkarsh}
                    Role="Pronites & Security Head"
                    Phone="+91 6390537854"
                    Instagram="https://www.instagram.com/_utkarshsrivastava"
                    Linkedin="https://www.linkedin.com/in/utksriv/"
                  />
                  </div>
                  <div className="flex flex-wrap flex-row justify-center">
                    <CoordCard
                      Name="Sneha Malik"
                      Role="Pronites Coordinator"
                      Image={Sneha}
                      Phone="+91 8197270409"
                    />
                    <CoordCard
                      Name="Gaurang Dahad"
                      Role="Production Coordinator"
                      Image={Gaurang}
                      Phone="+91 7741940670"
                    />
                    <CoordCard
                      Name="Arnav Goyanka"
                      Role="Security Coordinator"
                      Image={Arnav}
                      Phone="+91 6262666778"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden sm:block">
            <div className="button">
              <button
                onClick={() => {
                  setIsCurrent("Heads");
                  setIsActive4(true);
                  setIsActive5(false);
                }}
                className={
                  isActive4
                    ? "button2 active2 rounded-lg"
                    : "button2 rounded-lg"
                }
              >
                <h3 className="px-16 py-2">Heads</h3>
              </button>
              <button
                onClick={() => {
                  setIsCurrent("Coordinators");
                  setIsActive4(false);
                  setIsActive5(true);
                }}
                className={
                  isActive5
                    ? "button2 active2 rounded-lg"
                    : "button2 rounded-lg"
                }
              >
                <h3 className="px-8 py-2">Coordinators</h3>
              </button>
            </div>
            {current === "Heads" ? (
              <>
                <div className="flex flex-row justify-center m-4">
                  <OCCard
                    Name="Swapnish Sahare"
                    Image={OC2023}
                    Phone="+91 7030753158"
                    Instagram="https://www.instagram.com/swapnish.ss"
                  />
                </div>
                <div className="flex flex-wrap flex-row justify-center m-4">
                  <HeadCard
                    Name="K N Vardhan"
                    Image={KNV}
                    Role="Public Relations, Informals & Web Head"
                    Phone="+91 96527 93113"
                    Instagram="https://www.instagram.com/kn_vardhan"
                    Linkedin="https://www.linkedin.com/in/kethari-narasimha-vardhan/"
                  />
                  <HeadCard
                    Name="Devang Sardal"
                    Image={Devang}
                    Role="Sponsorship Head"
                    Phone="+91 9136093007"
                    Instagram="https://www.instagram.com/devang_s_3007"
                    Linkedin="https://www.linkedin.com/in/devang-sardal-456601222/"
                  />
                  <HeadCard
                    Name="Aditya Nimbal"
                    Image={Aditya}
                    Role="Finance & Infra Head"
                    Phone="+91 9818664119"
                    Instagram="https://www.instagram.com/adityanimbal_2002"
                    Linkedin="https://www.linkedin.com/in/aditya-nimbal-29b601222/"
                  />
                  <HeadCard
                    Name="Ishani Churi"
                    Image={Ishani}
                    Role="Creatives & Multimedia Head"
                    Phone="+91 9152233084"
                    Instagram="https://www.instagram.com/ishanichuri"
                  />
                  <HeadCard
                    Name="Prasanath Tata"
                    Image={Prasanth}
                    Role="Creatives & Multimedia Head"
                    Phone="+91 9000180912"
                    Instagram="https://www.instagram.com/prashtata"
                    Linkedin="https://www.linkedin.com/in/prasanth-tata-a35b0b204/"
                  />
                  <HeadCard
                    Name="Mekala Deekshitha Reddy"
                    Image={Deekshita}
                    Role="Culti & Biggies Head"
                    Phone="+91 7330784699"
                    Instagram="https://www.instagram.com/_deekshitha_5"
                  />
                  <HeadCard
                    Name="Varunaditya Singhal"
                    Image={VarunAditya}
                    Role="Techy and Workshops Head"
                    Phone="+91 7015715920"
                    Instagram="https://www.instagram.com/varunaditya.singhal"
                    Linkedin="https://www.linkedin.com/in/varunaditya-singhal-3a2389182/"
                  />
                  <HeadCard
                    Name="Madhumita Katam"
                    Image={Madhumita}
                    Role="Hospitality & Transport Head"
                    Phone="+91 8309567379"
                    Instagram="https://www.instagram.com/madhumitha_katam"
                  />
                  <HeadCard
                    Name="Utkarsh Srivastava"
                    Image={Utkarsh}
                    Role="Pronites & Security Head"
                    Phone="+91 6390537854"
                    Instagram="https://www.instagram.com/_utkarshsrivastava"
                    Linkedin="https://www.linkedin.com/in/utksriv/"
                  />
                  <HeadCard
                    Name="Sree Keerthan Reddy"
                    Image={Keerthan}
                    Role="Publicity Head"
                    Phone="+91 7981520032"
                    Instagram="https://www.instagram.com/keerthan26_22"
                    Linkedin="https://www.linkedin.com/in/sree-keerthan-reddy-peram-a562bb201/"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-wrap flex-row  justify-center">
                  <CoordCard
                    Name="Sarvesh Mokhare"
                    Role="DevOps Coordinator"
                    Image={Sarvesh}
                    Phone="+91 9156833197"
                  />
                  <CoordCard
                    Name="Himanshu Gupta"
                    Role="DevOps Coordinator"
                    Image={HimanshuGupta}
                    Phone="+91 8009800905"
                  />
                  <CoordCard
                    Name="Abhishek Ghosh"
                    Role="DevOps Coordinator"
                    Image={Abhishek}
                    Phone="+91 8009825702"
                  />
                  <CoordCard
                    Name="H Sai Ashutosh"
                    Role="Public Relations Coordinator"
                    Image={Ashutosh}
                    Phone="+91 6301180305"
                  />
                  <CoordCard
                    Name="Diva Jaiwar"
                    Role="Public Relations Coordinator"
                    Image={Diva}
                    Phone="+91 8319556225"
                  />
                  <CoordCard
                    Name="Seeram Lakshmi Sreya"
                    Role="Public Relations Coordinator"
                    Image={Sreya}
                    Phone="+91 9391322582"
                  />
                  <CoordCard
                    Name="Aryan Sharan Reddy"
                    Role="Publicity Coordinator"
                    Image={Aryan}
                    Phone="+91 8374064960"
                  />
                  <CoordCard
                    Name="Hemang Nimma"
                    Role="Publicity Coordinator"
                    Image={Hemang}
                    Phone="+91 9731918202"
                  />
                  <CoordCard
                    Name="Sahasra Todupunuri"
                    Role="Publicity Coordinator"
                    Image={Sahasra}
                    Phone="+91 7842742788"
                  />
                  <CoordCard
                    Name="Asit Desai"
                    Role="Infra Coordinator"
                    Image={Asit}
                    Phone="+91 9405467723"
                  />
                  <CoordCard
                    Name="Amandeep Saha"
                    Role="Infra Coordinator"
                    Image={Amandeep}
                    Phone="+91 7328098261"
                  />
                  <CoordCard
                    Name="K Sai Geetha Bhavana"
                    Role="Workshops Coordinator"
                    Image={Geetha}
                    Phone="+91 7396433871"
                  />
                  <CoordCard
                    Name="Manoj Kumar Reddy"
                    Role="Worshops Coordinator"
                    Image={Manoj}
                    Phone="+91 7569421250"
                  />
                  <CoordCard
                    Name="Aayush Prabhu"
                    Role="Creatives Coordinator"
                    Image={Aayush}
                    Phone="+91 9022542752"
                  />
                  <CoordCard
                    Name="Boda Premchand"
                    Role="Creatives Coordinator"
                    Image={Prem}
                    Phone="+91 7013640047"
                  />
                  <CoordCard
                    Name="Harshwardhan Kupekar"
                    Role="Creatives Coordinator"
                    Image={Harsh}
                    Phone="+91 9307696254"
                  />
                  <CoordCard
                    Name="Siddarth Saha"
                    Role="Creatives Coordinator"
                    Image={Siddarth}
                    Phone="+91 9810552384"
                  />
                  <CoordCard
                    Name="Siri Shankarathota"
                    Role="Creatives Coordinator"
                    Image={Siri}
                    Phone="+91 7760087535"
                  />
                  <CoordCard
                    Name="Sudhesh Venkatachalaam"
                    Role="Creatives Coordinator"
                    Image={Sudhesh}
                    Phone="+91 9003941032"
                  />
                  <CoordCard
                    Name="Surabhi Moorthy"
                    Role="Creatives Coordinator"
                    Image={Surabhi}
                  />
                  <CoordCard
                    Name="Beaula Mahima V"
                    Role="Litr Coordinator"
                    Image={Mahima}
                    Phone="+91 9003124379"
                  />
                  <CoordCard
                    Name="Gnana Sathwik Sai"
                    Role="Litr Coordinator"
                    Image={Sathwik}
                    Phone="+91 6361705847"
                  />
                  <CoordCard
                    Name="Rishika Devarakonda"
                    Role="Informals Coordinator"
                    Image={Rishika}
                    Phone="+91 9160066672"
                  />
                  <CoordCard
                    Name="Sumedh Kashikar"
                    Role="Infromals Coordinator"
                    Image={Sumedh}
                    Phone="+91 7601041880"
                  />
                  <CoordCard
                    Name="Anand Sharma"
                    Role="Multimedia Coordinator"
                    Image={Anand}
                    Phone="+91 9111280778"
                  />
                  <CoordCard
                    Name="Kuntal Suman"
                    Role="Multimedia Coordinator"
                    Image={Kuntal}
                    Phone="+91 8578001808"
                  />
                  <CoordCard
                    Name="Omkaradithya Pujari"
                    Role="Multimedia Coordinator"
                    Image={Omi}
                    Phone="+91 9483299738"
                  />
                  <CoordCard
                    Name="Aditya Sridhar"
                    Role="Techy Coordinator"
                    Image={AdityaSridhar}
                    Phone="+91 9840527743"
                  />
                  <CoordCard
                    Name="Dhanushika S"
                    Role="Techy Coordinator"
                    Image={Dhanushika}
                    Phone="+91 6381950947"
                  />
                  <CoordCard
                    Name="Aman Jagtap"
                    Role="Techy Coordinator"
                    Image={Aman}
                    Phone="+91 7235915379"
                  />
                  <CoordCard
                    Name="Srijan Shahi"
                    Role="Culti & Biggies Coordinator"
                    Image={Srijan}
                    Phone="+91 7023425801"
                  />
                  <CoordCard
                    Name="Anushka Garg "
                    Role="Culti & Biggies Coordinator"
                    Image={Anushka}
                    Phone="+91 8602932029"
                  />
                  <CoordCard
                    Name="Kaustubh Gupta"
                    Role="Culti & Biggies Coordinator"
                    Image={Kaustubh}
                    Phone="+91 8982255359"
                  />
                  <CoordCard
                    Name="Palthi Bhargav"
                    Role="Hospitality Coordinator"
                    Image={Palthi}
                    Phone="+91 9959912411"
                  />
                  <CoordCard
                    Name="Mehul Srivastava"
                    Role="Hospitslity Coordinator"
                    Image={Mehul}
                    Phone="+91 6395263137"
                  />
                  <CoordCard
                    Name="Rishita Mudunuri"
                    Role="Hospitality Coordinator"
                    Image={Rishitha}
                    Phone="+91 6300320166"
                  />
                  <CoordCard
                    Name="Varshini Jonnala"
                    Role="Hospitality Coordinator"
                    Image={Varshini}
                    Phone="+91 9938014729"
                  />
                  <CoordCard
                    Name="Rani K Raman"
                    Role="Sponsorship Coordinator"
                    Image={Rani}
                    Phone="+91 7292888540"
                  />
                  <CoordCard
                    Name="Ananya Varshney"
                    Role="Sponsorship Coordinator"
                    Image={Ananya}
                    Phone="+91 8088577412"
                  />
                  <CoordCard
                    Name="Mayuri Chourasia"
                    Role="Sponsorship Coordinator"
                    Image={Mayuri}
                    Phone="+91 9136542860"
                  />
                  <CoordCard
                    Name="Himanshu Jindal"
                    Role="Sponsorship Coordinator"
                    Image={Himanshu}
                    Phone="+91 8777875738"
                  />
                  <CoordCard
                    Name="Pradeep Mundlik"
                    Role="Sponsorship Coordinator"
                    Image={Pradeep}
                    Phone="+91 7040146995"
                  />
                  <CoordCard
                    Name="Ravulapelly Rishi Kumar"
                    Role="Sponsorship Coordinator"
                    Image={Rishi}
                    Phone="+91 9908106184"
                  />
                  <CoordCard
                    Name="Yash Ramteke"
                    Role="Sponsorship Coordinator"
                    Image={Yash}
                    Phone="+91 9696333035"
                  />
                  <CoordCard
                    Name="Sneha Malik"
                    Role="Pronites Coordinator"
                    Image={Sneha}
                    Phone="+91 8197270409"
                  />
                  <CoordCard
                    Name="Yoshita Kondapalli"
                    Role="Social Cause Coordinator"
                    Image={Yoshita}
                    Phone="+91 6281164252"
                  />
                  <CoordCard
                    Name="Shreyas Wankhede"
                    Role="EML Coordinator"
                    Image={Shreyas}
                    Phone="+91 8657452003"
                  />
                  <CoordCard
                    Name="Gaurang Dahad"
                    Role="Production Coordinator"
                    Image={Gaurang}
                    Phone="+91 7741940670"
                  />
                  <CoordCard
                    Name="Ch Vara Prasad"
                    Role="Transport Coordinator"
                    Image={VaraPrasad}
                    Phone="+91 6305712585"
                  />
                  <CoordCard
                    Name="Arnav Goyanka"
                    Role="Security Coordinator"
                    Image={Arnav}
                    Phone="+91 6262666778"
                  />
                  <CoordCard
                    Name="Harthik Kancham"
                    Role="Finance Coordinator"
                    Image={Harthik}
                    Phone="+91 9154641925"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ) : year === "2022" ? (
        <div>
          <h1 className="heading1">Elan and ηVision Team 2022</h1>
          <div className="flex flex-row justify-center m-4">
            <OCCard
              Image={OC2022}
              Name="Krati Arela"
              Role="Overall Coordinator"
            />
          </div>
          <div className="flex flex-wrap justify-center m-8">
            {team2022.map((item) => (
              <HeadCard Image={item.Image} Name={item.Name} Role={item.Role} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="heading1">Elan and ηVision Team 2021</h1>
          <div className="flex flex-row justify-center m-4">
            <OCCard
              Image={OC2021}
              Name="Stavan Christian"
              Role="Overall Coordinator"
            />
          </div>
          <div className="flex flex-wrap justify-center m-8 ">
            {team2021.map((item) => (
              <HeadCard Image={item.Image} Name={item.Name} Role={item.Role} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Teams;
