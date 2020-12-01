const Resources = require("../models/Resources");
const Yup = require("yup");

module.exports = {
  async index(req, res) {
    const resource = await Resources.findAll();

    return res.status(200).send(resource);
  },

  async store(req, res) {
    try {
      const { name, type } = req.body;

      const data = { name, type };

      const schema = Yup.object().shape({
        name: Yup.string().required().trim(),
        type: Yup.string().required().trim(),
      });

      await schema.validate(data, {
        abortEarly: true,
      });

      const [resources, created] = await Resources.findOrCreate({
        where: {
          name,
          type,
        },
        defaults: {
          name,
          type,
        },
      });

      if (created) {
        return res.status(201).send(resources);
      }

      return res.status(200).send({
        error: true,
        message: "Already registered in the system!",
      });
    } catch (err) {
      return res.send({
        error: err.name,
        message: err.errors,
      });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    const resource = await Resources.findByPk(id);

    if (!resource) {
      return res.status(400).json({
        error: true,
        message: "Resource not found!",
      });
    }

    await Resources.destroy({
      where: {
        id,
      },
    });

    return res.status(204).send();
  },

  async update(req, res) {

    try {
    const { id } = req.params;
    const { name, type } = req.body;

    const data = { name, type }

    const resource = await Resources.findByPk(id);

    const schema = Yup.object().shape({
      name: Yup.string().required().trim(),
      type: Yup.string().required().trim(),
    });

    await schema.validate(data, {
      abortEarly: true,
    });

    if (!resource) {
      return res.status(400).json({
        error: true,
        message: "Resource not found!",
      });
    }

    await Resources.update(
      {
        name,
        type,
      },
      {
        where: {
          id,
        },
      }
    );


    return res.status(204).send();
    } catch(err){
      return res.send({
        error: err.name,
        message: err.errors,
      });
    }
  },
};
