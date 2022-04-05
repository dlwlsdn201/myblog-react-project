'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const react_bootstrap_1 = require('react-bootstrap');
const react_bootstrap_icons_1 = require('react-bootstrap-icons');
require('../styles/Flexbox/index.css');
const Flexbox = () => {
  const setButtons = () => {
    const array = [{ title: 'one' }, { title: 'two' }, { title: 'three' }];
    let result;
    result = array.map((obj, index) => (
      <react_bootstrap_1.Button variant="outline-warning">{`${obj.title}-${index}`}</react_bootstrap_1.Button>
    ));
    return result;
  };
  return (
    <div className="container">
      <section className="section section-1">
        <div>
          <span>
            <react_bootstrap_icons_1.BootstrapFill size={80} />
          </span>
        </div>
      </section>
      <section>
        <p className="display-3">Centered hero</p>
        <p className="desc">
          {' '}
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </section>
      <section className="section section-2">
        <div className="buttons-group" aria-label="Basic Example">
          <button type="button" className="btn btn-primary">
            Primary button
          </button>
          <button type="button" className="btn btn-outline-secondary">
            {' '}
            Secondary
          </button>
        </div>
      </section>
    </div>
  );
};
exports.default = Flexbox;
