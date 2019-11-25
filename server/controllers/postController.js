const bcrypt = require('bcryptjs')

module.exports = {
  getPosts(req, res) {
    const db = req.app.get('db')
    db.get_posts()
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
    const { list_content } = req.body
    db.edit_post(list_content)
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => console.log(err))
  },

  addPost(req, res) {
    const db = req.app.get('db')
    const { list_content } = req.body
    db.add_post(list_content)
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => console.log(err))
  }
}
