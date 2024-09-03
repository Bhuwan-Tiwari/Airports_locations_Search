const express = require("express");
const bodyparser = require("body-parser");

const { Location } = require('./models/index');
const { SearchCheck }=require('./middleware/searchcheck')
const { Op } = require('sequelize');

const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const upload = require('./middleware/uploadmiddleware');



const setupandstartserver = async () => {

  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.get('/airport/search',SearchCheck,async (req, res) => {
    try {
     
      const searchTerm = req.query.term;
  
     
      const locations = await Location.findAll({
        where: {
          [Op.or]: [
            {
              region_name: {
                [Op.like]: `${searchTerm}%`
              }
            },
            {
              airport: {
                [Op.like]: `${searchTerm}%`
              }
            }
          ]
        }
      });
  
     
      res.json(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).send('Server Error');
    }
  });

  
  const createLocationsFromCSV = async (req, res) => {
    try {
        
        // Check if a file is uploaded
        console.log(req)
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const results = [];
        const filePath = path.resolve(req.file.path);
    
        // Read the CSV file and parse data
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', async () => {
                try {
                    // Create Location entries from CSV data
                    const locations = await Promise.all(
                        results.map(async (row) => {
                            const { country_code, region_name, iata, icao, airport, latitude, longitude } = row;
                            return await Location.create({
                                country_code,
                                region_name,
                                iata,
                                icao,
                                airport,
                                latitude: parseFloat(latitude),
                                longitude: parseFloat(longitude),
                            });
                        })
                    );
                    res.status(201).json(locations);
                } catch (error) {
                    res.status(400).json({ error: error.message });
                } finally {
                    fs.unlinkSync(filePath); // Remove the file after processing
                }
            });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

app.post("/airport/bulkupload",upload.single('file'),createLocationsFromCSV)

  


  app.listen(3000, async () => {
    console.log("SERVER STARTED AT PORT 3000")
   // const response=await Location.findOne({ where: { id: 1 } })
  // console.log(Location)
  });
}

setupandstartserver();