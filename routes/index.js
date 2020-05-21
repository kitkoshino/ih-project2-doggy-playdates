'use strict';

const { Router } = require('express');
const router = new Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Doggy PlayDates' });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.render('private');
});

module.exports = router;
