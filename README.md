# Assignment 1 - ReactJS app.

Name: Ernestas Trakys - 20090282

## Overview.

This project is a web page that hosts a TMDB Client. The Client uses TMDB's API's to display a variety of tabs such has Top Rated/Popular movies. User's can add these movies to their favourites and a watchlist. They can also click into a specific movie and find more details about the movie.

The Client also allows users to login/create accounts using Firebase.

### Features.

+ Added 4 new pages.
 
+ Fixed Watchlist page, movies get added and user has option to remove from watchlist along with an option of writing a review.

+ Changed appearance of Filter Card Menu Bar, Card Icons.

+ Attempt to add Sort Movies Alphabetically onto Filter card.

+ Attempt to display similar movies with button on movie card.

+ User login / signup using firebase

## Setup requirements.

User Basic Authentication -- npm install --save express-session

User signup/login         -- npm install firebase
npm install bootstrap react-bootstrap


## API endpoints.

+ Added popular page - /movie/popular API endpoint. 
    Displays popular movies.
    This page allows the user to add movies to favourites and watchlist.

+ Added top rated page - /movie/top_rated API endpoint.
    Displays top rated movies.
    This page allows the user to add movies to favourites and watchlist.

+ Attempt on similar page - /movie/similar API endpoint.
    This page would route from any movie card to display similar movies based on genre's

+ Added now playing page - /movie/now_playing API endpoint.
    Displays movies that are being played now.
    This page allows the user to add movies to favourites and watchlist.

## App Design.

### Component catalogue.

No changes were made to storybook.

![](./images/storybook.png)

### UI Design.

>Showcase of modified webpage template. 

![ ](./images/homepage.png) (Zoom at 75%)

>New app page, Top Rated. This page shows the highest rated movies.

[ ](./images/toprated.png) (Zoom at 75%)#

>New app page, Popular. This page shows the most popular movies.

[ ](./images/popular.png) (Zoom at 75%)

>New app page, Upcoming. This page shows upcoming movies.

[ ](./images/upcoming.png) (Zoom at 75%)

>New app page, Now Playing. This page shows the movies that are in cinemas now.

[ ](./images/nowplaying.png) (Zoom at 75%)

>New app page, Watchlist. This page shows the users chosen watchlisted movies.

[ ](./images/watchlist.png) (Zoom at 75%)

>New app page, TLogin. This page allows a user to log into the website.

[ ](./images/login.png) (Zoom at 75%)

>New app page, Sign Up. This page allows the user to sign up.

[ ](./images/signup.png) (Zoom at 75%)

### Routing.

+ /movies/upcoming - displays upcoming movies
+ /movies/popular - displays popular movies
+ /movies/nowplaying - displays now playing movies
+ /movies/toprated - displays top rated movies
+ /login - page for user login
+ /signup - page for user signup
+ /similar:id - displays similar movies of a particular movie

+ / - arriving at homepage only prompts the user for either login or signup, this protects the website from 'unauthorised' users.

## Independent learning (If relevant).

FireBase, I researched this to provide the client with authentication. Firebase is used to store sign-ups and used for login's. 

- Help used : https://medium.com/@bariskarapinar/firebase-authentication-web-app-javascript-3165ebc92b68 , https://www.youtube.com/watch?v=iKlWaUszxB4
