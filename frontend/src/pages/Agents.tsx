import { Card, CardContent } from "../components/ui/card";
import { AGENTS } from "../data/MockData";


//informations des agents employées par l admin du site touristique
export default function Agents() {
  return (
    <div className="px-5 md:px-8">
      <div className="pt-6 md:pt-8 pb-5">
        <h1 className="text-xl font-semibold text-stone-900 tracking-tight">Agents</h1>
        <p className="text-sm text-stone-500 mt-0.5">Agents de terrain et statistiques d'activité</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {AGENTS.map((a) => (
          <Card key={a.id}>
            <CardContent>
              <p className="font-medium text-stone-900">{a.name}</p>
              <p className="text-xs text-stone-500">{a.area}</p>
            </CardContent>
            <div className="grid grid-cols-3 border-t border-stone-100">
              {([[a.visites, "Visites"], [a.obs, "Observ."], [a.incidents, "Incidents"]] as const).map(
                ([value, label]) => (
                  <div key={label} className="text-center py-3 border-r last:border-r-0 border-stone-100">
                    <p className="text-sm font-semibold text-stone-900">{value}</p>
                    <p className="text-[11px] text-stone-500">{label}</p>
                  </div>
                )
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}