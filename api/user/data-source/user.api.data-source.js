const { RESTDataSource } = require('apollo-datasource-rest')

class UserApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async _getRoleById (id) {
    return this.get(`/roles/${id}`)
  }

  async _getRoleByType (roleType) {
    return (await this.get(`/roles?type=${roleType}`))[0]
  }

  async _toUser (user, role = null) {
    return {
      ...user,
      role: role || await this._getRoleById(user.role)
    }
  }

  async list () {
    const userList = await this.get('/users')

    return userList.map(async user => this._toUser(user))
  }

  async getById (id) {
    const foundUser = await this.get(`/users/${id}`,)
    return this._toUser(foundUser)
  }

  async add (userFields) {
    const foundRole = await this._getRoleByType(userFields.role)
    const totalUsers = (await this.list()).length
    const addedUser = await this.post('/users', {
      ...userFields,
      id: totalUsers + 1,
      role: foundRole.id
    })

    return this._toUser(addedUser, foundRole)
  }

  async change (id, newUserFields) {
    const foundRole = await this._getRoleByType(newUserFields.role)
    const changedUser = await this.put(`/users/${id}`, { ...newUserFields, role: foundRole.id })

    return {
      code: 200,
      message: 'user changed successfuly',
      user: this._toUser(changedUser, foundRole)
    }
  }

  async remove (id) {
    await this.delete(`/users/${id}`)
    return {
      code: 204,
      message: 'user removed successfuly',
    }
  }
}

module.exports = UserApi
