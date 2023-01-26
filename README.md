# react-tenzies

A simple dice rolling game to practice useState and useEffect fundamentals.

**Link to project:** https://nimble-raindrop-e4c3ab.netlify.app/

![image](https://user-images.githubusercontent.com/85075266/214917617-34a5838c-ebeb-4236-9d59-7c8816569e1a.png)

# How It's Made:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

I deployed the project to netlify using TypeScript, React and Vite.

## Optimizations

- The project spec only involved making this to 1920x1080 resolution, but I extended it to include all content from mobile through tablet to desktop and even high-res monitors.  

- There are some fun npm mods for React, in this case I used confetti along with a trigger in useEffect to check for win conditions.  But the project inspired me to go look on npm for other interesting mods

## Lessons Learned:

- TypeScript wins again, I had a surprising lack of debugging on this one at the end.  I'm quickly realising how robust React/TypeScript/Vite are as a combination stack.  

- There was a bit of a snag setting the event handler types in TypeScript, mainly because mouse events were specifically defined in React/Typescript and it proved tricky to configure. I got around it by defining the type of the function more specifically - functions that do something but don't output something need to be defined as having a void output, in this case that solved the issue.  I had basically gone down the wrong road completely and needed to simplify things.  Keep it Simple Always.

## Other Projects:
Take a look at these couple examples that I have in my own portfolio:

**React Notes:** https://github.com/TheWoodenMan/react-notes-app - a simple react-notes app using localstorage and markdown to html mods.

**React Travel Journal:** https://github.com/TheWoodenMan/twm-travel-journal - a react travel journal showing component mapping.

Digital Business Card: https://github.com/TheWoodenMan/twm-business-card - This was one of the first Typescript/React projects I did.
