# House Master #

## Project Link : [https://brand-shop-74072.web.app/] ##

## About The Project ##
This is a home service exchange based web application. In this application users can log in or register and add their services . Others can book those services and get their desired service/work get done.

As a service provider, a provider can see their services booked by others on My Schedules page. They can also change the status upon completing the task . Providers can also add new services, update them and delete those services on their own. 

As a User/Service seeker, A user can browse through all services from "Services" page and book them . When they view single services , they could also see other bookable/purchaseable services from the same provider on the same page. They can view services from there too. Users Can see their booked services history and status from "My Schedules" page. 

As this is a service exchange web application, a user is free to become a provider and a provider can also be a user at the same time to take services from others. Thats the main purpose of this web application. It's a platform where everyone can help each other. 

Built with    | 
------------  | 
Express JS    |  
MongoDB       |  
React JS      |  
Tailwind Css  |  
Daisy UI      | 
Firebase      | 
JWT           | 


### Features and Functionalities ###

- Reactive : This website is responsive for mobile,tablet and desktop based devices(for now Home Page only).
- No Reloads: When users register with their Photo, they don't need to reload the page to see their picture updated. With the use of react state , the website auto sets the photo given when registered.(it will take time depending on the pictures size/Doesn't work always with google register/login and it will be fixed soon). Also when a provider adds service , the web application is auto updated. 
- Notification: When ever a user register/login/logout they will get a Alerts for their actions. Also if their is an error, it will be shown. When a provider adds/updates/deletes their services they will also get alerts as a form of confirmation.
- Dynamic Schedules Page : Users can see their booked/purchased , they can see them on "My Schedules" page. At the same time they can see their service completed progress. A provider can update those status from schedules page and it will be shared to the user too. 
- Search Bar: Anyone can now search their desired services from "Service" page. The search bar will show dynamic results upon searching any service using their name.(This is still in development . Currently it needs users to click show more button to open up all services first and then if they search , search result of all services will be shown. otherwise it will show search result of only first 6 services)