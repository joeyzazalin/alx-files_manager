0x04. Files Manager
Project Overview
This project is a summary of the back-end trimester, covering authentication, NodeJS, MongoDB, Redis, pagination, and background processing. The objective is to build a simple platform for uploading and viewing files.

Project Timeline
Start Date: Aug 1, 2024, 6:00 AM
End Date: Aug 8, 2024, 6:00 AM
Features
User Authentication via a Token
List All Files
Upload a New File
Change File Permissions
View a File
Generate Thumbnails for Images
Technologies Used
JavaScript
ES6
NoSQL
MongoDB
Redis
NodeJS
ExpressJS
Kue
Learning Objectives
By the end of this project, you should be able to:

Create an API with Express
Authenticate a user
Store data in MongoDB
Store temporary data in Redis
Set up and use a background worker
Requirements
Editors: vi, vim, emacs, Visual Studio Code
Node Version: 12.x.x
OS: Ubuntu 18.04 LTS
Linting: ESLint
Installation and Setup
Clone the Repository

git clone https://github.com/lemyjay/alx-files_manager.git
Navigate to the Project Directory

cd alx-files_manager
Install Dependencies

npm install
Start the Server

npm run dev
API Endpoints
User Authentication
POST /auth
Authenticate a user and return a token.
File Management
GET /files

List all files.
POST /files

Upload a new file.
PATCH /files/:id/permissions

Change file permissions.
GET /files/:id

View a file.
Background Processing
GET /process
Process the queue for file operations like generating thumbnails.
Resources
Node JS getting started
Process API doc
Express getting started
Mocha documentation
Nodemon documentation
MongoDB
Bull
Image thumbnail
Mime-Types
Redis
Usage
Check Available Seats

curl localhost:1245/available_seats
Reserve a Seat

curl localhost:1245/reserve_seat
Process the Queue

curl localhost:1245/process
Contact
For any inquiries, please reach out to the team members via GitHub.