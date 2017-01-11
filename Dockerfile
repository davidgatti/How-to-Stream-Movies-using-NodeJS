#
# 	Base Image
#
FROM debian:8.6

#
#	Basic Setup
#
MAINTAINER David Gatti

#
#	preparing the environment
#
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y curl
RUN apt-get install -y sudo
RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
RUN apt-get install -y nodejs

#
#	Create app directory
#
RUN mkdir -p /home/app

#
#	Copy the content of the app
#
COPY . /home/app

#
#	Switch working directory
#
WORKDIR /home/app

#
#	Prepare the app by installing all the dependencies
#
RUN npm install

#
#	Run the app
#
CMD [ "npm", "start" ]