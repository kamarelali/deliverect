// index.js
const axios = require('axios');
require('dotenv').config();

const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImdDN25CdHNHQmVFRzZlRXIifQ.eyJhdWQiOiJodHRwczovL2FwaS5kZWxpdmVyZWN0LmNvbSIsImV4cCI6MTcxOTQ4MjcxMCwiaWF0IjoxNzE5Mzk2MzEwLCJpc3MiOiJodHRwczovL2FwaS5zdGFnaW5nLmRlbGl2ZXJlY3QuY29tIiwiYXpwIjoiZ1NSVm9tUFZyZnRXVVJVSCIsInN1YiI6ImdTUlZvbVBWcmZ0V1VSVUhAY2xpZW50cyIsInNjb3BlIjoiZ2VuZXJpY1BPUyJ9.YDLeTQDO-RuW4URsQ8XH4XUeOBwu2VMVRjWu3lFWtvOeFsWhBdJM9eUlltdR8lca76741Y9rAUw9Os8Kw_S2plS-KkDrrc6j6AN1QUtjqGHYlnLarVs7f7H4gUKNPCF_G3dVsaFp-jtTPzlprSXal9IZzEJjrZtVYpViY_s9333escNLPmUOUvgTWMmN5KJsSNgvXlEZ5kpQKiIbYZ0wFUmu05Py3Aobpptu123k4HQIH0_9AqDkppUjfP3-Rncttg3HnzK-MrY32PzNApU7F5gjscDG9zgt-fvafAjWwQjPrR72_y3YUFc4DKSdP9jSpB51L7iOb93tCBqxG7xB6w`,
      'Content-Type': 'application/json',
      'accept':'application/json'
    },
    // timeout: 10000,  // Optional, sets a timeout of 10 seconds
  });
  
module.exports = axiosInstance;