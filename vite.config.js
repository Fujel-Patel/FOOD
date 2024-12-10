import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/FOOD/",
  plugins: [react()],
})
// fetch("https://www.swiggy.com/", {
//   "headers": {
//     "upgrade-insecure-requests": "1"
//   },
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });