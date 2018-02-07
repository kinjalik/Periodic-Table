let Element = function(name, formula, period, group, subgroup, atomicNumber, isMetall, numberOfLevels, electronsOnLevels) {
  this.name = name,
  this.formula = formula,
  this.period = period,
  this.group = group,
  this.subgroup = subgroup,
  this.atomicNumber = atomicNumber,
  this.isMetall = isMetall,
  this.numberOfLevels = numberOfLevels,
  this.electronsOnLevels = electronsOnLevels
}

let elements = [
	new Element('Водород', 'H', 1, 'I', 'A', 1, false, '1', [1]),
	new Element('Гелий', 'He', 1, 'VIII', 'A', 2, false, '1', [2]),
	new Element('Литий', 'Li', 2, 'I', 'A', 3, true, '2', [2, 1]),
	new Element('Бериллий', 'Be', 2, 'II', 'A', 4, true, '2', [2, 2]),
	new Element('Бор', 'B', 2, 'III', 'A', 5, false, '2', [2, 3]),
	new Element('Углерод', 'С', 2, 'IV', 'A', 6, false, '2', [2, 4]),
	new Element('Азот', 'N', 2, 'V', 'A', 7, false, '2', [2, 5]),
	new Element('Кислород', 'O', 2, 'VI', 'A', 8, false, '2', [2, 6]),
	new Element('Фтор', 'F', 2, 'VII', 'A', 9, false, '2', [2, 7]),
	new Element('Неон', 'Ne', 2, 'VIII', 'A', 10, false, '2', [2, 8]),
	new Element('Натрий', 'Na', 3, 'I', 'A', 11, true, '3', [2, 8, 1]),
	new Element('Магний', 'Mg', 3, 'II', 'A', 12, true, '3', [2, 8, 2]),
	new Element('Аллюминий', 'Al', 3, 'III', 'A', 13, true, '3', [2, 8, 3]),
	new Element('Кремний', 'Si', 3, 'IV', 'A', 14, false, '3', [2, 8, 4]),
	new Element('Фосфор', 'P', 3, 'V', 'A', 15, false, '3', [2, 8, 5]),
	new Element('Сера', 'S', 3, 'VI', 'A', 16, false, '3', [2, 8, 6]),
	new Element('Хлор', 'Cl', 3, 'VII', 'A', 17, false, '3', [2, 8, 7]),
	new Element('Аргон', 'Ar', 3, 'VIII', 'A', 18, false, '3', [2, 8, 8]),
	new Element('Калий', 'K', 3, 'I', 'A', 19, true, '4', [2, 8, 8, 1]),
	new Element('Кальций', 'Ca', 4, 'II', 'A', 20, true, '4', [2, 8, 8, 2]),
	new Element('Скандий', 'Sc', 4, 'III', 'B', 21, true, '4', [2, 8, 8, 3]),
	new Element('Титан', 'Ti', 4, 'IV', 'B', 22, true, '4', [2, 8, 8, 4]),
	new Element('Ванадий', 'V', 4, 'V', 'B', 23, true, '4', [2, 8, 8, 5]),
	new Element('Хром', 'Cr', 4, 'VI', 'B', 24, true, '4', [2, 8, 8, 6]),
	new Element('Марганец', 'Mn', 4, 'VII', 'B', 25, true, '4', [2, 8, 8, 7]),
	new Element('Железо', 'Fe', 4, 'VIII', 'B', 26, true, '4', [2, 8, 8, 8]),
	new Element('Кобаль', 'Co', 4, 'VIII', 'B', 27, true, '4', [2, 8, 8, 9]),
	new Element('Никель', 'Ni', 4, 'VIII', 'B', 28, true, '4', [2, 8, 8, 10]),
]

function drawList() {
	body = document.getElementsByTagName('body')[0];
	list = document.createElement('ul');
	body.appendChild(list);

	for (el of elements) {
	  let pos = document.createElement('a');
	  pos.setAttribute('href', '#')
	  pos.setAttribute('onclick', 'event.preventDefault(); alertInfo("' + el.formula +'");');
	  pos.innerHTML = el.name + ' ' + el.formula;
	  list.appendChild(pos);
	}
}

function alertInfo(formula) {
	let requestedElement;

	if (typeof formula == "number") {
		for (el of elements) {
			if (el.atomicNumber === formula) {
				requestedElement = el;
			}
		}
	} else {
		for (el of elements) {
			if (el.formula === formula) {
				requestedElement = el;
			}
		} 
	}
	
	alert(`Элемент: ${requestedElement.name}
Формула: ${requestedElement.formula}
Атомный номер: ${requestedElement.atomicNumber}
Период: ${requestedElement.period}
Группа: ${requestedElement.group}
Подгруппа: ${(requestedElement.subgroup == 'A') ? 'главная' : 'побочная'}
Количество электронных уровней: ${requestedElement.numberOfLevels}`);
}

function getElInfo(formula) {
	let requestedElement;

	if (typeof formula == "number") {
		for (el of elements) {
			if (el.atomicNumber === formula) {
				requestedElement = el;
			}
		}
	} else {
		for (el of elements) {
			if (el.formula === formula) {
				requestedElement = el;
			}
		} 
	}
	
	console.group('Элемент ' + requestedElement.formula);
		console.log('Название: ' + requestedElement.name);
		console.log('Бувенное обозначение: ' + requestedElement.formula);
		console.log('Период: ' + requestedElement.period);
		console.log('Группа: ' + requestedElement.group);
		console.log('Подгруппа: ' + requestedElement.subgroup);
		console.log('Атомный номер: ' + requestedElement.atomicNumber);
		console.log((requestedElement.isMetall) ? 'Является металлом' : 'Не является металлом');
		console.log('Количество электронных уровней: ' + requestedElement.numberOfLevels);
		for (let i = 0; i < requestedElement.electronsOnLevels.length; i++) {
			console.log('Электронов на уровне ' + (i+1) + ': ' + requestedElement.electronsOnLevels[i]);
		}
	console.groupEnd('Элемент ' + requestedElement.formula);
	return true;
}