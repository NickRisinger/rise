import axios from 'axios';

export const http = axios.create({
  baseURL: '/api',
  headers: {
    'X-Api-Key': 'IoOFarIAxjFRLgjJSYONgd6Y7gx50epd',
  },
});
