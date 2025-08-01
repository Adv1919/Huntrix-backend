import express from 'express';
import cors from 'cors';
// import mongoose from 'mongoose'; // Uncomment and configure if you want DB init here
// import dotenv from 'dotenv'; dotenv.config(); // Uncomment if you use dotenv

// Import all your routers
import adminAuditLogRouter from '../src/routes/admin.auditlog.routes.js';
import adminMatchRouter from '../src/routes/admin.match.routes.js';
import adminRoomsRouter from '../src/routes/admin.rooms.routes.js';
import adminRouter from '../src/routes/admin.routes.js';
import adminUsersRouter from '../src/routes/admin.users.routes.js';
import authRouter from '../src/routes/auth.routes.js';
import connectionRouter from '../src/routes/connection.routes.js';
import finalMatchRouter from '../src/routes/finalmatch.routes.js';
import matchRouter from '../src/routes/match.routes.js';
import moodboardRouter from '../src/routes/moodboard.routes.js';
import roomRouter from '../src/routes/room.routes.js';
import roomAllocationRouter from '../src/routes/roomAllocation.routes.js';
import surveyRouter from '../src/routes/survey.routes.js';
import userRouter from '../src/routes/user.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

// Mount all routes under appropriate sub-paths
app.use('/admin/auditlog', adminAuditLogRouter);
app.use('/admin/match', adminMatchRouter);
app.use('/admin/rooms', adminRoomsRouter);
app.use('/admin/users', adminUsersRouter);
app.use('/admin', adminRouter); // This should come AFTER specific admin routes!
app.use('/auth', authRouter);
app.use('/connection', connectionRouter);
app.use('/finalmatch', finalMatchRouter);
app.use('/match', matchRouter);
app.use('/moodboard', moodboardRouter);
app.use('/room', roomRouter);
app.use('/room-allocation', roomAllocationRouter);
app.use('/survey', surveyRouter);
app.use('/user', userRouter);

// Export the Express app as the serverless handler
export default app;
