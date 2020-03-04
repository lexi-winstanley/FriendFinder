# FriendFinder
[View Live](https://afternoon-falls-93974.herokuapp.com/)

## Motivation 
To create an application that would take in data from user surveys, execute logic to find their most compatible match from a stored list and display that to them.

## Summary
Friend Finder is a web application deployed with Heroku. Users answer survey questions and are then based on their answers are shown their best stored friend match.

## Details
The user is first brought to a landing page that has a button linking them to the survey page where they will be asked to answer a few questions. Once they submit the form, their answers are captured and compared with stored friends' data. The stored friend with the lowest absolute difference from the scores will be returned as the user's best possible friend match. This application is organized into an app directory which is subdivided into data, public and routing folders. The data folder holds the stored friends data as an array of objects, the public folder holds the HTML and images while the routing folder holds files defining the API and HTML routes. A server file initializes the server and brings together the other resources as necessary to enable the application's functionality.

## Role
Sole developer responsible for code and creation of custom graphics. Functionality requirements and general design provided by UW Coding Bootcamp/Trilogy Education Services.

## Technologies
HTML
<br/>Bootstrap
<br/>JavaScript
<br/>jQuery
<br/>Node.js
<br/>Express
<br/>Heroku
<br/>**Node Packages:** 
<br/>express, path
