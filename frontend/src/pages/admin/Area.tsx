import { Card, CardContent } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { AREAS, money } from "../../data/MockData";



//gestion des aires protégées
export default function Areas() {
  return (
    <div className="px-5 md:px-8">
      <div className="pt-6 md:pt-8 pb-5">
        <h1 className="text-xl font-semibold text-stone-900 tracking-tight">Aires protégées</h1>
        <p className="text-sm text-stone-500 mt-0.5">Aires gérées et tarification</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AREAS.map((a) => (
          <Card key={a.id}>
            <CardContent>
              <p className="font-medium text-stone-900">{a.name}</p>
              <p className="text-xs text-stone-500">{a.region} · {a.superficie}</p>
              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="text-stone-500">Ticket + guide</span>
                <span className="font-medium text-stone-900">{money(a.ticket)} + {money(a.guide)}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3">
                Modifier les tarifs
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}