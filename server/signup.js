var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require('express');
var bodyParser = require('body-parser');
var Pool = require('pg').Pool;
var cors = require('cors');
var app = express();
var port = 3000;
// Enable CORS for all routes
app.use(cors());
// Parse JSON requests
app.use(bodyParser.json());
// Initialize PostgreSQL pool
var pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'Fifer8263',
    port: 5432,
});
// Route for handling signup POST request
app.post('/signup', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, fullName, email, phoneNumber, password, insertQuery, values, client, result, clientId, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 8, 9]);
                _a = req.body, fullName = _a.fullName, email = _a.email, phoneNumber = _a.phoneNumber, password = _a.password;
                insertQuery = "\n      INSERT INTO client (full_name, email, phone_number, password)\n      VALUES ($1, $2, $3, $4)\n      RETURNING id;\n    ";
                values = [fullName, email, phoneNumber, password];
                return [4 /*yield*/, pool.connect()];
            case 1:
                client = _b.sent();
                return [4 /*yield*/, client.query('BEGIN')];
            case 2:
                _b.sent(); // Start a transaction
                return [4 /*yield*/, client.query(insertQuery, values)];
            case 3:
                result = _b.sent();
                clientId = result.rows[0].id;
                return [4 /*yield*/, client.query('COMMIT')];
            case 4:
                _b.sent(); // Commit the transaction
                res.status(201).json({ message: 'Signup successful', clientId: clientId });
                return [3 /*break*/, 9];
            case 5:
                error_1 = _b.sent();
                console.error(error_1);
                if (!this.client) return [3 /*break*/, 7];
                return [4 /*yield*/, this.client.query('ROLLBACK')];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7:
                res.status(500).json({ error: 'Internal server error' });
                return [3 /*break*/, 9];
            case 8:
                if (this.client) {
                    this.client.release(); // Release the client back to the pool
                }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}); });
// Route for handling login POST request
app.post('/login', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, email, password, selectQuery, values, client, result, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, 5, 6]);
                _a = req.body, email = _a.email, password = _a.password;
                selectQuery = 'SELECT email FROM client WHERE email = $1 AND password = $2';
                values = [email, password];
                return [4 /*yield*/, pool.connect()];
            case 1:
                client = _b.sent();
                return [4 /*yield*/, client.query('BEGIN')];
            case 2:
                _b.sent();
                return [4 /*yield*/, client.query(selectQuery, values)];
            case 3:
                result = _b.sent();
                if (result.rows.length > 0) {
                    res.send(true); // User with matching email and password found
                }
                else {
                    res.send(false); // No matching user found
                }
                return [3 /*break*/, 6];
            case 4:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).json({ error: 'Internal server error' });
                return [3 /*break*/, 6];
            case 5:
                if (this.client) {
                    this.client.release(); // Release the client back to the pool
                }
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.listen(port, '127.0.0.1', function () {
    console.log("Server is running on port ".concat(port));
});
