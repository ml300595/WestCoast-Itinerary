const image = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const place = (label, query) => ({ label, query });

const P = {
  lax: place("LAX", "Los Angeles International Airport"),
  laHome: place("West LA home base", "Federal Ave and Santa Monica Blvd Los Angeles CA"),
  hollywood: place("Hollywood Boulevard", "TCL Chinese Theatre Los Angeles CA"),
  farmers: place("Original Farmers Market", "Original Farmers Market Los Angeles CA"),
  griffith: place("Griffith Observatory", "Griffith Observatory Los Angeles CA"),
  greystone: place("Greystone Mansion", "Greystone Mansion Beverly Hills CA"),
  rodeo: place("Rodeo Drive", "Rodeo Drive Beverly Hills CA"),
  getty: place("Getty Center", "Getty Center Los Angeles CA"),
  santaMonica: place("Santa Monica Pier", "Santa Monica Pier Santa Monica CA"),
  malibuPier: place("Malibu Pier", "Malibu Pier Malibu CA"),
  courthouse: place("Santa Barbara Courthouse", "Santa Barbara County Courthouse Santa Barbara CA"),
  stearns: place("Stearns Wharf", "Stearns Wharf Santa Barbara CA"),
  huntington: place("Huntington Beach Pier", "Huntington Beach Pier Huntington Beach CA"),
  laguna: place("Laguna Beach", "Heisler Park Laguna Beach CA"),
  danaPoint: place("Dana Point Harbor", "Dana Point Harbor Dana Point CA"),
  sdHome: place("Point Loma home base", "Point Loma San Diego CA"),
  oldTown: place("Old Town San Diego", "Old Town San Diego State Historic Park San Diego CA"),
  laJolla: place("La Jolla Cove", "La Jolla Cove San Diego CA"),
  gliderport: place("Torrey Pines Gliderport", "Torrey Pines Gliderport San Diego CA"),
  balboa: place("Balboa Park", "Balboa Park San Diego CA"),
  midway: place("USS Midway", "USS Midway Museum San Diego CA"),
  seaport: place("Seaport Village", "Seaport Village San Diego CA"),
  coronado: place("Coronado", "Hotel del Coronado Coronado CA"),
  rental: place("SAN Rental Car Center", "3355 Admiral Boland Way San Diego CA"),
  san: place("SAN Airport", "San Diego International Airport"),
};

const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapsRoute = (stops) => {
  const origin = stops[0].query;
  const destination = stops[stops.length - 1].query;
  const waypoints = stops.slice(1, -1).map((stop) => stop.query).join("|");
  const params = new URLSearchParams({
    api: "1",
    travelmode: "driving",
    origin,
    destination,
  });
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
};

