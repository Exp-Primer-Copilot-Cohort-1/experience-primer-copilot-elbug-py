// Create web server
// 1. Load express
const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const app = express();
// 2. Load body-parser
const bodyParser = require("body-parser");
// 3. Load morgan
const morgan = require("morgan");

// 4. Load cors
const cors = require("cors");

// 5. Load express-session
const session = require("express-session");

// 6. Load passport
const passport = require("passport");
const passportLocal = require("passport-local");
const LocalStrategy = passportLocal.Strategy;

// 7. Load bcrypt
const bcrypt = require("bcrypt");

// 8. Load multer
const multer = require("multer");

// 9. Load nodemailer
const nodemailer = require("nodemailer");

// 10. Load dotenv
const dotenv = require("dotenv");
dotenv.config();

// 11. Load mongoose
const mongoose = require("mongoose");
const { stringify } = require("querystring");

// 12. Load connect-mongo
const MongoStore = require("connect-mongo")(session);

// 13. Load schema
const Schema = mongoose.Schema;

// 14. Load GridFS
const { Readable } = require("stream");

// 15. Load GridFSBucket
const { GridFSBucket } = require("mongodb");

// 16. Load GridFSStorage
const GridFsStorage = require("multer-gridfs-storage");

// 17. Load crypto
const crypto = require("crypto");

// 18. Load axios
const axios = require("axios");

// 19. Load jsonwebtoken
const jwt = require("jsonwebtoken");

// 20. Load cookie-parser
const cookieParser = require("cookie-parser");

// 21. Load dotenv
const dotenv = require("dotenv");
dotenv.config();

// 22. Load path
const path = require("path");

// 23. Load cors
const cors = require("cors");

// 24. Load express-session
const session = require("express-session");

// 25. Load passport
const passport = require("passport");
const passportLocal = require("passport-local");
const LocalStrategy = passportLocal.Strategy;

// 26. Load bcrypt
const bcrypt = require("bcrypt");

// 27. Load multer
