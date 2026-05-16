const image = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const place = (label, query) => ({ label, query });

const P = {
  home: place("Jersey City base", "211 Hancock Avenue Jersey City NJ 07307"),
  hoboken: place("Hoboken waterfront", "Pier A Park Hoboken NJ"),
  bryant: place("Bryant Park", "Bryant Park New York NY"),
  nypl: place("NY Public Library", "New York Public Library Stephen A Schwarzman Building"),
  grandCentral: place("Grand Central", "Grand Central Terminal New York NY"),
  rockefeller: place("Rockefeller Center", "Rockefeller Center New York NY"),
  centralPark: place("Central Park route", "Bethesda Terrace Central Park New York NY"),
  columbus: place("Columbus Circle", "Columbus Circle New York NY"),
  dinner: place("Birthday dinner area", "Hell's Kitchen New York NY"),
  topRock: place("Top of the Rock", "Top of the Rock New York NY"),
  timesSquare: place("Times Square", "Times Square New York NY"),
  wtc: place("World Trade Center", "World Trade Center Transportation Hub New York NY"),
  memorial: place("9/11 Memorial", "9/11 Memorial New York NY"),
  wallStreet: place("Wall Street", "Wall Street New York NY"),
  ferry: place("Staten Island Ferry", "Whitehall Terminal New York NY"),
  dumbo: place("DUMBO", "Washington Street and Water Street Brooklyn NY"),
  brooklynBridge: place("Brooklyn Bridge", "Brooklyn Bridge New York NY"),
  chinatown: place("Chinatown", "Chinatown New York NY"),
  intrepid: place("Intrepid Pier 86", "Pier 86 West 46th Street New York NY"),
  hudsonYards: place("Hudson Yards", "Hudson Yards New York NY"),
  highLine: place("High Line", "The High Line New York NY"),
  chelseaMarket: place("Chelsea Market", "Chelsea Market New York NY"),
  littleIsland: place("Little Island", "Little Island New York NY"),
  washingtonSq: place("Washington Square Park", "Washington Square Park New York NY"),
  soho: place("SoHo", "SoHo New York NY"),
  penn: place("Moynihan / Penn Station", "Moynihan Train Hall New York NY"),
  kTown: place("Koreatown", "Koreatown New York NY"),
};

const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapsRoute = (stops) => {
  const params = new URLSearchParams({
    api: "1",
    travelmode: "transit",
    origin: stops[0].query,
    destination: stops[stops.length - 1].query,
  });
  const waypoints = stops.slice(1, -1).map((stop) => stop.query).join("|");
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
};

