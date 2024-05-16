# AstroView - explore the cosmos with us

### Application hosted URL 

`https://nasa-astroview.web.app/` 👉 [AstroView](https://nasa-astroview.web.app/)

## INTRODUCTION
AstroView Is Your One-Stop Shop For Exploring The Wonders Of Space! We Leverage NASA's Powerful APIs To Deliver A Wealth Of Information About Our Universe, Right To Your Fingertips.

## Table of Contents
1. [Introduction](#introduction)
2. [Setup Instructions](#setup-instructions)
    - [Installation](#installation)
    - [Running the Application Locally](#running-the-application-locally)
    - [Application Build Process](#application-build-process)
3. [NASA API Endpoint Documentation](#nasa-api-endpoint-documentation)
    - [APOD: Astronomy Picture of the Day](#apod-astronomy-picture-of-the-day)
    - [EPIC: Earth Polychromatic Imaging Camera](#epic-earth-polychromatic-imaging-camera)
    - [Mars Rover Photos](#mars-rover-photos)
    - [NASA Image and Video Library](#nasa-image-and-video-library)
4. [Running Tests](#running-tests)
5. [Student Details](#student-details)

## SETUP INSTRUCTIONS

### Installation

1. **Clone the Repository**

   ```bash
       git clone https://github.com/IT21252990/AstroView.git
   ```

2. **Navigate to the Project Directory**

   ```bash
       cd <project_directory>
   ```

3. **Install Dependencies**

   ```bash
       npm install
   ```

4. **Set up Environment Variables**
   - Create a .env file in the root directory of your application
   - Define the environment variable for the application
     ```makefile
         VITE_NASA_API_KEY = <API_KEY>
     ```

## TO RUN THE APPLICATION ON LOCALLY

    ```bash
       npm run dev
    ```

## APPLICATION BUILD PROCESS
### Firebase Setup Instructions

1. **Install Firebase Tools:**

   Make sure you have Node.js and npm installed on your machine. Then, install Firebase Tools globally using npm:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**

   Open your terminal or command prompt and log in to Firebase using the following command:

   ```bash
   firebase login
   ```

   This command will open a browser window asking you to log in with your Google account.

3. **Set up Firebase in your Project:**

   Navigate to your React.js project directory and initialize Firebase by running:

   ```bash
   firebase init
   ```

   Follow the prompts in the command-line interface to select Firebase Hosting and your Firebase project.

4. **Build Your React Application:**

   Since you're using Vite, build your React application for production:

   ```bash
   npm run dev
   ```

   This command will generate a production build of your React app in the `dist` directory.

5. **Configure Firebase Hosting:**

   After building your React application, navigate to your Firebase project directory and open the `firebase.json` file. Ensure your hosting configuration looks something like this:

   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

   This configuration tells Firebase to serve the files from the `dist` directory and rewrite all URLs to `index.html`.

6. **Deploy Your Application:**

   Once your Firebase project is configured, you can deploy your application by running:

   ```bash
   firebase deploy
   ```

   Firebase will upload your files to the cloud and deploy your application. After the deployment is complete, Firebase will provide you with a hosting URL where your application is live.


## NASA API ENDPOINT DOCUMENTATION

### APOD: Astronomy Picture of the Day

- **Name:** [APOD API](https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY)
- **Endpoint:** `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
- **Description:** Retrieves the Astronomy Picture of the Day along with additional information.

### EPIC: Earth Polychromatic Imaging Camera

- **Name:** [EPIC API](https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY)
- **Endpoint:** `https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY`
- **Description:** Provides natural color imagery of Earth captured by the Earth Polychromatic Imaging Camera.

### Mars Rover Photos

- **Name:** [Mars Rover Photos API](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY)
- **Endpoint:** `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`
- **Description:** Fetches photos taken by the Mars rovers, particularly focusing on the Curiosity rover on Sol 1000.

### NASA Image and Video Library

- **Name:** [NASA Image and Video Library API](https://images-api.nasa.gov/search?q=${searchTerm})
- **Endpoint:** `https://images-api.nasa.gov/search?q=${searchTerm}`
- **Description:** Searches for images and videos in the NASA Image and Video Library based on the provided search term.

Throughout the integration of these APIs, various challenges were encountered and resolved independently.


## RUN THE TEST

5. **To run the Unit Testing**

   ```bash
       npx test
    ```
## Author

- **Kalinga Jayathilaka**
- **[GitHub Profile](https://github.com/IT21252990)**

