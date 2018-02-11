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
 * @param      {nubmer}   EOL       The Number of Electrons on each Electron
 *                                  Level
 * @param      {<type>}   desc      The description
 */
function Element(n, f, p, g, sg, aN, isMetall, NOL, EOL, type) {
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
}

/**
 * Class for periodic table.
 *
 * @class      PeriodicTable (name)
 */
class PeriodicTable {
  /**
   * Creation of elements array
   */
  constructor() {
    this.elements = [
      new Element('Водород', 'H', 1, 'I', 'A', 1, false, '1', [1], 's'),
      new Element('Гелий', 'He', 1, 'VIII', 'A', 2, false, '1', [2], 's'),
      new Element('Литий', 'Li', 2, 'I', 'A', 3, true, '2', [2, 1], 's'),
      new Element('Бериллий', 'Be', 2, 'II', 'A', 4, true, '2', [2, 2], 's'),
      new Element('Бор', 'B', 2, 'III', 'A', 5, false, '2', [2, 3], 'p'),
      new Element('Углерод', 'C', 2, 'IV', 'A', 6, false, '2', [2, 4], 'p'),
      new Element('Азот', 'N', 2, 'V', 'A', 7, false, '2', [2, 5], 'p'),
      new Element('Кислород', 'O', 2, 'VI', 'A', 8, false, '2', [2, 6], 'p'),
      new Element('Фтор', 'F', 2, 'VII', 'A', 9, false, '2', [2, 7], 'p'),
      new Element('Неон', 'Ne', 2, 'VIII', 'A', 10, false, '2', [2, 8], 'p'),
      new Element('Натрий', 'Na', 3, 'I', 'A', 11, true, '3', [2, 8, 1], 's'),
      new Element('Магний', 'Mg', 3, 'II', 'A', 12, true, '3', [2, 8, 2], 's'),
      new Element('Аллюминий', 'Al', 3, 'III', 'A', 13, true, '3', [2, 8, 3], 'p'),
      new Element('Кремний', 'Si', 3, 'IV', 'A', 14, false, '3', [2, 8, 4], 'p'),
      new Element('Фосфор', 'P', 3, 'V', 'A', 15, false, '3', [2, 8, 5], 'p'),
      new Element('Сера', 'S', 3, 'VI', 'A', 16, false, '3', [2, 8, 6], 'p'),
      new Element('Хлор', 'Cl', 3, 'VII', 'A', 17, false, '3', [2, 8, 7], 'p'),
      new Element('Аргон', 'Ar', 3, 'VIII', 'A', 18, false, '3', [2, 8, 8], 'p'),
      new Element('Калий', 'K', 3, 'I', 'A', 19, true, '4', [2, 8, 8, 1], 's'),
      new Element('Кальций', 'Ca', 4, 'II', 'A', 20, true, '4', [2, 8, 8, 2], 's'),
      new Element('Скандий', 'Sc', 4, 'III', 'B', 21, true, '4', [2, 8, 9, 2], 'd'),
      new Element('Титан', 'Ti', 4, 'IV', 'B', 22, true, '4', [2, 8, 10, 2], 'd'),
      new Element('Ванадий', 'V', 4, 'V', 'B', 23, true, '4', [2, 8, 11, 2], 'd'),
      new Element('Хром', 'Cr', 4, 'VI', 'B', 24, true, '4', [2, 8, 13, 1], 'd'),
      new Element('Марганец', 'Mn', 4, 'VII', 'B', 25, true, '4', [2, 8, 13, 2], 'd'),
      new Element('Железо', 'Fe', 4, 'VIII', 'B', 26, true, '4', [2, 8, 14, 2], 'd'), 
      new Element('Кобаль', 'Co', 4, 'VIII', 'B', 27, true, '4', [2, 8, 15, 2], 'd'),
      new Element('Никель', 'Ni', 4, 'VIII', 'B', 28, true, '4', [2, 8, 16, 2], 'd'),
      new Element('Медь', 'Cu', 4, 'I', 'B', 29, true, '4', [2, 8, 18, 1], 'd'),
      new Element('Цинк', 'Zn', 4, 'II', 'B', 30, true, '4', [2, 8, 18, 2], 'd'),
      new Element('Галий', 'Ga', 4, 'III', 'A', 31, true, '4', [2, 8, 18, 3], 'p'),
      new Element('Германий', 'Ge', 4, 'IV', 'A', 32, true, '4', [2, 8, 18, 4], 'p'),
      new Element('Мышьяк', 'As', 4, 'V', 'A', 33, false, '4', [2, 8, 18, 5], 'p'),
      new Element('Селен', 'Se', 4, 'VI', 'A', 34, false, '4', [2, 8, 18, 6], 'p'),
      new Element('Бром', 'Br', 4, 'VII', 'A', 35, false, '4', [2, 8, 18, 7], 'p'),
      new Element('Криптон', 'Kr', 4, 'VIII', 'A', 36, false, '4', [2, 8, 18, 8], 'p'),
      new Element('Рубидий', 'Rb', 5, 'I', 'A', 37, true, '5', [2, 8, 18, 8, 1], 's'),
      new Element('Стронций', 'Sr', 5, 'II', 'A', 38, true, '5', [2, 8, 18, 8, 2], 's'),
      new Element('Иттрий', 'Y', 5, 'III', 'B', 39, true, '5', [2, 8, 18, 9, 2], 'd'),
      new Element('Цирконий', 'Zr', 5, 'IV', 'B', 40, true, '5', [2, 8, 18, 10, 2], 'd'),
      new Element('Ннобий', 'Nb', 5, 'V', 'B', 41, true, '5', [2, 8, 18, 12, 1], 'd'),
      new Element('Молибден', 'Mo', 5, 'VI', 'B', 42, true, '5', [2, 8, 18, 13, 1], 'd'),
      new Element('Технеций', 'Tc', 5, 'VII', 'B', 43, true, '5', [2, 8, 18, 13, 2], 'd'),
      new Element('Рутений', 'Ru', 5, 'VIII', 'B', 44, true, '5', [2, 8, 18, 15, 1], 'd'),
      new Element('Родий', 'Rh', 5, 'VIII', 'B', 45, true, '5', [2, 8, 16, 18, 0], 'd'),
      new Element('Палладий', 'Pd', 5, 'VIII', 'B', 46, true, '5', [2, 8, 18, 8, 10], 'd'),
      new Element('Серебро', 'Ag', 5, 'I', 'B', 47, true, '5', [2, 8, 18, 18, 1], 'd'),
      new Element('Кадмий', 'Cd', 5, 'II', 'B', 48, true, '5', [2, 8, 18, 18, 2], 'd'),
      new Element('Индий', 'In', 5, 'III', 'A', 49, true, '5', [2, 8, 18, 18, 3], 'p'),
      new Element('Олово', 'Sn', 5, 'IV', 'A', 50, true, '5', [2, 8, 18, 18, 4], 'p'),
      new Element('Сурьма', 'Sb', 5, 'V', 'A', 51, true, '5', [2, 8, 18, 18, 5], 'p'),
      new Element('Теллур', 'Te', 5, 'VI', 'A', 52, false, '5', [2, 8, 18, 18, 6], 'p'),
      new Element('Иод', 'I', 5, 'VII', 'A', 53, false, '5', [2, 8, 18, 18, 7], 'p'),
      new Element('Ксенон', 'Xe', 5, 'VIII', 'A', 54, false, '5', [2, 8, 18, 18, 8], 'p'),
      new Element('Цезий', 'Cs', 6, 'I', 'A', 55, true, '6', [2, 8, 18, 18, 8, 1], 's'),
      new Element('Барий', 'Ba', 6, 'II', 'A', 56, true, '6', [2, 8, 18, 18, 8, 2], 's'),
      new Element('Гафний', 'Hf', 6, 'IV', 'B', 72, true, '6', [2, 8, 18, 32, 10, 2], 'd'),
      new Element('Тантал', 'Ta', 6, 'V', 'B', 73, true, '6', [2, 8, 18, 3, 2, 11, 2], 'd'),
      new Element('Вольфрам', 'W', 6, 'VI', 'B', 74, true, '6', [2, 8, 18, 32, 12, 2], 'd'),
      new Element('Рений', 'Re', 6, 'VII', 'B', 75, true, '6', [2, 8, 18, 32, 13, 2], 'd'),
      new Element('Осмий', 'Os', 6, 'VIII', 'B', 76, true, '6', [2, 8, 18, 32, 14, 2], 'd'),
      new Element('Иридий', 'Ir', 6, 'VIII', 'B', 77, true, '6', [2, 8, 18, 32, 15, 2], 'd'),
      new Element('Платина', 'Pt', 6, 'VIII', 'B', 78, true, '6', [2, 8, 18, 32, 17, 1], 'd'),
      new Element('Золото', 'Au', 6, 'I', 'B', 79, true, '6', [2, 8, 18, 32, 18, 1], 'd'),
      new Element('Ртуть', 'Hg', 6, 'II', 'B', 80, true, '6', [2, 8, 18, 32, 18, 2], 'd'),
      new Element('Таллий', 'Tl', 6, 'III', 'A', 81, true, '6', [2, 8, 18, 32, 18, 3], 'p'),
      new Element('Свинец', 'Pb', 6, 'IV', 'A', 82, true, '6', [2, 8, 18, 32, 18, 4], 'p'),
      new Element('Висмут', 'Bi', 6, 'V', 'A', 83, true, '6', [2, 8, 18, 32, 18, 5], 'p'),
      new Element('Полоний', 'Po', 6, 'VI', 'A', 84, true, '6', [2, 8, 18, 32, 18, 6], 'p'),
      new Element('Астат', 'At', 6, 'VII', 'A', 85, false, '6', [2, 8, 18, 32, 18, 7], 'p'),
      new Element('Радон', 'Rn', 6, 'VIII', 'A', 86, false, '6', [2, 8, 18, 32, 18, 8], 'p'),
      new Element('Франций', 'Fr', 7, 'I', 'A', 87, true, '7', [2, 8, 18, 32, 32, 8, 1], 's'),
      new Element('Радий', 'Ra', 7, 'II', 'A', 88, true, '7', [2, 8, 18, 32, 32, 8, 2], 's'),
      new Element('Резерфордий', 'Rf', 7, 'IV', 'B', 104, true, '7', [2, 8, 18, 32, 32, 10, 2], 'd'),
      new Element('Дубний', 'Db', 7, 'V', 'B', 105, true, '7', [2, 8, 18, 32, 32, 11, 2], 'd'),
      new Element('Сиборгий', 'Sg', 7, 'VI', 'B', 106, true, '7', [2, 8, 18, 32, 32, 12, 2], 'd'),
      new Element('Борий', 'Bh', 7, 'VII', 'B', 107, true, '7', [2, 8, 18, 32, 32, 13, 2], 'd'),
      new Element('Ханий', 'Hn', 7, 'VIII', 'B', 108, true, '7', [2, 8, 18, 32, 32, 14, 2], 'd'),
      new Element('Мейтнерий', 'Mt', 7, 'VIII', 'B', 109, true, '7', [2, 8, 18, 32, 32, 15, 2], 'd'),
      new Element('Дармштадтий', 'Ds', 7, 'VIII', 'B', 110, true, '7', [2, 8, 18, 32, 32, 16, 2], 'd'),
    ];
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
                            <div class="element__atomic-mass">TBD</div>`;
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
