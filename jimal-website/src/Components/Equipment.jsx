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

const equipmentItems = [
  { id: 1, name: 'PLC Systems', description: 'Programmable Logic Controllers', image:plcImage},
  { id: 2, name: 'HMI Panels', description: 'Human Machine Interfaces', image:HMIImage },
  { id: 3, name: 'VFDs', description: 'Variable Frequency Drives', image:vfdImage },
  { id: 4, name: 'Servo Drives', description: 'Precision Motion Control', image:servoDriveImage },
  { id: 5, name: 'Power Supplies', description: 'Industrial Power Solutions', image:powerSupplyImage },
  { id: 6, name: 'I/O Modules', description: 'Input/Output Systems', image:ioModuleImage },
  { id: 7, name: 'Contactors & Starters', description: 'Contactors & Starters',image:contactorsStartersImage},
  { id: 8, name: 'PCB', description: 'PCB',image:pcbImage },
  { id: 9, name: 'circuit Breaker', description: 'Circuit Breaker', image:circuitbreaker },
  { id: 10, name: 'control relay', description: 'Control Relay', image:controlRelay },
//   { id: 5, name: 'Power Supplies', description: 'Industrial Power Solutions' },
//   { id: 6, name: 'I/O Modules', description: 'Input/Output Systems' },
];

export default function Equipment() {
  return (
    <section id="equipment" className="equipment-section">
      <div className="container">
        <h2 className="section-title">Equipment We Service</h2>
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