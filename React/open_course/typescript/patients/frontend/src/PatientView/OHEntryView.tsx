import {  OccupationalHealthcareEntryView, HealthRating } from '../types';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';

const OHEntryView = ({entry}: OccupationalHealthcareEntryView ) => {

  const renderRating = (rating: HealthRating) => {
    if (rating === 0) {
      return <BatteryChargingFullIcon />;
    } else if (rating === 1) {
      return <BatteryCharging90Icon />;
    } else if (rating === 2) {
      return <BatteryCharging20Icon />;
    } else {
      return <Battery0BarIcon />;
    }
  };

  const renderSickLeaveDetails = () => {
    if (entry.sickLeave) {
      const {startDate, endDate } = entry.sickLeave;
      return <li>Sick Leave: Start= {startDate} End= {endDate}</li>;
    }
  };

  return (
    <>
      <li>Employer: {entry.employerName}</li>
      <li>Health Rating:{renderRating(entry.healthRating)}</li>
      {renderSickLeaveDetails()}
    </>
  );
};

export default OHEntryView;
