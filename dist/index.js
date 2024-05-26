"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PlayerController_1 = require("./infraestructure/controller/PlayerController");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
var playerController = new PlayerController_1.default();
/*app.get('/player', (req: Request, res: Response) => {
    playerController.createPlayer(req, res);
});
*/
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
