// ***Задача 11.14***

// Даны объект - девайс (шлагбаум) и массив объектов - камер. Написать функцию, которая будет принимать этот объект и массив объектов, и возвращать объект со свойствами: название барьера `name` и массивом объектов с данными о камерах `cameras`. Свойство `cameras` должно содержать данные только о тех камерах, чьи `id` указаны в свойстве `cameraIDs`.

// input
const devices = {
    name: "Barrier 1",
    cameraIDs: [1, 2],
};

const cameras = [
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
];

// output
// {
//     name: "Barrier 1",
//         cameras: [
//             {
//                 id: 1,
//                 name: "Camera 1",
//             },
//             {
//                 id: 2,
//                 name: "Camera 2",
//             },
//         ],
//  }

// function camerasName(devices, cameras) {
//     const devicesArray = devices.cameraIDs;
//     let newObject = {};
//     let newArray = devicesArray.map((elementDevicesArray) => {
//         let objectCameras = {};
//         const names = cameras.find((name) => name.id === elementDevicesArray);

//         objectCameras.id = names.id;
//         objectCameras.name = names.name;

//         return objectCameras;
//     });

//     newObject.name = devices.name;
//     newObject.cameras = newArray;
//     return newObject;
// }

function camerasName(devices, cameras) {
    const devicesArray = devices.cameraIDs;
    const camerasBarrier = cameras.filter((camera) => devicesArray.includes(camera.id));
    const barrier = {
        name: devices.name,
        cameras: camerasBarrier,
    };
    return barrier;
}

function camerasName(devices, cameras) {
    return {
        name: devices.name,
        cameras: cameras.filter((camera) => devices.cameraIDs.includes(camera.id)),
    }
}

console.log(camerasName(devices, cameras));