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
function Element(n, f, p, g, sg, aN, isMetall, NOL, EOL, type, aM) {
  this.name = n;
  this.formula = f;
  this.period = p;
  this.group = g;
  this.subgroup = sg;
  this.atomicNumber = aN;
  this.isMetall = isMetall;
  this.numberOfLevels = NOL;
  this.electronsOnLevels = EOL;
  this.type = type;
  this.atomicMass = aM;
}

/**
 * Class for periodic table.
 *
 * @class      PeriodicTable (name)
 */
class PeriodicTable {
  constructor() {
    /* [START] XHR REQUEST OF elements.json */
    let request = new XMLHttpRequest();
    request.open('GET', 'elements.json', false);
    request.send();
    if (request.status != 200) {
      console.log(request.status + ': ' + request.statusText);
      return false;
    }
    /* [END] XHR REQUEST OF elements.json */

    this.elements = JSON.parse(request.responseText)
  }
  // Методы таблицы...
  buildTable() {
    const elementCells = document.querySelectorAll('[data-periodic-element]');
    for (const cell of elementCells) {
      for (const element of this.elements) {
        if (cell.dataset.periodicElement === element.formula) {
          let subgroup = '';
          element.subgroup === 'A' ? subgroup = 'element__main-group' : subgroup = 'element__secondary-group';
          let type = '';
          switch(element.type) {
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
          cell.innerHTML = `<div class="element__specifications ${subgroup}">
                              <span class='element__title'>${element.formula}</span>
                              <span class="element__atomic-number">${element.atomicNumber}</span>
                            </div>
                            <div class="element__full-name">${element.name}</div>
                            <div class="element__atomic-mass">${element.atomicMass}</div>`;
        }
      }
    }
  }

  addListenersToCells() {
    const elementCells = document.querySelectorAll('[data-periodic-element]');
    for (const cell of elementCells) {
      cell.addEventListener('click', () => {
        this.openElementWindow(cell.dataset.periodicElement);
      });
    }
  }

  openElementWindow(element) {
    let openedElement = {};
    for (const el of this.elements) {
      if (el.formula === element) {
        openedElement = el;
      };
    }
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    const elementPopup = document.querySelector('#elementPopup');
    elementPopup.style.display = 'block';
    document.querySelector('[data-popup-element="name"]').innerHTML = openedElement.name;
    document.querySelector('[data-popup-element="formula"]').innerHTML = openedElement.formula;
    document.querySelector('[data-popup-element="atomicNumber"]').innerHTML = openedElement.atomicNumber;
    document.querySelector('[data-popup-element="period"]').innerHTML = openedElement.period;
    document.querySelector('[data-popup-element="atomicMass"]').innerHTML = openedElement.atomicMass;

    if (openedElement.subgroup === 'A') {
      document.querySelector('[data-popup-element="group"]').innerHTML = `${openedElement.group} группа, главная подгруппа`;
    } else {
      document.querySelector('[data-popup-element="group"]').innerHTML = `${openedElement.group} группа, побочная подгруппа`;
    }
    document.querySelector('[data-popup-element="numberOfLevels"]').innerHTML = openedElement.numberOfLevels;

    for (let i = parseInt(openedElement.numberOfLevels); i < 7; i++) {
      document.querySelector(`[data-popup-element="level-${i+1}"]`).style.display = 'none';
    }

    for (let i = 0; i < parseInt(openedElement.numberOfLevels); i++) {
      document.querySelector(`[data-popup-element="level-${i+1}"]`).innerHTML = openedElement.electronsOnLevels[i];
    }
    const closeButton = document.querySelector('#elementPopup .popup__close-button');
    closeButton.addEventListener('click', () => {
      this.closeElementWindow();
    });
  }

  closeElementWindow() {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    const elementPopup = document.querySelector('#elementPopup');
    elementPopup.style.display = 'none';
  }
}

/* eslint-disable */ // Потому что на создание экземпляра класса линтер ругаица
const periodicTable = new PeriodicTable();
/* eslint-enable */
