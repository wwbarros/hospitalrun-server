import { Server, IncomingMessage, ServerResponse } from 'http'
import { FastifyInstance } from 'fastify'
import { nextCallback } from 'fastify-plugin'

export default(
    fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
    opts: {},
    next: nextCallback,
) => {

    /**
     * Search for a User in the Database
     */
    fastify.get('/', async (request, reply) => {
      const options = {
      };
      console.log(options)
      try {
        const result = await fastify.findUser();
        reply.code(200).send(result);
      } catch (err) {
        reply.code(500).send({
          status: 500,
          error: 'Server Error'
        });
      }
    });
    /**
     * Search for a User in the Database
     */
    fastify.get('/:id', async (request, reply) => {
      const options = {
        id: request.params['id']
      };
      console.log(options)
      try {
        const result = await fastify.findUserById();
        reply.code(200).send(result);
      } catch (err) {
        reply.code(500).send({
          status: 500,
          error: 'Server Error'
        });
      }
    });
    next()
}
export const autoPrefix = '/user'