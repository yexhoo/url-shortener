start:
	docker-compose up -d
stop:
	docker-compose down
test:
	docker-compose exec shortener npm test
migrate:
	docker-compose exec shortener npx sequelize-cli db:migrate
migrate-revert:
	docker-compose exec shortener npx sequelize-cli db:migrate:undo:all 
seed:
	docker-compose exec shortener npx sequelize-cli db:seed:all
seed-revert:
	docker-compose exec shortener npx sequelize-cli db:seed:undo:all 