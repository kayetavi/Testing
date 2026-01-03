const data = {
  "Damage Mechanism": {
    "Carburization": {
  description: `
    Carbon is absorbed into the metal at high temperatures from contact with a carbonaceous environment.<br>
    Carburized steel becomes brittle and may crack or spall.<br>
    Can reduce or eliminate remaining sound metal wall thickness.<br>
    Carburization can lower corrosion resistance of stainless steels.
  `,
  affectedMaterials: `
      <ul>
        <li>Carbon steel and low-alloy steels</li>
        <li>300 series stainless steels</li>
        <li>400 series stainless steels</li>
        <li>Cast stainless steels</li>
        <li>Nickel-base alloys with significant iron content (e.g., Alloys 600 and 800)</li>
        <li>HK/HP alloys</li>
      </ul>
    `,
  criticalFactors: `
    <ul>
      <li>Three conditions must be met for carburization:
        <ul>
          <li>Exposure to a carburizing environment or carbonaceous material</li>
          <li>Temperature high enough to allow carbon diffusion (typically &gt; 1100°F / 595°C)</li>
          <li>Susceptible material</li>
        </ul>
      </li>
      <li>Favored by high carbon activity gases (hydrocarbons, coke, CO, CO₂, CH₄, ethane) and low oxygen/steam levels.</li>
      <li>Carbon diffuses rapidly at first, then slows as the carburized layer deepens.</li>
      <li>In carbon and low-alloy steels, surface becomes hard and brittle, may spall during cooling.</li>
      <li>300 series SS are more resistant due to higher Cr and Ni content.</li>
      <li>Carburization of 300 SS may deplete chromium, reducing corrosion resistance and causing sulfidation (e.g., in coker furnaces).</li>
      <li>May cause loss of creep ductility, mechanical toughness, weldability, and corrosion resistance.</li>
    </ul>
  `,
  affectedUnits: `
    <ul>
      <li>Fired heater tubes — most common equipment affected by carburization.</li>
      <li>Coke deposits promote carburization, especially during steam/air decoke cycles with elevated temperatures.</li>
      <li>Heater tubes in catalytic reformers, coker units, and other coke-forming heaters may show carburization.</li>
      <li>Also found in ethylene pyrolysis and steam reformer furnaces.</li>
    </ul>
  `,
  appearance: `
    <ul>
      <li>Depth of carburization can be confirmed through metallography.</li>
      <li>Significant increase in hardness and loss of ductility indicates carburization.</li>
      <li>Advanced cases may show volumetric expansion, leading to crumbling — called "catastrophic carburization."</li>
      <li>Severe damage may include bulging, heavy scaling, thin-line brittle cracks, “thick-lip” tube failures, or “crow’s feet” cracking.</li>
      <li>Ferromagnetism may increase in some alloys due to microstructural changes.</li>
      <li>Metal carbides form, depleting the surrounding matrix of carbide-forming elements.</li>
    </ul>
  `,
  mitigation: `
    <ul>
      <li>Select alloys with good carburization resistance — those that form stable oxide layers (e.g., via alumina-forming coatings like alonizing).</li>
      <li>Lower the carbon activity in the process environment.</li>
      <li>Introduce low levels of reactive sulfur compounds (&lt; 10 ppm) in the process stream to inhibit carbon absorption on metal surfaces.</li>
    </ul>
  `,
  inspection: `
    <ul>
      <li>VT and A-scan UT are ineffective for detecting carburization or its depth.</li>
      <li>Destructive sampling (chemical/physical testing) provides the most accurate determination.</li>
      <li>Initial-stage detection is difficult; accessible surfaces may be assessed using:
        <ul>
          <li>Hardness testing (caution: may initiate cracks on brittle surfaces)</li>
          <li>Field metallography (replica)</li>
          <li>Eddy current techniques</li>
        </ul>
      </li>
      <li>Carburization causes normally nonmagnetic alloys to become magnetic — magnetic permeability testing is useful.</li>
      <li>Monitoring tools include hand-held magnets and multi-frequency eddy current devices.</li>
      <li>Surface oxides may interfere with magnetic/electromagnetic results.</li>
      <li>Some instruments can correlate magnetism level to carburization depth, though many are proprietary.</li>
      <li>In advanced cases with cracking:
        <ul>
          <li>RT, UT, and magnetic methods can be used together</li>
          <li>Specialized TOFD can estimate carburized case depth (requires skilled technicians)</li>
        </ul>
      </li>
    </ul>
  `,
  imagePath: "image/carburization.png"
},

"Fuel Ash Corrosion": {
  description: `
<ul>
  <li>Accelerated high-temperature corrosion due to molten salt deposits on metal surfaces in fired heaters, boilers, or gas turbines.</li>
  <li>Common with fuel oils or coal contaminated with sulfur, sodium, potassium, and/or vanadium.</li>
  <li>Molten slags dissolve protective oxide layers, allowing rapid oxidation and metal loss.</li>
</ul>
`,
  affectedMaterials: `
All conventional alloys used in process heaters and boilers are susceptible. However, 50Cr-50Ni alloys show improved resistance.
`,
  criticalFactors: `
<ul>
  <li>Corrosion severity is influenced by the concentration of molten salt-forming contaminants in the fuel, metal temperature, and alloy composition.</li>
  <li>Sodium (Na) and vanadium (V) are particularly important; a combined concentration above 50 ppm typically causes damage.</li>
  <li>Corrosion only occurs if the metal temperature is high enough to melt deposits and form molten slag, with damage most severe at the hottest points.</li>
  <li>Corrosion rates vary depending on the alloy type and the specific location within the heater or boiler.</li>
  <li>The composition and melting point of slag differ by fuel type and heater zone:
    <ul>
      <li><strong>Oil ash:</strong> Forms mixtures of vanadium pentoxide with sodium oxide or sodium sulfate; melting points can be below 1000 °F (540 °C).</li>
      <li><strong>Coal ash (superheater/reheater):</strong> Forms sodium and potassium iron trisulfates; melt between 1030–1130 °F (545–610 °C).</li>
      <li><strong>Waterwall tube corrosion:</strong> Forms sodium and potassium pyrosulfates; melting points as low as 700 °F (370 °C).</li>
    </ul>
  </li>
  <li>Reducing conditions (CO, H₂S, H₂ rich flue gas) accelerate corrosion 2–5× compared to oxidizing environments.</li>
  <li>Unburned coal increases carbon content in fly ash, creating a reducing environment that promotes carburization—especially on austenitic alloys—leading to reduced corrosion resistance and increased tube wastage.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Fuel ash corrosion can occur in any fired heater, boiler, or gas turbine using fuels containing vanadium, sodium, potassium, or sulfur contaminants.</li>
  <li>Most common in fired heaters burning vanadium- and sodium-contaminated fuel oils or residues.</li>
  <li>Heater tubes may escape damage if their skin temperatures stay below the slag melting point, but hangers and supports—operating at higher temperatures—are more vulnerable.</li>
  <li>Gas turbines may experience blade corrosion when switching to fuel oil combustion.</li>
  <li>Coking inside heater tubes can lead operators to increase heat flux, which may elevate component temperatures above critical levels for fuel ash corrosion.</li>
  <li>Superheaters and reheaters with metal temperatures exceeding ~1000 °F (540 °C) are at risk of corrosion due to molten sulfate formation.</li>
  <li>Oil-fired boilers using low-vanadium fuel oils are less susceptible to fuel ash corrosion.</li>
  <li>Waterwall tubes can avoid corrosion if kept below 700 °F (370 °C); steam systems operating under 1800 psi (12.5 MPa) are generally safe.</li>
</ul>
`,
appearance: `
<ul>
  <li>Oil ash corrosion appears as severe metal loss associated with slagging; corrosion rates may range from 100 mpy to 1000 mpy (2.5–25 mm/yr).</li>
  <li>Oil ash often produces a surface with deep, round pits.</li>
  <li>Liquefied corrodents can fuse into a hard, glassy, and tenacious scale layer.</li>
  <li>Coal ash corrosion usually presents a smooth interface between the slag layer and the metal.</li>
  <li>Metallographic and deposit analysis techniques confirm fuel ash corrosion; oil ash often forms two-layered deposits, with the inner layer dark gray or black.</li>
  <li>Waterwall tubes may show circumferential and some axial thermal fatigue cracks, appearing as grooving due to repeated thermal cycling.</li>
  <li>Slag shedding exposes bare tubes to firebox heat, causing temperature spikes (~100 °F or 55 °C) and initiating fatigue damage.</li>
  <li>Steam-cooled tubes undergo a similar mechanism but with milder thermal fatigue due to lower temperature spikes.</li>
  <li>After corrosion scale removal, superheaters and reheaters may exhibit an “alligator-hide” surface texture.</li>
  <li>Circumferential cracking in waterwalls of coal-fired boilers is also linked to this corrosion mechanism.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Prevent corrosion by blending fuels or switching to fuels with lower contaminant levels (e.g., sodium, vanadium).</li>
  <li>Operate equipment to keep metal surface temperatures below the melting point of harmful deposits.</li>
  <li>Optimize burner design and management to reduce flame impingement and localized hot spots.</li>
  <li>Use low excess oxygen firing or inject special additives into the fuel to:
    <ul>
      <li>Raise the melting point of slags</li>
      <li>Reduce deposit stickiness</li>
      <li>Protect oxide scales from being dissolved</li>
    </ul>
  </li>
  <li>Ensure regular cleaning of metal surfaces to remove slag and corrosion products—slag removal is essential even with mitigation measures.</li>
  <li>Upgrade components (e.g., tube hangers/supports) to 50Cr-50Ni alloys (like Alloy 657) to improve corrosion resistance at high temperatures.</li>
  <li>Adjust design to compensate for lower stress-rupture strength of 50Cr-50Ni materials.</li>
  <li>Maintain combined sodium + vanadium levels in fuel below 50 ppm to limit slag-related corrosion.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Visual Testing (VT) is usually sufficient to detect fuel ash corrosion.</li>
  <li>Significant metal loss is typical, and slag deposits are often visibly apparent.</li>
  <li><strong>Note:</strong> Tubes may require grit blasting to remove hard, glass-like slag for proper inspection.</li>
  <li>Ultrasonic Testing (UT) can be used to measure wall thickness loss accurately.</li>
</ul>
`,
    imagePath: "image/fuel_ash_corrosion.png"
},
"Gaseous Oxygen-Enhanced Ignition and Combustion": {
  description: `
Many metals that are non-flammable in normal air can become flammable in oxygen-rich environments (above 25% oxygen), even at low pressures. In such environments, both metallic and non-metallic components may spontaneously ignite or combust, leading to fires or explosions if the system is not properly designed, maintained, or operated. Once ignition occurs, the presence of high oxygen purity, pressure, and temperature significantly increases the intensity and speed of combustion.
`,
  affectedMaterials: `
<ul>
  <li>Carbon steels and low-alloy steels are flammable in oxygen-rich environments above ~15 psig (0.1 MPa), but can be safely used with special precautions.</li>
  <li>300 series stainless steels offer better resistance and are difficult to ignite below 200 psig (1.4 MPa).</li>
  <li>Copper alloys (with >55% copper) and nickel alloys (with >50% nickel) are highly fire-resistant and suitable for impingement and turbulent services (e.g., valves, instrumentation). Alloy 400 is notably resistant.</li>
  <li>Aluminum, though used in oxygen cylinders, is avoided in flowing oxygen systems due to its ease of ignition and high energy release upon combustion.</li>
  <li>Plastics, elastomers, and hydrocarbon lubricants ignite easily and are minimized in oxygen service.</li>
  <li>Titanium and its alloys are avoided because they ignite easily (at pressures as low as 1 psia / 7 kPa) and burn intensely. Most industry guidelines caution against their use in oxygen systems.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Ignition risk increases with:
    <ul>
      <li>High oxygen pressure (especially &gt; 500 psi)</li>
      <li>High oxygen velocity (can cause particle impingement and turbulence)</li>
      <li>Elevated temperatures (non-metals may ignite as low as 150°C / 300°F; metals around 900°C / 1650°F)</li>
      <li>Presence of flammable contaminants like oil, grease, or debris</li>
      <li>Small/thin components (e.g., screens, mesh pads) with high surface area</li>
      <li>High oxygen concentration (more oxygen = more intense combustion)</li>
    </ul>
  </li>
  <li>System cleanliness is critical — even minor contamination can act as kindling.</li>
  <li>Piping geometry influences risk — elbows, valves, and tees are high-risk due to turbulence and impact zones.</li>
  <li>Heat of compression or sudden pressurization can cause spontaneous ignition in confined spaces.</li>
  <li>Design must minimize sharp changes in flow direction, avoid impingement, and ensure oxygen-compatible materials.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Applicable to any unit that uses oxygen or oxygen-enriched air for combustion or processing.</li>
  <li>Common affected units include:
    <ul>
      <li>Sulfur Recovery Units (SRUs)</li>
      <li>Fluid Catalytic Cracking (FCC) units</li>
      <li>Gasification units</li>
      <li>Partial Oxidation (POX) units</li>
    </ul>
  </li>
  <li>Oxygen piping systems, especially at:
    <ul>
      <li>Valves</li>
      <li>Regulators</li>
      <li>Areas with flow impingement or turbulence</li>
    </ul>
  </li>
  <li>Non-metallic components (e.g., seals and seats) are more susceptible to ignition than metals.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Severe damage may occur if the pressure boundary is breached due to fire — resulting in visible structural destruction and burned metal components.</li>
  <li>Visible external signs like glowing metal, discoloration, or heat tint often indicate internal oxygen fire or localized combustion.</li>
  <li>Damage may originate from accumulated flammable debris igniting at low points inside the system.</li>
  <li>Minor localized damage may occur (e.g., a burned valve seat) without external signs — discovered only during maintenance or failure to operate properly.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Follow industry-recommended oxygen service design and maintenance guidelines.</li>
  <li>Oxygen fires are sudden events — not progressive damage — so prevention is critical.</li>
  <li>Maintain system cleanliness at all times; clean thoroughly after inspections or maintenance.</li>
  <li>Keep oxygen gas velocity within safe limits — typically below 100 fps (30 m/s).</li>
  <li>Use only components and materials approved for oxygen service.</li>
  <li>Minimize lubricant use; use only oxygen-compatible lubricants when necessary.</li>
  <li>Avoid unnecessary disassembly or inspection that could introduce contaminants.</li>
  <li>Review and validate all system changes before increasing pressure, temperature, or flow velocity.</li>
  <li>Minimize sudden pressurization to avoid ignition from adiabatic compression (especially in valves, seals, non-metallic components).</li>
  <li>Avoid plastic piping in oxygen systems.</li>
</ul>
`,

inspection: `
<ul>
  <li>Commercial oxygen is typically dry and non-corrosive at ambient temperatures — damage occurs only under specific ignition conditions.</li>
  <li>This damage is sudden and catastrophic, not progressive — it generally cannot be detected in advance through inspection.</li>
  <li>Watch for tell-tale signs of minor internal fires, such as:
    <ul>
      <li>External heat damage or discoloration</li>
      <li>Malfunctioning valves or components with nonmetallic internals</li>
    </ul>
  </li>
  <li>Use blacklights to detect hydrocarbon contamination on surfaces.</li>
</ul>
`,
   imagePath: "image/combustion.png"
},


"High-temperature H₂/H₂S Corrosion": {
  description: `
The presence of hydrogen in H₂S-containing hydrocarbon streams increases the severity of high-temperature sulfidation corrosion above ~450°F (230°C).<br>
This form of corrosion results in smooth, large, and relatively uniform metal loss, which can lead to rupture-type failures instead of localized leaks.<br>
More detailed guidance is available in API 939-C.
`,
  affectedMaterials: `
<ul>
  <li>Carbon steel — lowest resistance</li>
  <li>Low-alloy steels</li>
  <li>400 series stainless steels</li>
  <li>300 series stainless steels — higher resistance</li>
  <li>At least 9Cr-1Mo alloy is typically required for practical, effective improvement over carbon steel</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Key influencing factors: temperature, hydrogen presence, H₂S concentration and partial pressure, vapor/liquid ratio, and alloy composition.</li>
  <li>Corrosion behavior changes significantly with hydrogen — differs from H₂-free high-temperature sulfidation.</li>
  <li>Corrosion rates rise sharply with increasing H₂S content and temperature.</li>
  <li>Chromium improves resistance, especially at levels ≥ 7–9% Cr. Below this range, improvement is limited.</li>
  <li>Chromium-containing nickel-based alloys offer resistance comparable to stainless steels.</li>
  <li>High-pressure units (e.g., hydrocrackers, gas oil hydrotreaters) experience more corrosion than lower-pressure units due to higher H₂S partial pressure.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Occurs in piping and equipment exposed to high-temperature H₂/H₂S streams, especially in hydroprocessing units.</li>
  <li>Most commonly found in hydrotreaters and hydrocrackers.</li>
  <li>Corrosion rates increase noticeably downstream of the hydrogen injection point due to conversion of reactive sulfur to H₂S.</li>
</ul>
`,
  appearance: `
<ul>
  <li>Corrosion appears as uniform wall thinning on the process side.</li>
  <li>Accompanied by the formation of iron sulfide scale — typically multiple layers.</li>
  <li>The scale can be about five times the volume of the lost metal.</li>
  <li>Shiny, tightly adherent gray scale may resemble unaffected metal and lead to misinterpretation.</li>
</ul>
`,
  mitigation: `
<ul>
  <li>Use alloys with sufficient chromium content to resist sulfidation.</li>
  <li>300 series stainless steels (304L, 316L, 321, 347) show high resistance at typical service temperatures.</li>
  <li>Aluminum diffusion coatings can extend life of thin components (e.g., SS catalyst support screens).</li>
  <li>Review process simulations regularly to detect any increase in H₂S levels.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Use UT thickness measurement or RT to detect thinning in piping and tubing.</li>
  <li>For vessels, use internal visual inspection (VT) and UT for thickness measurement.</li>
  <li>Permanently mounted thickness sensors enable continuous monitoring.</li>
  <li>Heater tubes can be checked by UT or smart pigging — smart pigs often provide better coverage.</li>
  <li>Compare actual vs. design operating temperatures; monitor for rising sulfur or temperature levels.</li>
  <li>Use tube-skin thermocouples and/or infrared thermography for temperature monitoring.</li>
</ul>
`,
   imagePath: "image/High_temperature_H₂_H₂S_Corrosion.png"
},


"Metal Dusting": {
  description: `
  <ul>
    <li>Metal dusting causes accelerated localized pitting in streams containing carbon and oxygen.</li>
    <li>Pits may contain carbon soot and metal dust particles, and penetration rates can exceed 1000 mpy.</li>
    <li>Occurs when carbon activity is above 1, involving the Water Gas Shift and Boudouard reactions:
      <ul>
        <li>CO + H<sub>2</sub>O ⇌ CO<sub>2</sub> + H<sub>2</sub> (Water Gas Shift)</li>
        <li>2CO ⇌ CO<sub>2</sub> + C (Boudouard Reaction)</li>
      </ul>
    </li>
    <li>In wrought alloys, grains are extracted rapidly due to deep grain boundary attack.</li>
    <li>In cast alloys, damage is known as “green rot,” where interdendritic regions are penetrated, leaving an oxide scale but holding dendrites in place.</li>
  </ul>
`,

  affectedMaterials: `
  <ul>
    <li>Low-alloy steels</li>
    <li>300 series stainless steels</li>
    <li>Nickel-based alloys</li>
    <li>Heat-resisting alloys</li>
    <li>Note: No alloy is fully immune under all conditions.</li>
    <li>Aluminized coatings forming alumina (Al<sub>2</sub>O<sub>3</sub>) offer some protection.</li>
  </ul>
`,

  criticalFactors: `
  <ul>
    <li>Process stream composition, operating temperature, and alloy composition are critical drivers.</li>
    <li>Metal dusting is preceded by carburization and characterized by rapid metal loss.</li>
    <li>Occurs commonly in syngas and steam reforming processes under reducing conditions with carbon activity &gt; 1.</li>
    <li>Temperature range: 
      <ul>
        <li>Occurs from 900–1500 °F (480–815 °C), with peak damage near 1500 °F (815 °C).</li>
        <li>Below 900 °F, metal loss is limited due to slow kinetics; above 1500 °F, reactions drop below carbon activity 1.</li>
      </ul>
    </li>
    <li>Mechanism involves:
      <ul>
        <li>Carburization of metal matrix</li>
        <li>Carbide precipitation at grain boundaries</li>
        <li>Graphite deposition on carbides</li>
        <li>Decomposition of carbides, forming metal dust</li>
        <li>Graphite catalysis by exposed metal particles</li>
      </ul>
    </li>
    <li>In high-nickel alloys, attack may occur without metal carbide formation.</li>
    <li>Preferential grain boundary attack removes metal grains as “dust.”</li>
  </ul>
`,

  affectedUnits: `
  <ul>
    <li>Units with process gases that include CO, H<sub>2</sub>O, CO<sub>2</sub>, H<sub>2</sub>.</li>
    <li>Common examples:
      <ul>
        <li>Steam reformer heater outlets</li>
        <li>Gas turbines</li>
        <li>Methanol reformer outlet piping</li>
        <li>Thermal hydrodealkylation furnaces</li>
        <li>POX (partial oxidation) units</li>
      </ul>
    </li>
  </ul>
`,

  appearance: `
  <ul>
    <li>In low-alloy steels:
      <ul>
        <li>Severe damage, often small rounded pits filled with metal particles and carbon soot.</li>
        <li>May also appear as general thinning or thru-wall perforation.</li>
      </ul>
    </li>
    <li>Voluminous corrosion product: carbon dust with metal oxides, carbides, and soot.</li>
    <li>Dust often swept away, leaving visibly thinned or pitted surfaces.</li>
    <li>In stainless and high-alloy steels:
      <ul>
        <li>Attack is typically localized as deep round pits.</li>
      </ul>
    </li>
    <li>Metallography shows carburization beneath the corroded surface.</li>
  </ul>
`,

  mitigation: `
  <ul>
    <li>Maintain sulfur species (e.g. H<sub>2</sub>S or disulfide) &lt; 10 ppm to suppress carbon absorption.</li>
    <li>Avoid excess sulfur to prevent sulfidation or catalyst poisoning.</li>
    <li>No fully resistant alloys exist; material selection depends on service conditions.</li>
    <li>Use refractory lining to keep metal below metal dusting temperature range.</li>
    <li>Alonizing or aluminum diffusion coatings may improve resistance.</li>
    <li>Maintain carbon activity &lt; 1 by:
      <ul>
        <li>Controlling gas composition</li>
        <li>Maintaining steam-to-carbon ratio above 2–3 in reformers</li>
      </ul>
    </li>
  </ul>
`,

  inspection: `
  <ul>
    <li>Metal dusting usually progresses rapidly and is often discovered only after failure or through-wall metal loss.</li>
    <li>Most accurate confirmation is through <strong>destructive testing</strong> (e.g., sampling for chemical or physical signs).</li>
    <li>If internal surfaces are accessible, <strong>visual inspection (VT)</strong> can reveal:
      <ul>
        <li>Severe metal wastage</li>
        <li>Numerous rounded pits</li>
        <li>Uniform thinning</li>
        <li>Thru-wall perforations</li>
      </ul>
    </li>
    <li><strong>Radiographic testing (RT)</strong> can detect:
      <ul>
        <li>Pitting</li>
        <li>Cracking</li>
        <li>Wall thinning</li>
      </ul>
    </li>
    <li>Filtering cooled furnace/reactor effluent may reveal <strong>metal dust particles</strong>—an indication of upstream metal dusting.</li>
    <li><strong>Intelligent pigging</strong> with engineering assessment has shown success in identifying and quantifying damage.</li>
  </ul>
`,
 imagePath: "image/metal_dusting.png"
 },

"Nitriding": {
  description: `
  <ul>
    <li>Nitriding results in a hard, brittle surface layer on some alloys due to exposure to high-temperature nitrogen-rich process streams.</li>
    <li>Common nitrogen sources include ammonia and cyanides, particularly under reducing conditions.</li>
    <li>This brittle layer may reduce corrosion resistance, ductility, weldability, and fracture toughness.</li>
    <li>Though the hardened surface may not affect structural integrity, cracks can initiate and propagate into the base metal.</li>
    <li>Note: Nitriding is also intentionally applied during manufacturing for wear resistance (case hardening).</li>
  </ul>
`,
affectedMaterials: `
  <ul>
    <li>Carbon steel</li>
    <li>Low-alloy steels</li>
    <li>400 series stainless steels</li>
    <li>300 series stainless steels</li>
    <li><strong>Nickel-based alloys</strong> show greater resistance to nitriding.</li>
  </ul>
`,
criticalFactors: `
  <ul>
    <li>Process is diffusion-controlled and depends on:
      <ul>
        <li>Temperature</li>
        <li>Exposure time</li>
        <li>Partial pressure of nitrogen</li>
        <li>Base metal composition</li>
      </ul>
    </li>
    <li>Nitrogen diffusion occurs more rapidly above 900 °F (480 °C), but begins at 600 °F (315 °C).</li>
    <li>Above 770 °F (410 °C), grain boundary nitriding may cause microcracking and embrittlement.</li>
    <li>Higher nitrogen activity in the gas phase promotes nitriding.</li>
    <li>Nickel content (30%–80%) improves resistance to nitriding.</li>
  </ul>
`,
affectedUnits: `
  <ul>
    <li>Nitriding is rare in most refining environments but has been observed in:
      <ul>
        <li>Steam-methane reformers</li>
        <li>Steam cracking (olefin) units</li>
        <li>Ammonia synthesis plants</li>
      </ul>
    </li>
  </ul>
`,

  appearance: `
  <ul>
    <li>Cracks on the surface may appear due to brittleness from nitriding. (Figures 3-47-1 to 3-47-3)</li>
    <li>The surface often has a dull, dark gray appearance, but confirmation requires metallography.</li>
    <li>Needle-like iron nitrides (Fe₃N or Fe₄N) form in the nitrided layer and are only visible via metallography.</li>
    <li>Advanced nitriding shows high surface hardness, confirmed by microhardness testing.</li>
    <li>Low-alloy steels (up to 12% Cr) may experience surface volume increase, leading to cracking and flaking.</li>
    <li>300 series SS may develop thin, brittle layers that crack and spall under thermal stress.</li>
  </ul>
`,
mitigation: `
  <ul>
    <li>If nitriding is a concern, upgrading to an alloy containing 30–80% nickel is the preferred mitigation strategy.</li>
    <li>It is generally not practical to reduce nitrogen partial pressure or operating temperature.</li>
  </ul>
`,
inspection: `
  <ul>
    <li>Destructive testing (metallography) is usually required for confirmation and depth assessment.</li>
    <li>Visual clues: dull gray surface or glazed finish (especially on cast tubes).</li>
    <li>Inspect areas with elevated temperatures under similar process conditions.</li>
    <li>Surface hardness testing may help—values above 400–500 HB can indicate nitriding, though not conclusive.</li>
    <li>Check 300 series SS with a magnet—nitrided layers are magnetic (note: some cast 300 SS are magnetic by default).</li>
    <li>Eddy Current Testing (ECT) can detect nitriding, even before cracking starts.</li>
    <li>Advanced-stage detection tools: PT (penetrant testing), MT (magnetic particle), and angle beam UT (SWUT or PAUT).</li>
  </ul>
`,
 imagePath: "image/Nitriding.png"
},

"Oxidation": {
  description: `
<ul>
  <li>Oxygen, typically present in air (~21%), reacts with metals at elevated temperatures.</li>
  <li>This reaction forms oxide scale on carbon steel and alloys.</li>
  <li>Oxide formation leads to gradual reduction in metal wall thickness over time.</li>
  <li>Damage rate increases with temperature, oxygen content, and exposure duration.</li>
</ul>
`,
  affectedMaterials: `
<ul>
  <li>All iron-based materials, including carbon steel and low-alloy steels (cast and wrought).</li>
  <li>All 300 series stainless steels and 400 series stainless steels.</li>
  <li>Nickel-based alloys — all oxidize to varying degrees depending on alloy composition and temperature.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Primary influencing factors: metal temperature and alloy composition.</li>
  <li>Oxidation of carbon steel becomes significant above ~1000°F (540°C).</li>
  <li>Metal loss rates increase with higher temperatures.</li>
  <li>Resistance is strongly linked to chromium content — higher Cr means more protective oxide scale.</li>
  <li>300 series stainless steels resist scaling up to ~1500°F (815°C).</li>
  <li>Water vapor can significantly accelerate oxidation in some steels (e.g., 9Cr-1Mo).</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Fired heaters</li>
  <li>Boilers</li>
  <li>Combustion equipment</li>
  <li>Piping and components exposed to high-temperature, oxygen-containing environments</li>
  <li>Any equipment where metal temperatures exceed ~1000°F (540°C)</li>
</ul>
`,

  appearance: `
<ul>
  <li>Carbon steel, low-alloy steels, and 12Cr SS typically show general wall thinning with external oxide scale.</li>
  <li>Appearance varies with temperature and exposure time.</li>
  <li>300 series stainless steels and nickel alloys often show thin, dark oxide scales.</li>
  <li>Excessive oxidation at very high temperatures can lead to visible metal loss even in stainless steels and nickel alloys.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Upgrade to alloys with better oxidation resistance to reduce damage.</li>
  <li>Chromium is the most effective element in resisting oxidation — higher Cr = more resistance.</li>
  <li>Silicon and aluminum also help, but their content is limited due to negative effects on mechanical properties.</li>
  <li>Special high-temperature alloys are used in burner tips, heater supports, and combustion system components.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Monitor process conditions to detect trends in high-temperature exposure that may lead to oxidation.</li>
  <li>Use tube-skin thermocouples and/or infrared thermography to monitor surface temperatures.</li>
  <li>RT can assess remaining wall thickness when external oxidation is present. Surface oxide may need removal (e.g., flapper wheel) for UT measurements.</li>
  <li>UT can directly measure remaining thickness where internal oxidation occurs.</li>
  <li>EMAT can detect general external wall loss on heater tubes due to oxidation.</li>
</ul>
`,
  imagePath: "image/oxidation.png"
 },

"Sulfidation": {
  description: `
<ul>
  <li>Corrosion of carbon steel and other alloys due to reaction with sulfur compounds at high temperatures.</li>
  <li>This refers to sulfidation without hydrogen; with hydrogen is covered under High-temperature H₂/H₂S corrosion.</li>
  <li>Also known as sulfidic corrosion.</li>
  <li>Typically produces a smooth, uniformly corroded surface.</li>
  <li>May result in rupture-type failures rather than localized pinhole leaks.</li>
  <li>For comprehensive guidance, refer to API 939-C.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>All iron-based materials:
    <ul>
      <li>Carbon steel (most susceptible)</li>
      <li>Low-alloy steels</li>
      <li>400 series stainless steels</li>
      <li>300 series stainless steels (less susceptible)</li>
    </ul>
  </li>
  <li>Nickel-based alloys — affected depending on chromium content; at >1193 °F (645 °C), high-nickel alloys may suffer sub-surface nickel sulfide formation (a.k.a. hot corrosion).</li>
  <li>Susceptibility increases with nickel content.</li>
  <li>Copper-based alloys — form sulfide corrosion products at lower temperatures than carbon steel.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Key factors influencing sulfidation:
    <ul>
      <li>Metal composition</li>
      <li>Temperature</li>
      <li>Concentration of reactive sulfur compounds</li>
      <li>Flow conditions (can increase corrosion rate)</li>
    </ul>
  </li>
  <li>Resistance to sulfidation improves with increasing chromium content in iron-based and nickel-based alloys.</li>
  <li>300 series stainless steels (e.g., 304, 316, 321, 347) are highly resistant under most refining conditions.</li>
  <li>Nickel-based alloys require sufficient chromium; low-chromium nickel alloys are poor in sulfidation resistance.</li>
  <li>Carbon steel’s silicon content affects corrosion rate:
    <ul>
      <li>Steels with Si ≥ 0.10% (e.g., A106) show better resistance.</li>
      <li>Low-Si steels (e.g., A53) have higher and variable corrosion rates.</li>
    </ul>
  </li>
  <li>Metal loss is impacted by sulfide scale properties:
    <ul>
      <li>Protective if the scale is dense, adherent, and continuous.</li>
      <li>Less protective in turbulent or chemically aggressive flows.</li>
    </ul>
  </li>
  <li>Sulfidation generally begins at metal temperatures &gt; 450 °F (230 °C), but practical concern arises above 500 °F (260 °C).</li>
  <li>Crude oils and hydrocarbons contain a variety of sulfur species; not all contribute equally to sulfidation.</li>
  <li>H₂S and other thermally-decomposed sulfur species are most responsible for high-temperature sulfidation.</li>
  <li>Weight % sulfur alone is not always reliable in predicting corrosion risk.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Sulfidation occurs in piping and equipment exposed to high-temperature sulfur-containing liquid, vapor, or mixed-phase streams.</li>
  <li>Commonly affected process units:
    <ul>
      <li>Crude distillation units</li>
      <li>Vacuum distillation units</li>
      <li>Fluid catalytic cracking (FCC) units</li>
      <li>Coker units</li>
      <li>Visbreaker units</li>
      <li>Hydroprocessing unit feed sections (before hydrogen injection)</li>
    </ul>
  </li>
  <li>In hydroprocessing units, once hydrogen is introduced, high-temperature H₂/H₂S corrosion becomes the dominant mechanism.</li>
  <li>Coker heaters made from high-nickel alloys (e.g., Alloy 800H) have shown accelerated sulfidation in lower radiant sections operating &gt; 1193 °F (645 °C).</li>
  <li>Heaters fired with oil, gas, or coke may be susceptible depending on the sulfur content of the fuel.</li>
  <li>Most heaters now use low-sulfur gas to comply with environmental regulations, especially in the U.S.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Corrosion typically appears as uniform metal thinning but may also present as localized or erosion-corrosion damage in high-velocity areas.</li>
  <li>Thinning is generally uniform but can vary greatly within the same system or along a piping run.</li>
  <li>Marked difference in wall loss may be seen between low-silicon (&lt; 0.10% Si) and high-silicon (≥ 0.10% Si) pipe sections, often visible as step changes in wall thickness.</li>
  <li>Surfaces are typically covered with sulfide scale.</li>
  <li>Scale thickness depends on:
    <ul>
      <li>Alloy composition</li>
      <li>Corrosiveness of the process stream</li>
      <li>Flow regime and fluid velocity</li>
    </ul>
  </li>
</ul>
`,

  mitigation: `
<ul>
  <li>Upgrade to higher-chromium materials (e.g., 9Cr-1Mo) to improve sulfidation resistance.</li>
  <li>Use solid or clad (or overlaid) 300 series stainless steels for strong corrosion resistance.</li>
  <li>400 series stainless steel cladding can improve performance over carbon steel, but solid 400 SS is typically avoided due to embrittlement risks.</li>
  <li>Aluminum diffusion coatings on carbon and low-alloy steels can reduce sulfidation and scale, but may not provide full protection.</li>
  <li>For temperatures above 1193 °F (645 °C), select higher-nickel alloys with lower Ni content to reduce sulfidation rates.</li>
</ul>
`,
temperatureComparison: `
<ul>
  <li><strong>High-Temperature Sulfidation Onset:</strong>
    <ul>
      <li>API 571: Starts above 450 °F (230 °C), practical concern above 500 °F (260 °C)</li>
      <li>API 581: Starts above 450 °F (232 °C)</li>
      <li><em>Difference:</em> 571 adds practical threshold of 500 °F (260 °C) for inspection focus</li>
    </ul>
  </li>
  <li><strong>Naphthenic Acid Corrosion (NAC) Range:</strong>
    <ul>
      <li>API 571: Not explicitly defined here, assumed 450–800 °F (232–427 °C)</li>
      <li>API 581: 450–800 °F (232–427 °C); ceases above 800 °F due to acid breakdown or vaporization</li>
      <li><em>Difference:</em> Temperature range aligns; 581 clearly defines upper cutoff at 800 °F</li>
    </ul>
  </li>
  <li><strong>NAC + Sulfidation Overlap:</strong>
    <ul>
      <li>API 581: Both mechanisms may be active in the 450–800 °F (232–427 °C) range</li>
      <li>API 571: Highlights that NAC occurs only in liquid phase; sulfidation occurs in both phases</li>
      <li><em>Note:</em> NAC may be more severe at low sulfur levels due to lack of protective sulfides</li>
    </ul>
  </li>
</ul>
`,

  inspection: `
<ul>
  <li>Use UT thickness measurement or RT to detect and measure thinning in piping, tubing, and equipment.</li>
  <li>For pressure vessels and large piping, internal VT followed by UT is useful if access is available.</li>
  <li>Permanently mounted thickness monitoring sensors can provide continuous monitoring.</li>
  <li>Use UT or smart pigging for heater tubes; smart pigging offers better coverage and detection than spot UT.</li>
  <li>Verify actual operating temperatures and compare them to design; monitor sulfur levels for increases.</li>
  <li>Temperature monitoring can be done using tube-skin thermocouples or infrared thermography.</li>
  <li>Use proactive and retroactive MVPs (Materials Verification Programs) to verify alloy type and detect mix-ups (see API 578).</li>
  <li>Many refiners use wall thickness checks on carbon steel piping in sulfidation service to identify low-silicon components.</li>
  <li>Some refiners use PMI-type testing to determine silicon content in vulnerable piping systems.</li>
</ul>
`,
  imagePath: "image/sulfidation.png"
},
  
"High-temperature Hydrogen Attack (HTHA)": {
  description: `
    <ul>
      <li>Hydrogen reacts with carbon in steel at high temperature and pressure, forming methane (CH₄).</li>
      <li>Surface decarburization may occur, indicating potential internal damage.</li>
      <li>Internal CH₄ builds pressure, causing bubbles, microfissures, and cracks.</li>
      <li>Cracks reduce the pressure-holding capacity and may lead to failure.</li>
      <li>Blistering may occur from molecular hydrogen or CH₄ in weak zones.</li>
      <li>Refer to API RP 941 for detailed HTHA guidance.</li>
    </ul>
  `,
  affectedMaterials: `
    <ul>
      <li>Susceptibility decreases in this order:<br>As-welded carbon steel &lt; non-welded carbon steel &lt; PWHT carbon steel &lt; C-0.5Mo &lt; Mn-0.5Mo &lt; 1Cr-0.5Mo &lt; 1.25Cr-0.5Mo &lt; 2.25Cr-1Mo &lt; 2.25Cr-1Mo-V &lt; 3Cr-1Mo &lt; 5Cr-0.5Mo.</li>
      <li>300 series stainless steels and high-Cr alloys (5Cr, 9Cr, 12Cr) are generally resistant under refinery conditions.</li>
    </ul>
  `,
  criticalFactors: `
    <ul>
      <li>Resistance improves with increased Cr and Mo alloy content.</li>
      <li>Key factors: temperature, H₂ partial pressure, exposure time, and tensile stress.</li>
      <li>Safe operating limits are defined by API RP 941 curves (Figure 3-36-1).</li>
      <li>Operation below the curve = safe; above the curve = risk of HTHA.</li>
      <li>Damage starts after an "incubation period" with no detectable changes.</li>
      <li>Incubation time can range from hours to years based on severity.</li>
      <li>Damage is irreversible and cumulative over time.</li>
      <li>Tensile stress (applied or residual) accelerates damage.</li>
      <li>PWHT helps reduce HTHA risk in carbon steel welds.</li>
    </ul>
  `,
  affectedUnits: `
    <ul>
      <li>Hydroprocessing units: hydrotreaters, hydrocrackers, catalytic reformers, ISOM units.</li>
      <li>Hydrogen systems: hydrogen manufacturing, hydrogen cleanup (e.g., PSA units).</li>
      <li>Boiler tubes in very high-pressure steam service.</li>
    </ul>
  `,
  appearance: `
    <ul>
      <li>Damage can occur unpredictably in weld HAZs, base metal, or less commonly in weld metal.</li>
      <li>Confirmed using metallography and SEM of damaged areas.</li>
      <li>Surface decarburization may be present.</li>
      <li>Internal decarburization leads to fissuring and cracking, detectable in later stages.</li>
      <li>Early-stage bubbles/cavities detectable by SEM; may resemble creep damage.</li>
      <li>Cracking is intergranular, often near pearlite regions in carbon steels.</li>
      <li>HAZ and fusion line cracking may occur due to localized HTHA.</li>
      <li>Blistering may be visible on the surface.</li>
    </ul>
  `,
  mitigation: `
    <ul>
      <li>Use Cr-Mo steels to enhance carbide stability and resist CH₄ formation.</li>
      <li>Tungsten and vanadium also help stabilize carbides.</li>
      <li>Apply safety margins (15–30°C and 170–345 kPa H₂ partial pressure) below API RP 941 curve limits.</li>
      <li>C-½Mo steels are no longer recommended for new high-H₂ temperature service due to past failures.</li>
      <li>Existing C-½Mo equipment should be reviewed for inspection effectiveness or considered for replacement.</li>
      <li>PWHT reduces HTHA risk in carbon steel welds; non-PWHT welds are more susceptible.</li>
      <li>300 series SS weld overlays, roll-bond cladding, and 400 series SS cladding reduce H₂ partial pressure at the base metal.</li>
      <li>Cladding is not typically credited in new design; base metal should be inherently HTHA-resistant.</li>
      <li>In existing equipment, cladding’s effect on partial pressure may be considered during risk assessment.</li>
    </ul>
  `,
  inspection: `
    <ul>
      <li>Damage can occur in base metal, weld HAZs, and occasionally in welds.</li>
      <li>HTHA may develop under cracked/disbonded cladding or overlay—inspect with PT and VT for such areas.</li>
      <li>FMR can detect fissures and decarburization but is best for known damage zones; up to 2 mm metal removal may be needed.</li>
      <li>VT may detect blisters, but surface blisters are uncommon in HTHA.</li>
      <li>NDE for internal HTHA is challenging and requires specialized skills.</li>
      <li>Promising methods: AUBT, ABSA (some success but not fully reliable), TOFD, and PAUT.</li>
      <li>Conventional NDE (WFMT, PT, MT) is generally ineffective unless cracking is surface-breaking.</li>
      <li>AET and ultrasonic velocity/attenuation methods are unreliable for HTHA detection.</li>
    </ul>
  `,
  imagePath: "image/htha.png"
},

"Hydrogen Embrittlement": {
  description: `
<ul>
  <li>Hydrogen embrittlement (HE) is the loss in strength, ductility, and/or fracture toughness of susceptible materials.</li>
  <li>It is caused by the penetration and diffusion of atomic hydrogen into the metal structure.</li>
  <li>Hydrogen embrittlement can lead to brittle cracking under stress, even at low applied loads.</li>
  <li>It may occur during manufacturing, welding, or in-service exposure to hydrogen-charging environments.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Low-alloy steels, high-strength steels, 400 series stainless steel, precipitation hardenable stainless steel, duplex stainless steel, and some high-strength nickel-based alloys.</li>
  <li>Carbon steel can suffer HE if hardened by cold work or welding.</li>
  <li>Steels with hardness greater than Rockwell HRC 22 are susceptible to HE in severe environments.</li>
  <li>Higher strength/hardness levels may be acceptable in milder environments.</li>
  <li>Blistering and hydrogen-induced cracking (HIC) are not considered forms of HE. (See Section 3.67, Wet H₂S Damage.)</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Five conditions must be satisfied for HE to occur:
    <ul>
      <li>The material must be susceptible.</li>
      <li>Hydrogen must be present at a critical concentration within the material.</li>
      <li>The strength/hardness level must be high enough and the microstructure must be susceptible.</li>
      <li>A stress above the HE threshold must be present (residual and/or applied stress).</li>
      <li>The temperature must be in the embrittling and cracking range (usually around ambient).</li>
    </ul>
  </li>
  <li>Common hydrogen sources include:
    <ul>
      <li><strong>Welding</strong> — Hydrogen from moist electrodes may cause delayed or underbead cracking.</li>
      <li><strong>Corrosion reactions</strong> — Especially in wet H₂S or HF acid services where sulfur/arsenic inhibit recombination, increasing hydrogen diffusion.</li>
      <li><strong>High-temperature hydrogen gas</strong> — >400 °F (205 °C) hydrogen gas dissociates into atomic hydrogen.</li>
      <li><strong>Acid cleaning/pickling</strong> — May introduce hydrogen into susceptible metals.</li>
      <li><strong>Manufacturing/plating</strong> — Such as cadmium-plated high-strength bolts (hydrogen flaking).</li>
      <li><strong>Cathodic protection</strong> — Hydrogen formed on surfaces can lead to HE if metal is susceptible.</li>
    </ul>
  </li>
  <li>HE is most pronounced near ambient temperature; effects drop rapidly above 150 °F (65 °C) and fade above 300 °F (150 °C).</li>
  <li>HE affects static properties more than impact properties. Cracking can occur suddenly if hydrogen is present with stress.</li>
  <li>Trapped hydrogen is influenced by surface condition, corrosion, and presence of traps (defects, inclusions, flaws).</li>
  <li>The critical hydrogen level for HE depends on strength, microstructure, and heat treatment. Thresholds may exist.</li>
  <li>Stress causing HE cracking can come from welding, manufacturing, PWHT, or applied mechanical loads.</li>
  <li>Thick wall equipment is more vulnerable due to stress and longer hydrogen diffusion time.</li>
  <li>Higher strength = higher HE susceptibility. Untempered martensite is more vulnerable than tempered.</li>
  <li>HE is reversible by baking out hydrogen at elevated temperature, as long as no cracks have formed.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Cr-Mo reactors, drums, exchanger shells, and piping in hydroprocessing and catalytic reforming units may crack if weld HAZ hardness exceeds Brinell 225.</li>
  <li>Storage spheres made from higher-strength steels (>70 ksi tensile strength) are more susceptible to HE if not stress-relieved.</li>
  <li>High-strength steel bolts and springs (>150 ksi) are prone to cracking from hydrogen absorbed during electroplating.</li>
  <li>HE is a concern in components exposed to wet H₂S in FCC, hydroprocessing, amine, sour water, and alkylation units. HE-resistant materials per NACE MR0103/ISO 17945 are typically required.</li>
  <li>Carbon steels commonly used in vessels/piping generally have low hardness and are not susceptible to HE if proper welding practices are followed.</li>
</ul>
`,

  appearance: `
<ul>
  <li>HE is not visible unless cracking has occurred.</li>
  <li>Cracks often initiate subsurface but typically become surface-breaking.</li>
  <li>Cracking occurs at high-stress zones like weld HAZs and restrained areas with high hardness.</li>
  <li>Macro-level appearance shows brittle cracking with little deformation; fracture surfaces appear brittle.</li>
  <li>Micro-level examination shows reduced ductile features compared to hydrogen-free fractures.</li>
  <li>Cracks are typically branched; in high-strength steels, intergranular cracking is common.</li>
</ul>
`,

  prevention: `
<ul>
  <li>Select appropriate alloy composition, fabrication method, and hardness limit based on service environment.</li>
  <li>Control hardness in hardenable steels and apply PWHT to reduce hardness and temper residual stresses.</li>
  <li>Use dry, low-hydrogen electrodes and proper preheating during welding.</li>
  <li>If hydrogen diffusion is suspected during welding, perform elevated temperature bake-out (400–600 °F or 205–315 °C).</li>
  <li>If hydrogen has entered the metal during operation, a similar bake-out may be needed before repair welding.</li>
  <li>For hot hydrogen service, use controlled shutdown and startup procedures to manage pressurization as a function of temperature.</li>
  <li>Use cladding, weld overlay, or protective linings in corrosive aqueous services to prevent hydrogen absorption.</li>
  <li>Avoid cadmium plating or similar coatings on high-strength bolts and fasteners.</li>
</ul>
`,

inspection: `
<ul>
  <li>PT, MT, or WFMT are effective for detecting surface-breaking HE cracks.</li>
  <li>Angle beam UT (e.g., SWUT or PAUT) may be used for detecting and sizing subsurface cracks.</li>
  <li>RT is generally not sensitive enough to detect HE cracks.</li>
  <li>VT is unreliable for detecting HE cracks.</li>
  <li>In low-temperature aqueous services, hydrogen flux can be monitored using specialized instruments.</li>
</ul>
`,
 imagePath: "image/Hydrogen_Embrittlement.png"
},

"Hydrogen Stress Cracking in Hydrofluoric Acid": {
  description: `Hydrogen atoms enter steel during HF acid exposure, combine with stress to cause brittle cracking.`,
  materials: `Carbon steel, low alloy steels`,
  criticalFactors: `HF acid concentration, presence of stress, poor metallurgy`,
  affectedUnits: `HF alkylation units, heat exchangers, piping`,
  appearance: `Stepwise internal cracking, parallel to surface, sometimes blisters`,
  mitigation: `Use carbon steel with strict hardness control, PWHT, use resistant alloys`,
  inspection: `UT, A-scan, MPI (on suspect weld zones)`
},

"Liquid Metal Embrittlement (LME)": {
  description: `Certain liquid metals (like Zn, Hg) diffuse into metal grain boundaries and cause severe brittle cracking.`,
  materials: `Stainless steels, nickel alloys, aluminum`,
  criticalFactors: `Contact with liquid metals (Zn, Pb, Hg), stress, temp ~ melting point of liquid metal`,
  affectedUnits: `Heat exchangers, welds near galvanizing, mercury handling units`,
  appearance: `Intergranular cracks with little deformation, sudden brittle failure`,
  mitigation: `Avoid incompatible material-metal pairings, remove liquid metal traces, proper joint design`,
  inspection: `Metallographic exam, SEM analysis, hardness mapping`
},

"Titanium Hydriding": {
  description: `Hydrogen diffuses into titanium under cathodic conditions or moist environments, forming brittle titanium hydride.`,
  materials: `Titanium and titanium alloys`,
  criticalFactors: `Moist or acidic environment, cathodic protection, weld HAZ`,
  affectedUnits: `Titanium vessels, heat exchangers, piping`,
  appearance: `Hard, brittle surface layer, may crack or spall`,
  mitigation: `Use CP within limit, reduce moisture, stress relief heat treatment`,
  inspection: `Metallography, microhardness test, cross-sectioning`
},

"Wet H₂S Damage (Blistering, HIC, SOHIC, SSC)": {
  description: `<ul>
  <li>This section covers four types of damage causing blistering and/or cracking of carbon steel in wet H₂S environments. One also affects low-alloy steels and some high-strength/hardenable materials.</li>
</ul>
`,

  hydrogenBlistering: `
<ul>
  <li>Bulges form primarily on the ID surface of pressure vessels.</li>
  <li>Rare in seamless pipe but can occur in seam-welded pipe.</li>
  <li>Caused by hydrogen atoms from corrosion reactions; sulfur acts as a recombination poison, allowing hydrogen to diffuse into steel.</li>
  <li>Hydrogen collects at discontinuities (inclusions, laminations), combines into H₂ gas, and becomes trapped, causing pressure buildup and blister formation.</li>
  <li>Blistering results only from hydrogen generated by corrosion, not process hydrogen gas.</li>
  <li>HCN increases damage by weakening protective films, raising corrosion and hydrogen charging rates.</li>
</ul>
`,

  hydrogenInducedCracking: `
<ul>
  <li>Caused by the same hydrogen charging mechanism as blistering.</li>
  <li>Instead of blisters, internal separations parallel to the surface form.</li>
  <li>H₂ gas pressure causes separations to grow and connect with other cracks.</li>
  <li>Can form through-wall leak paths when separations link across different wall planes.</li>
  <li>Often called “stepwise cracking” due to stair-step appearance of interconnected cracks.</li>
</ul>
`,

  stressOrientedHIC: `
<ul>
  <li>Formed from stacked HIC cracks that connect under high stress (residual or applied) to create through-thickness cracks perpendicular to the surface.</li>
  <li>Most common in base metal adjacent to weld HAZs due to welding residual stresses.</li>
  <li>Can initiate from stacked HIC, sulfide stress cracks, or other defects/stress concentrators.</li>
  <li>More damaging than HIC due to faster through-wall crack development.</li>
  <li>May occur without visible blistering, creating a false sense of security.</li>
</ul>
`,

  sulfideStressCracking: `
<ul>
  <li>Cracking of susceptible metal under tensile stress and corrosion in presence of water and H₂S.</li>
  <li>Form of hydrogen embrittlement caused by atomic hydrogen absorption from corrosion.</li>
  <li>Affects carbon steels, low-alloy steels, and martensitic stainless steels (e.g., Type 410) if hardness is too high.</li>
  <li>Can occur in localized high-hardness weld zones or HAZs without PWHT.</li>
  <li>PWHT reduces hardness and residual stresses in susceptible steels.</li>
  <li>Some steels contain RE elements forming hard areas that resist tempering; preheating minimizes these issues.</li>
  <li>Hard welds/hard spots can form with SAW when using active flux and high voltage.</li>
  <li>Time to failure decreases with increased steel strength, tensile stress, and hydrogen charging potential.</li>
</ul>
`,
  materials: `Carbon steel, low-alloy steels`,
  criticalFactors: `
    <ul>
      <li>A liquid water phase containing H₂S must be present and in contact with the steel for wet H₂S damage to occur.
          Equipment highly susceptible to SSC can fail even during short sour water excursions such as shutdowns.
          Critical influencing factors include environmental conditions (H₂S level, pH, contaminants, temperature),
          material properties (microstructure, hardness/strength), and tensile stress level (applied or residual).</li>
      <li>All wet H₂S damage mechanisms involve absorption and permeation of hydrogen into steels.</li>
      <li><strong>H₂S Level:</strong>
        <ul>
          <li>Hydrogen permeation increases with increasing H₂S partial pressure.</li>
          <li>50 ppmw H₂S in water is often cited as the minimum for damage, but cracking can occur at lower levels
              or during upset conditions.</li>
          <li>Even 1 ppmw H₂S can cause hydrogen charging.</li>
          <li>SSC susceptibility increases with H₂S partial pressure when a water phase is present.</li>
          <li>Above ~0.05 psia (0.0003 MPa) H₂S, SSC can occur in steels with tensile strength > 90 ksi,
              hardness > 237 HB in localized weld zones, or non-PWHT’d Cr-Mo welds.</li>
        </ul>
      </li>
      <li><strong>pH:</strong>
        <ul>
          <li>Hydrogen permeation is minimal near pH 7 and increases at higher or lower values.</li>
          <li>pH < 4 requires only ppm levels of H₂S to cause damage.</li>
          <li>Alkaline environments containing H₂S (e.g., ammonium bisulfide, rich amine solutions) can still cause damage.</li>
        </ul>
      </li>
      <li><strong>Contaminants:</strong>
        <ul>
          <li>Species that lower pH or increase corrosion accelerate hydrogen charging.</li>
          <li>HCN in alkaline sour water significantly increases corrosion and hydrogen permeation.</li>
          <li>At pH > 7.6 with 20 ppmw HCN, as little as 1 ppmw sulfide can cause SSC.</li>
        </ul>
      </li>
      <li><strong>Temperature:</strong>
        <ul>
          <li>Blistering, HIC, and SOHIC occur from ambient up to ~300 °F (150 °C) or higher.</li>
          <li>SSC potential peaks around 70 °F (20 °C) and decreases at higher/lower temps.</li>
          <li>SSC is mainly a concern below ~200 °F (95 °C), but susceptibility depends on hardness and environment.</li>
          <li>Materials hydrogen-charged at high temperature can crack on cooling.</li>
        </ul>
      </li>
      <li><strong>Microstructure:</strong>
        <ul>
          <li>Blistering and HIC are worsened by inclusions/laminations, especially elongated MnS inclusions.</li>
          <li>Clean steels can still be susceptible to SOHIC.</li>
        </ul>
      </li>
      <li><strong>Hardness:</strong>
        <ul>
          <li>SSC susceptibility increases above ~237 HB hardness.</li>
          <li>Blistering, HIC, SOHIC are not hardness-related.</li>
          <li>Welds in carbon steel should be < 200 HB to avoid SSC.</li>
          <li>High-strength/hardenable steels require PWHT to lower hardness and residual stress.</li>
        </ul>
      </li>
      <li><strong>Tensile Stress Level:</strong>
        <ul>
          <li>Blistering and HIC occur without stress.</li>
          <li>SOHIC stress often comes from weld residual stresses; PWHT can reduce risk.</li>
          <li>SSC stress can be applied or residual; harder steels need less stress to crack.</li>
        </ul>
      </li>
    </ul>
  `,
  affectedUnits: `Pressure vessels, pipelines, H₂S service equipment`,
  appearance: `Blisters, internal parallel cracks, stepwise cracking, sometimes leaks`,
  mitigation: `Use HIC-resistant steels, hardness < 22 HRC, stress relief, inhibitors`,
  inspection: `UT (A/B scan), PAUT, metallography, hardness testing`
},
"Amine Stress Corrosion Cracking": {
  description: `
<ul>
  <li>Cracking of steels under the combined action of tensile stress and aqueous alkanolamine solutions used to remove H₂S and/or CO₂ from hydrocarbon streams.</li>
  <li>Also referred to as alkaline stress corrosion cracking (ASCC).</li>
  <li>Most often occurs at or near non-postweld-heat-treated (non-PWHT’d) carbon steel welds or in highly cold-worked areas.</li>
  <li>Distinct from other SCC types in amine environments (see sections 3.66 and 3.12 for details).</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel</li>
  <li>Low-alloy steels</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Level of tensile stress, type of amine, and temperature.</li>
  <li>Higher residual stresses from welding or cold working increase cracking likelihood and severity.</li>
  <li>MEA and DEA services are most susceptible; also observed in MDEA and DIPA (ADIP).</li>
  <li>Cracking can occur down to ambient temperature for some amines (MEA in particular).</li>
  <li>PWHT is recommended for all lean amine systems to relieve stress and reduce SCC risk, regardless of temperature.</li>
  <li>Lean amine solutions are more prone to cracking than rich amine solutions; H₂S in rich amine forms protective FeS film.</li>
  <li>Exposure to steam out or short-term amine carryover can trigger cracking in non-PWHT’d equipment.</li>
  <li>Amine concentration does not significantly affect cracking propensity.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>All non-PWHT’d carbon steel piping and equipment in amine service: contactors, absorbers, strippers, filters, regenerators, heat exchangers.</li>
  <li>Equipment exposed to amine carryover.</li>
  <li>Rich amine service equipment is less susceptible than lean amine, but not immune.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Cracks initiate on process-side surfaces, primarily at welds.</li>
  <li>Cracks can appear in HAZ or weld metal, often in high residual stress zones beyond the metallurgical HAZ.</li>
  <li>Cracks typically develop parallel to the weld; weld metal cracks can be longitudinal or transverse.</li>
  <li>Radial cracks at set-on nozzles, parallel cracks at set-in nozzles.</li>
  <li>Crack surface may resemble wet H₂S cracking.</li>
  <li>Cracks can occur opposite external attachment welds due to residual stress.</li>
  <li>Metallographic analysis confirms intergranular, oxide-filled, branched cracking.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Stress relieve carbon steel welds in accordance with API 945 and NACE SP0472 (minimum stress-relief temperature 1175 ± 25 °F / 635 ± 15 °C).</li>
  <li>Apply same stress relief to repair welds and internal/external attachment welds.</li>
  <li>Consider solid or clad stainless steel or other corrosion-resistant alloys instead of carbon steel.</li>
  <li>Thoroughly water wash non-PWHT’d piping and equipment prior to welding, heat treatment, or steam out.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Wet fluorescent magnetic particle testing (WFMT), alternating current field measurement (ACFM), and eddy current testing (ECT) detect surface-breaking cracks. Proper surface preparation is required.</li>
  <li>Angle beam ultrasonic testing (SWUT and PAUT) detects and sizes cracks, suitable for piping inspections. Periodic monitoring of crack growth is possible.</li>
  <li>Liquid penetrant testing (PT) may be used but is less effective for tight, oxide-filled cracks.</li>
  <li>Radiography (RT) may not detect fine cracks effectively.</li>
  <li>Acoustic emission testing (AET) can locate cracks and monitor growth.</li>
</ul>
`,

  imagePath: "image/AmineSCC.png"
},


"Ammonia Stress Corrosion Cracking": {
  description: `
<ul>
  <li>Aqueous ammonia streams can cause SCC in certain copper alloys.</li>
  <li>Carbon steel is susceptible to SCC in anhydrous ammonia.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Copper-zinc alloys (brasses, admiralty brass, aluminum brasses), especially with >15% zinc, in aqueous ammonia or ammonium compounds.</li>
  <li>Carbon steel, particularly high-strength steel, in anhydrous ammonia.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li><strong>Copper alloys:</strong> residual stress, zinc content (>15% increases susceptibility), presence of water phase with ammonia, oxygen (even trace amounts), pH > 8.5, temperature (any), fabrication or tube rolling residual stresses.</li>
  <li><strong>Carbon steel:</strong> anhydrous ammonia with <0.2% water, temperature (cracking occurs even at ambient or refrigerated conditions), stress relief after welding eliminates susceptibility, oxygen contamination increases risk, high residual stresses from fabrication or welding.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Copper-zinc alloy tubes in heat exchangers (ammonia may be contaminant, added as acid neutralizer, in cooling water, or in steam/boiler feedwater systems).</li>
  <li>Non-stress-relieved carbon steel ammonia storage tanks, piping, and equipment in ammonia refrigeration units and some lube oil refining processes.</li>
</ul>
`,

  appearance: `
<ul>
  <li><strong>Copper alloys:</strong> surface-breaking cracks with bluish corrosion products, single or branched cracks, can be transgranular or intergranular depending on stress and environment.</li>
  <li><strong>Carbon steel:</strong> cracks at exposed non-stress-relieved welds and HAZs, primarily intergranular.</li>
</ul>
`,

  mitigation: `
<ul>
  <li><strong>Copper alloys:</strong> use alloys with <15% zinc; 90-10 Cu-Ni and 70-30 Cu-Ni have very low susceptibility; below 120 °F (50 °C), cupronickels are essentially immune; control air ingress in steam service; 300 series SS and nickel alloys are immune.</li>
  <li><strong>Carbon steel:</strong> maintain ≥0.2% water in ammonia; apply effective weld stress relief; use low-strength steels (<70 ksi); prevent oxygen ingress (<1 ppm); purge with nitrogen if needed.</li>
</ul>
`,

  inspection: `
<ul>
  <li><strong>Copper alloys:</strong> monitor pH and ammonia content in water draws; inspect heat exchanger tubes with ECT or VT; PT can be used in highly susceptible rolled areas.</li>
  <li><strong>Carbon steel:</strong> WFMT on welds and HAZs; eddy current array testing; angle beam UT (SWUT or PAUT); AET for crack location and growth monitoring.</li>
</ul>
`,

  imagePath: "image/AmmoniaSCC.png"
},

"Carbonate Stress Corrosion Cracking": {
  description: `
<ul>
  <li>Carbonate SCC, also called alkaline carbonate SCC (ACSCC), occurs in process units with a free water phase containing carbonate ions and some H<sub>2</sub>S.</li>
  <li>External cracking can also occur on buried pipelines and piping handling aqueous carbonate solutions (e.g., potassium carbonate) used in CO<sub>2</sub> removal in hydrogen manufacturing units.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel and low-alloy steels, especially in welds or cold-worked areas.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Residual tensile stress at welds or cold-worked areas in contact with a water phase.</li>
  <li>Water chemistry: pH (7.5–11, most failures 8–10), H<sub>2</sub>S, ammonia (NH<sub>3</sub>), carbonate ion concentration (&gt;100 ppm), S<sup>2−</sup>/CO<sub>3</sub><sup>2−</sup> ratio, cyanides, polysulfides.</li>
  <li>FCC unit feed characteristics: nitrogen content, sulfur content, S/N ratio, full vs partial burn, distillate vs naphtha optimization.</li>
  <li>Weld and cold-worked areas not stress relieved are most susceptible.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>FCC unit main fractionator overhead condensing and reflux systems, downstream wet gas compression systems, and associated sour water (SW) systems.</li>
  <li>Regenerator (cold wall) shell, pumparound-type SW units, ammonia acid gas knockout sections, pumparound cooler tube U-bends, SW storage tank floors, mercaptan oxidation prewash vessels.</li>
  <li>Field welds under high restraint may have higher cracking potential.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Surface-breaking cracks, typically parallel to welds in the HAZ or adjacent base metal.</li>
  <li>Cracks can propagate more than 2 in. (50 mm) from welds; sometimes more than 3 in. (80 mm) in cold-worked fittings.</li>
  <li>Cracking may also occur in the weld deposit; often a spider web pattern initiating at weld-related flaws.</li>
  <li>Cracks are predominantly intergranular and appear as a network of fine, oxide-filled cracks, similar to caustic SCC and amine SCC.</li>
  <li>Multiple parallel cracks can occur due to loosely adherent scale on steel surfaces.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Post-fabrication stress-relieving heat treatment (PWHT) at 1200–1225 °F (650–665 °C) per WRC 452 and WRC 552 to reduce residual stresses in construction, repair, and attachment welds.</li>
  <li>Use effective barrier coatings or corrosion-resistant materials such as solid/clad 300 series SS or Alloy 400 in place of carbon steel.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Monitor pH of sour water streams (SW); concern arises at pH ≥8. Periodically monitor CO<sub>3</sub><sup>2−</sup> levels.</li>
  <li>Crack detection is best done using WFMT or ACFM; surface prep required (grit blasting, high-pressure water blasting, flapper wheel, etc.).</li>
  <li>PT is not recommended for tight/scale-filled cracks.</li>
  <li>Angle beam UT (SWUT or PAUT) and ECT are effective for crack detection and sizing.</li>
  <li>Electrical resistance instruments are not effective due to magnetic iron oxide in cracks.</li>
  <li>Grinding can be used to determine crack depth; AET can locate cracks and monitor growth.</li>
</ul>
`,

  imagePath: "image/CarbonateSCC.png"
},


"Caustic Stress Corrosion Cracking": {
  description: `Cracking due to high pH (>10) caustic (NaOH, KOH) solutions in presence of stress.`,
  materials: `Carbon steel, low alloy steels`,
  criticalFactors: `Caustic strength, temperature, stress, non-uniform heating`,
  affectedUnits: `Steam generators, caustic wash vessels, heat exchangers`,
  appearance: `Surface cracks (intergranular), often near welds`,
  mitigation: `PWHT, temperature control, alloy selection`,
  inspection: `UT, PT, TOFD crack sizing`
},

"Chloride Stress Corrosion Cracking": {
  description: `Cracking of austenitic stainless steel due to chloride ions in combination with tensile stress.`,
  materials: `300-series SS, duplex SS (at high temp)`,
  criticalFactors: `Cl⁻ concentration, temp > 60°C, residual stress`,
  affectedUnits: `Cooling coils, exchanger tubes, weld zones`,
  appearance: `Branched, transgranular cracks`,
  mitigation: `Use resistant alloys (Alloy 20, 904L), control Cl⁻, stress relief`,
  inspection: `PT, UT crack tip sizing, visual after cleaning`
},

"Corrosion Fatigue": {
  description: `Cracking due to cyclic stress in a corrosive environment, reducing fatigue life.`,
  materials: `All metals`,
  criticalFactors: `Fluctuating loads, corrosive media, stress risers, surface finish`,
  affectedUnits: `Pumps, rotating equipment, piping with vibration`,
  appearance: `Initiation at notches, oxide-lined cracks, fatigue beach marks`,
  mitigation: `Reduce vibration, improve surface finish, corrosion inhibitors`,
  inspection: `UT, visual with magnification, dye penetrant`
},

"Dissimilar Metal Weld Cracking": {
  description: `Cracking in welds between different metals (e.g., CS to SS) due to thermal expansion mismatch.`,
  materials: `Carbon steel to stainless steel, alloy combinations`,
  criticalFactors: `Thermal cycles, metallurgical incompatibility, residual stress`,
  affectedUnits: `Nozzles, flanges, piping transitions`,
  appearance: `Cracks in weld HAZ, often undercut, toe cracks`,
  mitigation: `Use transition materials, stress relief, proper weld procedures`,
  inspection: `TOFD, phased array UT, PT`
},

"Ethanol Stress Corrosion Cracking": {
  description: `Cracking in carbon steel due to ethanol with impurities like water, chlorides, and oxygen.`,
  materials: `Carbon steel`,
  criticalFactors: `O₂, Cl⁻, moisture in ethanol, residual stress`,
  affectedUnits: `Ethanol storage tanks, transport piping`,
  appearance: `Cracks initiate near welds or stress concentrators`,
  mitigation: `Control ethanol purity, monitor for water/chlorides, PWHT`,
  inspection: `MT, UT, acoustic emission (for monitoring)`
},

"Hydrofluoric Acid Stress Corrosion Cracking of Nickel Alloys": {
  description: `Cracking in nickel alloys due to exposure to concentrated HF acid under stress.`,
  materials: `Nickel alloys (e.g., Monel)`,
  criticalFactors: `Concentrated HF acid, temperature, residual stress`,
  affectedUnits: `HF alkylation reactors, piping, heat exchangers`,
  appearance: `Surface cracking, transgranular or intergranular`,
  mitigation: `Limit HF exposure, apply PWHT, use HF-stable alloys`,
  inspection: `PT, metallography, ultrasonic testing`
},

"Hydrogen Stress Cracking in Hydrofluoric Acid": {
  description: `See above in Hydrogen Damage category – similar to HF acid SCC but affects carbon steels.`,
  materials: `Carbon steel`,
  criticalFactors: `HF acid, H⁺ entry, stress, hardness >22 HRC`,
  affectedUnits: `HF alkylation piping, towers`,
  appearance: `Stepwise internal cracking, often in weld zones`,
  mitigation: `PWHT, limit steel hardness, use resistant alloys`,
  inspection: `UT, MPI, crack mapping`
},

"Polythionic Acid Stress Corrosion Cracking": {
  description: `Cracking in SS exposed to sulfur species during shutdowns in the presence of oxygen and moisture.`,
  materials: `Austenitic SS, weld HAZ`,
  criticalFactors: `Sulfur residues, moisture, oxygen ingress`,
  affectedUnits: `Exhaust lines, furnace tubes, downstream of sulfur units`,
  appearance: `Intergranular cracking, often along HAZ`,
  mitigation: `Steam purge before shutdown, proper shutdown procedure`,
  inspection: `PT, metallography, SEM (if needed)`
},

"Stress Relaxation Cracking (Reheat Cracking)": {
  description: `Cracking due to stress relaxation in high-Cr alloys during postweld heat treatment or reheat.`,
  materials: `Creep-strength enhanced ferritic steels (e.g., P91)`,
  criticalFactors: `PWHT at high temp, weld design, notch effects`,
  affectedUnits: `Reheater tubes, steam lines, HRSG systems`,
  appearance: `Cracking at weld toe, internal or subsurface`,
  mitigation: `Smooth weld profiles, post-fabrication inspection, proper PWHT cycles`,
  inspection: `TOFD, phased array UT`
},

"Thermal Fatigue": {
  description: `Cracking due to rapid or repeated temperature cycling, causing stress due to expansion and contraction.`,
  materials: `All metals`,
  criticalFactors: `Frequent startup/shutdown, rapid temp changes, dissimilar metals`,
  affectedUnits: `Exchanger tubes, nozzles, hot/cold interface zones`,
  appearance: `Spider-web cracks, surface-initiated, oxide-filled`,
  mitigation: `Design to absorb thermal expansion, temp control systems`,
  inspection: `Visual, UT surface mapping, thermography`
  },
"885 °F (475 °C) Embrittlement": {
  description: `Embrittlement of duplex stainless steels due to prolonged exposure to 885°F (475°C), causing loss of toughness.`,
  materials: `Duplex stainless steels (ferritic-austenitic)`,
  criticalFactors: `Temperature 420–520°C (788–968°F), prolonged exposure time`,
  affectedUnits: `Refinery heaters, exchangers, high-temp piping`,
  appearance: `Reduced impact toughness, brittle fracture under stress`,
  mitigation: `Limit exposure time, avoid prolonged shutdowns in that range`,
  inspection: `Charpy impact test, metallography, ferrite phase check`
},

"Brittle Fracture": {
  description: `Fracture that occurs without plastic deformation, usually below the material's ductile-to-brittle transition temperature.`,
  materials: `Carbon steel, low alloy steels`,
  criticalFactors: `Low temperature, high stress, large thickness, flaws`,
  affectedUnits: `Low-temp pressure vessels, storage tanks, heavy wall piping`,
  appearance: `Sudden failure with flat fracture surface, no necking`,
  mitigation: `Use notch-tough materials, minimum design temp, PWHT`,
  inspection: `Charpy impact test, NDT flaw detection`
},

"Cavitation": {
  description: `Mechanical damage from vapor bubble collapse in liquid service, leading to pitting and surface erosion.`,
  materials: `Carbon steel, SS, copper alloys`,
  criticalFactors: `Liquid velocity, pressure drop, pump suction issues`,
  affectedUnits: `Pumps, control valves, orifices, impellers`,
  appearance: `Deep pits, rough honeycomb texture, near flow restrictions`,
  mitigation: `Hydraulic design correction, NPSH control, surface coatings`,
  inspection: `Visual, borescope, thickness profiling`
},

"Creep and Stress Rupture": {
  description: `Time-dependent deformation and rupture at high temperature and constant stress.`,
  materials: `Creep-strength alloys (Cr-Mo, P91), CS at high temps`,
  criticalFactors: `Temperature > 900°F, time, stress, metallurgical structure`,
  affectedUnits: `Steam piping, headers, furnace tubes, reformers`,
  appearance: `Bulging, long-term deformation, intergranular cracks`,
  mitigation: `Use creep-resistant alloys, operate below creep range`,
  inspection: `Replica metallography, strain measurement, thickness check`
},

"Decarburization": {
  description: `Loss of carbon from steel surface due to reaction with oxygen or steam at elevated temperatures.`,
  materials: `Carbon steel, low alloy steel`,
  criticalFactors: `Temp > 1100°F, oxidizing environment, long exposure`,
  affectedUnits: `Furnace parts, heat-treated components`,
  appearance: `Surface softening, reduced hardness, dull appearance`,
  mitigation: `Protective atmosphere, surface coatings, control temp`,
  inspection: `Hardness testing, metallography, microstructure evaluation`
},

"Graphitization": {
  description: `Formation of graphite nodules in steel due to long-term exposure to 800–1100°F, causing embrittlement.`,
  materials: `Carbon steel (especially older materials)`,
  criticalFactors: `Long-term exposure to 425–705°C (800–1300°F)`,
  affectedUnits: `Old heat exchangers, furnace tubes`,
  appearance: `Brittle failure, gray fracture surface, internal weakening`,
  mitigation: `Upgrade to Cr-Mo steel, inspect and replace aging units`,
  inspection: `Metallography, hardness drop, replication`
},

"Mechanical Fatigue": {
  description: `Cracking due to repeated cyclic loading, independent of corrosion.`,
  materials: `All metals`,
  criticalFactors: `Cyclic stress, vibration, poor design, stress risers`,
  affectedUnits: `Rotating equipment, piping supports, weld toes`,
  appearance: `Crack initiation at sharp corners, fatigue beach marks`,
  mitigation: `Avoid sharp edges, improve support, reduce vibration`,
  inspection: `MT, PT, visual with magnification`
},

"Refractory Degradation": {
  description: `Breakdown of refractory lining due to thermal cycling, mechanical impact, or chemical attack.`,
  materials: `Refractory bricks, castables`,
  criticalFactors: `Temperature cycling, spalling, erosion, improper drying`,
  affectedUnits: `Furnaces, reformers, heaters, FCCU units`,
  appearance: `Spalling, cracking, surface erosion, insulation loss`,
  mitigation: `Proper installation, dryout procedures, correct material selection`,
  inspection: `Visual, IR thermography, sounding test`
},

"Short-term Overheating-Stress Rupture": {
  description: `Failure due to brief exposure to very high temperature, weakening grain boundaries.`,
  materials: `Low alloy steel, Cr-Mo steel`,
  criticalFactors: `Firing error, flame impingement, refractory loss`,
  affectedUnits: `Furnace tubes, radiant coils`,
  appearance: `Fish-mouth rupture, wide opening with thin edges`,
  mitigation: `Flame monitoring, avoid refractory exposure, instrumentation`,
  inspection: `Visual, metallographic exam, hardness near rupture`
},

"Sigma Phase Embrittlement": {
   description: `
<ul>
  <li>Formation of sigma phase in some stainless steels when heated above ~1000 °F (540 °C).</li>
  <li>Causes loss of ductility and fracture toughness.</li>
  <li>Can lead to cracking failure during service.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>300 series SS wrought metals, weld metal, and castings (especially HK and HP alloys with 10–40% ferrite).</li>
  <li>400 series SS and other ferritic/martensitic stainless steels with >17% Cr (e.g., Types 430 and 440).</li>
  <li>Duplex stainless steels.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Key factors: alloy composition, temperature, and time at temperature.</li>
  <li>Sigma phase is a hard, brittle intermetallic compound; increases susceptibility to intergranular corrosion.</li>
  <li>Forms in Fe-Cr ferritic, martensitic, austenitic, and duplex SS at 1000–1700 °F (540–925 °C).</li>
  <li>Embrittlement occurs both by holding within and cooling through this range.</li>
  <li>Forms most rapidly from ferrite phase in 300 SS and duplex welds, slower in austenite base metals.</li>
  <li>Cast austenitic SS (up to 40% ferrite) can develop far more sigma than wrought SS.</li>
  <li>Weld metals exposed to PWHT (e.g., 1275 °F / 690 °C) can form sigma in few hours.</li>
  <li>Results in:
    <ul>
      <li>↑ Slightly higher tensile/yield strength and hardness</li>
      <li>↓ Ductility (elongation, reduction in area)</li>
      <li>↓ Fracture toughness below ~500 °F (260 °C)</li>
    </ul>
  </li>
  <li>Lab tests show 10% sigma still allows ductile fracture at high temperatures (e.g., 1200 °F / 650 °C).</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Stainless steel cyclones, ductwork, and valves in FCC regenerator service.</li>
  <li>300 series SS weld overlays and tube-to-tubesheet attachment welds (embrittled during PWHT).</li>
  <li>Stainless steel heater tubes.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Metallurgical change not visible by eye — confirmed only via metallography and impact testing.</li>
  <li>Damage appears as cracking, especially at welds, stress-concentrated areas, or highly restrained zones.</li>
  <li>Most failures occur during turnarounds, start-up, or shutdown when cooled below ~500 °F (260 °C).</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Use alloys resistant to sigma phase formation or avoid prolonged exposure in critical temperature range.</li>
  <li>Avoid applying high stresses to embrittled steels at shutdown to prevent brittle fracture.</li>
  <li>Desigmatization: Solution anneal at 1950 °F (1065 °C) for 4 hr + water quench (impractical for large equipment).</li>
  <li>Control ferrite in weld metals:
    <ul>
      <li>5–9% ferrite in Type 347 welds</li>
      <li>Less ferrite in Type 304 welds</li>
    </ul>
    → Minimizes sigma formation while avoiding hot cracking.
  </li>
  <li>Minimize weld overlay exposure to PWHT in Cr-Mo base metals during fabrication.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Very difficult to detect online; time-dependent damage.</li>
  <li>Metallographic examination or impact testing of removed samples confirms sigma presence.</li>
  <li>For duplex SS, Eddy Current Testing (ECT) may detect microstructural changes (operator skill-dependent).</li>
  <li>Ferrite Measurement Replication (FMR) can verify sigma on surface (limited to surface conditions).</li>
</ul>
`,

  imagePath: "image/SigmaPhaseEmbrittlement.png"
},

"Spheroidization (Softening)": {
  description: `Softening of pearlitic steel due to prolonged temp exposure, resulting in coarsened carbides.`,
  materials: `Carbon steel, low alloy steels`,
  criticalFactors: `Long exposure to 950–1300°F`,
  affectedUnits: `Steam piping, heaters, exchangers`,
  appearance: `Reduced hardness, loss of strength`,
  mitigation: `Temperature control, avoid prolonged exposure`,
  inspection: `Hardness testing, microstructure exam`
},

"Strain Aging": {
  description: `Strength increase but ductility reduction due to aging of deformed steel at moderate temps.`,
  materials: `Carbon steel`,
  criticalFactors: `Cold work + heating 200–300°C (390–570°F)`,
  affectedUnits: `Formed parts, weld HAZ, reformed piping`,
  appearance: `Brittle behavior under impact, cracking under load`,
  mitigation: `Use normalized steels, avoid cold bending, stress relief`,
  inspection: `Hardness testing, Charpy test, bend test`
},

"Temper Embrittlement": {
  description: `
<ul>
  <li>Temper embrittlement is a reduction in fracture toughness due to metallurgical changes in some low-alloy steels exposed long-term to 650–1070 °F (345–575 °C).</li>
  <li>It shifts the ductile-to-brittle transition temperature upward. Equipment may be susceptible to brittle fracture during start-up and shutdown.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Primarily 2.25Cr-1Mo low-alloy steel, 3Cr-1Mo to a lesser extent, and HSLA Cr-Mo-V rotor steels.</li>
  <li>Older 2.25Cr-1Mo steels (pre-1972) and some HSLA steels are particularly susceptible.</li>
  <li>C-0.5Mo, 1Cr-0.5Mo, and 1.25Cr-0.5Mo steels are less affected.</li>
  <li>Weld materials are generally more affected than base materials.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Alloy composition, thermal history, metal temperature, and exposure time.</li>
  <li>Presence of Mn, Si, and tramp elements P, Sn, Sb, and As.</li>
  <li>Strength level and heat treatment/fabrication history affect susceptibility.</li>
  <li>Embrittlement develops faster at ~900 °F (480 °C) but can be more severe after long-term exposure at 850 °F (440 °C).</li>
  <li>Some embrittlement can occur during fabrication, but most occurs over many years in the embrittling temperature range.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Hydroprocessing units: reactors, hot feed/effluent exchangers, hot HP separators.</li>
  <li>Catalytic reforming units (reactors and exchangers), FCC reactors, coker units, visbreaking units.</li>
  <li>Welds in susceptible equipment are often more vulnerable than base metal.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Metallurgical change not visually apparent; confirmed via impact testing.</li>
  <li>Upward shift in ductile-to-brittle transition temperature in Charpy CVN tests; no effect on upper shelf energy.</li>
  <li>SEM fractographs show primarily intergranular cracking due to impurity segregation at grain boundaries.</li>
  <li>Failure can result in catastrophic brittle fracture.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>For existing materials: temper embrittlement cannot be fully prevented if critical impurity levels exist. Minimize brittle fracture risk during start-up/shutdown using pressurization sequences and minimum pressurization temperature (MPT) curves.</li>
  <li>De-embrittlement of welds: heat at 1150 °F (620 °C) for 2 hr per 1 in. (25 mm) thickness and rapidly cool; re-embrittlement occurs if re-exposed.</li>
  <li>For new materials: limit Mn, Si, P, Sn, Sb, As in base metal and consumables; control strength levels and PWHT procedures.</li>
  <li>Use J and X factors for alloy composition limits: J = (Si + Mn) x (P + Sn) x 10<sup>4</sup>, X = (10P + 5Sb + 4Sn + As)/100.</li>
  <li>Alternative calculation: Equivalent Phosphorus (P) factor for base/weld metals.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Inspection is not typically used to detect temper embrittlement, but awareness of susceptible equipment is key.</li>
  <li>Monitor test blocks of original alloy steel heats placed inside reactors; periodically remove for CVN impact testing to track ductile-brittle transition temperature.</li>
  <li>Carefully monitor process conditions and follow proper pressurization/temperature sequences during start-up, shutdown, and hydrotesting to prevent brittle fracture.</li>
</ul>
`,

  imagePath: "image/TemperEmbrittlement.png"
},


"Thermal Shock": {
  description: `
<ul>
  <li>Thermal shock cracking occurs when high and non-uniform thermal stresses develop over a short time due to differential expansion or contraction.</li>
  <li>If expansion/contraction is restrained, stresses can exceed the yield strength of the material.</li>
  <li>Typically occurs when a colder liquid contacts a much warmer metal surface, such as after a fire extinguished with water in refining operations.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>All metals and alloys.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Magnitude of temperature differential and material's coefficient of thermal expansion determine stress levels.</li>
  <li>Stainless steels have higher thermal expansion coefficients and are more prone to high stress.</li>
  <li>High-temperature exposure during a fire followed by water quenching can cause thermal shock.</li>
  <li>Rapid temperature changes, such as rain deluge, may induce thermal shock.</li>
  <li>Fracture is related to constraints preventing free expansion or contraction.</li>
  <li>Cracking in cast components may initiate at casting flaws.</li>
  <li>Thick sections develop higher thermal gradients and are more susceptible.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>FCC, coker, catalytic reforming, and high-severity hydroprocessing units.</li>
  <li>High-temperature piping and equipment in any unit.</li>
  <li>Heavy wall machinery, especially thick castings and high-chromium steels (e.g., 12Cr).</li>
  <li>Equipment with reduced ductility (e.g., Cr-Mo due to temper embrittlement).</li>
  <li>Equipment subjected to accelerated cooling to minimize shutdown time.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Surface-initiating cracks may appear as "craze" cracks.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Minimize contact of rain or fire-water deluge with hot equipment.</li>
  <li>Design to reduce severe restraint in hot equipment.</li>
  <li>Install thermal sleeves or protective measures to prevent cold liquid impingement on hot pressure boundary components.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Damage is uncommon and highly localized, often from unpredictable events like fire or storms.</li>
  <li>Detection methods include: VT, PT, MT, and UT.</li>
  <li>VT may reveal cracks but differentiating actual cracks from superficial oxide layer craze cracks can be difficult.</li>
</ul>
`,

  imagePath: "image/ThermalShock.png"
},


"Concentration Cell Corrosion": {
  description: `
<ul>
  <li>Concentration cell corrosion explains phenomena like under-deposit, crevice, contact point, soil/air interface corrosion, and CUI.</li>
  <li>It occurs when an occluded area has a different environment (often lower oxygen) than the surrounding area, causing preferential corrosion.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel (most susceptible), low-alloy steels, stainless steels (degree of susceptibility depends on alloy and environment).</li>
  <li>High-alloy materials, Ni-Cr-Mo alloys, titanium and its alloys are resistant.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Requires an aqueous environment with occluded areas (under deposits, crevices, supports, soil interface).</li>
  <li>Oxygen differential drives corrosion; other species like sulfur or chlorides may also contribute.</li>
  <li>Stainless steel crevice corrosion influenced by chloride content, pH, temperature, and PREN.</li>
  <li>Concentration cells accelerate existing corrosion rather than creating a new mechanism.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>All process and utility piping and equipment.</li>
  <li>Deposits on internal or external surfaces, bolted equipment internals, flange/gasket faces, valve components.</li>
  <li>Pipe supports, saddles, and areas where moisture/dirt can accumulate.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Uneven surface corrosion, often described as pitting.</li>
  <li>Crevice corrosion in SS appears as narrow, deep pits.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Prevent deposit accumulation and dirt build-up.</li>
  <li>Minimize sludge, scale, and salt formation.</li>
  <li>Design pipe supports to avoid trapping debris.</li>
  <li>Use protective coatings and repair peeling coatings.</li>
  <li>Upgrade material if economically feasible (e.g., to 300 series SS or corrosion-resistant alloys).</li>
</ul>
`,

  inspection: `
<ul>
  <li>VT and pit gaging to detect and measure corrosion depth.</li>
  <li>Laser scanning or structured light imaging for large areas.</li>
  <li>UT thickness measurements from opposite surfaces; AUT or manual scanning for towers/vessels.</li>
  <li>Permanent thickness monitoring sensors if source cannot be eliminated.</li>
  <li>Detect heat exchanger deposits via pressure drop or reduced thermal performance.</li>
</ul>
`,

  imagePath: "image/ConcentrationCell.png"
},


"Corrosion Under Insulation (CUI)": {
  description: `
- Corrosion of piping, pressure vessels, and structural components caused by water trapped under insulation or fireproofing.
`,
  affectedMaterials: `
<ul>
  <li>Carbon steel</li>
  <li>Low-alloy steels</li>
  <li>300 series stainless steels</li>
  <li>400 series stainless steels</li>
  <li>Duplex stainless steels</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Key factors: temperature, wetting duration, insulation design/type, and environment.</li>
  <li>Corrosion rate increases with temperature until water evaporates faster—typically between 10°F (–12°C) and 350°F (175°C).</li>
  <li>For 300 series SS (Cl⁻ SCC risk): critical range is 140°F (60°C) to 350°F (175°C).</li>
  <li>For duplex SS (Cl⁻ SCC risk): critical range is 280°F (140°C) to 350°F (175°C).</li>
  <li>Higher corrosion possible even at lower temps if surface remains wet longer.</li>
  <li>Poor insulation design or installation traps moisture and worsens CUI.</li>
  <li>Moisture-wicking or slow-drying insulation materials increase CUI risk.</li>
  <li>Cyclic thermal operation or intermittent service amplifies corrosion potential.</li>
  <li>Sub-dew point operation promotes condensation on surfaces and drives corrosion.</li>
  <li>Contaminants like chlorides leached from insulation exacerbate damage.</li>
  <li>High rainfall and marine climates are more susceptible to CUI.</li>
  <li>Airborne chlorides (e.g., sea spray, cooling tower drift) and SO₂ emissions accelerate corrosion.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>All insulated piping and equipment are susceptible to CUI, even if insulation appears intact with no visual signs of corrosion.</li>
  <li>CUI can occur at:
    <ul>
      <li>Damaged insulation, jacketing, vapor barriers, weatherproofing, or missing caulking.</li>
      <li>Protrusions through insulation and at termination points (e.g., flanges).</li>
      <li>Dead-legs (vents, drains), pipe hangers/supports, valves/fittings with irregular insulation surfaces.</li>
      <li>Bolted-on pipe shoes, steam/heat tracing penetrations, flange terminations.</li>
      <li>Vertical pipe insulation terminations and horizontal runs adjacent to vertical sections.</li>
      <li>Damaged or leaking steam tracing systems.</li>
      <li>Vibrating piping systems that damage jacketing and allow water ingress.</li>
      <li>Top-seamed or poorly sealed jacketing on horizontal piping.</li>
      <li>Low points and insulation support rings on vertical columns where water collects.</li>
      <li>Welded insulation support rings with no standoff, around lugs, nozzles, and stiffeners.</li>
      <li>Carbon/low-alloy steel components (e.g., flanges, bolts) under insulation in high-alloy systems.</li>
      <li>Measurement plug holes (TML ports) where insulation plugs were removed.</li>
      <li>Previously coated surfaces where the coating has failed.</li>
      <li>Equipment exposed to frequent water spray (fire protection, cooling systems).</li>
      <li>300 series SS insulated with older calcium silicate insulation (high in chlorides) — prone to pitting, crevice corrosion, and chloride SCC.</li>
    </ul>
  </li>
</ul>
`,

  appearance: `
<ul>
  <li>Carbon steel and low-alloy steels show rough, uneven, pitted corrosion covered with flaky, non-protective scale. Damage is localized to areas kept wet by insulation.</li>
  <li>In some cases, corrosion appears as carbuncle-type pitting (often beneath failed coatings).</li>
  <li>300 series stainless steels are susceptible to stress corrosion cracking (SCC) in the presence of chlorides.</li>
  <li>Duplex stainless steels are more resistant, but SCC has still been observed due to CUI.</li>
  <li>Both 300 series SS and duplex SS may experience pitting and crevice corrosion.</li>
  <li>Visible signs include damaged jacketing, bulging or staining of insulation, missing insulation bands, or coating failure.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Use appropriate coatings before insulating to protect susceptible construction materials:
    <ul>
      <li>High-quality, immersion-resistant nonmetallic coatings offer long-term protection.</li>
      <li>Flame-sprayed aluminum coatings on carbon steel provide galvanic protection to the base metal.</li>
    </ul>
  </li>
  <li>Properly maintain insulation, jacketing, sealants, and vapor barriers to prevent moisture ingress.</li>
  <li>Wrap stainless steel piping and equipment with thin aluminum foil under insulation to provide a galvanic barrier against Cl⁻ SCC.</li>
  <li>Select insulating materials with favorable water absorption and retention properties:
    <ul>
      <li>Open-cell materials dry quicker, reducing wetting time and CUI risk.</li>
      <li>Closed-cell materials may absorb less water but dry more slowly.</li>
      <li>Water absorption/retention testing: EN 13472 or ASTM C1134.</li>
    </ul>
  </li>
  <li>Use insulation with built-in corrosion inhibitors.</li>
  <li>Use low-chloride insulation for 300 series SS to reduce risk of pitting and Cl⁻ SCC:
    <ul>
      <li>Certified low-chloride insulation is commercially available.</li>
      <li>Test chloride content via ASTM C871.</li>
    </ul>
  </li>
  <li>Seal UT inspection plugs promptly after use; commercial removable plugs are available for reuse.</li>
  <li>Consider design alternatives to reduce or eliminate insulation usage:
    <ul>
      <li>Use metal-cage standoffs for personnel protection where feasible.</li>
      <li>Remove insulation from equipment where heat conservation is less critical.</li>
    </ul>
  </li>
</ul>
`,
temperatureComparison: `
<ul>
  <li><strong>General CUI Range:</strong>
    <ul>
      <li>API 571: 10–350 °F (−12–175 °C)</li>
      <li>API 581: 25–300 °F (−4–149 °C)</li>
      <li><em>Difference:</em> 581 starts 15°F later and ends 50°F earlier</li>
    </ul>
  </li>
  <li><strong>300 Series SS (Cl⁻ SCC):</strong>
    <ul>
      <li>API 571: 140–350 °F (60–175 °C)</li>
      <li>API 581: 140–400 °F (60–204 °C)</li>
      <li><em>Difference:</em> 581 goes 50°F higher</li>
    </ul>
  </li>
  <li><strong>Duplex SS (Cl⁻ SCC):</strong>
    <ul>
      <li>API 571: 280–350 °F (140–175 °C)</li>
      <li>API 581: 280–400 °F (138–204 °C)</li>
      <li><em>Difference:</em> 581 goes 50°F higher</li>
    </ul>
  </li>
  <li><strong>Most Severe CUI Range:</strong>
    <ul>
      <li>API 571 only: 170–230 °F (77–110 °C)</li>
      <li>Not directly represented in API 581</li>
    </ul>
  </li>
</ul>`,
  inspection: `
<ul>
  <li>
    Develop a structured inspection plan using API 510, API 570, and API 583. Consider:
    <ul>
      <li>History of CUI leaks</li>
      <li>Operating temperatures that may cause CUI</li>
      <li>Type, age, and condition of coatings</li>
      <li>Type, age, and condition of insulation</li>
    </ul>
  </li>
  <li>Perform external VT to check for:
    <ul>
      <li>Damaged insulation, mastic, or sealants</li>
      <li>Signs of water ingress</li>
      <li>Rust at drain points or process fluid leakage</li>
    </ul>
  </li>
  <li>Even intact insulation may hide localized CUI. Extent of inspection (and insulation removal) is determined by owner/user based on history and risk factors.</li>
  <li>
    Effective detection methods:
    <ul>
      <li>Complete insulation removal + VT, UT, pit gage, or PT (for Cl⁻ SCC in austenitic SS)</li>
      <li>RT (density/profile) or UT (e.g., high-res pigging) for detecting thinning</li>
      <li>“Windowing” (spot removal of insulation) may help but is less effective than full removal</li>
    </ul>
  </li>
  <li>
    Non-invasive screening methods (refer to API 583):
    <ul>
      <li>Guided Wave Testing (GWT)</li>
      <li>Radiographic Testing (RT: profile, density, digital, flash, etc.)</li>
      <li>Pulsed Eddy Current (PEC)</li>
      <li>Neutron backscatter – detects wet insulation</li>
      <li>Infrared thermography – detects wet insulation</li>
    </ul>
  </li>
  <li>
    High-risk areas in process units include:
    <ul>
      <li>Downwind from cooling towers (drift zone)</li>
      <li>Near steam vents or deluge systems</li>
      <li>Areas exposed to acid vapors or supplemental cooling spray</li>
    </ul>
  </li>
</ul>
`,

  imagePath: "image/cui.png" // ✅ Add this line
},

"Dealloying": {
  description: `Selective removal of one element from an alloy, weakening the metal's structure.`,
  materials: `Brass (dezincification), Cu-Ni, Al-bronze (dealuminification)`,
  criticalFactors: `Water chemistry, chloride or oxygen presence, stagnant conditions`,
  affectedUnits: `Fire water systems, instrument tubing, underground piping`,
  appearance: `Porous, weakened metal, surface discoloration or crusting`,
  mitigation: `Use dealloying-resistant alloys, control water chemistry`,
  inspection: `Metallography, visual, UT, eddy current`
},

"Galvanic Corrosion": {
  description: `Accelerated corrosion of a more anodic metal when in contact with a cathodic metal in an electrolyte.`,
  materials: `Dissimilar metals (e.g., CS and SS, Cu and Al)`,
  criticalFactors: `Metal potential difference, electrolyte conductivity, surface area ratio`,
  affectedUnits: `Fasteners, heat exchangers, flange joints`,
  appearance: `Corrosion of less noble metal, pitting at contact zone`,
  mitigation: `Use isolators, compatible materials, coatings, cathodic protection`,
  inspection: `Visual, thickness loss measurement, EC testing`
},

"Graphitic Corrosion of Cast Irons": {
  description: `Selective leaching of iron from gray cast iron, leaving behind a soft graphite skeleton.`,
  materials: `Gray cast iron, ductile cast iron`,
  criticalFactors: `Moist soil, groundwater, acidic or anaerobic environment`,
  affectedUnits: `Old piping systems, underground cast iron components`,
  appearance: `Soft surface, black powdery residue, looks intact but weak`,
  mitigation: `Use lined or coated piping, material replacement`,
  inspection: `Hammer test, ultrasonic, hardness test, metallography`
},

"Microbiologically Influenced Corrosion (MIC)": {
  description: `Localized corrosion influenced or accelerated by the presence of bacteria or microbes.`,
  materials: `Carbon steel, SS, Cu alloys`,
  criticalFactors: `Presence of water, nutrients, stagnant zones, sulfate-reducing bacteria (SRB)`,
  affectedUnits: `Fire water, bottom of tanks, cooling systems, buried lines`,
  appearance: `Pitting, black slime, localized attack often under deposits`,
  mitigation: `Biocide treatment, flushing, coatings, flow velocity maintenance`,
  inspection: `Visual, pit depth measurement, biofilm sampling, UT, swab analysis`
  },
  
 "Amine Corrosion": {
  description: `Metal loss due to acidic degradation products of amines, especially in rich amine sections.`,
  materials: `Carbon steel`,
  criticalFactors: `Amine type, CO₂/H₂S loading, temperature, amine degradation`,
  affectedUnits: `Absorber bottoms, regenerator, rich amine piping`,
  appearance: `General thinning, sometimes localized, iron sulfide scale`,
  mitigation: `Filtration, amine reclamation, inhibitors, alloy upgrades`,
  inspection: `UT, corrosion probes, visual internal exam`
},

"Ammonium Bisulfide Corrosion (Alkaline Sour Water)": {
  description: `Corrosion in sour water containing NH₄HS, often in high-velocity or high-temperature zones.`,
  materials: `Carbon steel`,
  criticalFactors: `pH 6.5–7.5, NH₃ + H₂S presence, velocity > 15 ft/s`,
  affectedUnits: `Overhead condensers, sour water piping`,
  appearance: `Localized thinning, turbulent areas, erosion-corrosion`,
  mitigation: `Alloy upgrades (SS), control velocities, pH adjustment`,
  inspection: `UT, visual, online thickness trending`
},

"Ammonium Chloride and Amine Hydrochloride Corrosion": {
   description: `
<ul>
  <li>Localized corrosion, often pitting, under ammonium chloride or amine salt deposits.</li>
  <li>Can occur even without a free water phase.</li>
  <li>Corrosion rates can be extremely high, particularly under hygroscopic salts that absorb water.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>All commonly used materials are susceptible.</li>
  <li>Resistance order: carbon steel &lt; low-alloy steels &lt; 300 series SS &lt; duplex SS &lt; Alloys 400, 800, 825 &lt; Alloys 625, C276 &lt; titanium.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Concentration of NH3, HCl, and amine salts.</li>
  <li>Temperature and water availability.</li>
  <li>Ammonium chloride can precipitate from high-temperature streams upon cooling (up to ~400 °F / 205 °C).</li>
  <li>Salts are hygroscopic; even small amounts of water can cause aggressive corrosion (&gt;100 mpy / &gt;2.5 mm/yr).</li>
  <li>Corrosion rates increase with temperature; water wash may be needed to dissolve deposits above dew point.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Crude tower overheads (tower top, top trays, overhead piping, exchangers).</li>
  <li>Hydroprocessing reactor effluent streams and H2 recycle system.</li>
  <li>Catalytic reforming overheads; FCC and coker unit overheads and top pumparounds.</li>
  <li>Low-flow zones where salts condense from vapor phase.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Deposits appear whitish, greenish, or brownish.</li>
  <li>Corrosion under salts is highly localized and often results in pitting.</li>
  <li>Water washing or steam out can remove deposits, making internal VT inspection challenging.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Use more pitting-resistant alloys (nickel-based or titanium), though even these can suffer pitting.</li>
  <li>Crude unit: limit chlorides via desalting, add caustic to desalted crude, water wash overhead lines, and consider filming amines.</li>
  <li>Hydroprocessing: limit chlorides in feed and H2, water wash reactor effluents, monitor streams, control temperatures above salt deposition point.</li>
  <li>Catalytic reforming: remove chlorides via alumina bed traps, consider water washing and filming/neutralizing amines.</li>
  <li>FCC & coker units: continuous or intermittent water wash to dissolve or remove salt deposits.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Highly localized corrosion; difficult to locate due to mobile salts.</li>
  <li>Preferred methods: RT or UT scanning (AUT, close-grid, scanning UT) for wall thickness assessment.</li>
  <li>GWT can be used as a screening tool.</li>
  <li>Permanently mounted thickness sensors recommended.</li>
  <li>Monitor water injection systems, spray nozzles, and flow meters for proper operation.</li>
  <li>Corrosion probes/coupons can detect corrosion if salts deposit on them.</li>
  <li>Special techniques for exchanger/air cooler tubes: IRIS, MFL, RFT, ECT for magnetic and nonmagnetic materials.</li>
  <li>Pressure drop increases or deterioration in thermal performance can indicate deposits/corrosion.</li>
</ul>
`,

  imagePath: "image/AmmoniumChlorideCorrosion.png"
},

"Aqueous Organic AcidCorrosion": {
  description: `
<ul>
  <li>Corrosion caused by low molecular weight organic acids (formic, acetic, propionic, butyric) formed from crude oil decomposition or additives.</li>
  <li>Occurs primarily in crude tower, vacuum tower, visbreaker, and coker fractionator overhead systems.</li>
  <li>Corrosion can happen at mix points where recovered oil streams meet wet streams.</li>
  <li>Light organic acids reduce pH in condensed water phases, leading to general or localized corrosion.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel and low-alloy steels.</li>
  <li>Most corrosion-resistant alloys in overhead systems (e.g., austenitic stainless steels) are generally resistant, but caution is needed if halogens (chlorides) are present.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Type and quantity of organic acids, system temperature, fluid velocity, pH, and presence of other acids.</li>
  <li>Low-molecular-weight acids (formic, acetic) are most corrosive; soluble in water/naphtha phases.</li>
  <li>Sudden increases in organic acids can raise neutralizer demand unexpectedly.</li>
  <li>Crude-specific variations: higher TAN crudes may increase acid formation in overheads.</li>
  <li>Flow rate and turbulence exacerbate corrosion; areas downstream of pumps, control valves, elbows, tees are vulnerable.</li>
  <li>Condensation points and liquid hold-up areas in piping, drums, and exchanger shells are high-risk locations.</li>
  <li>Organic acids contribute to neutralizer demand; excess neutralizer can form amine hydrochloride salts.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>All carbon steel piping and process equipment in crude tower, vacuum tower, visbreaker, and coker fractionator overhead systems.</li>
  <li>Mix points of recovered and wet streams.</li>
  <li>Water accumulation areas: bottoms of overhead separator drums, exchanger shells, boots of separator drums, and tray hold-up areas.</li>
  <li>Horizontal piping: vapor space condensation zones and lower piping sections where water collects.</li>
  <li>High-velocity and turbulent areas in piping and overhead transfer lines.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Thinning of metal surfaces; general and localized wall loss.</li>
  <li>Smooth surface corrosion typical of light organic acids; may be indistinguishable from HCl or CO2 corrosion.</li>
  <li>Smooth grooving in high-flow regions; localized pitting in low-velocity or condensing areas.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Injection of acid-neutralizing additives to counteract light organic acids; adjust for changing crude blends.</li>
  <li>Use crude TAN as a guide for neutralizer requirements.</li>
  <li>Analyze water samples from overhead accumulation drums to optimize neutralizer dosing.</li>
  <li>Filming amines may be used if compatible with organic acids; less effective than neutralization.</li>
  <li>Upgrade to corrosion-resistant alloys, considering other potential damage mechanisms in the overhead system.</li>
</ul>
`,

  inspection: `
<ul>
  <li>UT and RT techniques for assessing metal loss.</li>
  <li>GWT and EMAT for wall loss screening.</li>
  <li>Corrosion probes and coupons, combined with water sample analysis.</li>
  <li>Permanently mounted thickness monitoring sensors.</li>
  <li>Infrared thermography scanning to detect water accumulation locations.</li>
  <li>Monitor pH in water accumulation zones; low pH may indicate organic acids.</li>
</ul>
`,

  imagePath: "image/AqueousOrganicAcidCorrosion.png"
},

"Atmos Pheric Corrosion": {
  description: `
<ul>
  <li>Corrosion caused by moisture associated with atmospheric conditions.</li>
  <li>Severe in marine and polluted industrial environments; minimal in dry rural environments.</li>
  <li>Accelerated by airborne contaminants, cooling tower mist, and wet gas scrubber drift.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel, low-alloy steels, copper-alloyed aluminum.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Plant location: marine, industrial, urban, or rural environments.</li>
  <li>Moisture level: humidity, rainfall, or cooling tower mist presence.</li>
  <li>Airborne contaminants: salts, H2S, sulfur compounds, dirt, fly ash.</li>
  <li>Surface orientation to prevailing wind and rain.</li>
  <li>Temperature: corrosion increases up to 250 °F (120 °C); above this, surfaces are usually too dry except under insulation.</li>
  <li>Design features that trap water or moisture in crevices.</li>
  <li>Marine environments: ~20 mpy; industrial environments with acids/sulfur: 5–10 mpy.</li>
  <li>Moderate inland exposure: 1–3 mpy; dry rural: <1 mpy.</li>
  <li>Bird droppings can cause localized accelerated corrosion and stains.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Unpainted/uninsulated carbon steel or low-alloy steel piping and equipment below 250 °F (120 °C).</li>
  <li>Equipment with deteriorated paint/coating.</li>
  <li>Equipment downwind of cooling towers or wet gas scrubbers.</li>
  <li>Equipment subjected to temperature cycling or prolonged shutdowns.</li>
  <li>Tanks and piping, especially where water can collect on supports.</li>
  <li>Piers and docks in marine environments.</li>
  <li>Bimetallic connections (e.g., copper-to-aluminum electrical connections).</li>
</ul>
`,

  appearance: `
<ul>
  <li>Attack can be general or localized depending on coating condition and moisture entrapment.</li>
  <li>Uncoated surfaces: general, widespread corrosion.</li>
  <li>Localized coating failures: promote localized corrosion.</li>
  <li>Distinctive red rust (iron oxide) scale usually forms; metal loss may not be visually evident.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Apply paints or protective coatings to unprotected equipment.</li>
  <li>Proper surface preparation and coating application are critical for long-term protection.</li>
</ul>
`,

  inspection: `
<ul>
  <li>VT: direct/line-of-sight, or indirect using cameras, mirrors, laser scanning, structured white light with pit gages.</li>
  <li>UT: straight beam, angle beam (SWUT/PAUT), EMAT, or GWT for wall thickness measurement or screening.</li>
  <li>RT: film-based, digital, or computed radiography; may include contact or profile RT, open system imaging.</li>
  <li>ECT: pulsed eddy current (PEC) as a screening technique.</li>
</ul>
`,

  imagePath: "image/AtmosphericCorrosion.png"
},

"Boiler WaterSteam Corrosion": {
  description: `
<ul>
  <li>General corrosion and pitting in boiler systems and condensate return systems.</li>
  <li>Primarily caused by dissolved oxygen (oxygen pitting) and/or carbon dioxide (carbonic acid corrosion).</li>
  <li>Flow-accelerated corrosion (FAC) can occur as general wall thinning or localized attack at high velocity, turbulence, or flow direction changes.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel and low-alloy steels.</li>
  <li>Alloying elements in low-alloy steels (Cr, Cu, Mo) enhance corrosion resistance.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Concentration of dissolved gases (O2, CO2), pH, temperature, feedwater quality, and specific feedwater treatment system.</li>
  <li>Protective magnetite (Fe3O4) layer must be maintained; FAC occurs if this layer dissolves or fails to form.</li>
  <li>Critical FAC temperature ~300 °F (150 °C), decreasing with increasing pH.</li>
  <li>Too low oxygen can worsen corrosion due to lack of oxide layer formation (3–7 ppb oxygen required).</li>
  <li>Scale and deposit control must coordinate with oxygen scavenger treatment.</li>
  <li>Poor deaeration or oxygen scavenger operation → oxygen pitting possible.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Boiler water treatment systems (deaerators, feedwater lines, pumps).</li>
  <li>Steam generation systems: stage heaters, economizers, boiler tubes, process unit steam generators.</li>
  <li>Condensate return systems, process unit reboilers, associated piping.</li>
  <li>Threaded connections are especially susceptible.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Oxygen corrosion: pitting type, especially at air ingress points, closed heaters, and economizers.</li>
  <li>Carbon dioxide corrosion: smooth general attack, possible grooving at water-vapor interface.</li>
  <li>FAC: localized wall thinning downstream of flow disturbances (orifices, elbows, reducers), leaving oxide-free patterns; can lead to rupture.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Oxygen removal via mechanical deaeration + chemical scavengers (catalyzed sodium sulfite, hydrazine).</li>
  <li>Proper deaerator operation and controlled scavenger dosing are crucial; residual scavenger protects steam system.</li>
  <li>Carbon dioxide corrosion: use amine inhibitors if scale/deposit control insufficient.</li>
  <li>Boiler water blowdown and functional steam traps/coalescers to control solids and condensation.</li>
  <li>Water treatment, sampling, and analysis to ensure proper pH, temperature, and dissolved gas levels.</li>
  <li>FAC mitigation: maintain BFW pH 9.2–9.6, consider Cr-Mo steel upgrades, controlled oxygenation if needed.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Monitor water chemistry: pH, alkalinity, hardness, conductivity, residual biocide, dissolved gases (O2, CO2), iron, copper, total dissolved solids.</li>
  <li>Vacuum testing for air ingress into condenser hotwells.</li>
  <li>UT and RT for pipe wall thinning; boilers require offline inspection.</li>
  <li>No practical online inspection methods for boilers; UT/RT performed when system is offline.</li>
</ul>
`,

  imagePath: "image/BoilerWaterSteamCorrosion.png"
},

"Brine Corrosion": {
  description: `
<ul>
  <li>Pitting or localized corrosion on equipment exposed to aqueous brine solutions (chlorides or other halides).</li>
  <li>Often occurs alongside oxygen corrosion, galvanic corrosion, or microbiologically influenced corrosion (MIC).</li>
  <li>Chloride pitting in stainless steels is autocatalytic: pit initiation → chloride migration → hydrolysis → pH decrease → accelerated corrosion.</li>
  <li>Similar processes occur in crevices; other anions like nitrates or sulfates contribute less significantly.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel (most common), alloy steels, stainless steels, aluminum alloys.</li>
  <li>Ni-Cr-Mo alloys resist brine corrosion; copper alloys resist pitting but are affected by sulfides and ammonia.</li>
  <li>Fiber reinforced plastic (FRP) piping is immune.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Dissolved salt concentration, oxygen content, pH, velocity, temperature.</li>
  <li>Higher temperature, oxygen, and salt content increase corrosion rates.</li>
  <li>Lower pH accelerates corrosion and pitting in stainless steels.</li>
  <li>Halides (chlorides, bromides) reduce critical pitting/crevice corrosion temperatures in stainless steels.</li>
  <li>Pitting Resistance Equivalent Number (PREN) &gt;40 recommended; higher Mo/N improves resistance.</li>
  <li>Free chlorine &gt;0.5 ppm accelerates corrosion in both carbon steel and stainless steel.</li>
  <li>Sulfur compounds and H2S exacerbate attack, forming loose, porous deposits.</li>
  <li>High velocity promotes erosion-corrosion; stagnant conditions favor deposit accumulation.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Crude unit desalters and desalter effluent lines.</li>
  <li>Effluent water treatment systems, transfer lines, brine separators.</li>
  <li>Salt driers, seawater/firewater systems, water softener regeneration units.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Carbon Steel: heavy scaling, tubercles, under-deposit corrosion, large pits; preferential corrosion in welds/HAZ; SRB presence → severe pitting/channeling.</li>
  <li>Stainless Steel: sharp, deep, isolated pits; chloride stress corrosion cracking (SCC) possible.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Eliminate oxygen sources; use deaerated water; chemical scavengers (e.g., sodium metabisulfite).</li>
  <li>Operate heat exchangers to prevent vaporization or deposit formation.</li>
  <li>Maintain low residual chlorine for MIC prevention; monitor for bacteria such as SRB.</li>
  <li>Upgrade to corrosion-resistant alloys (Ni-Cr-Mo) or non-metallic materials (FRP, PVC).</li>
  <li>Use internal coatings (epoxy phenolic, coal tar, polypropylene lining) to protect carbon steel; avoid galvanic coupling.</li>
</ul>
`,

  inspection: `
<ul>
  <li>UT (including scanning) for thickness measurements; RT where pipe dimensions allow.</li>
  <li>GWT for long pipe runs; may not detect isolated pits.</li>
  <li>Corrosion coupons or ER probes for short- and long-term corrosion rate monitoring.</li>
  <li>Monitor dissolved oxygen content continuously.</li>
  <li>Permanently-mounted thickness monitoring sensors recommended.</li>
</ul>
`,

  imagePath: "image/BrineCorrosion.png"
},


"Caustic Corrosion": {
  description: `
<ul>
  <li>Localized corrosion due to concentrated caustic solutions (NaOH, KOH) or corrosive salts, often under evaporative or high heat transfer conditions (caustic gouging).</li>
  <li>General thinning can occur at elevated temperatures depending on caustic strength.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Primarily carbon steel, low-alloy steels, and 400 series stainless steels.</li>
  <li>Carbon steel is most commonly affected.</li>
  <li>300 series SS is generally resistant unless passivity is damaged (160–210 °F / 70–100 °C), and may suffer caustic SCC.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Presence of caustic (NaOH/KOH) and corrosive salts.</li>
  <li>Temperature &gt;170 °F (75 °C) in high-strength solutions accelerates general corrosion.</li>
  <li>Localized gouging occurs when caustic is concentrated via evaporation, DNB, or salt deposition.</li>
  <li>Contaminants such as chlorides and hypochlorites increase corrosivity.</li>
  <li>Heat tracing may exacerbate corrosion.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Boilers, steam-generating equipment, heat exchangers, and H2 manufacturing units.</li>
  <li>Preheat exchangers, furnace tubes, and transfer lines where caustic is injected into crude or process streams.</li>
  <li>Units using caustic for sulfur removal and heat-traced caustic storage/feed equipment.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Localized metal loss as grooves or thinned areas under deposits (caustic gouging).</li>
  <li>Deposits may mask underlying corrosion; probing may be required.</li>
  <li>Circumferential grooves along waterlines in vertical tubes; longitudinal grooves in horizontal/sloped tubes.</li>
  <li>High-temperature caustic can cause general thinning localized near heat sources.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Proper design of steam-generating equipment to minimize free caustic and hot spots.</li>
  <li>Adequate water flow and dilution of caustic in process equipment to avoid concentration on hot surfaces.</li>
  <li>Material selection: Carbon steel and 300 SS vulnerable at high temperatures; Alloy 400 and other nickel alloys have lower corrosion rates.</li>
</ul>
`,

  inspection: `
<ul>
  <li>General corrosion: UT (straight beam, scanning) to measure wall loss.</li>
  <li>Localized corrosion: Manual UT, AUT, angle beam UT (SWUT/PAUT), or TOFD; RT within technique limits.</li>
  <li>Permanently mounted thickness sensors can be used.</li>
  <li>Focus inspections on heat/steam tracing points and caustic injection sites.</li>
  <li>VT with boroscope can be used for inaccessible areas.</li>
</ul>
`,

  imagePath: "image/CausticCorrosion.png"
},


"CO₂ Corrosion": {
  description: `
  <ul>
    <li>CO₂ corrosion occurs when CO₂ dissolves in water, forming carbonic acid (H₂CO₃), which lowers pH and promotes corrosion.</li>
    <li>Carbonic acid can lead to general corrosion and/or pitting of carbon steel when present in sufficient quantity.</li>
    <li>Corrosion is limited to environments where water (liquid or condensate) is present.</li>
    <li>CO₂ corrosion is a common problem in oil and gas processing, especially in wet gas pipelines and condensate systems.</li>
  </ul>
`,

  affectedMaterials: `
  <ul>
    <li>Carbon steel and low-alloy steels are susceptible to CO₂ corrosion.</li>
    <li>Chromium steels offer no significant resistance unless Cr ≥ 12% (e.g. Type 410 SS).</li>
    <li>300 series austenitic stainless steels are highly resistant to CO₂ corrosion.</li>
  </ul>
`,

  criticalFactors: `
  <ul>
    <li>Liquid water must be present for corrosion to occur.</li>
    <li>High partial pressure of CO₂ leads to lower pH, increasing corrosion rate.</li>
    <li>Corrosion often occurs at locations where CO₂ condenses into the water phase.</li>
    <li>Temperature increases corrosion rate up to the point where CO₂ is removed from solution.</li>
    <li>Presence of oxygen (even small amounts) can greatly accelerate corrosion; levels should be kept &lt;10 ppb.</li>
    <li>High fluid velocity and turbulence can cause localized attack due to erosion-corrosion effects.</li>
  </ul>
`,

  affectedUnits: `
  <ul>
    <li>Boiler feedwater (BFW) and condensate systems in all process units.</li>
    <li>Hydrogen plant effluent gas streams, especially downstream of shift converters below dew point (~300 °F / 150 °C).</li>
    <li>Overhead systems in CO₂ removal units and regenerator systems.</li>
    <li>Crude unit overhead systems using stripping steam where condensation occurs.</li>
    <li>High-velocity areas such as downstream of control valves, elbows, tees, and reducers are prone to attack.</li>
    <li>Corrosion may occur at pipe bottoms (water phase) or tops (condensation zones) in wet gas systems.</li>
    <li>Cool spots caused by insulation damage or geometry (blind nozzles, pipe supports) can cause condensation and localized corrosion.</li>
  </ul>
`,

  appearance: `
  <ul>
    <li>Appearance varies depending on the unit type and water quality (e.g., steam condensate vs brine).</li>
    <li>Localized general thinning and/or pitting occurs, typically in carbon steel.</li>
    <li>More severe in areas of turbulence, impingement, or weld roots; can lead to deep pitting or grooving.</li>
    <li>Corrosion often initiates at the point of first water condensation and is worst at vapor/water interfaces.</li>
    <li>Flat-bottomed pits resembling "mesa"-type pitting are common.</li>
  </ul>
`,

  mitigation: `
  <ul>
    <li>Use corrosion inhibitors in steam condensate systems; vapor-phase inhibitors may be needed.</li>
    <li>Maintain condensate pH above 6 to reduce corrosion in steam systems.</li>
    <li>Use 300 series SS for strong resistance; 400 series and duplex SS are also effective.</li>
    <li>Upgrade materials in CO₂-producing/removal units (e.g., hydrogen plants) as needed.</li>
    <li>Maintain insulation/jacketing to prevent condensation due to cold spots.</li>
    <li>Apply internal coatings if suitable for the environment and design.</li>
    <li>Optimize water treatment and operating conditions to minimize corrosion.</li>
  </ul>
`,

  inspection: `
  <ul>
    <li>Use VT, UT, and profile RT to detect general and localized thinning in wetted areas.</li>
    <li>Use remote video probes for inaccessible areas like boiler tubes.</li>
    <li>Check for weld corrosion using angle beam UT (SWUT/PAUT) or RT.</li>
    <li>Install permanently mounted thickness sensors for continuous monitoring.</li>
    <li>Monitor water chemistry (pH, iron, oxygen, etc.) for signs of degradation.</li>
  </ul>
`,
   imagePath: "image/CO₂_Corrosion.png"
},


"Cooling Water Corrosion": {
  description: `Corrosion due to dissolved O₂, biofouling, or low pH in cooling systems.`,
  materials: `Carbon steel, Cu, SS`,
  criticalFactors: `Water chemistry, flow velocity, microbial presence`,
  affectedUnits: `Condenser tubes, exchanger shells, cooling coils`,
  appearance: `Pitting, under-deposit corrosion, MIC`,
  mitigation: `Biocide treatment, pH buffering, flow control`,
  inspection: `Visual, pit depth probes, UT`
},

"Erosion/Erosion-Corrosion": {
  description: `
  <ul>
    <li>Covers a wide range of material loss scenarios, from solid particle impingement to velocity-assisted corrosion.</li>
    <li>Erosion is the mechanical removal of surface material due to the impact or movement of solids, liquids, vapors, or combinations thereof.</li>
    <li>Common in services where solids are entrained in liquid or vapor streams, such as slurries and fluidized solids.</li>
    <li>In refining, pure liquid flow rarely causes erosion unless combined with entrained solids or corrosion.</li>
    <li>Steam systems can exhibit erosion due to water droplet impingement (“steam cutting”).</li>
    <li>Erosion-corrosion refers to accelerated corrosion caused by the removal of protective films due to high velocity or particle impingement.</li>
    <li>Most refinery erosion-corrosion cases are dominated by corrosion, with erosion acting as a contributing factor.</li>
  </ul>
`,

 affectedMaterials: `
  <ul>
    <li>All metals can be affected, but carbon steel and copper alloys are most vulnerable in refining services.</li>
    <li>Refractories can also suffer mechanical erosion under high-velocity solid particle flow.</li>
    <li>Materials lacking true passivity (i.e. no stable protective film or corrosion layer) are most commonly affected.</li>
  </ul>
`,

  criticalFactors: `
  <ul>
    <li>Severity depends on velocity, quantity, size, shape, hardness, and density of impacting particles.</li>
    <li>Softer alloys (e.g. copper, aluminum) experience greater erosion under high-velocity impact.</li>
    <li>Harder materials may resist erosion better, but not if corrosion dominates the degradation mechanism.</li>
    <li>When solids are present in a corrosive liquid, erosion-corrosion can far exceed rates from corrosion alone due to removal of protective scales.</li>
    <li>Corrosive liquid droplets in vapor streams cause damage depending on droplet velocity, frequency, and corrosivity.</li>
    <li>Velocity-accelerated corrosion may occur when flow exceeds a critical threshold specific to the material and fluid; in some cases, no threshold exists.</li>
    <li>The more corrosive the environment and the more it disrupts the protective film, the greater the erosion-corrosion effect.</li>
  </ul>
`,

  affectedUnits: `
  <ul>
    <li>All types of equipment exposed to moving fluids and/or catalyst are subject to erosion and erosion-corrosion.</li>
    <li>Commonly affected components include piping bends, elbows, tees, reducers, letdown valves, block valves, pumps, blowers, propellers, impellers, agitators, vessels, heat exchanger tubes, orifices, turbine blades, nozzles, ducts, vapor lines, scrapers, and wear plates.</li>
    <li>Occurs due to gas-borne catalyst or coke particles or particles carried by liquids such as slurries in FCC and coker units.</li>
    <li>Causes wear on catalyst handling systems such as valves, cyclones, and slurry piping in FCC units, and coke equipment in delayed or fluidized bed cokers.</li>
    <li>Hydroprocessing reactor effluent piping may suffer ammonium bisulfide erosion-corrosion depending on process conditions and material selection.</li>
    <li>Crude and vacuum unit equipment may experience erosion-corrosion from naphthenic acid attack depending on crude characteristics.</li>
    <li>Erosion-corrosion is also a concern in acid alkylation systems.</li>
    <li>Flow-accelerated corrosion (FAC) occurs in boiler water circuits under high-velocity conditions.</li>
    <li>High velocity increases corrosion in cooling water systems and other corrosive media.</li>
    <li>Steam systems can suffer severe erosion from water droplet impingement.</li>
  </ul>
`,

  appearance: `
  <ul>
    <li>Damage appears as localized wall thinning in the form of grooves, gullies, rounded holes, valleys, or directional thinning patterns.</li>
    <li>Localized thinning typically occurs in high-turbulence areas such as the outer radius of elbows or impingement zones.</li>
    <li>In some cases, widespread thinning can cause rupture.</li>
    <li>In liquid lines with particulates, erosion may occur at the 6 o’clock position if solids settle and roll at low velocities (< 5 fps or 1.5 m/s).</li>
    <li>Failures due to erosion or erosion-corrosion can develop in a short operational time if conditions are severe.</li>
  </ul>
`,

  mitigation: `
  <ul>
    <li>Modify geometry and materials to reduce velocity and impingement (e.g., increase pipe diameter, streamline bends, add replaceable baffles).</li>
    <li>Improve erosion resistance by increasing surface hardness via harder alloys, hardfacing, or surface treatment. Use erosion-resistant refractories in cyclones and slide valves.</li>
    <li>Use corrosion-resistant alloys and modify process environments (deaeration, inhibitors, condensate injection) to mitigate erosion-corrosion.</li>
    <li>Install impingement plates and tube ferrules in heat exchangers to prevent tube wall damage.</li>
    <li>Refer to relevant corrosion management sections (e.g., naphthenic acid, ammonium bisulfide) for additional mitigation strategies.</li>
    <li>Maintain proper steam system operation to avoid water droplet impingement and related erosion.</li>
  </ul>
`,

  inspection: `
  <ul>
    <li>Use manual UT grids or automated UT scanning in high-risk areas (bends, reducers, tees) to accurately locate thinning zones.</li>
    <li>Profile radiography (RT) helps locate erosion but may not give precise wall thickness—UT is used for follow-up quantification.</li>
    <li>Use Guided Wave Testing (GWT) as a screening tool, if piping configuration allows.</li>
    <li>Install permanently mounted thickness sensors for continuous monitoring.</li>
    <li>Screen for gouging or grooving along pipe bottoms using GWT, SLOFEC, X-ray crawlers, UT scans, or radiography.</li>
    <li>Use infrared thermography to detect refractory degradation (indicating internal erosion) in online equipment.</li>
    <li>Deploy specialized coupons in the system to detect erosive behavior.</li>
    <li>Perform chemical analysis and particle sizing of process stream solids to evaluate erosion potential.</li>
  </ul>
`,
   imagePath: "image/Erosion_Erosion_Corrosion.png"
},


"Flue Gas Dew Point Corrosion": {
  description: `Acid attack due to condensation of H₂SO₄ or HCl in flue gas below acid dew point.`,
  materials: `Carbon steel`,
  criticalFactors: `SOx/NOx in gas, temp < acid dew point, moisture`,
  affectedUnits: `Stacks, ducts, economizers`,
  appearance: `Localized pitting, acidic condensate marks`,
  mitigation: `Reheat gas, alloy upgrades, dewpoint monitoring`,
  inspection: `Visual during shutdown, UT under deposits`
},

"Hydrochloric Acid Corrosion": {
  description: `Severe corrosion from HCl, especially at high concentrations and temperature.`,
  materials: `CS, SS (poor), Hastelloy, Tantalum (resistant)`,
  criticalFactors: `HCl conc > 1%, temp > 50°C, water present`,
  affectedUnits: `Pickling lines, HF units, catalyst prep areas`,
  appearance: `Rapid pitting or uniform thinning`,
  mitigation: `Use of high-alloy materials, pH buffering`,
  inspection: `Visual, UT, corrosion coupons`
},

"Hydrofluoric Acid Corrosion": {
  description: `Aggressive, complex corrosion from HF acid, forms iron fluoride films.`,
  materials: `Carbon steel (limited), Monel, Hastelloy (resistant)`,
  criticalFactors: `Water content, acid strength, contaminants`,
  affectedUnits: `HF alkylation units, piping, towers`,
  appearance: `Gray scale, pitting, rapid thinning at welds`,
  mitigation: `Material selection, film stabilizers`,
  inspection: `Visual, UT, RT of high-stress areas`
},

"Naphthenic Acid Corrosion": {
  description: `
<ul>
  <li>A high-temperature corrosion mechanism primarily found in crude and vacuum units.</li>
  <li>Caused by organic naphthenic acids in crude oil and downstream fractions containing these acids.</li>
  <li>NAC occurs in hot, dry hydrocarbon streams and may lead to pitting or flow-induced corrosion.</li>
  <li>Whole crude TAN may not directly correlate with NAC; severity depends on specific acids in a stream.</li>
  <li>Corrosion occurs in hot zones typically between 350–800 °F (175–425 °C), peaking near 750 °F (400 °C).</li>
</ul>
`,

 affectedMaterials: `
<ul>
  <li>Carbon steel</li>
  <li>Low-alloy steels</li>
  <li>400 series stainless steels</li>
  <li>300 series stainless steels</li>
  <li>Nickel-based alloys (refer Table 3-46-1)</li>
</ul>
`,
  criticalFactors: `
<ul>
  <li>Corrosion influenced by:
    <ul>
      <li>Naphthenic acid content</li>
      <li>Sulfur content</li>
      <li>Temperature (typically &gt; 425 °F / 220 °C)</li>
      <li>Velocity and wall shear stress</li>
      <li>Alloy composition (especially Mo content)</li>
    </ul>
  </li>
  <li>High TAN doesn’t always mean high corrosion—depends on specific acid makeup.</li>
  <li>Acids remove protective FeS layers; low sulfur increases NAC risk.</li>
  <li>Two-phase flow and high turbulence increase severity.</li>
  <li>Alloys with ≥3% Mo (e.g., 317L) or 6% Mo offer better resistance.</li>
</ul>
`,
  affectedUnits: `
<ul>
  <li>Crude and vacuum heater tubes and transfer lines</li>
  <li>AGO, HVGO, LVGO circuits and resid transfer lines</li>
  <li>Light/Heavy coker gas oil streams in delayed cokers with high TAN feed</li>
  <li>Flash zones and internals of crude/vacuum towers</li>
  <li>Hot hydrocarbon streams upstream of hydrogen injection points</li>
</ul>
`,
  appearance: `
<ul>
  <li>Localized pitting, grooving, or flow-induced corrosion in high-velocity areas</li>
  <li>Uniform thinning and/or pitting in low-velocity condensing areas</li>
  <li>Smoother, uniform appearance at temperatures below ~450 °F (230 °C)</li>
</ul>
`,
  mitigation: `
<ul>
  <li>Use crude blending to reduce TAN or increase sulfur for inhibition</li>
  <li>Upgrade to alloys with &ge; 3% Mo (e.g., 317L SS) or use Alloy 625 for severe conditions</li>
  <li>Use high-temperature corrosion inhibitors — monitor closely</li>
  <li>Hydrogen injection helps mitigate NAC in hydroprocessing units</li>
</ul>
`,
  inspection: `
<ul>
  <li>VT used where access is possible</li>
  <li>RT can detect localized wall loss</li>
  <li>Close-grid UT or UT scanning is useful, especially when RT is impractical</li>
  <li>Thickness monitoring sensors may be installed permanently</li>
  <li>ER probes and corrosion coupons may be used cautiously due to turbulence risk</li>
  <li>Monitor stream for Fe and Ni levels as corrosion indicators</li>
</ul>
`,
  imagePath: "image/nac.png"
},

"Oxygenated Process Water Corrosion": {
  description: `Corrosion from O₂ dissolved in process water or steam systems.`,
  materials: `Carbon steel`,
  criticalFactors: `O₂ > 20 ppb, poor deaeration, stagnant water`,
  affectedUnits: `Condensate lines, deaerators, low-flow piping`,
  appearance: `Pitting, under-deposit, orange tubercles`,
  mitigation: `Deaerators, O₂ scavengers, proper design`,
  inspection: `Visual, UT, dissolved O₂ monitoring`
},

"Phenol Corrosion": {
  description: `
<ul>
  <li>Carbon steel corrosion occurs in plants using phenol to remove aromatic compounds from lubricating oil feedstocks.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Increasing resistance: Carbon steel &lt; 304L &lt; 316L &lt; Alloy C276.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Temperature, water content, alloy chemistry, and flow velocity.</li>
  <li>Carbon steel: 1–2 mpy below 212 °F (100 °C); &gt;20 mpy above 350 °F (175 °C).</li>
  <li>Rapid corrosion of carbon steel and 304/304L SS above 500 °F (260 °C).</li>
  <li>Dilute aqueous phenol (5–15%) is very corrosive.</li>
  <li>High velocities (&gt;30 ft/s) promote erosion-corrosion.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Phenol extraction facilities in lube oil plants.</li>
  <li>Treating section: minimal corrosion below 250 °F (121 °C).</li>
  <li>Recovery section: vaporization of spent phenol can cause corrosion.</li>
  <li>Hot extract circuits: sulfidation and naphthenic acid attack possible.</li>
  <li>Condensers and tower overhead circuits: erosion-corrosion and condensation corrosion may occur.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Corrosion may be general or localized; localized attack often due to erosion-corrosion.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Proper material selection and control of phenol solvent chemistry.</li>
  <li>Limit carbon steel velocity to &lt;30 ft/s; design recovery section piping similarly.</li>
  <li>Maintain recovery tower overhead temperatures ≥30 °F (15 °C) above dew point.</li>
  <li>Use 316L SS for dryer tower top, phenol flash tower, condensers, and separator drums.</li>
  <li>Use 316L for extract furnace tubes and headers; Alloy C276 where 316L is insufficient.</li>
</ul>
`,

  inspection: `
<ul>
  <li>VT for accessible internal surfaces at impingement and turbulent flow areas.</li>
  <li>UT thickness measurements to map and monitor wall loss.</li>
  <li>RT for localized attack if practical.</li>
  <li>Permanently mounted thickness sensors.</li>
  <li>ER corrosion probes and corrosion coupons for monitoring.</li>
</ul>
`,

  imagePath: "image/PhenolCorrosion.png"
},


"Phosphoric Acid Corrosion": {
  description: `
<ul>
  <li>Corrosion caused by phosphoric acid, commonly used as a catalyst in polymerization units.</li>
  <li>Localized corrosion occurs where conditions (especially water presence) promote attack on carbon steel.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel (least resistant)</li>
  <li>304L Stainless Steel</li>
  <li>316L Stainless Steel</li>
  <li>Alloy 20</li>
  <li>Alloy 825 (most resistant)</li>
  <li>“L” grades of stainless steels are preferable to reduce risk of sensitization and intergranular corrosion.</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Acid concentration, water content, temperature, and contaminants.</li>
  <li>Solid phosphoric acid catalysts are not corrosive unless free water is present.</li>
  <li>Even a small amount of water in contact with catalyst creates concentrated acid; corrosion can penetrate 6 mm steel in 8 hours.</li>
  <li>Corrosion rates increase with temperature.</li>
  <li>Contaminants such as chlorides, fluorides, and halide salts increase corrosion rates.</li>
  <li>Water washing during shutdowns can contribute significantly.</li>
  <li>Low points with water accumulation are prone to localized corrosion.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Piping and equipment in polymerization units where water mixes with catalyst.</li>
  <li>Low points and low-velocity areas: piping manifolds, bypass lines, dead-legs, partial penetration welds, bottom of kettle-type reboilers, and exchangers with sufficient residence time for acid droplet settling.</li>
</ul>
`,

  appearance: `
<ul>
  <li>Localized thinning with pitted or smoother surface on carbon steel.</li>
  <li>Sensitized stainless steel can suffer intergranular corrosion.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Limit water/moisture content to less than 400 ppm.</li>
  <li>Upgrade to corrosion-resistant materials where water cannot be eliminated.</li>
  <li>304L SS: suitable for 100% phosphoric acid up to ~120 °F (50 °C).</li>
  <li>316L SS: required from 120 °F to 225 °F (50 °C to 105 °C).</li>
  <li>316L SS and Alloy 20: effective for up to 85% concentration at boiling temperatures.</li>
  <li>Alloy 825: may be needed at higher temperatures above boiling where liquid acid is present.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Use UT and RT to detect and measure wall loss.</li>
  <li>Permanently mounted thickness monitoring sensors can be used.</li>
  <li>Monitor water from the first column overhead receiver for iron content.</li>
  <li>Monitor temperature, pH, water content (e.g., moisture analyzer), and phosphoric acid carryover past the reactor.</li>
  <li>Online corrosion monitoring using ER probes and corrosion coupons in water draws from first column overhead condenser and reboiler.</li>
</ul>
`,

  imagePath: "image/PhosphoricAcid.png"
},


"Soil Corrosion": {
   description: `
<ul>
  <li>The corrosion of metals resulting from exposure to soils.</li>
</ul>
`,

  affectedMaterials: `
<ul>
  <li>Carbon steel</li>
  <li>Cast iron</li>
  <li>Ductile iron</li>
</ul>
`,

  criticalFactors: `
<ul>
  <li>Severity depends on operating temperature, moisture and oxygen availability, soil resistivity, soil type and homogeneity, cathodic protection, stray current drainage, and coating type, age, and condition.</li>
  <li>No single parameter determines soil corrosivity; a combination of characteristics is used (per ASTM STP 741, API 580, API 581).</li>
  <li>Soil resistivity relates to soil moisture and dissolved electrolytes; resistivity testing is common but can vary widely.</li>
  <li>High moisture, high dissolved salts, and high acidity increase corrosivity.</li>
  <li>Soil-to-air interface areas are often more susceptible due to higher moisture and oxygen availability.</li>
  <li>Corrosion rates increase with increasing metal temperature.</li>
  <li>Other factors include galvanic corrosion, dissimilar soils, stray currents, differential aeration cells, and MIC.</li>
</ul>
`,

  affectedUnits: `
<ul>
  <li>Underground piping and equipment, buried tanks, and bottoms of aboveground storage tanks.</li>
  <li>Ground-supported metal structures.</li>
  <li>Piping close to the ground where soil has accumulated and contacts or partially covers the pipe.</li>
  <li>Piping at road or other crossings where soil has sloughed off and covers the pipe.</li>
</ul>
`,

  appearance: `
<ul>
  <li>External thinning with a roughened surface and localized deeper attack or pitting.</li>
  <li>Poor condition of protective coating indicates potential corrosion damage.</li>
  <li>Corrosion is highly variable along unprotected buried pipe or unprotected underside of storage tank bottoms.</li>
</ul>
`,

  mitigation: `
<ul>
  <li>Use appropriate coatings and cathodic protection.</li>
  <li>Special backfill can prevent rock damage to coatings.</li>
  <li>The most effective protection combines corrosion-resistant coating and a cathodic protection system.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Aboveground visual surveys can detect leaks or soil changes (discoloration, softening asphalt, pool formation, odors).</li>
  <li>Smart-pigging (UT or MFL) can detect dents, flaws, and corrosion in pipelines.</li>
  <li>Close-interval potential surveys verify protective potential in cathodically protected lines (API 570, NACE SP0169, API 651 guidance).</li>
  <li>Pipe coating holiday surveys (DCVG) locate coating defects.</li>
  <li>Visual testing (VT) of excavated pipes/equipment exposes the most corrosion-prone areas, especially at soil-to-air interfaces.</li>
  <li>Groundwave testing (GWT) can screen for metal loss, though distance is limited.</li>
  <li>Pressure testing detects leaks but not the extent of corrosion.</li>
</ul>
`,

  imagePath: "image/Soil.png"
},

"Sour Water Corrosion (Acidic)": {
  description: `
<ul>
  <li>Corrosion of steel (primarily) due to acidic sour water (SW) containing H<sub>2</sub>S at a pH between 4.5 and 7.0.</li>
  <li>Carbon dioxide (CO<sub>2</sub>) and other acidic species such as dissolved organic acids may also be present.</li>
  <li>Sour waters containing significant amounts of ammonia, chlorides, or cyanides (which significantly affect pH) are outside the scope of this section.</li>
</ul>
`,

 affectedMaterials: `
<ul>
  <li>Primarily affects carbon steel.</li>
  <li>Stainless steels, copper alloys, and nickel-based alloys are usually resistant.</li>
</ul>
`,

criticalFactors: `
<ul>
  <li>H<sub>2</sub>S content, pH, temperature, velocity, and oxygen concentration are critical factors.</li>
  <li>H<sub>2</sub>S concentration in sour water depends on partial pressure in gas phase, temperature, and pH.</li>
  <li>At a given pressure, H<sub>2</sub>S concentration in SW decreases with increasing temperature.</li>
  <li>Higher H<sub>2</sub>S concentration lowers pH to around 4.5. Below this, strong acids are typically responsible for corrosion.</li>
  <li>Above pH 4.5, a thin protective iron sulfide layer may form to limit corrosion rate.</li>
  <li>Sometimes, a thicker, porous sulfide layer forms above pH 4.5, promoting pitting under the deposits.</li>
  <li>Other contaminants affect pH significantly:
    <ul>
      <li>HCl and CO<sub>2</sub> lower the pH (increase acidity).</li>
      <li>Ammonia raises the pH, leading to alkaline sour water corrosion (see 3.5).</li>
    </ul>
  </li>
  <li>Air or oxidants can increase corrosion rate and typically cause pitting or under-deposit attack.</li>
</ul>
`,

affectedUnits: `
<ul>
  <li>Acidic sour water corrosion is a concern in:
    <ul>
      <li>FCC unit overhead systems</li>
      <li>Coker gas fractionation overhead systems</li>
    </ul>
    especially where H<sub>2</sub>S is high and NH<sub>3</sub> is low.
  </li>
</ul>
`,

  appearance: `
<ul>
  <li>Corrosion damage from acidic sour water is typically general thinning.</li>
  <li>Localized corrosion or under-deposit attack may occur, especially if air or oxygen is present.</li>
  <li>Corrosion in high CO<sub>2</sub> environments is addressed separately (see section 3.18).</li>
  <li>300 series stainless steels are susceptible to:
    <ul>
      <li>Pitting corrosion</li>
      <li>Crevice corrosion</li>
      <li>Chloride Stress Corrosion Cracking (Cl⁻ SCC) — see section 3.17</li>
    </ul>
  </li>
</ul>
`,

  mitigation: `
<ul>
  <li>Process monitoring and control are critical to minimize acidic sour water corrosion. Important parameters to monitor and control (especially at overhead accumulator water draws) include:
    <ul>
      <li>H<sub>2</sub>S content</li>
      <li>pH</li>
      <li>Chloride content</li>
      <li>Cyanide content</li>
      <li>Temperature</li>
      <li>Fluid velocity</li>
      <li>Oxygen concentration</li>
    </ul>
  </li>
  <li>300 series stainless steels can be used below approximately 140 °F (60 °C), where chloride stress corrosion cracking (Cl⁻ SCC) is less likely.</li>
  <li>Copper and nickel alloys are generally resistant to acid sour water corrosion, though copper alloys can corrode and are susceptible to SCC in ammonia-rich environments.</li>
  <li>Water wash injection (e.g., in FCC overheads and coker light ends) helps dilute and remove H<sub>2</sub>S and cyanide (CN⁻). Polysulfide additives in water wash can convert cyanides to less harmful compounds.</li>
</ul>
`,

  inspection: `
<ul>
  <li>Use UT scanning and radiography (RT) to detect local wall thinning caused by acidic sour water corrosion.</li>
  <li>Permanently mounted thickness monitoring sensors can provide ongoing measurement.</li>
  <li>Install corrosion monitoring tools such as:
    <ul>
      <li>Corrosion probes</li>
      <li>Corrosion coupons</li>
      <li>Online thickness monitoring sensors</li>
    </ul>
    to detect increasing corrosion rates early and plan further NDE or thickness surveys.
  </li>
  <li><strong>Note:</strong> Corrosion probes can give misleading readings due to iron sulfide (FeS) scale buildup.</li>
  <li>Process monitoring, as described above, is key to identifying inspection locations and controlling acidic SW corrosion.</li>
</ul>
`,
   imagePath: "image/Acidic.png"
},


"Sulfuric Acid Corrosion": {
  description: `
  <ul>
    <li>High-temperature corrosion caused by sulfuric acid, particularly affecting carbon steel and stainless steels.</li>
    <li>Corrosion is influenced by acid concentration, temperature, velocity, and presence of contaminants or oxidizers.</li>
    <li>Corrosion can be localized or uniform, often exacerbated by mixing, stagnation, or hydrogen grooving.</li>
    <li>Mixing acid with water during cleaning can rapidly cause damage due to heat release and acid dilution.</li>
  </ul>
`,
affectedMaterials: `
  <ul>
    <li>Carbon steel</li>
    <li>316L stainless steel</li>
    <li>Alloy 20</li>
    <li>High-silicon cast iron</li>
    <li>High-nickel cast iron</li>
    <li>Alloy B-2</li>
    <li>Alloy C-276</li>
  </ul>
`,
criticalFactors: `
  <ul>
    <li>Acid concentration, temperature, velocity, alloy composition, and contamination.</li>
    <li>Low acid concentration and high velocity reduce protective film and increase corrosion.</li>
    <li>Hydrogen grooving can occur in stagnant areas, increasing localized corrosion.</li>
    <li>Presence of oxidizers or metal contaminants can dramatically increase corrosion, especially in Alloy B-2.</li>
    <li>Stainless steel performance may degrade at low acid concentrations and high temperature.</li>
  </ul>
`,
affectedUnits: `
  <ul>
    <li>Sulfuric acid alkylation units and wastewater treatment systems.</li>
    <li>Areas of concern: contactors, effluent lines, reboilers, overhead systems, and caustic treating sections.</li>
    <li>Corrosion can occur in reboilers, reflux areas, and during cleaning due to acid dilution.</li>
    <li>Hydrogen grooving may develop in dead-legs, tanks, or railcars with low-flow or stagnant acid.</li>
  </ul>
`,
appearance: `
  <ul>
    <li>Localized or general corrosion based on flow and acid concentration.</li>
    <li>Typical signs: rivulet corrosion, hydrogen grooving, weld HAZ attack, vapor/liquid interface corrosion.</li>
    <li>Knife-line grooving on top of horizontal pipes and delta-shaped corrosion at elbows.</li>
    <li>No scale present at high corrosion rates.</li>
  </ul>
`,
mitigation: `
  <ul>
    <li>Select corrosion-resistant alloys (e.g. Alloy 20, 904L, C-276) to minimize attack.</li>
    <li>Neutralize acid in streams using caustic washes where needed.</li>
    <li>Maintain flow within design velocity limits to avoid erosion or grooving.</li>
    <li>Use proper vessel cleaning and neutralization practices to prevent attack from acid dilution during maintenance.</li>
  </ul>
`,
inspection: `
  <ul>
    <li>Use UT and RT to detect localized corrosion.</li>
    <li>Apply permanently mounted thickness monitoring sensors where possible.</li>
    <li>Use corrosion coupons or ER probes for ongoing monitoring.</li>
    <li>Avoid intrusive inspection during vessel clean-out unless followed by careful inspection for damage.</li>
  </ul>
`,
imagePath: "image/sulfuric-acid-corrosion.png"

    }
}
};









