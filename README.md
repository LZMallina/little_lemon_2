# Objective:
* Build a website for the Little Lemon restaurant in this Capstone project.
* Complete tasks assigned each week

# Week 1 (Starting the project)
## Setting up the project

* setup version control with Github
* download the latest version of npm and node.js
* setup local react development environment on VS code: with:

$npm init react-app little-lemon

or

$npx create-react-app little-lemon

## Planning the UX and UI

* Wireframes and Prototypes were created with Figma.

* Wireframes: <https://www.figma.com/file/3f1FyZL4SNqrP8xB9YodIC/Capstone%2FWeek1%2FWireframing-the-Project%3A-Little-Lemon-Booking-App?node-id=2%3A5&t=8qMjwUWxYFvDf8Uo-1>

* Prototype: <https://www.figma.com/file/9r6RUgOZcLkFMxnJastrjC/Capstone%2FWeek1%2FApplying_Design_Fundamentals?node-id=1%3A5&t=8qMjwUWxYFvDf8Uo-1>

# Week 2 (Project Foundations)

## Setting up the HTML document
1) Set up te intial semantic structure
* replace the App component's root element div with react fragment
2) Break the sections down into React components
3) Add the logo and navigation elements
* In order to get the links compatible to github page, you need version 5 of react-dom, which contains the Switch component

To init react-dom version 5:

$npm install react-router-dom@5

To init the most recent react-router-dom automatically:

$npm install react-router-dom

* Open index.js,

import {HashRouter} from 'react-router-dom'

Wrap App/ with HashRouter.  For some reason, github page does not recognize BrowserRouter.

4) Add the footer content
* Add fontawesome dependency
$ npm i --save @fortawesome/free-brands-svg-icons

$ npm i --save @fortawesome/fontawesome-svg-core

$ npm i --save @fortawesome/free-solid-svg-icons

$ npm i --save @fortawesome/free-regular-svg-icons

$ npm i --save @fortawesome/react-fontawesome@latest

* to fix dependency problem during installation:

$ npm i --save @fortawesome/react-fontawesome@latest

## Adding meta tags and setting up OGP (Open Graph Protocol)
* OGP enhance social media search.

1) Add the appropriate description meta tag:

* In public folder, open index.html, inside <head> add <meta name ="description" content ="your text goes here">;

2) Add the og:title meta tag

* <meta name ="og:title" content = "" />

3) Add the og:description meta tag

* <meta name ="og:description" content = " />

4) Add the og:image meta tag
* <meta name ="og:image" content ="" />

## Setting up the CSS layout

1) Set up the CSS rules

Client Requirment

* Primary colors: hex #495E57, #F4CD14
* Secondary Colors: hex #EE9972, #FBDABB, #EDEFEE, #333333

* Typefaces: Markazi Text (titles and Subtitles), Karla (paragraphs), Uppercase for all section titles
* 1.5 line height, Max 65 characters per line

2) Apply the CSS rules to the HTML elements

3) Verify that the HTML elements are positioned correctly

## Styling elements

1) Consider your Figma design and wireframe

2) Style the HTML headings, paragraphs and spans

3) Style the navigation elements

4) Style your images

5) Apply the rules to existing HTML elements

6) Verify that the HTML elements are styled correctly

## Setting up the app components
1) Recognize components to build, using your design

2) Set up the navigation to make sure everything works

3) Code the first version of the hompepage's components

4) Style the homepage components

# Week 3: Table booking system

## Defining the Bookings page

1) Check the components and routes
* create the BookingForm and BookingPage components

* use Formik  to create forms and yup for form verification

$ npm install formik --save

import {useFormik} from "formik";

$ npm install yup react-yup

import *as Yup from 'yup';
* The BookingPage will contain the BookingForm components
* Check that your routes and navigation works
* download react-datepicker

$ npm install react-datepicker --save

2. Code the form structure
* use sessionStorage and localStorage to store inputs

3. Create a local host data base API to store items in the menu so we can use fetch

* create a folder outside of src name: data
* inside of data, create a new file name db.json, which would be a Object storage
* cut and pasted the menu items to the db.json
* ensure all data is in json format.
* open a new terminal window, create a REST API in localHost3500

$ npx json-server -p 3500 -w data/db.json

* No access to API outside of localhost, therefore, hosted API on github instead.  Since github API is raw data, I can only perform fetch not POST or any other http functions.
