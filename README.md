# guardingPaws
Our platform streamlines animal charity suggestions and donations, fostering a seamless way for animal lovers to ensuring swift support for vulnerable creatures in need. It also fosters a community forum for animal resources, adoption and welfare.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Your machine should have npm and node.js installed to use it locally.

### Setup and Installation
- Fork Repo :  git clone https://github.com/ayu06shi/guardingPaws.git 
#### Server Side
- npm install
- Create a .env file and add the following MONGO_URL=YOUR_MONGODB_URL JWT_SECRET_KEY=YOUR_JWT_SECRET KEY_ID = YOUR_RAZORPAY_KEYID KEY_SECRET = YOUR_RAZORPAY_SECRET_KEY
- node index.js
#### Client Side
- cd client
- Install dependencies : npm install
- Start the React Project : npm start

## Technologies
  - Frontend : React
  - Backend : Node.js, Express.js, RazorPay
  - Database : MongoDB
  - Authentication : JWT(JSON Web Token)

## View Live App
Hosted at[ Vercel](https://guarding-paws.vercel.app/).
