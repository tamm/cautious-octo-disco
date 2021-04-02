import { base } from "../services/databaseService";
import * as express from "express";
import { DataSource } from "../models/DataSource";

export const register = (app: express.Application) => {
  /**
   * @openapi
   * /datasources:
   *   get:
   *     description: List DataSources.
   *     tags: [DataSource]
   *     operationId: getDataSources
   *     responses:
   *       200:
   *         description: List DataSources.
   */
  app.get("/datasources", (req, res) => {
    const results: Record<keyof DataSource, DataSource>[] = [];
    const databaseTable = base("Data Sources")
      .select({})
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            results.push({
              ID: record.get("ID"),
              Name: record.get("Name"),
              URL: record.get("URL"),
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            res.status(err.statusCode);
            res.send(err.message);
            return;
          }

          res.send(JSON.stringify(results));
        }
      );
  });

  /**
   * @openapi
   * /datasources:
   *   post:
   *     description: Add a DataSource.
   *     tags: [DataSource]
   *     operationId: addDataSource
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/DataSource'
   *       description: DataSource to add.
   *     responses:
   *       201:
   *         description: DataSource was added to the list.
   *       400:
   *         description: Bad input data.
   */
  app.post("/datasources", (req, res) => {
    const databaseTable = base("Data Sources");
    const { body }: { body: DataSource } = req;
    let data;

    if (!body || !body.Name) {
      console.log(`${req.path}: Bad input data.`);
      res.status(400);
      res.send();
      return;
    }

    base("Data Sources").create(
      [{ fields: body }],
      function (err: any, records: Record<keyof DataSource, DataSource>[]) {
        if (err) {
          console.error(err);
          res.status(err.statusCode);
          res.send(err.message);
          return;
        }

        records.forEach(function (
          record: Record<keyof DataSource, DataSource>
        ) {
          console.log(record);
        });
        res.send(JSON.stringify(records));
      }
    );
  });
};
