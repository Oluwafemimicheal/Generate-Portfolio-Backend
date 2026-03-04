import cors from "cors"

const allowedOrigins = [
  "https://yourfrontend.com",
  "https://admin.yourfrontend.com"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const message = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(message), false);
    }
    return callback(null, true);
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};