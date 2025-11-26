# 1 — imagem base
FROM node:18-alpine

# 2 — criar diretório de trabalho dentro do container
WORKDIR /app

# 3 — copiar package.json e package-lock.json
COPY package*.json ./

# 4 — instalar dependências
RUN npm install --production

# 5 — copiar o restante dos arquivos
COPY . .

# 6 — expor a porta usada pelo app
EXPOSE 3000

# 7 — comando para iniciar a aplicação
CMD ["npm", "start"]
