const bcrypt = require('bcryptjs')
const schoolDB = require('../schoolDB')
const companiesDB = require('../companiesDB')

//console.log(companiesDB.agCareers)

module.exports = {
  register: async (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    const { email, password, user_name } = req.body
    const found = await db.find_user([email])
    if (+found[0].count !== 0) {
      return res.status(409).send({ message: 'That email is alreay taken!' })
    }
    const dreamer_id = await db.add_user({ user_name, email })
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(password, salt)
    db.add_hash({ dreamer_id: dreamer_id[0].dreamer_id, hash })
    req.session.dreamer = {
      dreamer_id: dreamer_id[0].dreamer_id,
      email,
      user_name
    }
    console.log(req.session.dreamer)
    res.status(201).send(req.session.dreamer)
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const { email, password } = req.body
    const found = await db.find_user([email])
    if (+found[0].count === 0) {
      return res
        .status(409)
        .send({ message: 'We dont have an account with that email :(' })
    }
    const foundUser = await db.find_hash([email])
    const { hash, dreamer_id, user_name } = foundUser[0]
    const result = bcrypt.compareSync(password, hash)
    if (!result) {
      return res.status(401).send({ message: 'Incorrect Password!' })
    } //! POTENTIAL ISSUE (the user thing)
    req.session.dreamer = { dreamer_id, email, user_name }
    res.status(200).send({ message: "You're in!", user: req.session.dreamer })
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send({ message: 'See ya later!' })
  },
  getSession: (req, res) => {
    res.status(200).send(req.session.dreamer)
  },
  getSchools: (req, res) => {
    const db = req.app.get('db')
    db.get_schools()
      .then(schools => {
        res.status(200).send(schools)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  },
  getCompanies: (req, res) => {
    const db = req.app.get('db')
    db.get_goodies()
      .then(companies => {
        res.status(200).send(companies)
      })
      .catch(err => {
        console.log(err)
        res.status(200).send(err)
      })
  },
  glads: (req, res) => {
    const db = req.app.get('db')
    schoolDB.codingBootcamps.forEach(async school => {
      let result = await db.insert([
        school.name,
        school.city,
        school.inState,
        school.outofState,
        school.img
      ])
    })
    res.sendStatus(200)
  },
  goodies: (req, res) => {
    const db = req.app.get('db')
    companiesDB.engineerCareers.forEach(async company => {
      let results = await db.goodies([
        company.title,
        company.reqs,
        company.avgPay,
        company.description,
        company.img
      ])
    })
    res.sendStatus(200)
  }
}
