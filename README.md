# How to Stream a Movie to a HTML 5 video tag using NodeJS

This is a very quick and easy article explaining how to stream movies to a HTML 5 video tag using NodeJS. The whole project is very small and compact. Focus your attention towards the `movie.js` file in the `routes` folder.

# The high level explanation

As you can see from the code, the front end part of the project is super basic. The only thing that matter is the HTML 5 video tag. And it is basic, there just the URL to the source of the video. Which in this case is a URL to a NodeJS file that

1. opens the move file as a stream,
1. checks the request to see how much data the video tag requested
1. reads the requested chunks
1. sends back the data with the response

And this is it. The video tag will keep making request to the provided URL until it will get the whole movie. The only job of our code is to keep reading parts of the file that the tag asks for.

# Deployment

<a href="https://heroku.com/deploy?template=https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS" target="_blank">
<img align="left" style="float: left; margin: 0 10px 0 0;" src="https://www.herokucdn.com/deploy/button.svg"></a>

Once you deploy the server on Heroku, you will see the video player in the middle of the page, and you should see the player buffering up with the trailer of Toy Story which is included in this repo.