# Budget
using Docker containers

### Run server
```
git clone 
cd
docker-compose up
```

### Above commands spin up five containers
1. api 
2. client
3. mongo
4. nginx
5. cac

### Connect to Mongo container to seed data
```
sudo docker exec -it budget_api_1 sh
cd seed
node dataToSeed.js
```

#### On Windows use
```
winpty docker exec -it budget_api_1 //bin//sh
cd seed
node dataToSeed.js
```

### Navigate to application
[Open React App](https://localhost:8000/login)
- username: jdoe@gmail.com
- password: 12345678
