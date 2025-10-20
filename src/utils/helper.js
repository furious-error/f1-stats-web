import { circuitData } from '../constants/index';

export function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

export function formatTime(timeStr) {
    if (!timeStr) return '—';

    let rawTime = timeStr;
    if (typeof rawTime === 'object') {
        rawTime = rawTime?.Time ?? rawTime?.time ?? rawTime?.millis ?? '';
    }

    const tokens = String(rawTime).trim().split(' ');
    const timeToken = tokens.find((token) => token.includes(':')) ?? tokens[tokens.length - 1];
    if (!timeToken || !timeToken.includes(':')) return '—';

    const segments = timeToken.split(':');
    if (segments.length < 2) return '—';

    let hours = 0;
    let minutes = 0;
    let secondsComponent = segments[segments.length - 1];

    if (segments.length === 3) {
        hours = parseInt(segments[0], 10) || 0;
        minutes = parseInt(segments[1], 10) || 0;
    } else {
        minutes = parseInt(segments[0], 10) || 0;
    }

    const [secPart, msPart = '000'] = secondsComponent.split('.');
    const totalMinutes = hours * 60 + minutes;
    const seconds = String(parseInt(secPart, 10) || 0).padStart(2, '0');
    const millis = msPart.padEnd(3, '0').substring(0, 3);

    return `${String(totalMinutes).padStart(2, '0')}:${seconds}.${millis}`;
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
