# Используем Node.js 18
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Билдим фронт
RUN npm run build

# Устанавливаем легкий сервер для статики
RUN npm install -g serve

EXPOSE 8080

# Запуск статики
CMD ["serve", "-s", "dist", "-l", "8080"]
