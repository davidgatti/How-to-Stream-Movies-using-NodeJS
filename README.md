# How to Stream a Movie to a HTML 5 video tag using NodeJS

This is a very quick and easy **article** explaining how to stream movies to an HTML 5 video tag using NodeJS. The whole project is very small and compact. The `video.js` file is where you shoud focus your attention. The file is in the `routes` folder.

# But first, what are streams?

If you never dealt with streams, you might think to yourself, why not just link the movie file straight to the video tag? If we do that, the whole movie file might be loaded into memory on the server side. Now you may be thinking, but this file is just 30MB in size, so what is the problem?

Well, imagine that you have 16GB of RAM on the server, but you have a 20GB video file on the drive. What now? How would you load such a massive file that exceeds the RAM capacity? Streams are the answer 😎.

With streams, you have your file on disk, sitting there and having a good time. By using the `[.createReadStream()](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)` method, and telling it which part of the file you're interested in, you will just get a chunk of the whole thing. For example, just 1MB. Then you take that 1MB, send it to whoever requested it, and you're done.

If you are interested in learninig more about Streams, check out this other article that I wrote, titled: [How-to-Understand-Streams-in-NodeJS](https://github.com/davidgatti/How-to-Understand-Streams-in-NodeJS).

# The high level code explanation

As you can see from the code, the front end part of the project is super basic. The only thing that matters is the HTML 5 video tag and his URL to the resource of the video. Which, in this case, is a URL to a NodeJS `route` that:

1. Checks the request to see how much data the video tag requested
1. Opens the movie file as a stream
1. Reads the requested chunks
1. Sends back the data with the response

And this is it. The video tag will keep making requests to the provided URL until it gets the whole movie. The only job for your code is to keep reading parts of the file that the tag asks for.

# What this project is not

This article is **not** a full implementation of the [HTTP/1.1 Range Requests](http://svn.tools.ietf.org/svn/wg/httpbis/specs/rfc7233.html#range.units.other) standard, meaning that there are edge cases that are not taken into consideration. This document is intended to be a good starting point to help you better understand the basics of this technology.

# Deployment

<a href="https://heroku.com/deploy?template=https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS" target="_blank">
<img align="left" style="float: left; margin: 0 10px 0 0;" src="https://www.herokucdn.com/deploy/button.svg"></a>

Once you deploy the server on Heroku, you will see the video player in the middle of the page, and you should see the player buffering up with the trailer of Toy Story, which is included in this repo. Replace the movie with another one, but keep in mind that the format of the video must be compatible with what the video tag in your browser is capable of.

# The End

If you've enjoyed this article/project, please consider giving it a 🌟. Also check out my [GitHub account](https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

## Where to follow

You can follow me on social media 🐙😇, at the following locations:

- [GitHub](https://github.com/davidgatti)
- [Twitter](https://twitter.com/dawidgatti)
- [Instagram](https://www.instagram.com/gattidavid/)

## More about me

I don’t only live on GitHub, I try to do many things not to get bored 🙃. To learn more about me, you can visit the following links:

- [Podcasts](http://david.gatti.pl/podcasts)
- [Articles](http://david.gatti.pl/articles)
- [Technical Articles](http://david.gatti.pl/technical_articles)
- [Software Projects](http://david.gatti.pl/software_projects)
- [Hardware Projects](http://david.gatti.pl/hardware_projects)
