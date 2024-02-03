import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CharityForm = () => {

  const [name, setName] = useState("")
  const [mission, setMission] = useState("")
  const [impact, setImpact] = useState("")
  const [successStory, setSuccessStory] = useState("")

  const navigate = useNavigate()

  // useEffect(() => {
  //   const getMyCharityDetails = async() => {
  //     try {
  //       const config = {
  //         headers: {
  //           "Content-type": "application/json"
  //         }
  //       }

  //       const res = await axios.get('/api/charity/my-charity', config);
  //       const myCharityDetails = res.data;

  //       // Set the state with the fetched details
  //       setName(myCharityDetails.name);
  //       setMission(myCharityDetails.mission);
  //       setImpact(myCharityDetails.impact);
  //       setSuccessStory(myCharityDetails.successStory);

  //     } catch (error) {
  //         console.error(error);
  //     }
  //   }

  //   getMyCharityDetails()
  // },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
            "Content-type": "application/json"
          }
        }

      const res = await axios.post('/api/charity/create-charity', {name, mission, impact, successStory}, config);

      const createdCharity = res.data;

      // Handle the created charity as needed (maybe redirect to a success page, update UI, etc.)
      console.log("Charity created:", createdCharity);
      navigate('/lists')

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='m-9 p-9 mx-auto max-w-screen-md h-[50%] bg-cover bg-[url(./images/bg1.png)] cursor-pointer
        hover:scale-100 transition-all duration-200
        hover:bg-[url(./images/bg.png)]
        bg-white rounded-lg'>
        <h2 className='text-center text-3xl font-bold py-20'>Charity Form</h2>
        <form className='text-left' onSubmit={handleSubmit}>
          <label className='block py-2 font-bold'>
            Charity Name:
            <input
              type="text"
              name="charityName"
              className='block w-full border-2 border-black p-2 rounded font-normal'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />

          <label className='block py-2 font-bold'>
            Mission:
            <textarea
              name="mission"
              className='block w-full border-2 border-black p-2 rounded font-normal'
              value={mission}
              onChange={(e) => setMission(e.target.value)}
            />
          </label>
          <br />

          <label className='block py-2 font-bold'>
            Impact:
            <textarea
              name="impact"
              className='block w-full border-2 border-black p-2 rounded font-normal'
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
            />
          </label>
          <br />

          <label className='block py-2 font-bold'>
            Success Story:
            <textarea
              name="successStory"
              className='block w-full border-2 border-black p-2 rounded font-normal'
              value={successStory}
              onChange={(e) => setSuccessStory(e.target.value)}
            />
          </label>
          <br />

          <button type="submit" className="hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">Submit</button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CharityForm;