// *********   Fetch() global Function   *********
//The global fetch() function starts the process of fetching a resource from the network, returning a promise which is fullfilled once the response is available. The promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

// ******************************POSSIBLE INTERVIEW QUESTIONS******************************
//Q1.) we have a request from promise & get an error404 where do we get this error in resolve or reject..?
//Ans: we always get it as a response, its not an error it is error only when it didn't done request from browser to server, if we get 404 it means request is done but response is not ok, so we get it in resolve only.


//  ***  How does the 'fetch()' function works and how does it handle errors? ***
//ans: As we write response = fetch('something') it goes to do 2 works--one goes to web browser/node and 2nd goes for storing/making space for storing data{which aslo has 2 arrays called onFullfilled[] & onRejected[]},, 
// from web Browser it get a network request which ultimately data either goes to network or may not go to network  if it goes to network and take any response then it always goes to onFullfilled[] array and if it doesn't go to network then it goes to onRejected[] array, and if we get response from network then we check whether response is ok or not if it is ok then we get data otherwise we get error,, keep in mind that errors 404,505,etc goes to network then to onfullfilled[] array so it got shown on display.
// NOW, The data memory got fullfilled by onfullfilled array as it got data from browser ---> which that data goes to Response object and we can access the data using response.json() methods etc.