import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log(profile);
        cb(null, profile);

      } catch (error) {
        cb(error, null);
      }
    },
  ),
);


export default passport;