const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
new GoogleStrategy(
{
  clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL || "/auth/google/callback",
},
  async (accessToken, refreshToken, profile, done) => {
      try {
        // Always create a new user entry for each sign-in
        // This allows the same Gmail to be used multiple times
        const user = new User({
          emails: [profile.emails[0].value],
          name: profile.displayName,
        });

        await user.save();
        console.log(
          `New user created: ${
            profile.emails[0].value
          } (${new Date().toISOString()})`
        );

        done(null, user);
      } catch (error) {
        console.error("Passport authentication error:", error);
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
