const router = require('express').Router()
const path = require('path')
module.exports = router

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/pages/admin.html'))
})

router.get('/employee', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/pages/employee.html'))
})

router.get('/manager', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/pages/manager.html'))
})

router.get('/supervisor', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/pages/supervisor.html'))
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})