import Gymadded from '../model/gym.js';

export const addGym = async (request, response) => {
    // retreive the info of user from frontend
    const gym = request.body;
    // console.log(gym);

    const newGym = new Gymadded(gym);
    try {
        await newGym.save();
        response.status(201).json(newGym);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const getGyms = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    // console.log("checked")
    try {
        // finding something inside a model is time taking, so we need to add await
        const gymaddeds = await Gymadded.find();
        response.status(200).json(gymaddeds);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

