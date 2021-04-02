/**
 * @swagger
 * components:
 *   schemas:
 *     DataSource:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - url
 *       properties:
 *         ID:
 *           type: string
 *           format: uuid
 *           example: d290f1ee-6c54-4b01-90e6-d701748f0851
 *         Name:
 *           type: string
 *           example: First place to go for data
 *         URL:
 *           type: string
 *           format: URL
 *           example: http://google.com
 */

export interface DataSource {
  ID: string;
  Name: string;
  URL: URL;
}
