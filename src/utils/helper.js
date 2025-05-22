import { circuitData } from '../constants/index';

export function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

export function formatTime(timeStr) {
    if (!timeStr) return '—';
    const parts = timeStr.split(' ')[2];
    const [hours, minutes, seconds] = parts.split(':');
    const [sec, ms] = seconds.split('.');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    return `${String(totalMinutes).padStart(2, '0')}:${sec}.${ms.substring(0, 3)}`;
}

export function getCircuitImage(circuitId) {
    const trackImage = circuitData[circuitId]?.track || "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/trackside-images/2024/Formula_1_Testing_in_Bahrain___Day_2/2030382630";
    return trackImage;
}

export function getCircuitTrackMap(circuitId) {
    const trackImage = circuitData[circuitId]?.trackMap || "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/trackside-images/2024/Formula_1_Testing_in_Bahrain___Day_2/2030382630";
    return trackImage;
}

export function getCircuitLayout(circuitId) {
    const trackImage = circuitData[circuitId]?.layout || "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/trackside-images/2024/Formula_1_Testing_in_Bahrain___Day_2/2030382630";
    return trackImage;
}
