# Climate Action Planner

A Climate Action Planner is a web-based tool that helps individuals and organizations reduce their carbon footprint and track their progress towards sustainability. It works by guiding users through a series of steps to assess their current energy use and identify areas where they can reduce their carbon emissions.

A small-scale Pilot project is functional in England, specifically for school students to track their daily Carbon Footprint. It is supported by the “Transform Our World” organisation.
    Link: https://www.transform-our-world.org/tools/schools-climate-action-planner


## Drawbacks of Existing Websites/Apps:
    It is restricted to school students in England. 
    It is only a small-scale pilot project, meant for educational purposes. 
    It has a scope of added functionality and exponential exposure in the industry across the globe. 

## Further tools can be added like:
    1. Goal setting
    2. Recommendations
    3. Community
    4. Energy use tracking
    5. Data Visualization of Data


## Project Objective
A Climate Action Planner can help individuals and organizations to understand the impact of their actions on the environment and take steps to reduce their carbon footprint. By tracking their progress and setting goals, users can see the positive impact they can make and feel empowered to take further action to support sustainability.

By incorporating these additional features and functionalities, a Climate Action Planner can become a comprehensive tool for individuals and organizations to understand, track, and reduce their carbon footprint and take action on climate change.


## System Architecture
A software architecture for a climate action planner application could be designed using a microservices architecture pattern, which involves dividing the application into a set of independent, loosely-coupled services that communicate with each other through APIs.


## Various Components:
1. Front-end: A web or mobile application that provides a user interface for inputting data, viewing action plans, and tracking progress. This component could be built using modern front-end technologies such as React or Angular.
2. User service: A service that handles user authentication and authorization, and provides access to user data such as energy usage and transportation habits.
3. Emissions calculation service: A service that calculates the user's carbon emissions based on the input data. This service could use algorithms and data from reliable sources such as government agencies or environmental organizations.
4. Recommendation service: A service that generates action plans based on emissions calculation. This service could use machine learning algorithms to personalize recommendations based on the user's individual situation. (Main Business Logic)
5. Database: A relational database or NoSQL database that stores user data, emissions data, and other application data.

Note: In addition to the microservices architecture, the application could also incorporate cloud computing technologies to provide scalability, reliability, and cost-effectiveness. The front end could be hosted in a cloud-based web server, while the microservices could be hosted in a cloud-based container platform such as Amazon Elastic Container Service (ECS) or using AWS S3 Bucket over Amazon EC2 Instances.
