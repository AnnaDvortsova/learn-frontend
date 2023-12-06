// Задача 11.15*
// Допустим, что с бекенда приходит объект с данными о шлагбаумах и камерах. Написать функцию, которая будет принимать этот объект и возвращать массив объектов со шлагбаумами. Каждый объект шлагбаума должен содержать массив объектов с камерами согласно их id.

// input
const respData = {
    devices: [
        {
            id: 1,
            name: "Barrier 1",
            cameraIDs: [1, 2],
        },
        {
            id: 2,
            name: "Barrier 2",
            cameraIDs: [1],
        },
        {
            id: 3,
            name: "Barrier 3",
            cameraIDs: [2, 3],
        },
    ],
    cameras: [
        {
            id: 1,
            name: "Camera 1",
        },
        {
            id: 2,
            name: "Camera 2",
        },
        {
            id: 3,
            name: "Camera 3",
        },
    ],
};

// output
//   [
//       {
//       id: 1,
//       name: "Barrier 1",
//       cameras: [
//         {
//           id: 1,
//           name: "Camera 1",
//         },
//         {
//           id: 2,
//           name: "Camera 2",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Barrier 2",
//       cameras: [
//         {
//           id: 1,
//           name: "Camera 1",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Barrier 3",
//       cameras: [
//         {
//           id: 2,
//           name: "Camera 2",
//         },
//         {
//           id: 3,
//           name: "Camera 3",
//         },
//       ],
//     },
//   ];