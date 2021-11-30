
import GymOption from '../model/gymoption.js';

// export const addGymOption = async (request, response) => {
//     const gymArray = request.body;
//     try {
//         await GymOption.findOneAndUpdate({}, {
//             $addToSet: {
//                 option: gymArray
//             }
//         })
//         response.status(201).json("newGymArray");
//     } catch (error) {
//         response.status(409).json({ message: error.message });
//     }
// }

export const addGymOption = async (request, response) => {
    const gymObj = request.body;

    const newGymObj = new GymOption(gymObj);
    // console.log(newGymObj);
    try {
        await newGymObj.save();
        response.status(201).json(newGymObj);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const getGymOption = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    // console.log("checked")
    try {
        // finding something inside a model is time taking, so we need to add await
        const gymOptions = await GymOption.find();
        response.status(200).json(gymOptions);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}