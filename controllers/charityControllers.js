const Charity = require('../models/charityModel');
const Payment = require('../models/paymentModel');

const createCharityController = async(req, res) => {
    try {
        const {name, mission, impact, successStory} = req.body;

        const newCharity = new Charity({
            name,
            mission,
            impact,
            successStory,
            user: req.user._id, // Assuming you have the user ID in the request object
          });
      
          // Saving the charity to the database
          const savedCharity = await newCharity.save();
      
          res.status(201).json(savedCharity);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

const getAllCharityController = async(req, res) => {
    try {
        // Retrieving all charities from the database
        const charities = await Charity.find();
    
        res.status(200).json(charities);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

const getCharityController = async(req, res) => {
    try {

        const userId = req.user._id
        const myCharity = await Charity.find({user : userId})

        res.status(200).json(myCharity);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

const updateCharityController = async (req, res) => {
    try {
      const { name, mission, impact, successStory } = req.body;
      const userId = req.user._id;
  
      // Find the user's charity
      const myCharity = await Charity.findOne({ user: userId });
      
      if (!myCharity) {
        return res.status(404).json({ message: 'Charity Not Found' });
      }
  
      // Ensure that the user making the request is the creator of the charity
      if (myCharity.user.toString() !== userId.toString()) {
        return res.status(403).json({ message: 'Unauthorized: You are not the creator of this charity' });
      }
  
      const updatedCharity = await Charity.findByIdAndUpdate(
        myCharity._id,
        { name, mission, impact, successStory },
        { new: true }
      );
  
      if (!updatedCharity) {
        return res.status(404).json({ message: 'Charity Not Found' });
      }
  
      res.status(200).json(updatedCharity);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  const charityOfTheWeekController = async(req, res) => {
    try {
      const charityTotals = await Payment.aggregate([
        {
          $group: {
            _id: '$paidTo',
            totalAmount: { $sum: '$amount' }
          }
        },
        {
          $sort: { totalAmount: -1 } // Sort in descending order of total amount
        }
      ]);

      if (charityTotals.length === 0) {
        return res.status(404).json({ message: 'No payment data found.' });
      }

      const topCharity = charityTotals[0];
      const topCharityDetails = await Charity.findOne({ user: topCharity._id });

      if (!topCharityDetails) {
        return res.status(404).json({ message: 'Top charity not found.' });
      }
  
      // You can now send the details of the top charity as a response
      return res.status(200).json({
        topCharity: {
          name: topCharityDetails.name,
          mission: topCharityDetails.mission,
          impact: topCharityDetails.impact,
          successStory: topCharityDetails.successStory,
        }
      });

    } catch (error) {
      console.error('Error in charityOfTheWeekController:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

module.exports = {createCharityController, getCharityController, updateCharityController, getAllCharityController, charityOfTheWeekController}