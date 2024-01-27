import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function charityLists() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="max-w-screen-xl flex flex-wrap mt-6 relative w-[1080px] mx-auto items-center justify-between mb-28">
        {/* <h3 className="font-poppins text-3xl justify-center items-center">
          Here are some charity suggestions
        </h3> */}
        <div class="w-full grid grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
          {/* <!--item 1--> */}
          <div class="relative flex items-center z-0">
            <h2 class="text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]">
            Presenting a selection of
              <span className="text-amber-500"> Charitable</span> <br />
              recommendations for your consideration!
            </h2>
          </div>
          {/* <!--card 1--> */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
              bg-cover hover:scale-105 transition-all duration-200
              hover:bg-[url(./images/bg.png)]
              bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href="/donate"
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
             
            </div>
          </div>
          {/* <!--card 2--> */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>

            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
           
            </div>
          </div>
          {/* <!--card 3--> */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
           
            </div>
          </div>
          {/* <!--card 4--> */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
            
            </div>
          </div>
          {/* <!--card 5--> */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
             
            </div>
          </div>
          {/* card-5 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-[600px] cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
             
            </div>
          </div>
          {/* card-6 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
              
            </div>
          </div>
          {/* card-7 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
            
            </div>
          </div>
          {/* card-8 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
            
            </div>
          </div>
          {/* card-8 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
             
            </div>
          </div>
          {/* card-9 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
             
            </div>
          </div>
          {/* card-10 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
              
            </div>
          </div>
          {/* card-11 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
              
            </div>
          </div>
          {/* card-12 */}
          <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
            bg-cover hover:scale-105 transition-all duration-200
            hover:bg-[url(./images/bg.png)]
            bg-white rounded-lg"
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">Charity-name</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>

            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              Simplify your recurring, international and team expenses with
              savings on every spend. Save upto 10 lacs every month.
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <a
                href=""
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </a>
              
            </div>
          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default charityLists;
