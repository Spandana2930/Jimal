// Equipment.jsx
import React from 'react';
import plcImage from '../../public/Images/PLC.jpeg';
import powerSupplyImage from '../../public/Images/power supply.jpeg';
import HMIImage from '../../public/Images/HMI panel.jpg';
import vfdImage from '../../public/Images/vfdimage.jpg';
import servoDriveImage from '../../public/Images/Servo Drive.webp';
import ioModuleImage from '../../public/Images/I O Module.jpg';
import contactorsStartersImage from '../../public/Images/Contactors.jpg';
import pcbImage from '../../public/Images/PCB.jpeg';
import circuitbreaker from '../../public/Images/circuitbreaker.jpg'
import controlRelay from '../../public/Images/controlrelay.jpg'
import './Equipment.css';

export default function Equipment({ t }) {
  const equipmentItems = [
    { id: 1, name: t.equipment.items[0], description: 'Programmable Logic Controllers', image: plcImage },
    { id: 2, name: t.equipment.items[1], description: 'Human Machine Interfaces', image: HMIImage },
    { id: 3, name: t.equipment.items[2], description: 'Variable Frequency Drives', image: vfdImage },
    { id: 4, name: t.equipment.items[3], description: 'Precision Motion Control', image: servoDriveImage },
    { id: 5, name: t.equipment.items[4], description: 'Industrial Power Solutions', image: powerSupplyImage },
    { id: 6, name: t.equipment.items[5], description: 'Input/Output Systems', image: ioModuleImage },
    { id: 7, name: t.equipment.items[6] , description: 'Contactors & Starters', image: contactorsStartersImage },
    { id: 8, name: t.equipment.items[7], description: 'PCB', image: pcbImage },
    { id: 9, name: t.equipment.items[8], description: 'Circuit Breaker', image: circuitbreaker },
    { id: 10, name: t.equipment.items[9], description: 'Control Relay', image: controlRelay },
  ];

  return (
    <section id="equipment" className="equipment-section">
      <div className="container">
        <h2 className="section-title">{t.equipment.title}</h2>
        <div className="equipment-row">
          {equipmentItems.map((item) => (
            <div key={item.id} className="equipment-item">
              <div className="equipment-image-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="equipment-image"
                />
              </div>
              <h3 className="equipment-name">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}