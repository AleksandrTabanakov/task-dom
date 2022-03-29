/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<${tag}>${content}</${tag}>`,
        );
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/

export function generateTree(childrenCount, level) {
    document.body.insertAdjacentHTML('beforeend', '<div class="item_1"></div>');

    for (let i = 1; i < level; i++) {
        let divList = document.getElementsByClassName(`item_${i}`);

        for (let element of divList) {
            for (let j = 0; j < childrenCount; j++) {
                const div3 = document.createElement('div');
                div3.classList.add(`item_${i + 1}`);
                element.appendChild(div3);
            }
        }
    }
    return document.body.firstChild;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const generatedTree2 = generateTree(2, 3);
    const divList = document.getElementsByClassName('item_2');
    for (let element of divList) {
        const section = document.createElement('section');
        section.innerHTML = element.innerHTML;
        section.classList.add('item_2');
        generatedTree2.replaceChild(section, element);
    }

    return generatedTree2;
}
