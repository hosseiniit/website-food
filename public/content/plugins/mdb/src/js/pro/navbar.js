import Data from '../mdb/dom/data.js';
import EventHandler from '../bootstrap/src/dom/event-handler.js';
import Manipulator from '../mdb/dom/manipulator.js';
import SelectorEngine from '../mdb/dom/selector-engine.js';

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'navbar';
const DATA_KEY = 'mdb.navbar';
const CLASSNAME_WRAPPER = 'navbar-scroll';

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Navbar {
  constructor(element) {
    this._element = element;

    if (this._element) {
      Data.setData(element, DATA_KEY, this);
    }
  }

  // Getters
  static get NAME() {
    return NAME;
  }

  // Public
  init() {
    this._onScroll();
    this._addEvent();
  }

  dispose() {
    this._removeEvent();

    Data.removeData(this._element, DATA_KEY);
    this._element = null;
  }

  // Private
  _addEvent() {
    EventHandler.on(window, 'scroll', () => this._onScroll());
  }

  _removeEvent() {
    EventHandler.off(window, 'scroll', this._onScroll);
  }

  _onScroll() {
    if (window.scrollY > 0) {
      Manipulator.addClass(this._element, 'navbar-scrolled');
    } else {
      Manipulator.removeClass(this._element, 'navbar-scrolled');
    }
  }

  static getInstance(element) {
    return Data.getData(element, DATA_KEY);
  }
}
// auto-init
SelectorEngine.find(`.${CLASSNAME_WRAPPER}`).forEach((element) => {
  new Navbar(element).init();
});

export default Navbar;
