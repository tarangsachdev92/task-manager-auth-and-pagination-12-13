const Task = require('../src/models/task');
const User = require('../src/models/user');

const main = async () => {
    // owner is the field of the task model (refer task.model)
    // const task = await Task.findById('5ebc23639347c60d80183183');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    const user = await User.findById('5e5911110bd2e51a51972989');
    // tasks is the virtual field (refer user.model)
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);

    // const pipeLine = [{ "$match": { completed: false } },
    // {
    //     "$lookup": {
    //         from: 'users',
    //         localField: 'owner',
    //         foreignField: '_id',
    //         as: 'user'
    //     }
    // },
    // { "$unwind": "$user" },
    // { "$match": { "user.age": 25 } }]

    // const taskAggregrate = await Task.aggregate(pipeLine)

    // console.log(taskAggregrate)

}

main();