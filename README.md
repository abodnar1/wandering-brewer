# Wandering Brewer
Visit the deployed site [here](https://wandering-brewer.vercel.app/).


## Table of Contents
- [Summary](#summary)
- [Setup](#setup)
- [Technologies and Tools](#technologies-and-tools)
- [Learning Goals](#learning-goals)
- [Project Reflections](#project-reflections)
- [Roadmap](#roadmap)
- [Contributors](#contributors)


## Summary
This application was built for the brewer who is looking to keep tabs on their favorite breweries while traveling. The user can search any U.S. city and see which breweries are nearby. On the detailed viewing page, the user can see the address, website, and phone number of the spot they want to visit. They can also favorite a brewery so they remember to go to it the next time they're in town.

![wb-desktop-gif](https://media.giphy.com/media/yn2yZz3p3XRjoP9GFP/giphy.gif)

![wb-mobile-gif](https://media.giphy.com/media/JG42emfw2cRv0mkD67/giphy.gif)


## Setup
1. Fork this Repo
2. Clone it down to your machine
3. `cd` into the root of the project directory
4. Run `npm install`
5. Run `npm start`

For Cypress Testing:
1. Run `npm run cypress`
2. Follow the prompts in the browser and select the spec file you want to run


## Technologies and Tools
* React
* React Router
* JavaScript
* REST API
* Postman
* HTML
* CSS
* Cypress Testing
* npm
* Webpack
* GitHub Issues
* GitHub Projects
* Excalidraw (wireframes)


## Learning Goals
To demonstrate learning on topics that include React, React Router, Asynchronous JavaScript, and end-to-end testing with Cypress. User personas and user stories were to be utilized to target a niche audience.
Core functionality needed to include:
* Displaying data from an API in such a way that applies directly to the target audience
* Ability for a single user to store/manipulate the displayed data (ie. favoriting)
* Multiple views handled by Router


## Project Reflections
#### Wins:
* Self-teaching and implementing typechecking with PropTypes.
* The API had many null data values and had properties that were not needed for the scope of the application. A cleaning function was used to grab only the data needed upon the GET network request.
* The data was not equipped with images, so they were added within the cleaning function based on the type of brewery (ie. all microbreweries were assigned the same photos while all nanobreweries were assigned a different one and so on and so forth).
* Achieving minimum viable product (MVP) within a short time frame of 6 days.
* Responsive CSS that is compatible with mobile screen sizes.

#### Challenges:
* Working within the tight time constraint. There was not much room for pivoting when something didn't work out. Decision making had to be fast but thoughtful.
* My audience was not niche enough which made styling a hurdle.
* The website links used on the `BreweryDetails` component needed to be updated in the API. Some redirects work when clicked while others did not.


## Roadmap
Future features could include:
* Improve contact info on the details page (ie. Instagram, Twitter, Facebook)
* Add local storage so that a user can see their favorites each time they visit the site.
* Add a section that allows the user to make notes about their experience or rate the beer.
* Add responsive CSS to the `BreweryDetails` component.


## Contributors
Amber Bodnar
* [LinkedIn](https://www.linkedin.com/in/amberbodnar/)
* [GitHub](https://github.com/abodnar1)

*A [Turing School of Software and Design](https://turing.edu/) Module 3 Final Solo Project. The project spec sheet can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).*
