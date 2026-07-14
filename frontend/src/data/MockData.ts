import type { Visit, Incident, ProtectedArea, Agent } from "../types";



//faux data afaka atao exemple mandrapa mifandray am backend
export const AREAS: ProtectedArea[] = [
  { id: "andasibe", name: "Andasibe-Mantadia", region: "Alaotra-Mangoro", ticket: 65000, guide: 40000, superficie: "155 km²" },
  { id: "ranomafana", name: "Ranomafana", region: "Haute Matsiatra", ticket: 65000, guide: 45000, superficie: "416 km²" },
  { id: "isalo", name: "Isalo", region: "Ihorombe", ticket: 55000, guide: 50000, superficie: "815 km²" },
];

export const AGENTS: Agent[] = [
  { id: 1, name: "Fenosoa Rakoto", area: "Andasibe-Mantadia", visites: 18, obs: 27, incidents: 3 },
  { id: 2, name: "Voahangy Randria", area: "Ranomafana", visites: 24, obs: 31, incidents: 1 },
];

export const initialVisits: Visit[] = [
  { id: 1, time: "08:12", rep: "Harilala Rasoa", nat: "Malgache", area: "Andasibe-Mantadia", n: 4, amount: 65000 * 4 + 40000 },
  { id: 2, time: "09:40", rep: "John Miller", nat: "États-Unis", area: "Andasibe-Mantadia", n: 2, amount: 65000 * 2 + 40000 },
  { id: 3, time: "11:05", rep: "Élise Dubois", nat: "France", area: "Andasibe-Mantadia", n: 3, amount: 65000 * 3 + 40000 },
];

export const initialIncidents: Incident[] = [
  { id: 1, type: "Feu de brousse", loc: "Lisière est, secteur 4", desc: "Départ de feu limité, zone de défriche agricole voisine.", urgence: "Élevé", status: "En cours" },
  { id: 2, type: "Braconnage", loc: "Sentier Mantadia nord", desc: "Traces de collets suspectées le long du sentier.", urgence: "Moyen", status: "Déclaré" },
  { id: 3, type: "Déforestation", loc: "Zone tampon sud", desc: "Coupe illégale de bois de rose signalée par un guide local.", urgence: "Élevé", status: "Résolu" },
];

export function money(n: number): string {
  return n.toLocaleString("fr-FR") + " Ar";
}