const days = [
  {
    id: "may22",
    tab: "Fri 22",
    date: "May 22",
    title: "Arrival + easy skyline evening",
    subtitle: "Land, settle in Jersey City, and keep the first night gentle.",
    image: image("Lower Manhattan skyline - panoramio.jpg"),
    pace: "Arrival",
    walking: "Minimal",
    transit: "Airport/NJ transfer",
    cost: "Dinner + transit",
    route: [P.home, P.hoboken, P.home],
    items: [
      ["6:00 PM", "Arrive", "Travel to Jersey City and keep expectations low tonight."],
      ["6:00-7:30 PM", "Check in", "Settle at 211 Hancock Avenue, drop bags, and regroup.", P.home],
      ["7:45-9:00 PM", "Easy dinner", "Stay near Jersey City Heights or Hoboken. Avoid a Manhattan commute tonight."],
      ["9:00-9:45 PM", "Optional skyline view", "If energy is good, go to Hoboken waterfront or Riverview-Fisk Park for Manhattan views.", P.hoboken, ["Optional"]],
      ["10:30 PM", "Sleep", "Protect the first full day."],
    ],
    meals: [
      ["Dinner", "Jersey City Heights, Central Ave, or Hoboken waterfront if everyone still has energy."],
    ],
    notes: [
      "This night is intentionally light.",
      "Use rideshare if arrival logistics are messy.",
    ],
  },
  {
    id: "may23",
    tab: "Sat 23",
    date: "May 23",
    title: "Central Park + birthday night",
    subtitle: "Classic Midtown and Central Park by day, Italian dinner, skyline view, and Times Square by night.",
    image: image("Bethesda Terrace and Fountain, Central Park, New York City.jpg"),
    pace: "Birthday full day",
    walking: "Medium-high",
    transit: "NJ to Midtown",
    cost: "Dinner + optional Top of the Rock",
    route: [P.home, P.bryant, P.grandCentral, P.rockefeller, P.centralPark, P.dinner, P.topRock, P.timesSquare, P.home],
    items: [
      ["8:00 AM", "Wake up", "Breakfast near the Airbnb or quick grab-and-go."],
      ["8:45-9:45 AM", "Transit to Midtown", "Use NJ Transit/PATH/subway based on live routing.", P.bryant],
      ["9:45-10:30 AM", "Bryant Park + NYPL", "A beautiful start that late arrivals will not feel devastated to miss.", P.nypl],
      ["10:30-11:15 AM", "Grand Central Terminal", "Main concourse, architecture, bathrooms, and quick coffee if needed.", P.grandCentral],
      ["11:15 AM-12:15 PM", "Fifth Ave + Rockefeller exterior", "St. Patrick's Cathedral, Rockefeller Center, and classic Midtown atmosphere.", P.rockefeller],
      ["12:15-1:30 PM", "Lunch near Midtown", "Keep it practical and casual before the park walk."],
      ["1:30-3:30 PM", "Central Park south-to-middle walk", "Plaza Hotel exterior, Gapstow Bridge, The Mall, Bethesda Terrace, Bow Bridge.", P.centralPark, ["Central Park"]],
      ["3:30-4:30 PM", "Full-family meet-up / coffee rest", "Late-arriving family can meet near Columbus Circle, Bethesda Terrace, Rockefeller Center, or Bryant Park.", P.columbus],
      ["5:15-6:45 PM", "Father's birthday Italian dinner", "Target Midtown/Hell's Kitchen. Book a group-friendly reservation.", P.dinner, ["Birthday"]],
      ["7:15-8:30 PM", "Optional birthday skyline view", "Preferred: Top of the Rock if weather and timing are good. Backup: May 24.", P.topRock, ["Book ahead"]],
      ["8:45-9:30 PM", "Times Square at night", "Lights, photos, short visit, then leave before it becomes tiring.", P.timesSquare],
      ["9:30-10:30 PM", "Return to Jersey City", "Use transit if smooth; rideshare for the final NJ leg if tired.", P.home],
    ],
    meals: [
      ["Lunch", "Urbanspace, Los Tacos No. 1, Joe's Pizza, or casual Midtown options."],
      ["Birthday dinner", "Tony's Di Napoli, Becco, Carmine's Times Square, or a reservation-friendly Hell's Kitchen trattoria."],
    ],
    notes: [
      "Times Square belongs at night, so it is intentionally placed after dinner/skyline.",
      "If late-arriving family has luggage, use storage near Penn/Times Square/Rockefeller Center or meet after drop-off.",
      "Book Top of the Rock for May 23 only if weather/logistics look good; otherwise use May 24.",
    ],
  },
  {
    id: "may24",
    tab: "Sun 24",
    date: "May 24",
    title: "Lower Manhattan + Brooklyn",
    subtitle: "Full-group day for the biggest downtown icons: WTC, ferry views, DUMBO, and Brooklyn Bridge.",
    image: image("Brooklyn Bridge Manhattan.jpg"),
    pace: "Full day",
    walking: "Medium-high",
    transit: "PATH + subway",
    cost: "Mostly free",
    route: [P.home, P.wtc, P.memorial, P.wallStreet, P.ferry, P.dumbo, P.brooklynBridge, P.chinatown, P.home],
    items: [
      ["7:30 AM", "Wake up", "Breakfast and comfortable shoes."],
      ["8:15-9:15 AM", "Transit to WTC", "Use PATH to World Trade Center if practical.", P.wtc],
      ["9:15-10:00 AM", "Oculus + One World Trade exterior", "High-impact arrival moment downtown.", P.wtc],
      ["10:00-11:00 AM", "9/11 Memorial", "Outdoor memorial visit. Museum only if the group specifically wants it.", P.memorial],
      ["11:00 AM-12:00 PM", "Wall Street to Battery Park", "Trinity Church, Wall Street, Charging Bull area, then south.", P.wallStreet],
      ["12:00-1:30 PM", "Staten Island Ferry round trip", "Free Statue of Liberty and harbor views; about 25 minutes each way.", P.ferry, ["Free"]],
      ["1:30-2:30 PM", "Lunch", "Stone Street, Eataly Downtown, or Chinatown if shifting north."],
      ["2:30-3:15 PM", "Transit to DUMBO", "Subway/ferry/taxi depending energy and wait times.", P.dumbo],
      ["3:15-4:45 PM", "DUMBO + Brooklyn Bridge Park", "Washington Street photo and waterfront skyline views.", P.dumbo],
      ["4:45-6:00 PM", "Brooklyn Bridge walk", "Walk toward Manhattan; subway/taxi if anyone is tired.", P.brooklynBridge],
      ["6:15-7:45 PM", "Dinner downtown", "Chinatown, Seaport, or Little Italy depending energy.", P.chinatown],
      ["8:00-9:00 PM", "Skyline backup", "Use Top of the Rock tonight only if it did not happen May 23.", P.topRock, ["Backup"]],
      ["9:00-10:00 PM", "Return to Jersey City", "PATH/transit or rideshare-assisted route.", P.home],
    ],
    meals: [
      ["Lunch", "Stone Street, Eataly Downtown, or Chinatown."],
      ["Dinner", "Chinatown, Seaport, or Little Italy. Choose by wait time and energy."],
    ],
    notes: [
      "Staten Island Ferry replaces a paid Statue/Ellis Island half-day to preserve time and cost.",
      "If skyline view already happened May 23, return earlier tonight.",
    ],
  },
  {
    id: "may25",
    tab: "Mon 25",
    date: "May 25",
    title: "Memorial Day + West Side neighborhoods",
    subtitle: "Use the one holiday-specific event worth adding, then continue with High Line, Chelsea, Village, and SoHo.",
    image: image("Intrepid Sea-Air-Space Museum 2012.jpg"),
    pace: "Full but flexible",
    walking: "Medium-high",
    transit: "NJ to West Side",
    cost: "Mostly free",
    route: [P.home, P.intrepid, P.hudsonYards, P.highLine, P.chelseaMarket, P.littleIsland, P.washingtonSq, P.soho, P.home],
    items: [
      ["8:00 AM", "Wake up", "Breakfast and transit check. Memorial Day may use holiday service patterns."],
      ["8:45-9:45 AM", "Transit to Pier 86", "Head to the Intrepid area on the Hudson River.", P.intrepid],
      ["10:00-11:00 AM", "Intrepid Memorial Day Ceremony", "Free official ceremony with wreath-laying and listed Navy fighter jet flyover.", P.intrepid, ["Memorial Day"]],
      ["11:00 AM-12:00 PM", "Pier activities / Hudson River walk", "Skip paid museum entry unless the family strongly wants it.", P.intrepid],
      ["12:00-1:15 PM", "Lunch near Hell's Kitchen / Hudson Yards", "Stay close and seated before the High Line."],
      ["1:15-2:00 PM", "Hudson Yards exterior", "Quick exterior stop. No Edge ticket needed because skyline view is elsewhere.", P.hudsonYards],
      ["2:00-3:15 PM", "High Line southbound", "Best section: Hudson Yards to Chelsea Market.", P.highLine],
      ["3:15-4:30 PM", "Chelsea Market + Little Island", "Snack, bathrooms, and a real rest by the river.", P.littleIsland],
      ["4:30-5:45 PM", "West Village + Washington Square Park", "Brownstones, park, and classic downtown atmosphere.", P.washingtonSq],
      ["5:45-6:45 PM", "SoHo / NoLita stroll", "Architecture, shops, and people-watching.", P.soho],
      ["6:45-8:15 PM", "Dinner downtown", "NoLita, Chinatown, East Village, or Greenwich Village."],
      ["8:15-9:15 PM", "Return to Jersey City", "Earlier return is smart before departure day.", P.home],
    ],
    meals: [
      ["Lunch", "Hell's Kitchen/Hudson Yards casual options, or Chelsea Market if timing shifts later."],
      ["Dinner", "NoLita, Chinatown, East Village, or Greenwich Village for better value than Midtown."],
    ],
    notes: [
      "Intrepid is the recommended Memorial Day-specific event; it fits the route and is free.",
      "Brooklyn/Queens parades are meaningful but would pull the itinerary away from first-time Manhattan highlights.",
      "Paid Intrepid museum entry is optional and not needed for this plan.",
    ],
  },
  {
    id: "may26",
    tab: "Tue 26",
    date: "May 26",
    title: "Easy morning + Penn Station",
    subtitle: "No ambitious sightseeing. Pack, eat, and get to the 3 PM train calmly.",
    image: image("Moynihan Train Hall 2021.jpg"),
    pace: "Departure",
    walking: "Light",
    transit: "Rideshare with luggage",
    cost: "Uber/Lyft + lunch",
    route: [P.home, P.hoboken, P.penn, P.kTown],
    items: [
      ["8:00 AM", "Wake up", "Breakfast, packing, and a calm morning."],
      ["8:30-9:30 AM", "Breakfast / pack", "Keep luggage organized for a direct departure."],
      ["9:30-10:30 AM", "Optional local skyline walk", "Jersey City/Hoboken skyline if timing allows.", P.hoboken, ["Optional"]],
      ["10:30-11:30 AM", "Checkout buffer", "Final packing and bathroom stop before leaving with luggage.", P.home],
      ["11:45 AM-12:30 PM", "Uber/Lyft to Moynihan / Penn", "Worth it with luggage and a fixed 3 PM train.", P.penn],
      ["12:30-1:45 PM", "Lunch near Penn / Koreatown / Moynihan", "Stay close to the station.", P.kTown],
      ["1:45-2:15 PM", "Inside station", "Bathrooms, snacks, and track watch.", P.penn],
      ["3:00 PM", "Train departs", "Trip complete."],
    ],
    meals: [
      ["Breakfast", "At the Airbnb or nearby grab-and-go."],
      ["Lunch", "Koreatown, Moynihan food hall, or another station-adjacent option."],
    ],
    notes: [
      "Use Uber/Lyft to Penn Station with luggage.",
      "Do not add Manhattan sightseeing before the train unless the group is fully packed early.",
    ],
  },
];

