const fs = require('fs')
// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
fs.writeFileSync('./.env', `REACT_APP_YOUTUBE_API_KEY=${process.env.YOUTUBE_API_KEY}\n`)