DOLLAR:=$$

all:
	@echo "Используй 'make install' чтобы подтянуть npm модули";
	@echo "Используй для разработки 'make webpack-install' чтобы подтянуть webpack";
	@echo "Используй для разработки 'make webpack' чтобы собрать js css и следить за изменениями";

install:
	npm install;

webpack-install:
	sudo npm install webpack -g; \
	sudo npm install webpack-dev-server -g;

webpack:
	npm start;

webpack-build:
	rm -rf build/*; \
	npm run build;
