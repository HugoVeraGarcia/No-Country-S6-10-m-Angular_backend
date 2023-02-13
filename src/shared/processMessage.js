const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    let model = whatsappModel.MessageText(textUser, number);
    whatsappService.SendMessageWhatsApp(model);
}

function firstProcess(number){
    let model = whatsappModel.firstMessageText(number);
    whatsappService.SendMessageWhatsApp(model);
}
module.exports = {
    Process,
    firstProcess
};