(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{382:function(e,t,n){"use strict";n.r(t);var a=n(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vert-x-web-examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vert-x-web-examples"}},[e._v("#")]),e._v(" Vert.x-Web examples")]),e._v(" "),n("p",[e._v("Here you will find examples demonstrating Vert.x-Web in action.")]),e._v(" "),n("p",[e._v("Vert.x-Web is a tool-kit for writing web applications with Vert.x. Please consult the Vert.x-Web manual for detailed\ndocumentation on Vert.x-Web.")]),e._v(" "),n("p",[e._v("== Logging")]),e._v(" "),n("p",[e._v("When running in an IDE you can edit "),n("code",[e._v("src/main/resources/vertx-default-jul-logging.properties")]),e._v(" to configure logging.\nTrace logging is enabled for Vert.x-Web classes so you can easily trace requests as they are routed through different\nhandlers.")]),e._v(" "),n("p",[e._v("== Dependencies required")]),e._v(" "),n("p",[e._v("To use Vert.x-Web in your own Maven or Gradle project you will need following dependencies")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"group-id-io-vertxartifact-id-vertx-core"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#group-id-io-vertxartifact-id-vertx-core"}},[e._v("#")]),e._v(" Group ID: io.vertx\nArtifact ID: vertx-core")]),e._v(" "),n("p",[e._v("and")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"group-id-io-vertxartifact-id-vertx-web"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#group-id-io-vertxartifact-id-vertx-web"}},[e._v("#")]),e._v(" Group ID: io.vertx\nArtifact ID: vertx-web")]),e._v(" "),n("p",[e._v("If you're using a template engine you will also need to add the engine dependency explicitly, depending on the engine\nyou are using.")]),e._v(" "),n("p",[e._v("== Hello World")]),e._v(" "),n("p",[e._v('The traditional hello world example. This one creates a server which just responds with "Hello World! to each request.')]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/helloworld/Server.java[Java Hello world example]")]),e._v(" "),n("p",[e._v("== Simple REST Micro-service")]),e._v(" "),n("p",[e._v("Vert.x-Web is a great fit for HTTP/REST microservices.")]),e._v(" "),n("p",[e._v("Here's a simple micro-service example which implements an API for a product catalogue.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/rest/SimpleREST.java[Java REST Microservice example]")]),e._v(" "),n("p",[e._v("The API allows you to list all products, retrieve details for a particular product and to add a new product.")]),e._v(" "),n("p",[e._v("Product information is provided in JSON.")]),e._v(" "),n("p",[e._v("List all products:: GET /products\nGet a product:: GET /products/<product_id>\nAdd a product:: PUT /products/<product_id>")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080/products[list products] to start playing with the API.")]),e._v(" "),n("p",[e._v("== Site with templating")]),e._v(" "),n("p",[e._v("This example shows a simple web-site containing some static pages and also a page dynamically generated using templates.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/templating/[templating example]")]),e._v(" "),n("p",[e._v("Multiple examples with different templating engines, including FreeMarker, Handlebars, Jade, MVEL, Pebble, Rocker,\nand Thymeleaf are available.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080/[localhost:8080] and click on the links")]),e._v(" "),n("p",[e._v("== Sessions example")]),e._v(" "),n("p",[e._v("This example shows how to use sessions with Vert.x-Web. Sessions are available between requests and last the length of the\nbrowser session.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/sessions/[Java sessions example]")]),e._v(" "),n("p",[e._v("The example increments a counter in the session every time a request hits the server.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 then refresh the page a few times - you should see the hit count increase.")]),e._v(" "),n("p",[e._v("NOTE: Depending on your browser you may see it increase by two each time you refresh! Why is that? Some browsers will\nactually send two HTTP requests every time you refresh - one to request the favicon for the site and one to request the\nactual page.")]),e._v(" "),n("p",[e._v("== EventBus Bridge - Client CommonJS loader")]),e._v(" "),n("p",[e._v("This example demonstrates how to use commonjs to load the eventbus client bridge using link:http://npmjs.com[npm].")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/vertxbus/commonjs[Java CommonJS loader example]")]),e._v(" "),n("p",[e._v("In order to use the javascript client one needs to define a link:src/main/java/io/vertx/example/web/vertxbus/commonjs/webroot/package.json[package.json]\nwhere a dependency to "),n("code",[e._v("vertx3-eventbus-client")]),e._v(" is added. Of course this is a minimal example so no other dependencies\nare added. The Vert.x code will then serve the static resources and setup a event bus bridge that broadcasts the current\ntime every second.")]),e._v(" "),n("p",[e._v("Before running the example you need to download the dependencies, the easiest form of doing this is using "),n("code",[e._v("npm install")]),e._v(".")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080")]),e._v(" "),n("p",[e._v("== EventBus Bridge - Client AMD loader")]),e._v(" "),n("p",[e._v("This example demonstrates how to use AMD to load the eventbus client bridge using link:http://bower.io[bower.io] to download the dependencies\nand link:http://dojotoolkit.org[Dojo Toolkit] to load the packages at runtime.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/vertxbus/amd[Java AMD loader example]")]),e._v(" "),n("p",[e._v("In order to use the javascript client one needs to define a link:src/main/java/io/vertx/example/web/vertxbus/amd/webroot/bower.json[bower.json]\nwhere a dependency to "),n("code",[e._v("vertx3-eventbus-client")]),e._v(" is added. Of course this is a minimal example so no other dependencies\nare added. The Vert.x code will then serve the static resources and setup a event bus bridge that broadcasts the current\ntime every second.")]),e._v(" "),n("p",[e._v("Before running the example you need to download the dependencies, the easiest form of doing this is using "),n("code",[e._v("bower install")]),e._v(".")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080")]),e._v(" "),n("p",[e._v("== EventBus Bridge - Node.JS loader")]),e._v(" "),n("p",[e._v("This example demonstrates how to use NodeJS to load the eventbus client bridge using link:http://npmjs.com[npm] to download\nthe dependencies.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/vertxbus/node[Java NodeJS loader example]")]),e._v(" "),n("p",[e._v("In order to use the javascript client one needs to define a link:src/main/java/io/vertx/example/web/vertxbus/node/package.json[package.json]\nwhere a dependency to "),n("code",[e._v("vertx3-eventbus-client")]),e._v(" is added. Of course this is a minimal example so no other dependencies\nare added. The Vert.x code will setup a event bus bridge that broadcasts the current time every second.")]),e._v(" "),n("p",[e._v("The second part of the code is the NodeJS link:src/main/java/io/vertx/example/web/vertxbus/node/index.js[app] where a SockJS\nclient is created to the running Server.")]),e._v(" "),n("p",[e._v("Before running the example you need to download the dependencies, the easiest form of doing this is using "),n("code",[e._v("npm install")]),e._v(".")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then run the node client "),n("code",[e._v("npm start")]),e._v(".")]),e._v(" "),n("p",[e._v("== Real-time - client side event bus")]),e._v(" "),n("p",[e._v("This example demonstrates a full duplex connection between the browser and the server side.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/realtime/[Java real-time example]")]),e._v(" "),n("p",[e._v("The connection remains open so you can communicate easily between server and browser or server and browser by just sending\nmessages over the event bus, like you would on the server side.")]),e._v(" "),n("p",[e._v("It uses the SockJS event bus bridge to effectively extend the Vert.x event bus to the client side so you can\ninteract with server side event bus services from client side JavaScript. SocksJS gives a WebSocket-like API in client side\nJavaScript even if the browser or network doesn't support WebSockets.")]),e._v(" "),n("p",[e._v("This is ideal for so-called "),n("em",[e._v("real-time")]),e._v(" web applications where you want quick, responsive communication between server\nand client and you're probably rendering the user interface on the client side.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080")]),e._v(" "),n("p",[e._v("This serves the link:src/main/java/io/vertx/example/web/realtime/webroot/index.html[index page] which contains\nsome JavaScript which opens an event bus connection to the server.")]),e._v(" "),n("p",[e._v("When the connection is open, a handler is registered on the event bus against the address "),n("code",[e._v("news-feed")]),e._v(". When data\narrives in the handler the script just uses some simple JQuery to write the message to the page.")]),e._v(" "),n("p",[e._v("On the server side, in the link:src/main/java/io/vertx/example/web/realtime/Server.java[server] we set a periodic\ntimer that fires every second and sends a message to the "),n("code",[e._v("news-feed")]),e._v(" address.")]),e._v(" "),n("p",[e._v("When you get the index page in your browser you should see it update every second as it receives a message.")]),e._v(" "),n("p",[e._v("== Real-time - chat service")]),e._v(" "),n("p",[e._v("This example demonstrates 2-way communication between the client and the server using the event bus bridge\nand web sockets.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/chat/Server.java[Java real-time chat example]")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/chat/webroot/index.html[index.html] file\nbootstraps the vertxbus.js bridge from the client and uses jQuery to handle manipulating\nthe DOM and registering event handlers.")]),e._v(" "),n("p",[e._v("When you load the index page in a browser, you should see a div for chat messages and\nan input field where you can enter your own messages. Typing in the input field and\npressing ENTER will cause the input to be sent via the event bus to the server. The server\nwill accept the message, prepend it with a timestamp and publish back to all registered\nlisteners (e.g. All connected clients). Take note of the addInboundPermitted and addOutboundPermitted\nsettings on the BridgeOptions object to be sure that you authorize the correct messages\nto traverse the event bus bridge in the appropriate direction.")]),e._v(" "),n("p",[e._v("To run the example, run "),n("code",[e._v("Server.java")]),e._v(" in your IDE by right clicking, or at the command line, and point your browser\nat link:http://localhost:8080")]),e._v(" "),n("p",[e._v("== Auth example")]),e._v(" "),n("p",[e._v("This example shows a basic static web-site that contains both public pages and pages that are only accessible to\na logged in user.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/auth/[Java auth example]")]),e._v(" "),n("p",[e._v("Requests to paths starting with "),n("code",[e._v("/private/")]),e._v(" will require login.")]),e._v(" "),n("p",[e._v("The example uses a simple auth service which gets user/password/role information from a properties file\n"),n("code",[e._v("src/main/resources/vertx-users.properties")]),e._v(".")]),e._v(" "),n("p",[e._v("The type of login used here is redirect login. If a request is made to a private resource and the session isn't already\nlogged in a redirect will be sent to the browser causing it to load the login page. When the login form is submitted it\nis handled by the form login handler which then redirects the browser back to the originally requested resource if login\nwas successful.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("== Cookie example")]),e._v(" "),n("p",[e._v("This example shows a basic user Tracking system based on Cookies. On each page refresh a cookie is incremented with the\nnumber of visits.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/cookie/[Java cookie example]")]),e._v(" "),n("p",[e._v("== MongoDB example")]),e._v(" "),n("p",[e._v("This example shows a simple single page application that interfaces with a mongo db collection and allows the user to\ndo basic operations such as:")]),e._v(" "),n("ul",[n("li",[e._v("create new documents")]),e._v(" "),n("li",[e._v("read existing documents")]),e._v(" "),n("li",[e._v("delete documents.")])]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/mongo/[Java mongo example]")]),e._v(" "),n("p",[e._v("The single page application HTML is also dynamic and generated using JADE template language showcasing inheritance of\ntemplates. The example expects that there is a local instance of mongo db running.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links.")]),e._v(" "),n("p",[e._v("== CORS example")]),e._v(" "),n("p",[e._v("This example shows how to setup the CORS Handler. Cross-origin resource sharing (CORS) is a mechanism that allows\nrestricted resources (e.g. fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain\nfrom which the resource originated.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/cors/[Java cors example]")]),e._v(" "),n("p",[e._v("CORS requests fall in two types, request that require a pre-flight check and requests that do not require it. HTTP GET\ndoes not require such a check while other HTTP verbs do. When the CORS handler is active the "),n("code",[e._v("Origin")]),e._v(" header is checked\nto allow, disallow the request.")]),e._v(" "),n("p",[e._v("In order to run the example, you need to download the 2 example HTML pages and run them from your hard disk. If you are\nusing a modern browser when clicking on the links they will pop up the download pop-up, however this might not work for\nolder browsers.")]),e._v(" "),n("p",[e._v("If the CORS Handler is not present, then only the no preflight check call will work, since the browser will disallow the\nPOST.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("== Upload example")]),e._v(" "),n("p",[e._v("This example shows a basic HTML form file upload and returns the upload metadata.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/upload/[Java upload example]")]),e._v(" "),n("p",[e._v("The home request will return a HTML form with a simple input type file and will upload the file in multipart encoding.\nOn submit the file will be handled by the "),n("code",[e._v("BodyHandler")]),e._v(" and be available in the "),n("code",[e._v("RoutingContext")]),e._v(" using the getter\n"),n("code",[e._v("fileUploads")]),e._v(".")]),e._v(" "),n("p",[e._v("== HTML Form example")]),e._v(" "),n("p",[e._v("This example shows a basic HTML form web-site and a backend end point that just returns an customizable hello world\nmessage.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/form/[Java form example]")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("== JWT example")]),e._v(" "),n("p",[e._v("This example shows a basic single page application that contains an API that is protected by a JWT.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/jwt/[Java jwt example]")]),e._v(" "),n("p",[e._v("Requests to paths starting with "),n("code",[e._v("/api/")]),e._v(" will require a JWT token, except the excluded "),n("code",[e._v("/api/newToken")]),e._v(". This exclusion is\nnormally used as the login end point, however in this example we are not focusing on secure login end points and we just\nreturn a new token for any request.")]),e._v(" "),n("p",[e._v("The application contains a simple form where you can request some data from the API if there is no token loaded then the\nresponse is an "),n("code",[e._v("HTTP error 401")]),e._v(". When a token is loaded, then a successful response if received from the API.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("== Angular example")]),e._v(" "),n("p",[e._v("This example shows a basic single page application built with Angular JS. It is quite similar to the REST example, the\nonly difference is that it also serves an angular app. The example expects that there is a local instance of mongo db\nrunning.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/angularjs[Java angular example]")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("For login use username: tim password: sausages")]),e._v(" "),n("p",[e._v("== Blocking handler example")]),e._v(" "),n("p",[e._v("This example shows a blocking handler which blocks the calling thread for 5 seconds before calling the next handler\nto serve the page.")]),e._v(" "),n("p",[e._v("Blocking handlers are run on a worker thread and don't block an event loop.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 - after 5 seconds the response should arrive.")]),e._v(" "),n("p",[e._v("== Static web server example")]),e._v(" "),n("p",[e._v("This example shows a very simple web server which serves static files from disk.")]),e._v(" "),n("p",[e._v("The server can be run either in your IDE with the main class or at the command line.")]),e._v(" "),n("p",[e._v("== JDBC example")]),e._v(" "),n("p",[e._v("This example shows a basic REST server backed by a JDBC client. It is exactly the same as the REST client however its\ndata is persisted in a relational database using the asynchronous JDBC client.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/jdbc/[Java jdbc example]")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080/products to get the list of products, or link:http://localhost:8080/products/0 for accessing\na product with id 0. In order to create new products use the POST method to link:http://localhost:8080/products")]),e._v(" "),n("p",[e._v("== Auth JDBC example")]),e._v(" "),n("p",[e._v("This example shows a basic static web-site that contains both public pages and pages that are only accessible to\na logged in user. This is a remake of the auth example, however using a different auth provider. In this case it\nuses the JDBC Auth Provider.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/authjdbc/[Java authjdbc example]")]),e._v(" "),n("p",[e._v("Requests to paths starting with "),n("code",[e._v("/private/")]),e._v(" will require login.")]),e._v(" "),n("p",[e._v("The username/password are loaded from the "),n("code",[e._v("setUpInitialData")]),e._v(" method.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("== Angular realtime example")]),e._v(" "),n("p",[e._v("This example shows a music store implemented with angular js, where all album data and orders are taken in realtime. The\nexample expects that there is a local instance of mongo db running.")]),e._v(" "),n("p",[e._v("It also demonstrates how to protect the even bus when used with a bridge using one "),n("code",[e._v("Auth Provider")]),e._v(".")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/angular_realtime/[Java angular_realtime example]")]),e._v(" "),n("p",[e._v("The example uses a simple auth service which gets user/password/role information from a properties file\n"),n("code",[e._v("src/main/resources/vertx-users.properties")]),e._v(".")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("== Programmatic Authentication examples")]),e._v(" "),n("p",[e._v("This examples shows how to use the Auth Handlers to protect resources by asserting if the user has the right authorities\nto access the resource.")]),e._v(" "),n("p",[e._v("There are 2 implementations, one using the API to verify assertions, and a second where assertions are implemented in\ncode:")]),e._v(" "),n("ul",[n("li",[e._v("link:src/main/java/io/vertx/example/web/authorisation/[Java authorisation example]")]),e._v(" "),n("li",[e._v("link:src/main/java/io/vertx/example/web/custom_authorisation/[Java custom_authorisation example]")])]),e._v(" "),n("p",[e._v("The example shows 4 resource that require different authorities:")]),e._v(" "),n("ul",[n("li",[e._v("(none) link:http://localhost:8080/api/protected")]),e._v(" "),n("li",[e._v("defcon1 link:http://localhost:8080/api/protected/defcon1")]),e._v(" "),n("li",[e._v("defcon2 link:http://localhost:8080/api/protected/defcon2")]),e._v(" "),n("li",[e._v("defcon3 link:http://localhost:8080/api/protected/defcon3")])]),e._v(" "),n("p",[e._v("You can generate different tokens with different authorities and test it. The example html does not generate defcon3\ntokens, in order to show that you cannot access the last resource.")]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and click around the links")]),e._v(" "),n("p",[e._v("== HTTP2")]),e._v(" "),n("p",[e._v("The HTTP2 example is a simplified http://http-test-2.frb.io/chuck-norris.html[Chuck Norris] test. The important thing to\nnote is that there is no API differences between HTTP1.1 and HTTP2 regarding web. The only change is the bootstrap of\nthe server.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/http2/Server.java[HTTP2 example]")]),e._v(" "),n("p",[e._v("== React.js Realtime chat")]),e._v(" "),n("p",[e._v("This example shows how you can integrate Vert.x EventBus SockJS bridge in a simple React.JS application. Since react is\nwritten in ES6 + JSX you will need to use webpack to bundle you client application, for this run "),n("code",[e._v("npm install")]),e._v(" to\ninstall all the dependencies locally and later you can compile your client application with: "),n("code",[e._v("./node_modules/ .bin/webpack -p")])]),e._v(" "),n("p",[e._v("Important files to note:")]),e._v(" "),n("ul",[n("li",[e._v("link:src/main/java/io/vertx/example/web/react/app-client.js[React app example]")]),e._v(" "),n("li",[e._v("link:src/main/java/io/vertx/example/web/react/Server.java[Java Vert.x server]")])]),e._v(" "),n("p",[e._v("Run the server either in your IDE or on the command line, then open your browser and hit\nlink:http://localhost:8080 and chat with a couple of browser windows!")]),e._v(" "),n("p",[e._v("== OAuth2")]),e._v(" "),n("p",[e._v("The OAuth2 example is a simplified interaction with GitHub OAuth2 server. It will\nshow how to secure and authenticate users, plus requesting specific authorities:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("user:email")])])]),e._v(" "),n("p",[e._v("Plus how to interact with secured resources using the user object directly.")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/oauth2/Server.java[OAuth2 example]")]),e._v(" "),n("p",[e._v("== HTTP Request Validation and OpenAPI 3 Router Factory")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/validation/ValidationExampleServer.java[ValidationExampleServer] is an\nexample of various usages of validation capabilities included in\nlink:http://vertx.io/docs/#web[Vert.x Web API Contract package]")]),e._v(" "),n("p",[e._v("The link:src/main/java/io/vertx/example/web/openapi3/OpenAPI3Server.java[OpenAPI3Server] is an example of\nOpenAPI3RouterFactory, the interface to build your design driven router based on your OpenAPI specification.")])])}),[],!1,null,null,null);t.default=o.exports}}]);