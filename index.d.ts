export as namespace SunCalc;

declare namespace SunCalc {

    /**
     * Get the time at which the sun will have a given apparent angle when rising and when setting.
     *
     * @param {Date} date The date to get the times for. Only the date part is important.
     * @param {number} angle The angle of the sun relative to the Earth's horizon.
     * @param {number} lat The latitude.
     * @param {number} lng The longitude.
     * @param {number} [elevation=0] The elevation of the observer in meters.
     * @return {{set: Date, rise: Date}}
     */
    export function getRiseAndSetAtSolarAngle(
        date: Date,
        angle: number,
        lat: number,
        lng: number,
        elevation?: number,
    ): {
        set: Date;
        rise: Date;
    };
}

export = SunCalc;
