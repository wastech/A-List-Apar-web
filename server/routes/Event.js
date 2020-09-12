const express = require("express");
const router = express.Router();

const Event = require("../controllers/Event");

router.post("/addevent", Event.addEvent);
router.get("/getevents", Event.getEvents);
router.delete("/deleteevent/:id", Event.deleteEvent);
router.get("/getevent/:id", Event.getEvent);
router.post("/updateevent/:id", Event.updateEvent);




module.exports = router;