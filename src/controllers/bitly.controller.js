import axios from 'axios';
import API from '../config/api';
import winston from '../config/winston';

const Bitly = {

   /**
    * @description Takes long URLs and converts them into short URLs of the form https://bit.ly/2FpwtdM
    * @date 2019-09-06
    * @param {*} req
    * @param {*} res
    */
   shorten(req, res) {
      const url = req.body.url;

      // Check if the url has a valid value
      if (!url.trim()) {
         return res.render('pages/invalid.ejs', { data : { invalid: true }});
      }

      // Make a promised get request to the bitly shorten url api endpoint
      axios.get(`${API.baseUrl}/shorten`, {
         params: {
            longUrl: url,
            access_token: API.accessToken,
            format: 'json'
         }
      })
      .then((response) => {
         const data = response.data.data;

         // check if the response returns success
         if (response.data.status_code === 200) {

            // Log the long and shortened url to log file
            winston.info(`${data.long_url} ${data.url}`)

            // render view
            return res.render('forms/shorten-url-response', {data: response.data.data});
         } else {
            // Log error messages
            winston.info(`ERROR ${response.data.status_txt}`);

            // render the error page
            return res.render('pages/error', {data: {message: response.data }});
         }
      })
      .catch((error) => {
         // Log the response data
         winston.info(`ERROR ${JSON.stringify(error)}`);

         // render the error page
         return res.render('partials/error.ejs', {data: error});
      });
   }

}

export default Bitly;