const days = [
  {
    id: "may15",
    tab: "Fri 15",
    date: "May 15",
    title: "Arrive in LA",
    subtitle: "Pick up the car, get to West LA, and protect sleep.",
    image: image("LAX International Airport (18261269934).jpg"),
    pace: "Commute",
    walking: "Minimal",
    driving: "25-45 min",
    cost: "Rental + parking",
    route: [P.lax, P.laHome],
    items: [
      ["8:00 PM", "Land at LAX", "Keep expectations low tonight. The goal is arrival, not sightseeing.", P.lax],
      ["8:30-9:30 PM", "Pick up rental car", "Allow time for baggage, shuttle, and rental counter pacing.", P.lax, ["Transport"]],
      ["9:30-10:10 PM", "Drive to West LA", "Head straight to the Airbnb and keep the route simple.", P.laHome],
      ["10:10-10:45 PM", "Check in", "Confirm parking, bring in essentials, set out clothes for tomorrow."],
      ["11:00 PM", "Sleep", "A clean reset makes the first real day much better."],
    ],
    meals: [["Late snack", "Only if needed: pick something close to the Airbnb. No detour tonight."]],
    notes: ["Put Getty reservation and car return details somewhere easy to find.", "Set offline maps if you like having a backup."],
  },
  {
    id: "may16",
    tab: "Sat 16",
    date: "May 16",
    title: "Hollywood + Griffith",
    subtitle: "Classic LA in one clean loop: Hollywood, Farmers Market, Griffith sunset.",
    image: image("Griffith Observatory, Los Angeles.jpg"),
    pace: "Balanced",
    walking: "Light-medium",
    driving: "90-130 min total",
    cost: "Parking + meals",
    route: [P.laHome, P.hollywood, P.farmers, P.griffith, P.laHome],
    items: [
      ["7:00 AM", "Wake up", "Use the early start to stay ahead of parking and crowd friction."],
      ["7:30-8:15 AM", "Breakfast", "Coffee, pastries, yogurt, or breakfast at home."],
      ["8:15-9:00 AM", "Drive to Hollywood", "Park once near Hollywood Boulevard.", P.hollywood],
      ["9:00-10:15 AM", "Hollywood Boulevard", "Chinese Theatre, Walk of Fame, Dolby Theatre area. Treat it as an iconic photo stop.", P.hollywood, ["Classic LA"]],
      ["10:15-10:45 AM", "Drive to Farmers Market", "This moves you toward lunch and an easy seated break.", P.farmers],
      ["10:45 AM-1:00 PM", "Original Farmers Market", "Bathrooms, shade, seating, and different food choices for everyone.", P.farmers, ["Lunch", "Rest"]],
      ["1:00-2:30 PM", "The Grove + coffee pause", "Use this as the midday recovery window. Sit when you find a good spot.", P.farmers],
      ["2:30-3:15 PM", "Drive toward Griffith", "Aim to arrive before the sunset rush fully builds.", P.griffith],
      ["3:15-4:15 PM", "Los Feliz rest stop", "Coffee or early snack before the observatory. This replaces an inefficient hotel return."],
      ["4:15-7:30 PM", "Griffith Observatory", "Views, architecture, sunset, and optional exhibits. Skip hiking unless everyone feels excellent.", P.griffith, ["Sunset"]],
      ["7:30-8:30 PM", "Dinner nearby", "Eat in Los Feliz or Thai Town before driving west."],
      ["8:30-9:15 PM", "Return to Airbnb", "One drive home, then real rest.", P.laHome],
    ],
    meals: [
      ["Lunch", "Original Farmers Market: Pampas Grill, Singapore's Banana Leaf, Monsieur Marcel snacks, or Gott's Roadside."],
      ["Dinner", "Los Feliz / Thai Town: HomeState, Spitz Los Feliz, Ruen Pair Thai, or a simple diner-style option."],
    ],
    notes: ["Griffith is free; parking near the top can be paid and crowded.", "If Observatory parking looks bad, park lower or use a ride option for the final climb."],
  },
  {
    id: "may17",
    tab: "Sun 17",
    date: "May 17",
    title: "Beverly Hills + Getty",
    subtitle: "Gardens, Rodeo Drive, Getty Center, and Santa Monica sunset.",
    image: image("Getty Center Central Garden.jpg"),
    pace: "Elegant",
    walking: "Medium, modular",
    driving: "70-105 min total",
    cost: "Getty parking",
    route: [P.laHome, P.greystone, P.rodeo, P.getty, P.santaMonica, P.laHome],
    items: [
      ["7:00 AM", "Wake up", "Gentler morning because Greystone opens later."],
      ["7:30-8:15 AM", "Breakfast", "Eat at home or nearby; avoid a detour."],
      ["9:30-10:00 AM", "Drive to Greystone", "Arrive close to opening for easier parking.", P.greystone],
      ["10:00-11:15 AM", "Greystone Mansion grounds", "Free gardens, mansion exterior, and classic Beverly Hills atmosphere.", P.greystone, ["Free"]],
      ["11:15-11:30 AM", "Drive to Rodeo Drive", "Short hop into Beverly Hills.", P.rodeo],
      ["11:30 AM-12:30 PM", "Rodeo Drive", "A polished stroll and photo stop. Keep it compact.", P.rodeo],
      ["12:30-1:30 PM", "Lunch", "Sawtelle is best value; Century City or Beverly Hills is most convenient."],
      ["1:30-2:00 PM", "Drive to Getty Center", "Use the official Getty entrance at Sepulveda and Getty Center Drive.", P.getty],
      ["2:00-5:15 PM", "Getty Center", "Tram ride, gardens, views, architecture, and light galleries.", P.getty, ["Reservation"]],
      ["5:15-5:50 PM", "Drive to Santa Monica", "Head to the coast for sunset.", P.santaMonica],
      ["5:50-7:15 PM", "Palisades Park + Pier", "Ocean views with easy seating options. Do only as much pier time as you enjoy.", P.santaMonica],
      ["7:15-8:15 PM", "Dinner on the way back", "Sawtelle is the strongest value zone tonight."],
      ["8:30-9:00 PM", "Back to Airbnb", "Wind down.", P.laHome],
    ],
    meals: [
      ["Lunch", "Century City or Sawtelle. For value: Marugame Udon, ramen, or Japanese comfort food."],
      ["Dinner", "Sawtelle Japantown: Marugame Udon, Tatsu Ramen, Tsujita area, or any busy casual spot with seating."],
    ],
    notes: ["Greystone grounds are free and typically open around 10 AM.", "Getty admission is free with timed reservation; parking is currently $25, $15 after 3 PM."],
  },
  {
    id: "may18",
    tab: "Mon 18",
    date: "May 18",
    title: "Malibu + Santa Barbara",
    subtitle: "The longest drive, worth it for coastline, courthouse, and waterfront.",
    image: image("Santa Barbara County Courthouse.jpg"),
    pace: "Scenic day trip",
    walking: "Light-medium",
    driving: "4.5-5.5 hrs total",
    cost: "Fuel + parking",
    route: [P.laHome, P.malibuPier, P.courthouse, P.stearns, P.laHome],
    items: [
      ["6:45 AM", "Wake up", "This is the day where the early start matters most."],
      ["7:15-8:00 AM", "Breakfast", "Eat before leaving; bring water and a light snack."],
      ["8:00-9:00 AM", "Drive to Malibu", "Use the coast as the first reward of the day.", P.malibuPier],
      ["9:00-9:40 AM", "Malibu Pier", "Short coastal stop, photos, bathrooms if available, then keep moving.", P.malibuPier],
      ["9:40-10:30 AM", "Scenic drive north", "Point Dume only if parking is easy; otherwise preserve energy."],
      ["10:30 AM-12:00 PM", "Drive to Santa Barbara", "Settle in for the prettiest long drive of the trip.", P.courthouse],
      ["12:00-1:15 PM", "Lunch", "Choose near State Street or the waterfront depending parking."],
      ["1:15-2:30 PM", "County Courthouse", "The essential stop: architecture, gardens, and optional tower if energy is good.", P.courthouse, ["Free"]],
      ["2:30-3:30 PM", "State Street + coffee", "Keep it slow. This is the built-in rest block."],
      ["3:30-4:30 PM", "Stearns Wharf", "Easy ocean finale before the drive back.", P.stearns],
      ["4:30-6:45 PM", "Drive back to West LA", "Expect traffic variability. No extra stops unless needed.", P.laHome],
      ["6:45-7:45 PM", "Dinner near Airbnb", "Keep dinner close tonight."],
    ],
    meals: [
      ["Lunch", "Los Agaves, East Beach Tacos, Savoy Cafe & Deli, or Brophy Bros for moderate scenic seafood."],
      ["Dinner", "Close to West LA/Sawtelle. This is not the night for a destination dinner."],
    ],
    notes: ["Stearns Wharf parking often gives the first 90 minutes free, then hourly.", "If the day feels long, skip State Street and keep Courthouse + Wharf."],
  },
  {
    id: "may19",
    tab: "Tue 19",
    date: "May 19",
    title: "Coastal drive to San Diego",
    subtitle: "Orange County stops, Point Loma check-in, and Old Town dinner.",
    image: image("La Jolla Cove, San Diego.jpg"),
    pace: "Transfer",
    walking: "Light",
    driving: "3.5-4.5 hrs total",
    cost: "Fuel + parking",
    route: [P.laHome, P.huntington, P.laguna, P.danaPoint, P.sdHome, P.oldTown, P.sdHome],
    items: [
      ["7:00 AM", "Wake up", "Pack with the San Diego bag accessible."],
      ["7:30-8:15 AM", "Breakfast + checkout", "Do one last sweep of chargers, meds, and rental car items."],
      ["8:15-9:30 AM", "Drive to Huntington Beach", "First beach-town stop on the way south.", P.huntington],
      ["9:30-10:10 AM", "Huntington Beach Pier", "Short pier stroll and ocean reset.", P.huntington],
      ["10:10-11:00 AM", "Drive to Laguna Beach", "This is the best stop of the transfer day.", P.laguna],
      ["11:00 AM-1:15 PM", "Laguna Beach + lunch", "Heisler Park, Main Beach, and relaxed lunch.", P.laguna, ["Coast"]],
      ["1:15-1:45 PM", "Drive to Dana Point", "Easy final Orange County pause.", P.danaPoint],
      ["1:45-2:20 PM", "Dana Point Harbor", "Short harbor walk; skip if everyone wants San Diego.", P.danaPoint],
      ["2:20-4:00 PM", "Drive to Point Loma", "Check traffic before leaving Dana Point.", P.sdHome],
      ["4:00-5:15 PM", "Check in + rest", "This is a real rest break after moving cities."],
      ["5:15-5:35 PM", "Drive to Old Town", "Short drive from Point Loma.", P.oldTown],
      ["5:35-7:30 PM", "Old Town dinner", "Historic atmosphere, Mexican dinner, low-pressure walking.", P.oldTown],
      ["7:30-8:00 PM", "Return to Point Loma", "Settle in for two San Diego days.", P.sdHome],
    ],
    meals: [
      ["Lunch", "Laguna Beach: The Taco Stand, Carmelita's, The Cliff for views, or Nick's for a moderate splurge."],
      ["Dinner", "Old Town: Miguel's Cocina, Cafe Coyote, or Old Town Mexican Cafe."],
    ],
    notes: ["If traffic is heavy, skip Huntington or Dana Point, not Laguna.", "Old Town museums may close earlier, but restaurants and the district still work for dinner."],
  },
  {
    id: "may20",
    tab: "Wed 20",
    date: "May 20",
    title: "La Jolla + Torrey Pines",
    subtitle: "Cove, cliffs, glider views, and a relaxed Point Loma dinner.",
    image: image("La Jolla Cove, San Diego.jpg"),
    pace: "Scenic",
    walking: "Medium",
    driving: "90-130 min total",
    cost: "Parking + meals",
    route: [P.sdHome, P.laJolla, P.gliderport, P.sdHome],
    items: [
      ["7:00 AM", "Wake up", "Early start helps with La Jolla parking."],
      ["7:30-8:15 AM", "Breakfast", "Eat at home or grab something quick in Point Loma."],
      ["8:15-8:50 AM", "Drive to La Jolla Cove", "Choose a garage quickly if street parking is annoying.", P.laJolla],
      ["8:50-10:45 AM", "La Jolla Cove walk", "Sea lions, cove views, short walking sections, frequent benches.", P.laJolla, ["Nature"]],
      ["10:45-11:30 AM", "Coffee/rest", "Build in a real seated pause before lunch."],
      ["11:30 AM-12:45 PM", "Lunch in La Jolla", "Stay casual and close to where you parked."],
      ["12:45-1:15 PM", "Drive to Gliderport", "Minimal walking for a big-view payoff.", P.gliderport],
      ["1:15-2:15 PM", "Torrey Pines Gliderport", "Watch the paragliders, sit outside, optional snack.", P.gliderport],
      ["2:15-3:30 PM", "Optional short Torrey Pines walk", "Only do this if everyone feels good; the day works without it."],
      ["3:30-4:15 PM", "Drive back to Point Loma", "Return before the day becomes tiring.", P.sdHome],
      ["4:15-6:00 PM", "Airbnb rest", "A planned rest because the route naturally returns north-to-south."],
      ["6:00-7:30 PM", "Dinner near Point Loma", "Short drive, easy parking, good seafood options."],
    ],
    meals: [
      ["Lunch", "The Taco Stand La Jolla, El Pescador Fish Market, or a nearby cafe with seating."],
      ["Dinner", "Point Loma: Mitch's Seafood, Point Loma Seafoods, Miguel's Point Loma, Supannee House of Thai."],
    ],
    notes: ["Torrey Pines reserve parking can vary by lot and day, often around $15-$25.", "If La Jolla parking is frustrating, pay for a garage and save the mood."],
  },
  {
    id: "may21",
    tab: "Thu 21",
    date: "May 21",
    title: "Balboa, waterfront, Coronado",
    subtitle: "San Diego finale, ending with the car return before the early flight.",
    image: image("Hotel del Coronado, San Diego, California LCCN2017656416.jpg"),
    pace: "Full",
    walking: "Medium",
    driving: "75-110 min",
    cost: "Parking + optional Midway",
    route: [P.sdHome, P.balboa, P.midway, P.coronado, P.rental, P.sdHome],
    items: [
      ["7:00 AM", "Wake up", "Final full day. Keep bags partly organized before leaving."],
      ["7:30-8:15 AM", "Breakfast", "Simple breakfast in Point Loma or at the Airbnb."],
      ["8:15-8:40 AM", "Drive to Balboa Park", "Arrive early for easier parking.", P.balboa],
      ["8:40-11:30 AM", "Balboa Park", "Prado, Botanical Building area, Spanish Village, gardens. Museums optional.", P.balboa, ["Gardens"]],
      ["11:30 AM-12:30 PM", "Lunch", "Balboa if convenient, or Little Italy if you want more options."],
      ["12:30-1:00 PM", "Drive to waterfront", "Head toward USS Midway / Embarcadero.", P.midway],
      ["1:00-3:15 PM", "Midway or Seaport Village", "Midway is excellent but more tiring. Seaport Village is easier and cheaper.", P.midway, ["Choose one"]],
      ["3:15-3:45 PM", "Drive to Coronado", "Cross the bridge and shift into final-evening mode.", P.coronado],
      ["3:45-6:15 PM", "Coronado Beach + Hotel del", "Beach, hotel exterior, benches, and a relaxed final San Diego scene.", P.coronado],
      ["6:15-7:30 PM", "Dinner", "Eat in Coronado or back in Point Loma depending energy."],
      ["7:30-8:00 PM", "Drive to rental return", "Use 3355 Admiral Boland Way.", P.rental],
      ["8:00-8:30 PM", "Return rental car", "Take photos of mileage/fuel if useful.", P.rental],
      ["8:30-8:50 PM", "Uber/Lyft to Point Loma", "No car-return stress tomorrow morning.", P.sdHome],
      ["9:00-9:45 PM", "Pack", "Set alarms and airport clothes."],
      ["10:00 PM", "Sleep", "Early departure."],
    ],
    meals: [
      ["Lunch", "Panama 66 if convenient, or Little Italy for casual Italian, sandwiches, pizza, or cafes."],
      ["Dinner", "Coronado: Clayton's Mexican Take Out, Miguel's Coronado. Point Loma: Mitch's Seafood or Point Loma Seafoods."],
    ],
    notes: ["Balboa Park nonresident parking may be around $10-$16 depending lot.", "USS Midway is typically 10 AM-5 PM, last admission 4 PM, and about $39 per adult online."],
  },
  {
    id: "may22",
    tab: "Fri 22",
    date: "May 22",
    title: "Fly home",
    subtitle: "No sightseeing, no rental return, just a clean airport morning.",
    image: image("San Diego International Airport, San Diego, California (15035673474).jpg"),
    pace: "Departure",
    walking: "Airport only",
    driving: "10-15 min",
    cost: "Uber/Lyft",
    route: [P.sdHome, P.san],
    items: [
      ["5:45 AM", "Wake up", "Quiet, focused morning."],
      ["6:15 AM", "Uber/Lyft to SAN", "For three people with luggage, keep this conservative.", P.san],
      ["6:30-6:45 AM", "Arrive airport", "Plenty of buffer for check-in, bags, and security.", P.san],
      ["9:00 AM", "Flight departs", "Trip complete."],
    ],
    meals: [["Breakfast", "Airport coffee/snack after security, unless the Airbnb has something ready."]],
    notes: ["Book the rideshare when everyone is fully ready downstairs.", "Because the car is already returned, this morning stays simple."],
  },
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
  button.dataset.dayIndex = index;
  button.innerHTML = `<strong>${day.tab}</strong><span>${day.date}</span>`;
  button.addEventListener("click", () => selectDay(index));
  return button;
}

function routeButtons(day) {
  const buttons = [`<a class="map-button" href="${mapsRoute(day.route)}" target="_blank" rel="noreferrer">Open full route</a>`];
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
      <div><span>Driving</span><strong>${day.driving}</strong></div>
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
          <h3>Good to know</h3>
          <ul class="checklist">
            ${day.notes.map((note) => `<li>${note}</li>`).join("")}
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
  const tripStart = new Date("2026-05-15T00:00:00");
  const tripEnd = new Date("2026-05-22T23:59:59");
  if (now < tripStart || now > tripEnd) return 0;
  return Math.min(days.length - 1, Math.max(0, Math.floor((now - tripStart) / 86400000)));
}

days.forEach((day, index) => dayTabs.append(dayButton(day, index)));
selectDay(initialDayIndex());

document.querySelector("[data-print]").addEventListener("click", () => window.print());
