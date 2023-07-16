# VieTracker Docs !

## About

First of, issa pet-project which I made to solve my lttle routine needs and also to practice !basics of React, try out a React Router and TailwindCSS, and a bit of Framer Motion which I started to use occasionaly :D.

The main idea is simple - within this application user can find whatever he seem to like and mark it to watch it later; user can also mark anything he ever watched as one of his favorite pieces.

In fact, due to API (imdb), user have access to few provided lists, such as top 250 movies, or whats now in theater. Also there's a searcher that helps to find any movie, tv show or documentary.

### The problem, motivation and why to make it in the first place

Ngl, the main reason to make it was a desire to practice some specific parts of my skillsm try out few things and create something that might help within a routine, something that might actually be used. I'm not saying that I made some sort of a gamechanger or smth, obviously not. When figuring the idea I was oriented mainly on myself and my needs. And as far as I am a cinemaholic I thought that it would be nice to make my own tracker of things i've watched and liked and things I'm only planning to watch.

So yeah, problem is that someone (me) need a simple tracker; motivation as simple as an idea - create a project, train some stuff and as a result having a real-ish application, that can actually be used irl.

### Some tech side

#### Tech stack

As far as I'm frontend developer, tech stack doesn't have any surprises

- react (mainly basic react, and only basic react, because in this particular project im kinda showing off and manifesting the knowledge of a basics, cuz we all know that basics its almost the most important thing, right ?)
- react-router (ngl, thats a first time I used it that much. I mean I did its tutorial, and implement it here along w/ basic react felt like a really good desicion)
- tailwind (as a router its also a first time i use it that much, cuz before that i was scss enjoyer but then i learned tailwind and i liked it)
- a bit of a framer motion (that mf came in the middle of a project. i accidentally watched its tutorial and thought that its cool to make a first steps w/ it in this project)

I don't think it's appropriate to list every package I've used, so for now
you got just a main stuff above.

#### A bit of more words

At this point I want to mention and explain some of my descisions that I think are important.

Firstly, this project made w/ Create-React-App. Why ? It's simple and ready to go, but I need to say that most of the time I prefer to use my own webpack config, but this time i stepped away from because in this project I used TailwindCSS. It's my first time using it in that large scale; I thought to use SCSS, but I know it well and wanted to try new things, so I found that Tailwind might be interesting. And using custom webpack w/ tailwind in my opinion kinda too much; I'm not telling it's hard and not managable, it's just to much stuff to set up, configure and stuff; I think it's not really right to spend that much time to set up things to start working. Also I didn't used Vite since it's kinda new thing and to be honest i'm not informed about it's details to use it.

Secondly, as you might see I'm not using any backend, I'm not using any db or smth and the reason why is I want to show-off my react skills in the first place, and project still might be useful as he is.

Third thing is probably optimization; To be honest i didnt find proper cases to implement some architecture-ish patterns. Optimization hooks doesnt fit within projects idea.
So there was one thing that might be done and its a context splitting, but due to not really very dependeded components/routes I refused to make it.

### Possible imporvements

- create a new route - Watched, cuz now its only Favorites and Watch Later
- review any actor, get more detailed info about any person
- ratings for Favorite
- sorting for Favorites, Watch Later and etc.
- transform navbar to sidebar for better ux when a amount of links will grow

(no,no im not gonna make it MERN app, I mean, Idea of a project is to show off how w/ pure solid basic knowledge create a pretty useful app and I have and will have other more projects, so why I should improve it that much ??
As a timekiller or like for fun ? Bihh im busy ah)

### Things I personally learned and challenges I faced

- SVG ! Maan that shit SLAPS! I mean the things u might implement w/ it, that crazy effects ? It's so cool, and here I implemented grain effect on the whole page. The problem was the fact that I hardcoded svg within html template, because when u make svg as a file it works not in every browser.
- ngl, the actual usage of a ? operator, i mean i knew it before but this time it came really handy
- the difficulty to change a complex-ish states (useState)

## How to start a project locally

first of, u obviously need to install all the packages and you can make it w/

`npm install`

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
