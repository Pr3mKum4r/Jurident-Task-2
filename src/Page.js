import React from "react";
import "./Page.css";
import img from "./assets/unsplash_AEaTUnvneik.svg";
import icon1 from "./assets/Icon.svg";
import icon2 from "./assets/Icon (1).svg";
import icon3 from "./assets/Icon (2).svg";
import icon4 from "./assets/Icon (3).svg";
import icon5 from "./assets/Icon (4).svg";
import icon6 from "./assets/Icon (5).svg";

function Page() {
  return (
    <div>
      <div className="whatwedo flex flex-col md:flex-row">
        <div className="left md:ml-24 md:w-1/2">
          <div className="container">
            <div className="line"></div>
            <div className="heading  md:text-2xl font-bold text-[#22495F] text-lg">What We Do</div>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold mt-4 font-nunito text-[#22495F]">
            We are working <br /> cross country
          </h1>
          <p className="content text-md md:text-xl  flex justify-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia
            tempore tenetur ipsa ipsam rem quia optio nobis! Eveniet beatae
            pariatur voluptatem, commodi, quia exercitationem nulla dolor
            veritatis consequuntur eligendi quaerat consequatur iste earum ipsam
            odit provident nihil cum aliquid minima veniam enim impedit saepe
            quam eum? Perferendis, sapiente reiciendis?
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:mr-24 mr-4 ml-4 md:ml-0 mb-4 md:mb-8 ">
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        <h1
          className="text-2xl md:text-4xl font-semibold mt-4 font-nunito text-[#22495F]"
          style={{ marginLeft: "5%" }}
        >
          What we do for our kids with special needs
        </h1>
        <div className="section">
          <div className="sectiontwo mt-8 flex flex-col mr-24 md:flex-row">
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon1} alt="" className="w-14 h-14 mb-4" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Basic amenities
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon2} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Therapy
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon3} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Public outreach
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="sectiontwo flex flex-col mr-24 -mt-8 md:flex-row md:mt-4 ">
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon4} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Family support
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon5} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Health benefits
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
            <div className="one flex ml-24 w-full md:w-1/3">
              <div>
                <img src={icon6} alt="" className="w-14 h-14" />
              </div>
              <div className="para">
                <h1
                  style={{ marginTop: "0", color: "#22495F", fontSize: "20px" }}
                  className="font-semibold"
                >
                  Education
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quae mollitia adipisci labore facilis error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionthree">
        <div className="container">
          <div className="line md:mb-8 mt-4"></div>
          <div className="heading md:mb-8 md:text-2xl font-bold text-[#22495F] text-lg mt-4">PROJECTS WE HAVE DONE</div> <br />
        </div>
        <h1 className="headthree text-xl font-semibold md:ml-24 mb-8 md:text-4xl -ml:24">
          We are creating a place <br /> where children with special <br />
          needs can thrive
        </h1>
        

        <div class="grid grid-cols-1 md:grid-cols-3 md:h-[400px] md:mr-20 mr-4 gap-6 h-auto text-white">
  <div class="px-4 py-4 md:py-8 bg-[url('./assets/project1.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
    <div class="text">
      <h3 class="text-2xl font-medium mb-4 md:mb-6 font-nunito">
        Mission 1k smile: Outdoor charity
      </h3>
      <p class="font-nunito">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est soluta eum? Veniam, ex et!
      </p>
    </div>
    <div class="self-start mt-auto text-black font-medium btn bg-white flex justify-center md:justify-start h-[40px] text-center rounded w-[100px]">
      <button class="learn-more">Learn more</button>
    </div>
  </div>

  <div class="px-4 py-4 md:py-8 bg-[url('./assets/project2.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
    <div class="text">
      <h3 class="text-2xl font-medium mb-4 md:mb-6">Weekly excursions</h3>
      <p class="font-nunito">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est soluta eum? Veniam, ex et!
      </p>
    </div>
    <div class="self-start mt-auto text-black font-medium btn bg-white flex justify-center md:justify-start h-[40px] text-center rounded w-[100px]">
      <button class="learn-more font-nunito">Learn more</button>
    </div>
  </div>

  <div class="px-4 py-4 md:py-8 bg-[url('./assets/project3.png')] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col">
    <div class="text">
      <h3 class="text-2xl font-medium mb-4 md:mb-6 font-nunito">
        Monthly public awareness
      </h3>
      <p class="font-nunito">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est soluta eum? Veniam, ex et!
      </p>
    </div>
    <div class="self-start mt-auto text-black font-medium btn bg-white flex justify-center md:justify-start h-[40px] text-center rounded w-[100px]">
      <button class="learn-more font-nunito">Learn more</button>
    </div>
  </div>
</div>


        
        <div class="contribute bg-[url('contribute.png')] bg-center bg-cover bg-no-repeat my-4 md:my-[50px] h-[250px] md:h-[350px] flex flex-col justify-center text-center rounded-3xl md:mr-20 mr-4">
  <div class="text my-4 md:my-0 px-4 md:px-[20%]">
    <h1 class="text-2xl md:text-4xl font-medium text-white font-nunito">
      You can contribute to provide a place for children with special needs!
    </h1>
  </div>

  <div class="btns flex justify-center my-4">
    <div class="font-medium volunteer mx-3 bg-[#096A56] flex justify-center text-white h-[40px] md:h-[50px] text-center rounded w-40 md:w-[200px]">
      <button class="text-xs md:text-lg">Join as a voluteer</button>
    </div>
    <div class="font-medium learn-more mx-3 bg-white flex justify-center h-[40px] md:h-[50px] text-center rounded w-40 md:w-[100px]">
      <button class="text-xs md:text-base">Donate</button>
    </div>
  </div>
</div>


      </div>
    </div>
  );
}
export default Page;
