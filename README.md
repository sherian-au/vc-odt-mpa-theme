# ODT-MPA starter/boilerplate theme for VirtoCommerce Storefront.

![image](https://user-images.githubusercontent.com/7566324/80617364-4ba80a80-8a42-11ea-8222-be17dea1cc8d.png)

**ODT-MPA starter theme** - is starter theme is demonstared a typical out-of-the-box B2B Portal that beign a part of the [Digital Organic Transformation (ODT)]() strategy and built using Liquid templates, Vue.JS web progressive framework and Bootstrap CSS with elements of WEB CMS.
 This theme represents the VC Team's opinionated starting point for new projects. It strives to include up-to-date best practices and solutions that we have deemed needed for the majority of projects we build. It is a reflection of what’s possible when building a theme! The **ODT-MPA starter theme** is not a framework but rather a starting point for your theme that you can customize by direct modifications!

# The project technical key featues:

- Plays opinionated starting point for all new themes and frontend solution constructed on VC storefront. 
- Focus on development performance thanks to maximum reusing of exciting developer experience such as server side functionality, web components and views.
- SEO friendly thanks to SSR (Server Side Rendering) performing on the VC Storefront ASP.NET Core application.
- Presentation logic decoupling from backend. You might fully concentrate on  presentation tasks and do not think for backend. 
- Intentionaly lack of using custom CSS an initial styles constructed, using popular Bootstrap CSS library  and have an adaptive markup allows working on all popular devices and resolutions to make the customization process for theme styles  more straitforward. 
- Support WEB content management experience without development labor thanks to integration with [https://github.com/VirtoCommerce/vc-module-pagebuilder](VC page  builder)
- Liquid templates and SSR (server side rendering)  + MPA (mutiple page application) architecture with using Vue.JS progressive framework allow to get the all benefits from both server side and WEB development technices.
  
# The project business key featues:

- Authorization. Login, logout, reset password
- Order history browsing. Review and search the orders history (headers, lines)
- Order status review. Reviews the status of an order
- Invoice history. Review and download invoices 
- Payments history.	Review payments history
- Manage users.	Create, modify, delete users inside the organization
- Manage users roles. Assign roles to users
- Contract status browsing.	Review contract details and status
- Retrieve re-ordering.	Retrieve order replication with comments – (email)
- Order approve	Review, approve or reject an order created by account manager
- Product text search.	Filter products using text search
- Product filtering. Filter products by multiple parameters and text search
- Product details browsing.	Review product catalog details
- Product prices browsing.	Review product prices in a product catalog details
- Product recomendations. Cross-sell, Up-Sell, Frequently bought together etc.
- Wish lists	Create, update, delete wish list and put products to it from catalog or from existent orders
- Multiple orders drafts. Select order draft, add, modify, remove products in the order drafts
- Re-ordering	Clone order details to an active order 
- Submit the order	Submit order (inventory is locked, prices are locked)
- Product inventory browsing. Review product stocks (by fulfillment centers if reasonable) in a product catalog details
- Manage shipment details. Manage order shipment details before submitting and order
- Manage payment details. Manage order payment details before submitting and order
- Order approval workflow.	An order should be accepted by multiple roles to be competed


# How does it work?
TBD
# Why MPA (Multi Page Application)?
TBD

# Theme structure
```bash
.
├── assets                         //Contains image and other asset files to be copied as-is when you build your application.
│   └──static
|      └── bundle  
|          ├── dist                //The scripts and styles build output folder. Contains all resulting js and css bundles.
|          |   └──....
|          └── default.scss.liquid //Contains a main theme settings variables and used for theme color scheme customization
├── client-app                     //Contains the component, pages files of the Vue.JS MPA application.
│   └── src
|       ├── assets
|       |   └──....
|       └── core                  //Contains common utlitites/services that can be shared and used by any pages and libraries.
|       |   ├── api               //Contains the NSwag generated clients to the storefront REST API
|       |   |   └──....
|       |   ├── models            //Contains core models. (ex. Pagination)
|       |   |   └──....
|       |   ├── services          //Contains overall shared services. Such as AxiosInstance or InitializationService (implement common init logic for all pages).
|       |   |   └──....
|       |   ├── utilities         //some helper services and miscellaneous utils
|       |   |   └──....
|       ├── libs                  //Contains a set of files grouped together in folders by their domain context. The main purpose is code reusing and simple project maintenance. 
|       |   ├── catalog           //Represent a grouping folder for aggregate all building blocks for the particular domain context (e.g catalog browsing)
|       |   |   ├── components    //Contains the collections of the dumb or presentation components specific only for this domain context. 
|       |   |   |   └──....
|       |   |   ├── store         //Contains the libary state - Vuex store modules (state, mutators, getters).
|       |   |   |   └──....
|       |   |   ├── views         //Contains the smart components that immplements the particular use cases.
|       |   |   |   └──....
|       |   |   ├── plugins       //Contains Vue.JS plugins
|       |   |   |   └──....
|       |   |   ├── services      //Contains all domain services
|       |   |   |   └──....
|       |   |   └── models        //Contains all domain models definitions
|       |   |       └──....
|       |   └──....            
|       ├── pages                 //Contains a set of pages. The page is the Vue app that usually added to one of the pages that rendered on the server-side.
|       |   ├── catalog
|       |   |   ├── views         //Contains the smart components that implements the particular business context use case related to this page
|       |   |   |   └──....
|       |   |   ├── routes        //Contains the all Vue application routes 
|       |   |   |   └──....
|       |   |   ├── App.vue       //The template of Vue app entry point for page (Multiple files component)
|       |   |   └── main.ts       //The script logic of Vue app entry point for page (Multiple files component)
|       |   └──....   
|       ├── tests                 //Contains unit tests.
|       |   └──....
|       ├──  nswag.json           //nswag config for Type script API clients generation
|       └──  vue.config.js        //Vue.js Global CLI Config
├── config                        //Contains the theme's settings
|   └── settings_data.json        //The json file contains all the main settings for the Liquid theme.
├── layout                        //Contains the theme's layout templates, which by default is the theme.liquid file. 
|   └──....
├── locales                       //Contains the theme's locale files, which are used to provide translated content for the theme.
|   └──....
├── snippets                      //Contains all the theme's Liquid snippet files, which are bits of code that can be referenced in other templates of a theme.
|   └──....
├── templates                     //contains all Liquid templates
|   └──....
```


# Getting started
TBD

# License
Copyright (c) Virtosoftware Ltd.  All rights reserved.

Licensed under the Virto Commerce Open Software License (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://virtocommerce.com/opensourcelicense

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied.
