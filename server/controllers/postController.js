const bcrypt = require('bcryptjs')

module.exports = {
  getPosts(req, res) {
    console.log(req.session)
    const db = req.app.get('db')
    db.get_posts(req.session.dreamer.dreamer_id)
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => console.log(err))
  },
  deletePost(req, res) {
    const db = req.app.get('db')
    db.delete_post(+req.params.id)
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => console.log(err))
  },

  editPost(req, res) {
    const db = req.app.get('db')
    const { list_content, list_id } = req.body
    db.edit_post([list_content, list_id])
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => console.log(err))
  },

  addPost(req, res) {
    //console.log(req.body)
    console.log(req.params)
    const db = req.app.get('db')
    const { dreamer_id } = req.session.dreamer
    const { id } = req.params
    const { cat } = req.body
    db.add_post([cat, +dreamer_id, +id])
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => console.log(err))
  }
}
