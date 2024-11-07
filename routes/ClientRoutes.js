import { Router } from "express";
import ClientController from "../controllers/ClientController.js";

const router = Router();

/**
 * @swagger
 * /client:
 *   get:
 *    summary: Retorna todos os clientes
 *    tags: [Clients]
 *    description: Retorna uma lista com todos os clientes
 *    parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Termo para buscar clientes por nome ou email
 *       - in: query
 *         name: sortKey
 *         schema:
 *           type: string
 *           enum: [name, email, created_at]
 *         description: Chave para ordenar os resultados
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Ordem de ordenação (ascendente ou descendente)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número da página para paginação
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Número de resultados por página
 *    responses:
 *       200:
 *         description: Lista de clientes recuperada com sucesso
 *       401:
 *         description: Token não informado ou inválido
 *       500:
 *         description: Erro no servidor 
*/
router.get('/', ClientController.getClients); // read all

router.get('/:id', ClientController.getClient); // read 
router.post('/', ClientController.addClient); // create
router.put('/', ClientController.updateClient); // update

/**
 * @swagger
 * /client/{id}:
 *   delete:
 *     summary: Remove um cliente pelo ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente a ser deletado
 *     responses:
 *       200:
 *         description: Cliente removido com sucesso
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/:id', ClientController.deleteClient); // delete

export default router;