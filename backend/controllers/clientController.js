import Agency from '../models/agencyModel.js';
import Client from '../models/clientModel.js';

const updateClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const updatedClientData = req.body;

    const updatedClient = await Client.findByIdAndUpdate(clientId, updatedClientData, { new: true });

    if (!updatedClient) {
      console.log('Client not found');
      return res.status(404).json({ message: 'Client not found' });
    }

    console.log('Client updated successfully:', updatedClient);

    res.status(200).json({ message: 'Client updated successfully', client: updatedClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getTopClientDetails = async (req, res) => {
  try {
    const topClient = await Client.findOne().sort({ TotalBill: -1 });

    if (!topClient) {
      console.log('No clients found');
      return res.status(404).json({ message: 'No clients found' });
    }

    const agencyDetails = await Agency.findById(topClient.AgencyId);

    if (!agencyDetails) {
      console.log('Agency not found');
      return res.status(404).json({ message: 'Agency not found' });
    }

    console.log('Top client details retrieved successfully:', {
      agencyName: agencyDetails.Name,
      clientName: topClient.Name,
      totalBill: topClient.TotalBill,
    });

    res.status(200).json({
      message: 'Top client details retrieved successfully',
      agencyName: agencyDetails.Name,
      clientName: topClient.Name,
      totalBill: topClient.TotalBill,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { updateClient, getTopClientDetails };
