import express from 'express';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import flash from 'express-flash';
import { createClient } from 'redis';
import {RedisStore} from 'connect-redis';
import dotenv from 'dotenv';
import passport from'./config/passport.js';
import homeRouter from './routes/home.js';
import productsRouter from './routes/products.js';
import authRouter from './routes/auth.js';
import cartRouter from './routes/cart.js';
import checkoutRouter from './routes/checkout.js';
import ordersRouter from './routes/orders.js';
import adminRouter from './routes/admin.js';
import invoiceRouter from './routes/invoice.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Passport

// Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL
});
async function connectRedis(){
  await redisClient.connect();
  
}
connectRedis();
// Session Configuration
app.use(session({
  store: new RedisStore({
    client: redisClient
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  }
}));

app.use(passport.initialize());
app.use(flash()); // Use express-flash for flash messages

// View Engine
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Custom Middleware
import { initializeCart, userLocals } from './middleware/auth.js';
app.use(initializeCart);
app.use(userLocals);

// Routes
app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/orders', ordersRouter);
app.use('/admin', adminRouter);
app.use('/invoice', invoiceRouter);
// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: 'Server Error', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
