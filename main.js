/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const elementById = document.getElementById(`title`);
console.log(elementById);


/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const itemcontainerElementByquerySelecter = document.querySelector(`#item-container`);
console.log(itemcontainerElementByquerySelecter);



/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */

const liElementsByTagName = document.getElementsByTagName(`li`);
console.log(liElementsByTagName);



/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const itemElementsByClassName = document.getElementsByClassName(`item`);
console.log(itemElementsByClassName);

/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const itemElementsByQuerySelecterAll = document.querySelectorAll(`.item`);
console.log(itemElementsByQuerySelecterAll);
