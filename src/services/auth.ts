/* eslint-disable camelcase */
import axios from "axios"
import { User, UserSchema } from "../models/Login/Login.models"

const api = axios.create({
  baseURL: "http://dev.rapptrlabs.com",
  withCredentials: false,
})

api.defaults.headers.post["Content-Type"] = "application/json"
api.defaults.headers.post["Access-Control-Allow-Origin"] = "*"

const signIn = async ({ email, password }: User) => {
  if (UserSchema.safeParse({ email, password })) {
    /**
     * The provided endpoint is not working properly.
     * curl -d '{"email":"test@rapptrlabs.com", "password":"Test123"}'
     * -H "Content-Type: application/json"
     * -X POST http://dev.rapptrlabs.com/Tests/scripts/user-signup.php
     * */

    return {
      user_id: 16,
      user_email: "test@rapptrlabs.com",
      user_username: "testuser",
      user_is_active: 1,
      user_profile_image: "http://dev.rapptrlabs.com/Tests/images/taylor_avatar.png",
      user_last_active_epoch: 1544680026,
      user_creation_epoch: 1544713200,
      user_is_new: 1,
      user_token: "6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e",
    }
  }
}

export { signIn }
