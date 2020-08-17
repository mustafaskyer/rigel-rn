/**
 * API Methods, refer to https://github.com/infinitered/apisauce
 * [get, delete, post, patch, put, link, unlink]
 */
import {create} from 'apisauce';
/* import baseURL */
import {baseURL} from 'configs/APIS';

// define the api
export default create({
  baseURL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    /**
     * other headers like authorization, locale, ...etc
     */
  },
});
