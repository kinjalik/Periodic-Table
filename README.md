# [EN] Periodic Table | English
** Coming soon **
    
# [RU] Периодическая система химических элементов | Русский
Периодическая система Дмитрия Ивановича Менделеева в старой записи

## Состав репозитория
- JSON-файл с элементами периодической системы
- Класс с инструментами для работы с JSON
- Визуализация Периодической системы (HTML, CSS, JS-класс)

## Методы взаимодействия с периодической системой:
**Получение объекта с новым элементом**

    PeriodicTable.newElement(n, f, p, g, sg, aN, isMetall, NOL, EOL, type, aM);
    
      @class      Element
      @param      {string}   n         Имя элемента
      @param      {string}   f         Формула элемента
      @param      {number}   p         Период элемента
      @param      {number}   g         Группа элемента
      @param      {string}   sg        Подгруппа элемента
      @param      {number}   aN        Атомный номер
      @param      {boolean}  isMetall  Является ли металлом
      @param      {number}   NOL       Количество электронных уровней
      @param      {array}    EOL       Количество электронов на каждом уровне
      @param      {string}   type      Тип элемента по внешнему электронному уровню
      @param      {number}   aM        Атомная масса элемента

**Поиск элемента по формуле, имени или паре группа-период**

    getChemElemByFormula(formula);
    getChemElemByName(name);
    getChemElemByGroupAndPeriod(group, period);
    
