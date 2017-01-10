#
# 	Base Image
#
FROM node:7.4.0

#
#	Basic Setup
#
MAINTAINER David Gatti

#
#	preparing the environment
#
RUN apt-get update
RUN apt-get upgrade -y

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
WORKDIR /usr/src/app

#
#	Prepare the app by installing all the dependencies
#
RUN npm install

#
#	Run the app
#
CMD [ "npm", "start" ]