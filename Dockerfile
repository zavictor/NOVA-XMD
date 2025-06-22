FROM node:lts-buster
RUN git clone https://github.com/bmbtech11/NOVA-XMD/root/popkidxmd
WORKDIR /root/bmbtech11
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
