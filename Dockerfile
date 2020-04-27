FROM debian:buster
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
 && apt-get install -y npm \
 && apt-get clean
RUN npm i npm@latest -g
ADD package.json /app/
ADD package-lock.json /app/
WORKDIR /app/
RUN npm install
ADD . /app/
RUN npm run build
EXPOSE 8000
CMD npm start
