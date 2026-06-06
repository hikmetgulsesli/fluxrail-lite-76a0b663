// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - FluxRail Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Gauge, Keyboard, Settings, TriangleAlert } from "lucide-react";


export type GameSettingsFluxrailLiteActionId = "reset-preferences-1" | "return-to-gameplay-2" | "save-preferences-3";

export interface GameSettingsFluxrailLiteProps {
  actions?: Partial<Record<GameSettingsFluxrailLiteActionId, () => void>>;

}

export function GameSettingsFluxrailLite({ actions }: GameSettingsFluxrailLiteProps) {
  return (
    <>
      {/* Playfield Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 blur-sm" data-alt="A dark, cinematic top-down view of a futuristic rail network in a digital cyberpunk city. Glowing neon cyan and pink train tracks intersect over a deep, obsidian background. The scene is illuminated by the bright, energetic light-trails of high-speed digital trains moving through the network. The overall aesthetic is highly technical, evoking a retro-future arcade game with heavy contrast and bloom effects." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUSaZ1lFqwq3O2R4EEKgDQ27S8xaQOajKsZoAl6nYFyFgYmZMQLjI-UKgtHrWsFfqa3l9SDCRG4EVGyJ29gc4yjzHdZ4bZ37bgN75pcX3y6GdpV7dLeHkK4ilsysEKoBz0ISOYQ9tEfrWUgCmPWwV7JeYfB-jVlctAKNPvHWhiZZYtQz8am5wpYQL5EUmPxQRBSKixwzgednBMu6xngs1Cvqlco5bkUw9buYTJBzs-i8i1v9vXvdGo8ScSZ67AlqQHHiegeoiL9g')"}}>
      </div>
      {/* Dimmer Overlay */}
      <div className="absolute inset-0 z-0 bg-surface-container-lowest/80 backdrop-blur-md"></div>
      {/* Scanlines */}
      <div className="absolute inset-0 z-10 scanlines"></div>
      {/* Main Content Area (Settings Overlay) */}
      <main className="relative z-20 w-full h-full flex items-center justify-center p-playfield-margin">
      {/* Glass Panel Modal */}
      <div className="w-full max-w-2xl bg-surface-container/75 backdrop-blur-xl border border-primary/20 p-lg shadow-[0_0_40px_rgba(0,0,0,0.8)] relative flex flex-col gap-lg overflow-hidden">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50"></div>
      {/* Header */}
      <header className="flex justify-between items-center border-b border-primary/20 pb-md">
      <div>
      <h1 className="font-headline-md text-headline-md text-primary tracking-widest uppercase">System Settings</h1>
      <p className="font-label-xs text-label-xs text-primary-fixed uppercase mt-unit opacity-80">FluxRail Lite Config</p>
      </div>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} className="text-primary text-3xl opacity-50" aria-hidden={true} focusable="false" />
      </header>
      {/* Settings Content */}
      <div className="flex flex-col gap-xl">
      {/* Section: Difficulty */}
      <section className="flex flex-col gap-md">
      <div className="flex items-center gap-sm text-outline">
      <Gauge className="text-xl" aria-hidden={true} focusable="false" />
      <h2 className="font-status-mono text-status-mono uppercase">Simulation Speed</h2>
      </div>
      {/* Segmented Control */}
      <div className="grid grid-cols-3 gap-unit bg-surface-container-lowest border border-outline-variant p-unit">
      <label className="cursor-pointer relative text-center">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="slow" />
      <div className="py-sm border border-transparent font-status-mono text-status-mono uppercase text-outline transition-colors duration-300 peer-checked:bg-primary/20 peer-checked:text-primary peer-checked:border-primary peer-checked:shadow-[0_0_15px_rgba(0,219,233,0.3)] hover:text-primary-container">
                                      Slow
                                  </div>
      </label>
      <label className="cursor-pointer relative text-center">
      <input defaultChecked={true} className="peer sr-only" name="difficulty" type="radio" defaultValue="normal" />
      <div className="py-sm border border-transparent font-status-mono text-status-mono uppercase text-outline transition-colors duration-300 peer-checked:bg-primary/20 peer-checked:text-primary peer-checked:border-primary peer-checked:shadow-[0_0_15px_rgba(0,219,233,0.3)] hover:text-primary-container">
                                      Normal
                                  </div>
      </label>
      <label className="cursor-pointer relative text-center">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="fast" />
      <div className="py-sm border border-transparent font-status-mono text-status-mono uppercase text-outline transition-colors duration-300 peer-checked:bg-secondary/20 peer-checked:text-secondary peer-checked:border-secondary peer-checked:shadow-[0_0_15px_rgba(255,172,232,0.3)] hover:text-secondary-fixed">
                                      Fast
                                  </div>
      </label>
      </div>
      </section>
      {/* Section: Input Help */}
      <section className="flex flex-col gap-md">
      <div className="flex items-center gap-sm text-outline">
      <Keyboard className="text-xl" aria-hidden={true} focusable="false" />
      <h2 className="font-status-mono text-status-mono uppercase">Input Mapping</h2>
      </div>
      <div className="bg-surface-container-low border border-primary/10 p-md flex items-center justify-between">
      {/* Arrow Keys Cluster */}
      <div className="flex flex-col items-center gap-unit">
      <div className="w-10 h-10 bg-surface-bright border-b-2 border-primary flex items-center justify-center font-status-mono text-status-mono text-on-surface shadow-[0_2px_0_rgba(0,0,0,0.5)]">
      <ArrowUp aria-hidden={true} focusable="false" />
      </div>
      <div className="flex gap-unit">
      <div className="w-10 h-10 bg-surface-bright border-b-2 border-primary flex items-center justify-center font-status-mono text-status-mono text-on-surface shadow-[0_2px_0_rgba(0,0,0,0.5)]">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <div className="w-10 h-10 bg-surface-bright border-b-2 border-primary flex items-center justify-center font-status-mono text-status-mono text-on-surface shadow-[0_2px_0_rgba(0,0,0,0.5)]">
      <ArrowDown aria-hidden={true} focusable="false" />
      </div>
      <div className="w-10 h-10 bg-surface-bright border-b-2 border-primary flex items-center justify-center font-status-mono text-status-mono text-on-surface shadow-[0_2px_0_rgba(0,0,0,0.5)]">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Labels */}
      <div className="flex flex-col gap-sm">
      <div className="flex items-center gap-md">
      <span className="font-status-mono text-status-mono text-on-surface-variant uppercase">Switch Tracks</span>
      <div className="h-[1px] flex-grow bg-outline-variant/50 min-w-[50px]"></div>
      </div>
      <div className="flex items-center gap-md">
      <span className="font-status-mono text-status-mono text-on-surface-variant uppercase">Emergency Stop</span>
      <div className="h-[1px] flex-grow bg-outline-variant/50 min-w-[50px]"></div>
      </div>
      </div>
      {/* Spacebar */}
      <div className="flex items-center">
      <div className="h-10 px-xl bg-surface-bright border-b-2 border-secondary flex items-center justify-center font-status-mono text-status-mono text-secondary shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                                      SPACE
                                  </div>
      </div>
      </div>
      </section>
      {/* Section: Danger Zone */}
      <section className="flex justify-start">
      <button className="flex items-center gap-sm px-md py-sm border border-error/50 text-error hover:bg-error/10 hover:shadow-[0_0_15px_rgba(255,180,171,0.2)] transition-colors font-status-mono text-status-mono uppercase" type="button" data-action-id="reset-preferences-1" onClick={actions?.["reset-preferences-1"]}>
      <TriangleAlert className="text-lg" aria-hidden={true} focusable="false" />
                              Reset Preferences
                          </button>
      </section>
      </div>
      {/* Footer Actions */}
      <footer className="mt-lg pt-md border-t border-primary/20 flex justify-end gap-md">
      <button className="px-lg py-md border border-outline text-outline hover:border-primary/50 hover:text-primary transition-colors font-status-mono text-status-mono uppercase" type="button" data-action-id="return-to-gameplay-2" onClick={actions?.["return-to-gameplay-2"]}>
                          Return to Gameplay
                      </button>
      <button className="px-lg py-md bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors font-status-mono text-status-mono uppercase bloom-active" type="button" data-action-id="save-preferences-3" onClick={actions?.["save-preferences-3"]}>
                          Save Preferences
                      </button>
      </footer>
      </div>
      </main>
    </>
  );
}
