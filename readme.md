# Media Link Extractor Backend

A simple Node.js + Express backend that accepts a URL and determines whether it points to an image or video.  
If the URL contains an image or video, the backend can download and store it locally.  
Unsupported URLs return an error.

## Features
- URL validation
- Detects image or video using HTTP headers
- Downloads image/video files
- Clean folder structure
- Easy to test using Postman

## Tech Stack
- Node.js
- Express.js
- Fetch API


```graphql

project-root/
│
├── routes/
│   ├── check.js        # Detects content type (image/video)
│   ├── download.js     # Downloads image/video
│
├── utils/
│   └── validator.js    # URL validation helper
│
├── downloads/          # Stored downloaded files
│
├── server.js           # App entry point
├── package.json


```