const comparisons = [
  ["Keeps", "Central Park, Midtown classics, one skyline view, Lower Manhattan, Staten Island Ferry, DUMBO, Brooklyn Bridge, Chelsea, High Line, Village, SoHo, and the easy Penn Station departure."],
  ["Improves", "Times Square moves to night, May 23 becomes a real birthday evening, late-arriving family joins the most special parts, and Memorial Day gets the Intrepid ceremony/flyover."],
  ["Compresses", "Less loose Midtown time on May 23, May 25 is fuller with Intrepid added, and May 24 can be longer if skyline view shifts there."],
  ["Not included", "Brooklyn/Queens Memorial Day parades, paid Statue/Ellis Island visit, and Broadway by default. Each is possible, but each would replace something meaningful."],
];

const dayTabs = document.querySelector("#dayTabs");
const dayDetail = document.querySelector("#dayDetail");

function dayButton(day, index) {
  const button = document.createElement("button");
  button.className = "day-tab";
  button.type = "button";
  button.role = "tab";
  button.id = `tab-${day.id}`;
  button.setAttribute("aria-controls", `panel-${day.id}`);
  button.innerHTML = `<strong>${day.tab}</strong><span>${day.date}</span>`;
  button.addEventListener("click", () => selectDay(index));
  return button;
}

