# Temperature Converter

A Spring Boot-based Temperature Converter application with MongoDB integration, REST APIs, API Key security, and Docker containerization.

### Project Overview

The Temperature Converter is a service-oriented application developed using Spring Boot. It provides temperature conversion functionality, stores conversion records in MongoDB, and exposes RESTful APIs for managing conversion history.

The application is containerized using Docker and Docker Compose to provide an easy deployment setup with separate containers for the backend service and MongoDB database.

---

## Features

- Temperature conversion using REST API
- Support for multiple temperature units
- Celsius, Fahrenheit, and Kelvin conversions
- Store conversion history in MongoDB
- Retrieve latest conversion history
- Filter conversion history by temperature units
- API Key-based request validation
- RESTful API architecture
- Docker containerization
- Docker Compose configuration
- Simple web interface using HTML, CSS, and JavaScript

---

## Technologies Used

### Backend
- Java 21
- Spring Boot 3.5
- Spring Web
- Spring Data MongoDB
- Maven

### Database
- MongoDB

### Frontend
- HTML
- CSS
- JavaScript

### DevOps
- Docker
- Docker Compose
- Git & GitHub

---

## Project Architecture

```
User Interface
       |
       |
Spring Boot REST API
       |
       |
Service Layer
       |
       |
Repository Layer
       |
       |
MongoDB Database
```

---

## Project Structure

```
temperatureconverter
│
├── src
│   ├── main
│   │   ├── java/com/example/temperatureconverter
│   │   │
│   │   ├── controller
│   │   │       └── TemperatureController.java
│   │   │
│   │   ├── service
│   │   │       └── TemperatureService.java
│   │   │
│   │   ├── repository
│   │   │       └── TemperatureRepository.java
│   │   │
│   │   ├── model
│   │   │       └── TemperatureLog.java
│   │   │
│   │   ├── filter
│   │   │       └── ApiKeyFilter.java
│   │   │
│   │   └── config
│   │           └── FilterConfig.java
│   │
│   └── resources
│       ├── application.properties
│       └── static
│           ├── index.html
│           ├── style.css
│           └── script.js
│
├── Dockerfile
├── docker-compose.yml
├── pom.xml
└── README.md
```

---

## API Endpoints

### 1. Temperature Conversion

#### Request

```
POST /api/temperatures/convert
```

#### Example Request Body

```json
{
    "temperature": 100,
    "fromUnit": "CELSIUS",
    "toUnit": "FAHRENHEIT"
}
```

#### Response Example

```json
{
    "inputTemperature": 100,
    "inputUnit": "CELSIUS",
    "outputTemperature": 212,
    "outputUnit": "FAHRENHEIT"
}
```

---

### 2. Get Conversion History

#### Request

```
GET /api/temperatures/history
```

Returns all previous temperature conversions ordered by latest conversion time.

---

### 3. Filter Conversion History

#### Request

```
GET /api/temperatures/filter?from=CELSIUS&to=FAHRENHEIT
```

Returns conversion records based on the selected temperature unit pair.

---

## API Key Security

The application includes API Key validation using a custom filter.

Each protected request requires a valid API key.

Example Header:

```
X-API-KEY: your-api-key
```

---

## Database Details

MongoDB database:

```
temp_db
```

Collection:

```
temperature_conversions
```

Stored information includes:

- Input temperature
- Input temperature unit
- Converted temperature
- Output temperature unit
- Conversion timestamp

---

## Docker Setup

The project contains Docker configuration for running the application with MongoDB.

### Docker Containers

| Container | Purpose | Port |
|-----------|---------|------|
| temperatureconverter-api | Spring Boot Application | 8080 |
| temperature-mongodb | MongoDB Database | 27017 |

---

## Running with Docker

### Build Docker Containers

```bash
docker compose build
```

### Start Containers

```bash
docker compose up
```

Application will run at:

```
http://localhost:8080
```

### Stop Containers

```bash
docker compose down
```

---

## Running Without Docker

### Start Application

Using Maven:

```bash
./mvnw spring-boot:run
```

Windows:

```powershell
.\mvnw spring-boot:run
```

---

## Testing APIs

Recommended tools:

- Postman
- MongoDB Compass

Testing steps:

1. Start the Spring Boot application
2. Send API requests using Postman
3. Check conversion responses
4. Verify saved records in MongoDB

---

## MongoDB Verification

Open MongoDB shell:

```bash
mongosh
```

Select database:

```javascript
use temp_db
```

View collections:

```javascript
show collections
```

View saved data:

```javascript
db.temperature_conversions.find().pretty()
```

---

## GitHub Repository

The project is version controlled using Git and hosted on GitHub.

Git workflow used:

```
git init
git add .
git commit
git push
```

---

## Future Improvements

- Connect with external weather APIs
- Add user authentication
- Improve frontend design
- Add more temperature conversion units
- Add conversion analytics and charts
- Deploy application to cloud services

---

#### Author

U.K.R.R.P.Ayuwardhana
