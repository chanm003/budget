# Budget
using Docker containers

### Run server
```
git clone 
cd
docker-compose up
```

### Spins up three containers
1. api 
2. client
3. mongo

### Connect to Mongo container to seed data (optional)
```
docker exec -it budget_api_1 sh
cd seed
node dataToSeed.js
```

#### On Windows use
```
winpty docker exec -it budget_api_1 //bin//sh
```

[Open React App being served from localhost:3000](http://localhost:3000/)