function routeButtons(day) {
  const buttons = [`<a class="map-button" href="${mapsRoute(day.route)}" target="_blank" rel="noreferrer">Open route</a>`];
  if (day.route.length > 2) {
    buttons.push(`<a class="map-button secondary" href="${mapsSearch(day.route[1].query)}" target="_blank" rel="noreferrer">First stop</a>`);
  }
  return buttons.join("");
}

function timelineItem(item) {
  const [time, title, detail, loc, tags = []] = item;
  const actions = [];
  if (loc?.query) actions.push(`<a href="${mapsSearch(loc.query)}" target="_blank" rel="noreferrer">Map</a>`);
  tags.forEach((tag) => actions.push(`<span class="tag">${tag}</span>`));
  return `
    <div class="timeline-item">
      <div class="time">${time}</div>
      <div class="timeline-card">
        <h4>${title}</h4>
        <p>${detail}</p>
        ${actions.length ? `<div class="timeline-actions">${actions.join("")}</div>` : ""}
      </div>
    </div>
  `;
}

function mealCard(meal) {
  const [title, detail] = meal;
  return `<div class="meal-card"><strong>${title}</strong><p>${detail}</p></div>`;
}

function renderDay(day) {
  dayDetail.id = `panel-${day.id}`;
  dayDetail.role = "tabpanel";
  dayDetail.setAttribute("aria-labelledby", `tab-${day.id}`);
  dayDetail.innerHTML = `
    <div class="day-top">
      <section class="day-summary">
        <p class="eyebrow">${day.date}</p>
        <h2>${day.title}</h2>
        <p>${day.subtitle}</p>
        <div class="route-bar">${routeButtons(day)}</div>
      </section>
      <div class="day-photo" style="background-image: url('${day.image}')"></div>
    </div>
    <div class="quick-grid">
      <div><span>Pace</span><strong>${day.pace}</strong></div>
      <div><span>Walking</span><strong>${day.walking}</strong></div>
      <div><span>Transit</span><strong>${day.transit}</strong></div>
      <div><span>Cost</span><strong>${day.cost}</strong></div>
    </div>
    <div class="content-grid">
      <section class="timeline">
        ${day.items.map(timelineItem).join("")}
      </section>
      <aside class="side-panel">
        <section class="side-block">
          <h3>Food that fits</h3>
          ${day.meals.map(mealCard).join("")}
        </section>
        <section class="side-block">
          <h3>Notes</h3>
          <ul class="checklist">
            ${day.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </section>
        <section class="side-block">
          <h3>Comparison vs base plan</h3>
          <ul class="checklist">
            ${comparisons.map(([label, text]) => `<li><strong>${label}:</strong> ${text}</li>`).join("")}
          </ul>
        </section>
      </aside>
    </div>
  `;
}

function selectDay(index) {
  const buttons = [...dayTabs.querySelectorAll(".day-tab")];
  buttons.forEach((button, buttonIndex) => {
    button.setAttribute("aria-selected", String(buttonIndex === index));
    button.tabIndex = buttonIndex === index ? 0 : -1;
  });
  renderDay(days[index]);
}

function initialDayIndex() {
  const now = new Date();
  const tripStart = new Date("2026-05-22T00:00:00");
  const tripEnd = new Date("2026-05-26T23:59:59");
  if (now < tripStart || now > tripEnd) return 0;
  return Math.min(days.length - 1, Math.max(0, Math.floor((now - tripStart) / 86400000)));
}

days.forEach((day, index) => dayTabs.append(dayButton(day, index)));
selectDay(initialDayIndex());

document.querySelector("[data-print]").addEventListener("click", () => window.print());
