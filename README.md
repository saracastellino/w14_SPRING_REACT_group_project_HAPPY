# Happy - CodeClan final project

## Goal

Create a responsive mobile app allowing the user to track their mood over time and suggest appropriate internet resources to help improve mood and wellbeing. The app is inspired by the difficulties many people are experiencing during ‘lockdown’ and designed to tie in with Mental Health Awareness Week.

## Tech

JavaScript/React, Java/Spring, H2.

## MVP

* The user is prompted to create a profile with basic details such as age, dietary preference, fitness level, favourite music type, etc.
* Once a profile is created, the app greets the user by name on opening, and does not show the profile creation steps again
* Profile should be able to be updated by the user
* The user can log their mood each day using a simple icon/emoji based input field, as well as an optional free text box
* The mood data over time can be viewed as a graph/bar chart
* Appropriate mental health advice (NHS, Samaritans, Mind etc) will be available in one click (eg a “HELP” button) 

## Extensions

* Suggestions could be tailored to the mood rating the user has entered that day. Help links will be suggested automatically if the user inputs a VERY BAD mood rating
* User can enter multiple mood changes each day
* The user can set the app to send a daily inspirational quote
* The app suggests  links each day to uplifting quotes/affirmations and/or music tracks, recipes, articles etc . 
* App ‘learns’ the users preferences over time and suggests more tailored content
* The user can set the app to send them a push notification reminder
* Add a ‘sign up’ page for first use of the app

## Demo

Homepage and mood log form:   

![Happy demo part 1](https://github.com/saracastellino/w14_SPRING_REACT_group_project_HAPPY/blob/master/UX%20and%20UI/happy%20demo.gif)

Mood diary:    

![Happy demo part 2](https://github.com/saracastellino/w14_SPRING_REACT_group_project_HAPPY/blob/master/UX%20and%20UI/happy%20demo%20part%202.gif)


# Installing / Getting started

# client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Clone the project down and CD into 'Happy' directory.

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Compiles and minifies for production
```
npm run build
```

### Dependencies
```
npm install react-router-dom
npm install recharts
```

# server

## Project setup

In order to build the project, CD into 'app/Backend' directory.

The project can be opened and built by a recent version of the NetBeans, Eclipse or Idea IDEs.
