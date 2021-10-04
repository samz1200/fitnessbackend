
import GymOption from '../model/gymoption.js';

export const addGymOption = async (request, response) => {
    // retreive the info of user from frontend
    const gymArray = request.body;
    
    const newGymArray = new GymOption(gymArray);
    console.log(newGymArray);
    try {
        await newGymArray.save();
        response.status(201).json(newGymArray);
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