// ***Задача 11.4***

// Допустим, что с бекенда приходят два массива объектов: `users` и `posts`. Написать функцию, которая будет объединять эти массивы в один массив объектов. При выполнении задачи исходные массивы самостоятельно дополнить 4-5 объектами.

// input
// users
const users = [
    {
        id: 101,
        name: "Юрий",
    },
    {
        id: 102,
        name: "Анна",
    },
    {
        id: 103,
        name: "Константин",
    },

];
// posts
const posts = [
    {
        id: 1,
        userID: 101,
        title: "Что не так с онлайн-курсами?",
        text: "Привет! Меня зовут Юрий, и сегодня я хочу поговорить об онлайн-курсах программирования."
    },
    {
        id: 2,
        userID: 101,
        title: "Что за черт, Javascript",
        text: "Этот пост — список забавных и хитрых примеров на JavaScript. Это отличный язык. У него простой синтаксис, большая экосистема и, что гораздо важнее, огромное сообщество."
    },
    {
        id: 3,
        userID: 103,
        title: "Работа с часовыми поясами в JavaScript",
        text: "Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда."
    },

];

// output
// [
//     {
//         id: 1,
//         author: "Юрий",
//         title: "Что не так с онлайн-курсами?",
//         text: "Привет! Меня зовут Юрий, и сегодня я хочу поговорить об онлайн-курсах программирования."
//     },
//     {
//         id: 2,
//         author: "Юрий",
//         title: "Что за черт, Javascript",
//         text: "Этот пост — список забавных и хитрых примеров на JavaScript. Это отличный язык. У него простой синтаксис, большая экосистема и, что гораздо важнее, огромное сообщество."
//     },
//     {
//         id: 3,
//         author: "Константин",
//         title: "Работа с часовыми поясами в JavaScript",
//         text: "Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда."
//     },
// 	...
// ]

// function concatArray(posts, users) {
//     let newArray = posts.map((post) => {
//         let newObject = {};
//         const author = users.find((user) => user.id === post.userID);

//         newObject.id = post.id;
//         newObject.author = author.name;
//         newObject.title = post.title;
//         newObject.text = post.text;

//         return newObject;
//     });
//     return newArray;
// }

// console.log(concatArray(posts, users));

function concatArray(posts, users) {
    return posts.map((post) => ({
        id: post.id,
        author: users.find((user) => user.id === post.userID)?.name || '',
        title: post.title,
        text: post.text,
    }));
}

concatArray(posts, users).forEach((element) => console.log(element));