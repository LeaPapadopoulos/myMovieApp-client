React Movie App

This is a React client application that allows users to access information about movies, create a profile, and save data about their favorite movies.

Main View
- Returns ALL movies to the user (each movie item with an image, title, and description)
- Filtering the list of movies with a “search” feature
- Ability to select a movie for more details
- Ability to log out
- Ability to navigate to Profile view

Single Movie View
- Returns data (description, genre, director, image) about a single movie to the user
- Allows users to add a movie to their list of favorites

Login View
- Allows users to log in with a username and password

Signup View
- Allows new users to register (username, password, email, date of birth)

Profile View
- Displays user registration details
- Allows users to update their info (username, password, email, date of birth)
- Displays favorite movies
- Allows users to remove a movie from their list of favorites
- Allows existing users to deregister

Technologies Used
- React
- React Router
- Bootstrap

Installation and Setup
- Clone the repository.
- Run npm install to install the dependencies.
- Run npm start to start the application.
- Navigate to http://localhost:1234 in your browser.

Dependencies
The following dependencies are required to run the application:

- Bootstrap 5.2.0
- prop-types 15.8.1
- React 18.2.0
- react-bootstrap 2.5.0
- react-dom 18.2.0
- react-router 6.3.0
- react-router-dom 6.3.0

Development
To contribute to the development of the application, you will need to install the dev dependencies:

@parcel/transformer-sass 2.8.3
process 0.11.10