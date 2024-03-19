# Daily Strive - A user friendly mobile app for habit-building


![App screenshots showcase](https://github.com/imminh123/daily-strive-habit-tracker/blob/main/packages/client/src/assets/images/daily_strive.png?raw=true)

Daily Strive is a free habit-building mobile app, offers features for customizing tasks and staying motivated. You'll get email notifications to track your progress. Simply focus on starting, doing, and completing your habits for personal growth.

## Installation:
1. Configure the Database and SMTP services:
   - MongoDB Atlas: [MongoDB Atlas](https://www.mongodb.com/atlas/database)
   - Ethereal: [Ethereal](https://ethereal.email/)
   - Sendgrid: [Sendgrid](https://sendgrid.com/en-us)
   
2. Install Node (>= 16.0.0)

3. Download the project dependencies:
   - Client side (packages -> client):
     ```
     npm install
     ```
   - Server side (packages -> server):
     ```
     npm install
     ```

4. Configure env files and add variables:
   - Client side (packages -> client):
     ```
     cp .env.example .env
     ```
   - Server side (packages -> server):
     ```
     cp .env.example .env
     ```
   Fill the variables under “# daily-strive setup env variables”

5. Run the application:
   - Concurrently:
     ```
     npm run start-all
     ```
   - Separately:
     - Client side (packages -> client):
       ```
       npm start
       ```
     - Server side (packages -> server):
       ```
       npm start
       ```
