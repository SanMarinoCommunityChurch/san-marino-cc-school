import { DateTime } from "luxon"

export default function formatFromISO(date, luxonFormat) {
    return DateTime.fromISO(date).setZone('America/Los_Angeles', { keepLocalTime: true }).toLocaleString(DateTime[luxonFormat])
}