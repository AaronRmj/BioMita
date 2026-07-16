import  { useState } from 'react';
import { 
  Shield, 
  Users, 
  Leaf, 
  AlertTriangle, 
  BarChart3, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Compass
} from 'lucide-react';

import { useNavigate } from "react-router-dom";


import logo2 from '../assets/logo2.png';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F9F6] text-[#1E2E2A] font-sans antialiased selection:bg-[#0B664B] selection:text-white">
      
      {/* navig */}
      <header className="sticky top-0 z-50 bg-[#F4F9F6]/90 backdrop-blur-md border-b border-[#D2E2DC]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#0B664B] p-2.5 rounded-xl text-white">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0F2921]">BIO MITA</span>
              <p className="text-[10px] uppercase tracking-widest text-[#0B664B] font-semibold -mt-1">Madagascar</p>
            </div>
          </div>

          {/* Desktop plein  Navbar  */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#concept" className="hover:text-[#0B664B] transition-colors">Le Concept</a>
            <a href="#features" className="hover:text-[#0B664B] transition-colors">Fonctionnalités</a>
            <a href="#roles" className="hover:text-[#0B664B] transition-colors">Utilisateurs</a>
            <a href="#stats" className="hover:text-[#0B664B] transition-colors">Impact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => navigate("/auth")} className="text-sm font-medium hover:text-[#0B664B] transition-colors px-4 py-2">
              Se connecter
            </button>
            <button onClick={() => navigate("/auth")} className="bg-[#0B664B] hover:bg-[#084D38] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md">
              Accéder au Portail
            </button>
          </div>

          {/* Mobile resp Burger  */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-[#1E2E2A] hover:text-[#0B664B]"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile  Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#D2E2DC] bg-[#F4F9F6] px-6 py-4 flex flex-col gap-4 shadow-inner">
            <a href="#concept" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-[#0B664B]">Le Concept</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-[#0B664B]">Fonctionnalités</a>
            <a href="#roles" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-[#0B664B]">Utilisateurs</a>
            <a href="#stats" onClick={() => setIsMenuOpen(false)} className="font-medium hover:text-[#0B664B]">Impact</a>
            <hr className="border-[#D2E2DC]" />
            <div className="flex flex-col gap-3">
              <button onClick={() => navigate("/auth")} className="text-center font-medium py-2 hover:text-[#0B664B]">Se connecter</button>
              <button  onClick={() => navigate("/auth")} className="bg-[#0B664B] text-white py-3 rounded-xl font-semibold">Accéder au Portail</button>
            </div>
          </div>
        )}
      </header>

      {/*1  SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* gauche colonne */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0B664B]/10 text-[#0B664B] font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full w-max">
              <Shield className="h-3.5 w-3.5" />
              Préservons l'écosystème de Madagascar
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F2921] leading-[1.15]">
              Surveiller, Gérer et <br />
              <span className="text-[#0B664B]">Protéger la Biodiversité</span>
            </h1>
            
            <p className="text-lg text-[#0B664B]/80 leading-relaxed max-w-xl">
              <strong>BIO MITA</strong> modernise la collecte des informations sur le terrain. Une solution complète et centralisée pour suivre la faune, gérer les flux de visiteurs et intervenir rapidement face aux menaces environnementales.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <button onClick={() => navigate("/auth")} className="w-full sm:w-auto bg-[#0B664B] hover:bg-[#084D38] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                Commencer la saisie
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button  onClick={() => navigate("/auth")} className="w-full sm:w-auto border border-[#0B664B]/30 hover:border-[#0B664B] text-[#1E2E2A] font-medium px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 bg-white/50 hover:bg-white">
                Voir plus
              </button>
            </div>
          </div>

        {/* droite collone  - Image  */}
<div className="lg:col-span-5 relative flex justify-center items-center">
    <div className="relative w-full max-w-[550px] lg:max-w-[650px] flex items-center justify-center">
            <img 
              src={logo2} 
              alt="Logo" 
             
              className="max-h-[650px] w-full h-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl" 
            />
    </div>

  {/* Decorative bg */}
  <div className="absolute -top-12 -left-12 -z-10 h-64 w-64 rounded-full bg-[#0B664B]/10 blur-3xl" />
</div>

        </div>
      </section>

      {/* 3. SECTION : CONCEPT */}
      <section id="concept" className="bg-[#0B664B] text-white py-24 border-y border-[#084D38]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-xs font-bold tracking-widest text-[#56E3B8] uppercase mb-3">Notre Identité</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-8">Que signifie BIO MITA ?</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch mt-12">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-left flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-white text-[#0B664B] flex items-center justify-center font-bold text-xl mb-6">BIO</div>
                <h3 className="text-xl font-bold text-white mb-3">La Biodiversité</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Représente l'ensemble des richesses naturelles de Madagascar. Des forêts tropicales humides aux espèces endémiques uniques comme nos lémuriens et caméléons, nous suivons chaque observation pour mieux comprendre et protéger.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-left flex flex-col justify-between">
              <div>
                <div className="h-12 w-15 rounded-xl bg-white text-[#0B664B] flex items-center justify-center font-bold text-xl mb-6">MITA</div>
                <h3 className="text-xl font-bold text-white mb-3">Observer & Veiller</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Inspiré du malgache, ce mot évoque l'action directe de surveillance active, de parcours et de protection vigilante des parcs nationaux. C’est la force d'action des agents sur le terrain pour préserver l'avenir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. utilites ou fonctionnalites SECTION */}
      <section id="features" className="py-24 bg-[#F4F9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-[#0B664B] uppercase mb-3">Fonctionnalités Clés</h2>
            <p className="text-3xl sm:text-4xl font-bold text-[#0F2921]">Une boîte à outils conçue pour la conservation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Visiteurs */}
            <div className="bg-white p-8 rounded-2xl border border-[#D2E2DC] shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#0B664B]/10 text-[#0B664B] rounded-xl w-max mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2921] mb-2">Gestion des Visiteurs</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Enregistrement rapide des groupes avec calcul automatisé des tarifs de guidage et droits d'accès.
              </p>
              <ul className="text-xs text-gray-600 space-y-2 mt-4 pt-4 border-t border-gray-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#0B664B]" /> Calculs automatisés</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#0B664B]" /> Suivi par nationalité</li>
              </ul>
            </div>

            {/* Espèces */}
            <div className="bg-white p-8 rounded-2xl border border-[#D2E2DC] shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#0B664B]/10 text-[#0B664B] rounded-xl w-max mb-6">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2921] mb-2">Biodiversité & Faune</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Saisie immédiate des observations d'espèces de flore et de faune avec géolocalisation précise.
              </p>
              <ul className="text-xs text-gray-600 space-y-2 mt-4 pt-4 border-t border-gray-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#0B664B]" /> Historique des comptages</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#0B664B]" /> Suivi des comportements</li>
              </ul>
            </div>

            {/* Incidents */}
            <div className="bg-white p-8 rounded-2xl border border-[#D2E2DC] shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl w-max mb-6">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2921] mb-2">Alertes Incidents</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Déclaration d'incidents (déforestation, feux de brousse, braconnage) pour intervention immédiate.
              </p>
              <ul className="text-xs text-gray-600 space-y-2 mt-4 pt-4 border-t border-gray-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-red-600" /> Typologie de l'alerte</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-red-600" /> Localisation d'urgence</li>
              </ul>
            </div>

            {/* Tableau de Bord */}
            <div className="bg-white p-8 rounded-2xl border border-[#D2E2DC] shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#0B664B]/10 text-[#0B664B] rounded-xl w-max mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2921] mb-2">Suivi & Statistiques</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Graphiques analytiques des revenus générés, fréquentation et bilans de biodiversité par période.
              </p>
              <ul className="text-xs text-gray-600 space-y-2 mt-4 pt-4 border-t border-gray-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#0B664B]" /> Graphiques interactifs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#0B664B]" /> Export des bilans</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. destination  */}
      <section id="roles" className="bg-white py-24 border-t border-[#D2E2DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-[#0B664B] uppercase mb-3">Deux profils clés</h2>
            <p className="text-3xl sm:text-4xl font-bold text-[#0F2921]">Une interface pensée pour chaque utilisateur</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Agent de terrain */}
            <div className="p-10 bg-[#0B664B] text-white rounded-3xl border border-[#084D38] flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 bg-white text-[#0B664B] flex items-center justify-center rounded-xl font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Agent de terrain</h3>
                    <p className="text-xs text-[#56E3B8] font-medium">Saisie directe & Actions rapides</p>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  L’agent sur place assure la saisie et le contrôle au quotidien. Grâce à une interface pensée pour une utilisation rapide, il valide l'accès au parc et signale la vie sauvage ainsi que les incidents en un clin d'œil.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-white/10 border border-white/20 rounded-md text-white mt-0.5">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Enregistrement Visiteur</h4>
                      <p className="text-xs text-white/60">Formulaire avec calcul instantané de facturation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-white/10 border border-white/20 rounded-md text-white mt-0.5">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Ajout d'Observations</h4>
                      <p className="text-xs text-white/60">Référencement rapide des espèces vivantes.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-10 w-full bg-white text-[#0B664B] font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                Interface Agent
              </button>
            </div>

            {/* Responsable de parc */}
            <div className="p-10 bg-[#1E2E2A] rounded-3xl text-white flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 bg-white text-[#1E2E2A] flex items-center justify-center rounded-xl font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Responsable de parc</h3>
                    <p className="text-xs text-[#56E3B8] font-medium">Suivi global & Prise de décision</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-8">
                  Le responsable analyse les données centralisées pour planifier les patrouilles, valider la répartition des guides, mesurer les performances du parc et concevoir des rapports précis.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-white/10 rounded-md text-[#56E3B8] mt-0.5">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Visualisation des Revenus</h4>
                      <p className="text-xs text-gray-400">Évolution journalière, mensuelle et annuelle.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-white/10 rounded-md text-[#56E3B8] mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Suivi Géographique</h4>
                      <p className="text-xs text-gray-400">Suivi cartographique des observations et des zones d'incidents.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-10 w-full bg-white text-[#1E2E2A] font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                Tableau de Bord Administrateur
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6.  ACTION */}
      <section id="stats" className="bg-[#F4F9F6] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-[#0B664B]/5 rounded-3xl p-12 border border-[#D2E2DC] flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold text-[#0F2921]">Prêt à simplifier la gestion de votre aire protégée ?</h2>
            <p className="text-[#0B664B]/80 max-w-xl text-sm leading-relaxed">
              BIO MITA unifie les outils de reporting et de statistiques dans Madagascar, permettant de faire le pont entre la science sur le terrain et la décision administrative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button  onClick={() => navigate("/auth")} className="bg-[#0B664B] hover:bg-[#084D38] text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-sm">
                Créer un compte de Parc
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#1E2E2A] font-medium px-8 py-3.5 rounded-xl border border-[#D2E2DC] transition-all">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#D2E2DC] py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#0B664B] p-2 rounded-lg text-white">
              <Compass className="h-5 w-5" />
            </div>
            <span className="font-bold text-[#0F2921]">BIO MITA</span>
          </div>
          <p>© {new Date().getFullYear()} BIO MITA Madagascar. Tous droits réservés.</p>
          
        </div>
      </footer>

    </div>
  );
}