const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMessage)
.get("/send", whatsAppController.SendMessage)
.get("/firstSend", whatsAppController.firstSendMessage)

module.exports = router;