import Agency from '../models/agencyModel.js';
import Client from '../models/clientModel.js';

const createAgencyAndClient = async (req, res) => {
  let savedAgency; // Declare the variable outside the if block

  try {
    const { agencyData, clientData } = req.body;

    if (agencyData && !clientData) {
      // Create an agency
      const newAgency = new Agency(agencyData);
      await newAgency.validate();
      savedAgency = await newAgency.save();

      // Log savedAgency data to the terminal
      console.log('Saved Agency:', savedAgency);

      res.status(201).json({ message: 'Agency created successfully', agency: savedAgency });
    } else if (clientData && !agencyData) {
      // Check if AgencyId is present in clientData
      if (!clientData.AgencyId) {
        return res.status(400).json({ message: 'Bad Request: Provide AgencyId in clientData' });
      }

      // Create a client
      const newClient = new Client(clientData);
      await newClient.validate();

      // Assign agencyId to clientData before saving
      const savedClient = await newClient.save();

      res.status(201).json({ message: 'Client created successfully', client: savedClient });
    } else {
      res.status(400).json({ message: 'Bad Request: Provide either agencyData or clientData, not both' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { createAgencyAndClient };
