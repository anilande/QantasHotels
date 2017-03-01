
import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import request from 'request';
import data from './data/data';

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, 'static'));

app.use(Express.static(path.join(__dirname, 'static')));

app.get('/api/hotels/', function(req, res) {
    return data;
});

app.get('*', (req, res) => {
  match(
        { routes, location: req.url },
        (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                res.status(200).send(renderToString(<RouterContext {...renderProps} />))
            } else {
                res.status(404).send('Not found')
            }
        }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});