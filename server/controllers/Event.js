const { Event, Author } = require("../models");
//const Author = require("../models/Author");

module.exports = {
  async addEvent(req, res) {
    try {
        const event = await Event.create(req.body);
        res
          .json({event,
            msg: "successfully sent data to the database"
          })
         console.log(event)
      
    } catch (err) {
      res.send({
        error: err + "an error has occured while trying to post to database",
      });
    }
  },
  // )
  //},

  // Get all posts
  async getEvents(req, res) {
    try {
     
      const events = await Event.findAll({
        include: [{
          model: Author,
          attributes: ['userName', 'profileImg', 'bio']  
        }],
      })
      res.json(events).send({
          msg: "successfully get data to the database",
        });
    } catch (err) {
      res.status(500).send({
        error: err + "an error has occured while trying to fetch  posts",
      });
    }
  },

  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const event = await Event.findByPk(id);

      if (event === null || event === undefined) {
        return res.status(404).send({
          message: "post Does Not Exist",
        });
      }
      await event.destroy();
      res.status(201).send({
        msg: " message deleted succesfully",
      });
    } catch (e) {
      console.log(e.message);
      res.status(500).send({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  },

  async getEvent(req, res) {
    try {
      const id = req.params.id;
      const event = await Event.findAll({
        
        where: {
          id: id,
        },
        include: [Author]
      });
      if (event === null || event === undefined) {
        return res.status(404).send({
          message: "Resource Not Found, Item Does Not Exist",
        });
      }
       console.log(event)
      res.send(event);
    } catch (err) {
      res.status(500).json({
        message: "Error Processing Function",
        error: err.message,
      });
    }
  },

  async updateEvent(req, res) {
    try {
      const eventId = req.params.id;
      const event = await Event.update(req.body, {
        where: {
          id: eventId,
        },
      });
      res.status(201).send(event);
      console.log(event);
    } catch (e) {
      res.status(500).send({
        message: "Error Creating Edit Request",
        error: e.message,
      });
      console.log(e.message);
    }
  },
};