# Eat-Da-Burger!

In this single page application, we were tasked with creating a site, or 'burger logger' if you will (very loosely based off of on of my favorite TV shows, "Bob's Burgers"), that would allow users to see a list of pre-coded burgers in the database that have been eaten (or devoured) already, burgers that are yet to be devoured (or eaten), an input box that allows the user to add any type of custom burger to the database, and then give each burger a button that will move it from 'devoured' to 'yet to be devoured' (electronically of course), which will move each burger to the 'Eaten' or 'Yet To Be Eaten' part of the page.  Lastly, the user has the option to delete a burger from the page and database also.

___
![Eat-Da-Burger](public/assets/img/Eat-Da-Burger.jpg)
___

Creating this project the technologies used were MySQL, Node JS, Express, Express Handlebars and ORM.  Also used was a Model-View-Controlleer, or MVC, design pattern to separate the server connection and configuration into a 'config' folder, a 'controller' folder and page that defines and exports our router, a 'database' folder to hold our schema and seeds for the start of the pre-coded burger database, a 'models' folder that would bring in our ORM and 'create a burger' variable that holds the 'GET', 'CREATE', 'UPDATE' and 'DELETE' functions, a 'public' folder to hold our CSS, assets, images and JavaScript files, a 'views' folder to hold our handlebars folder (index. and main.handlebars), a 'routes' folder for all API calls, and lastly, the needed 'node modules' to be required installs before the site can be ran - MySQL, ExpressJS and Express Handlebars.
___
![Burger-ORM-router](public/assets/img/Burger-ORM-router.jpg)
___

Throughout this project, using past projects as examples, I was able to format the layout of the majority of the project without much trouble, but I did try to physically type out the crux of the pages for the most part so that I could understand what each page was used for and what the code was actually doing.  After going through and setting the pages and directories up, the problems I ran into were my CSS page not loading even though I had thought I had the file path set up properly.  However, Aaron had shown me that the index.html page actually gets rendered from the public folder, so that I would need to link to the CSS page that way.  I also had to sit and work more with my API-routes page, burger models page, and the JavaScript burgers page, so that all pages and code would communicate and interact properly.  One correction that needed to be added was that when the rows are updated in the database on the controllers page, "changedRows" needs to be used for Update, but "affectedRows" needs to be used for Create and Delete, that was one aspect I learned in this project.  Then I also had a typo in the 'name' variable for adding a new burger name, which was found out by going through the code.
___
![Burger-API-controller](public/assets/img/Burger-API-controller.jpg)
___

After sitting with a colleague, I was able to see the path that each file would be taking, and then updating the code and making sure every variable name and function matched, and then from there the page was able to operate correctly.  After that, the pages needed to be styled to look better aesthetically, and also be hosted on gitHub, heroku and my personal portfolio page.  I had also almost gone back to 'Sequelize' the page after our last classes, but that will be done for the homework due Thursday, so that will be completed then.  It is very easy to see how using Sequelize will trim down some of the code, and ultimately makes everything a little easier to read and understand.

## Built With

* [HTML5]
* [CSS3]
* [JavaScript]
* [jQuery]
* [MySQL](https://www.mysql.com/) - Database
* [Express]
* [Express Handlebars]
* [MVC File Structure] - For Directory File Structure
* [ORM](https://www.npmjs.com/package/orm) - Object Relational Mapping
* [Heroku](https://obscure-retreat-55184.herokuapp.com/) - For Live Hosting

## Authors

* **Matt Williams** - *Initial work* - [M Williams Portfolio](https://mattwills09.github.io/portfolio.html)
