'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('./App.css');
require('bootstrap/dist/css/bootstrap.min.css');
const Flexbox_1 = __importDefault(require('./conponents/Flexbox'));
function App() {
  return (
    <div className="App">
      <Flexbox_1.default />
    </div>
  );
}
exports.default = App;
