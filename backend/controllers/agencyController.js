import Agency from '../models/agencyModel.js';
import Client from '../models/clientModel.js';

const createAgencyAndClient = async (req, res) => {
  let savedAgency;

  try {
    const { agencyData, clientData } = req.body;

    if (agencyData && !clientData) {
      // Check if an agency with the same name or phone number already exists
      const existingAgency = await Agency.findOne({
        $or: [{ Name: agencyData.Name }, { PhoneNumber: agencyData.PhoneNumber }],
      });

      if (existingAgency) {
        return res.status(400).json({ message: 'Agency already exists with the same name or phone number' });
      }

      // Create an agency
      const newAgency = new Agency(agencyData);
      await newAgency.validate();
      savedAgency = await newAgency.save();

      console.log('Saved Agency:', savedAgency);

      res.status(201).json({ message: 'Agency created successfully', agency: savedAgency });
    } else if (clientData && !agencyData) {
      // Check if a client with the same name or phone number already exists
      const existingClient = await Client.findOne({
        $or: [{ Name: clientData.Name }, { PhoneNumber: clientData.PhoneNumber }],
      });

      if (existingClient) {
        return res.status(400).json({ message: 'Client already exists with the same name or phone number' });
      }

      if (!clientData.AgencyId) {
        return res.status(400).json({ message: 'Bad Request: Provide AgencyId in clientData' });
      }

      // Create a client
      const newClient = new Client(clientData);
      await newClient.validate();

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

export {createAgencyAndClient} ;
