# README

## TheNovaquotes

This app was designed to be a "quotes" database for the Novatics team. It integrates with Slack, where the quotes can be submited.

## The Stack

To create this system a few tools were used:

Backend: Ruby on Rails 5
Frontend: React 16

To test the Slack webhook it was used the ngrok tool.

## Instalation

### Ruby Version
To get things going you have to install ruby on version 2.4

### Foreman
Before running your bundle install, make sure to install foreman

`gem install foreman`

### Application

This application is divided in two main parts: Server and Client.

The server is the rails application itself, the Client is inside the client folder, which is a React (create-react-app) application.

#### Server

Run `bundle install` on the root of the project

Make sure to configure your database to use Postgres
Run `rake db:setup` then `rake db:migrate`


`rails s -p 3001` to start the server (use port 3001, so the client will run on port 3000)

#### Client

Inside the client folder do:

`yarn install`

or

`npm install`

and then

`yarn start`

#### Run both systems with foreman

You can run

`foreman start -f Procfile.dev`

ou simply use the rake task for that

`rake start`

It will run both commands and use a single terminal window to do that.

