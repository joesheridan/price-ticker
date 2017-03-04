### Summary

This app displays realtime forex price information in a dynamic C3 chart.
The NodeJS backend retrieves fx data from the TrueFX 
feed and sends it to the client via a websocket. 
The frontend is built in ReactJS with webpack.

### Instructions

Download or clone the repository. Install the NPM dependancies:
```
npm install
```
Run the nodejs server:
```
npm start
```
Browse to the app in a web browser at the following location:
```
http://localhost:3000/
```
N.B. ensure that tcp port 3000 is free before starting the server.
