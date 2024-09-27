
import { type Planet } from '../Planets';
import { Starship } from '../Starship';

export function calculateFlightDurationFromEarth(planet: Planet, starship: Starship, unity: 'hours' | 'days' = 'hours'): number {
    const distance = planet.distanceFromEarth;
    const speed = starship.speed; // km/h
    const durationInHours = distance * 1_000_000 / speed;

    return unity === 'days' ? durationInHours / 24 : durationInHours;
}
