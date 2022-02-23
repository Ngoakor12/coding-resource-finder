# Coding Resource Finder
An easier way to find coding related topics and projects on the [ACN syllabus](http://syllabus.africacode.net/). Built with ReactJS and NodeJS.

[**Live project**](https://www.ngoako.com/coding-resource-finder/) 🌐

[**Setup locally**](#local-setup) 🔧

## Problem
I like [ACN syllabus](http://syllabus.africacode.net/) and the people behind it. I go there whenever I want to learn something new to see if there are any relevant resources. The "problem" started when it I noticed how searching resources required more clicks and wanting a way to bookmark resources I was busy going through for easy access. The default browser search(Ctrl+F) wasn't returning all the result and required clicking on parent links to search them. My browser bookmarks were not an option because I already have enough bookmarks and wanted them to be linked with the resources site.

## Tech stack
- **ReactJS** - for the frontend
- **Context** - global state management
- **React Router** - Internal routing
- [**JSDOM**](https://github.com/jsdom/jsdom) - web scraping
- **ExpressJS** - API development

## Features
- **Search resources**
- **Bookmark resources** you are busy with or want to work on next

## Challenges
- Getting the resources data without an API - Overcame this by learning web scraping, getting the data and creating an API to query the data in a less painful way. 

## Lessons learned
- Most sites have undocumented APIs that you can find by playing around with network dev tools. I learned about it too late.
- Scraping the web for specific data
- Develop and deploy React fronteds and NodeJS APIs

## Screenshots
![www ngoako com_coding-resource-finder_(myDevice highres desktop)](https://user-images.githubusercontent.com/54069197/155377612-66abb465-783e-46c7-be4c-b98b1f74848f.png)
![www ngoako com_coding-resource-finder_(myDevice highres desktop) (1)](https://user-images.githubusercontent.com/54069197/155377548-f7db8a17-ee1c-4aa0-b331-e1d6214e78b1.png)

## Local setup
**Clone repo**
```
git clone https://github.com/Ngoakor12/coding-resource-finder.git
```
**Install backend dependencies**(while in backend folder)
```
npm install
```
**Run API**
```
npm run dev
```
**Install frontend dependencies**(while in frontend folder)
```
npm install
```
**Run frontend**
```
npm start
```
