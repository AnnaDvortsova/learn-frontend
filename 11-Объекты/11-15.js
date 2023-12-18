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

function camerasName(device, cameras) {
    const devicesArray = device.cameraIDs;
    const camerasBarrier = cameras.filter((camera) => devicesArray.includes(camera.id));
    const barrier = {
        id: device.id,
        name: device.name,
        cameras: camerasBarrier,
    };
    return barrier;
}

function objectBarriers(respData) {
    const devices = respData.devices;
    const cameras = respData.cameras;
    const newDevices = devices.map((device) => camerasName(device, cameras));
    return newDevices;
}

console.log(objectBarriers(respData));