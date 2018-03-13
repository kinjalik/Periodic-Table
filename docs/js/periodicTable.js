'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for periodic table.
 */
var PeriodicTable = function () {
  function PeriodicTable() {
    _classCallCheck(this, PeriodicTable);

    /* [START] XHR REQUEST OF elements.json */
    var request = new XMLHttpRequest();
    request.open('GET', 'elements.json', false);
    request.send();
    if (request.status !== 200) {
      console.error(request.status + ': ' + request.statusText);
    } else {
      this.elements = JSON.parse(request.response);
    }
    /* [END] XHR REQUEST OF elements.json */
  }

  _createClass(PeriodicTable, [{
    key: 'getChemElemByFormula',
    value: function getChemElemByFormula(formula) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var elem = _step.value;

          if (elem.formula === formula) {
            return elem;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }, {
    key: 'getChemElemByName',
    value: function getChemElemByName(name) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var elem = _step2.value;

          if (elem.name === name) {
            return elem;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return true;
    }
  }, {
    key: 'getChemElemByGroupAndPeriod',
    value: function getChemElemByGroupAndPeriod(group, period) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var elem = _step3.value;

          if (elem.group === group && elem.period === period) {
            return elem;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return true;
    }

    /**
     * Constructor of object with element of periodic tabl
     *
     * @class      Element
     * @param      {string}   n         The Name
     * @param      {string}   f         The Formula
     * @param      {number}   p         The Period
     * @param      {number}   g         The Group
     * @param      {string}   sg        The Subgroup
     * @param      {number}   aN        The Atomic Number
     * @param      {boolean}  isMetall  Indicates if metall
     * @param      {number}   NOL       The Number of Electron Levels
     * @param      {array}    EOL       The Number of Electrons on each Electron
     *                                  Level
     * @param      {string}   type      Electron Level Type of Element
     * @param      {number}   aM        The Atmoic Mass of Element (float value)
    */

  }, {
    key: 'newElement',
    value: function newElement(n, f, p, g, sg, aN, isMetall, NOL, EOL, type, aM) {
      return {
        name: n,
        formula: f,
        period: p,
        group: g,
        subgroup: sg,
        atomicNumber: aN,
        isMetall: isMetall,
        numberOfLevels: NOL,
        electronsOnLevels: EOL,
        type: type,
        atomicMass: aM
      };
    }
  }]);

  return PeriodicTable;
}();

/**
 * Class for periodic table UI.
 */


var PeriodicTableUI = function (_PeriodicTable) {
  _inherits(PeriodicTableUI, _PeriodicTable);

  function PeriodicTableUI() {
    _classCallCheck(this, PeriodicTableUI);

    return _possibleConstructorReturn(this, (PeriodicTableUI.__proto__ || Object.getPrototypeOf(PeriodicTableUI)).apply(this, arguments));
  }

  _createClass(PeriodicTableUI, [{
    key: 'buildTable',

    // Filling element's info into cells
    value: function buildTable() {
      var elementCells = document.querySelectorAll('[data-periodic-element]'); // Array of all cell for elements
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = elementCells[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var cell = _step4.value;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var element = _step5.value;

              if (cell.dataset.periodicElement === element.formula) {
                var subgroup = '';
                if (element.subgroup === 'A') {
                  subgroup = 'element__main-group';
                } else {
                  subgroup = 'element__secondary-group';
                }
                var type = '';
                switch (element.type) {
                  case 's':
                    type = 'element_s-type';
                    break;
                  case 'p':
                    type = 'element_p-type';
                    break;
                  case 'd':
                    type = 'element_d-type';
                    break;
                  default:
                    type = 'element_f-type';
                    break;
                }
                cell.classList.add(type);
                cell.innerHTML = '<div class="element__specifications ' + subgroup + '">\n                              <span class=\'element__title\'>' + element.formula + '</span>\n                              <span class="element__atomic-number">' + element.atomicNumber + '</span>\n                            </div>\n                            <div class="element__full-name">' + element.name + '</div>\n                            <div class="element__atomic-mass">' + element.atomicMass + '</div>';
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }

    // Opening window with element data

  }, {
    key: 'openElementWindow',
    value: function openElementWindow(element) {
      var openedElement = {};
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.elements[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var el = _step6.value;

          if (el.formula === element) {
            openedElement = el;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      var body = document.querySelector('body');
      body.style.overflow = 'hidden';
      var elementPopup = document.querySelector('#elementPopup');
      document.querySelector('[data-popup-element="name"]').innerHTML = openedElement.name;
      document.querySelector('[data-popup-element="formula"]').innerHTML = openedElement.formula;
      document.querySelector('[data-popup-element="atomicNumber"]').innerHTML = openedElement.atomicNumber;
      document.querySelector('[data-popup-element="period"]').innerHTML = openedElement.period;
      document.querySelector('[data-popup-element="atomicMass"]').innerHTML = openedElement.atomicMass;

      if (openedElement.subgroup === 'A') {
        document.querySelector('[data-popup-element="group"]').innerHTML = openedElement.group + ' \u0433\u0440\u0443\u043F\u043F\u0430, \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0433\u0440\u0443\u043F\u043F\u0430';
      } else {
        document.querySelector('[data-popup-element="group"]').innerHTML = openedElement.group + ' \u0433\u0440\u0443\u043F\u043F\u0430, \u043F\u043E\u0431\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0434\u0433\u0440\u0443\u043F\u043F\u0430';
      }
      document.querySelector('[data-popup-element="numberOfLevels"]').innerHTML = openedElement.numberOfLevels;

      for (var i = 0; i < 7; i += 1) {
        document.querySelector('[data-popup-element="level-' + (i + 1) + '"]').style.display = 'block';
      }

      for (var _i = parseInt(openedElement.numberOfLevels, 10); _i < 7; _i += 1) {
        document.querySelector('[data-popup-element="level-' + (_i + 1) + '"]').style.display = 'none';
      }

      for (var _i2 = 0; _i2 < parseInt(openedElement.numberOfLevels, 10); _i2 += 1) {
        document.querySelector('[data-popup-element="level-' + (_i2 + 1) + '"]').innerHTML = openedElement.electronsOnLevels[_i2];
      }
      var closeButton = document.querySelector('#elementPopup .popup__close-button');
      elementPopup.style.display = 'block';
    }

    // Closing window with element

  }, {
    key: 'closeElementWindow',
    value: function closeElementWindow() {
      var body = document.querySelector('body');
      body.style.overflow = 'auto';
      var elementPopup = document.querySelector('#elementPopup');
      elementPopup.style.display = 'none';
    }

    // Setting listeners to element's cells

  }, {
    key: 'addListenersToCells',
    value: function addListenersToCells() {
      var _this2 = this;

      var elementCells = document.querySelectorAll('[data-periodic-element]');
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        var _loop = function _loop() {
          var cell = _step7.value;

          cell.addEventListener('click', function () {
            _this2.openElementWindow(cell.dataset.periodicElement);
          });
        };

        for (var _iterator7 = elementCells[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  }]);

  return PeriodicTableUI;
}(PeriodicTable);

/* eslint-disable */ // Потому что на создание экземпляра класса линтер ругаица


var periodicTable = new PeriodicTable();
var periodicTableUI = new PeriodicTableUI(periodicTable);
/* eslint-enable */