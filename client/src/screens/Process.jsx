import React from "react";

function Process() {
  return (
    <div>
      {/* <Loader/> */}

      <div className="flex flex-wrap mt-6 relative max-w-[1080px] mx-auto items-center justify-between mb-3">
        <div>
          <div className="flex-flex-row">
            <div className="relative font-poppins font-bold text-5xl ml-8 p-6 mt-5 mb-6 h-fit text-center rounded-lg">
              How Things Work ?
            </div>
            {/* <div className='h-[140px] w-[190px] mx-[20%] rounded-xl ml-[] p-7 bg-yellow-main'>

                    </div> */}
          </div>
          {/* cards */}
          <div className="relative grid lg:grid-cols-3 
          justify-center items-center text-center md:grid-cols-2">
            {/* card 1 */}
            <div className="relative gap-y-8 mb-6">
              <div className="p-7 max-h-[400px] cursor-pointer hover:scale-105 transition-all duration-200 h-full">
                <div className="absolute bg-yellow-main top-4 left-4 h-10 w-10 rounded-full">
                  <h1 className="relative font-poppins text-3xl text-center">
                    1
                  </h1>
                </div>
                <div
                  class="p-7  h-fit w-[300px] bg-[url(./images/bg1.png)] cursor-pointer
                            bg-cover hover:scale-103 transition-all duration-200
                            hover:bg-[url(./images/bg.png)]
                            bg-white rounded-lg"
                >
                  <h3 class="font-mullish text-3xl font-bold pt-4">
                    Create an Account
                  </h3>
                  <p class="font-mullish py-3 text-grayText leading-normal h-fit">
                    Begin the process by registering and establishing a personal
                    account on our platform. This usually involves providing
                    necessary personal information, creating login credentials,
                    and agreeing to any terms or conditions outlined by the
                    platform.
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="relative gap-y-8 mb-6">
              <div className="p-7 max-h-[400px] cursor-pointer hover:scale-105 transition-all duration-200 h-full z-0">
                <div className="absolute bg-yellow-main z-10 top-4 left-4 h-10 w-10 rounded-full">
                  <h1 className="relative font-poppins text-3xl text-center">
                    2
                  </h1>
                </div>

                <div
                  class="p-7 w-[300px] bg-[url(./images/bg1.png)] h-full cursor-pointer
                            bg-cover hover:scale-105 transition-all duration-200
                            hover:bg-[url(./images/bg.png)]
                            bg-white rounded-lg"
                >
                  <h3 class="font-mullish text-3xl font-bold pt-4">
                    Choose a Charity
                  </h3>
                  <p class="font-mullish py-3 text-grayText leading-normal h-fit">
                    Once your account is set up, browse through the available
                    charities on our platform. Evaluate each charity based on
                    their stated mission, objectives, and the impact they aim to
                    make. Select a charity that aligns with your values and
                    philanthropic goals.
                  </p>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="relative gap-y-8 mb-6 z-0">
              <div
                className="p-7 max-h-[400px] cursor-pointer
              bg-no-repeat  hover:scale-105 transition-all duration-200"
              >
              <div className="absolute bg-yellow-main top-4 left-4 h-10 w-10 rounded-full z-10">
                <h1 className="relative font-poppins text-3xl text-center">
                  3
                </h1>
              </div>
                <div
                  class="p-7 w-[300px] bg-[url(./images/bg1.png)] h-full cursor-pointer
                            bg-cover hover:scale-105 transition-all duration-200
                            hover:bg-[url(./images/bg.png)]
                            bg-white rounded-lg"
                >
                  <h3 class="font-mullish text-3xl font-bold pt-4">
                    Make a Donation
                  </h3>
                  <p class="font-mullish py-3 text-grayText leading-normal h-fit">
                    After selecting a charity, proceed to make a donation. This
                    involves specifying the amount you wish to contribute and
                    selecting the preferred method of payment. Follow the
                    provided instructions to complete the donation process
                    securely.
                  </p>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="relative gap-y-8 mb-6 z-0">
              <div
                className="p-7 max-h-fit cursor-pointer
              bg-no-repeat hover:scale-105 transition-all duration-200"
              >
                <div className="absolute bg-yellow-main top-4 left-4 h-10 w-10 rounded-full z-10">
                  <h1 className="relative font-poppins text-3xl text-center">
                    4
                  </h1>
                </div>
                <div
                  class="p-7 w-[300px] bg-[url(./images/bg1.png)] h-full cursor-pointer
                            bg-cover hover:scale-105 transition-all duration-200
                            hover:bg-[url(./images/bg.png)]
                            bg-white rounded-lg"
                >
                  <h3 class="font-mullish text-3xl font-bold pt-4">
                    Participate in Community Forums
                  </h3>
                  <p class="font-mullish py-3 text-grayText leading-normal h-fit">
                    Engage with the community by participating in our
                    community-forum discussion boards related to pet-related
                    issues or any other relevant topics. Share your insights,
                    ask questions, and contribute to the collective knowledge of
                    the community.
                  </p>
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="relative gap-y-8 mb-6 z-0">
              <div className="p-7 max-h-fit cursor-pointer hover:scale-105 transition-all duration-200">
              <div className="absolute bg-yellow-main top-4 left-4 h-10 w-10 rounded-full z-10">
                  <h1 className="relative font-poppins text-3xl text-center">
                    5
                  </h1>
                </div>
                <div
                  class="p-7 w-[300px] bg-[url(./images/bg1.png)] h-full cursor-pointer
                            bg-cover hover:scale-105 transition-all duration-200
                            hover:bg-[url(./images/bg.png)]
                            bg-white rounded-lg"
                >
                  <h3 class="font-mullish text-3xl font-bold pt-4">
                    Monitor Donations with a Click
                  </h3>
                  <p class="font-mullish py-3 text-grayText leading-normal h-fit">
                    Stay informed about the impact of your contributions
                    effortlessly. With just a click, you should be able to
                    access detailed records of your philanthropic activities,
                    including the amount donated, the date of donation, and the
                    specific projects or initiatives your contributions have
                    supported.
                  </p>
                </div>
              </div>
            </div>
            {/* card 6 */}
            <div className="relative flex flex-col gap-y-8 mb-10 md:hidden sm:hidden">
              <div className="max-h-fit transition-all duration-200 text-center">
                <h3 class="font-mullish justify-center items-center text-5xl h-full">
                  <br /> Happy
                  <br />
                  Donating :)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
