import fp from 'fastify-plugin'
import { UserService, User } from '@hospitalrun-org/core'

export default fp((fastify, opts, next) => {
    const userService = new UserService(opts)
    /**
     * @param {Object} options
     * @throws {Error}
     * @return {Promise}
     */
    fastify.decorate('findUser', (user: User) => {
        return userService.findUser(user)
    })
    /**
     * @param {Object} options
     * @param {String} options.id ID of an Document to Get
     * @throws {Error}
     * @return {Promise}
     */
    fastify.decorate('findUserById', (user: User) => {
        return userService.findUserById(user)
    })
    next()
})

declare module 'fastify' {
    interface FastifyInstance {
        findUser(): User
        findUserById(): User
    }
}
