import React from 'react';

import ReactCountryFlag from 'react-country-flag';
import { countryCodes } from '../constants/index';

export function getFlag(country) {
    const code = countryCodes[country];
    if (!code) return "🏁";
    return <ReactCountryFlag
        countryCode={code}
        svg
        style={{ width: "1em", height: "1em" }}
    />;
}