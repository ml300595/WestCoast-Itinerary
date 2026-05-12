const image = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const place = (label, query) => ({ label, query });

const P = {
  boston: place("Boston", "Boston MA"),
  newport: place("Newport", "Newport RI"),
  cliffWalk: place("Cliff Walk", "Narragansett Avenue 40 Steps Newport RI"),
  oceanDrive: place("Ocean Drive", "Ocean Drive Newport RI"),
  breakers: place("The Breakers", "The Breakers Newport RI"),
  capeBase: place("Cape base", "Falmouth MA"),
  woodsHole: place("Woods Hole", "Woods Hole MA"),
  nobska: place("Nobska Lighthouse", "Nobska Lighthouse Falmouth MA"),
  falmouthMain: place("Falmouth Main Street", "Main Street Falmouth MA"),
  palmerLot: place("SSA Palmer Ave Lot", "286 Palmer Avenue Falmouth MA"),
  vineyardHaven: place("Vineyard Haven", "Vineyard Haven Martha's Vineyard MA"),
  oakBluffs: place("Oak Bluffs", "Oak Bluffs MA"),
  edgartown: place("Edgartown", "Edgartown MA"),
  chatham: place("Chatham", "Chatham MA"),
  saltPond: place("Salt Pond Visitor Center", "Salt Pond Visitor Center Eastham MA"),
  coastGuard: place("Coast Guard Beach", "Coast Guard Beach Eastham MA"),
  provincetown: place("Provincetown", "Provincetown MA"),
  mystic: place("Mystic", "Mystic CT"),
  yale: place("Yale Visitor Center", "149 Elm Street New Haven CT 06511"),
  newHavenPizza: place("New Haven Pizza", "Wooster Street New Haven CT"),
  finalBase: place("Final NY-area base", "Stamford CT"),
  nyc: place("NYC", "New York NY"),
  jfk: place("JFK Airport", "John F. Kennedy International Airport"),
};

const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapsRoute = (stops) => {
  const params = new URLSearchParams({
    api: "1",
    travelmode: "driving",
    origin: stops[0].query,
    destination: stops[stops.length - 1].query,
  });
  const waypoints = stops.slice(1, -1).map((stop) => stop.query).join("|");
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
};

const days = [
  {
    id: "may30",
    tab: "Sat 30",
    date: "May 30",
    title: "Birthday drive: Boston to Newport to Cape",
    subtitle: "Celebrate on the road, see Newport's highlights, then sleep on the Cape to avoid an extra hotel change.",
    image: image("The Breakers Newport RI.jpg"),
    pace: "Full but scenic",
    walking: "Light-medium",
    driving: "3.5-4.5 hrs total",
    cost: "Meals + parking",
    sleep: "Cape base: Falmouth/Mashpee/Bourne/Sandwich",
    route: [P.boston, P.newport, P.cliffWalk, P.oceanDrive, P.capeBase],
    items: [
      ["8:00 AM", "Breakfast / birthday start in Boston", "Keep it easy and celebratory. Load the car before breakfast if possible.", P.boston],
      ["9:30-11:15 AM", "Drive to Newport", "Aim to leave before late-morning traffic builds. Use this as the first proper road-trip leg.", P.newport],
      ["11:15 AM-12:30 PM", "Newport harbor + lunch", "Walk the waterfront, then eat before the scenic stops. Keep parking simple and avoid circling.", P.newport, ["Lunch"]],
      ["12:45-1:45 PM", "Short Cliff Walk section", "Use the Narragansett Ave / 40 Steps area for a compact, high-reward walk. The full walk is not necessary.", P.cliffWalk, ["Free"]],
      ["2:00-3:00 PM", "Ocean Drive", "A scenic drive with photo stops. This is Newport with low walking demand.", P.oceanDrive],
      ["3:15-4:15 PM", "The Breakers exterior or optional tour", "Exterior and grounds atmosphere may be enough. Tour only if everyone actively wants it.", P.breakers, ["Optional"]],
      ["4:15-5:15 PM", "Coffee / birthday pause", "Use this as the real rest block before the evening drive."],
      ["5:15-7:00 PM", "Drive to Cape base", "Head to Falmouth/Mashpee/Bourne/Sandwich area and check in.", P.capeBase],
      ["7:15-8:30 PM", "Simple Cape dinner", "Stay close to the lodging. The win tonight is settling into one base for several nights."],
    ],
    meals: [
      ["Lunch in Newport", "Brick Alley Pub, The Mooring for moderate seafood, or a quick harbor sandwich/pizza if the group wants speed."],
      ["Dinner near Cape base", "Falmouth Main Street, Mashpee Commons, or whatever is closest to lodging. Avoid a destination dinner after a moving day."],
    ],
    notes: [
      "This saves one hotel change by treating Newport as a rich stop en route to the Cape.",
      "Cliff Walk is free; Discover Newport notes metered parking around Memorial Blvd / Narragansett Ave during May-Oct.",
      "Book lodging with free parking and easy luggage access. With 5 adults, two bathrooms matter.",
    ],
  },
  {
    id: "may31",
    tab: "Sun 31",
    date: "May 31",
    title: "Falmouth, Woods Hole, and Cape reset",
    subtitle: "A lower-drive day after the birthday transfer: lighthouse, village, water, and a proper grocery/rest window.",
    image: image("Nobska Light, Woods Hole, MA.jpg"),
    pace: "Relaxed",
    walking: "Light",
    driving: "45-75 min total",
    cost: "Low",
    sleep: "Same Cape base",
    route: [P.capeBase, P.nobska, P.woodsHole, P.falmouthMain, P.capeBase],
    items: [
      ["8:00 AM", "Wake up slowly", "This is the recovery morning. Breakfast at the rental saves money and helps the group settle."],
      ["9:30-10:15 AM", "Grocery / supplies run", "Breakfast basics, water, snacks, ferry-day items, and simple dinner backups."],
      ["10:30-11:15 AM", "Nobska Lighthouse", "Classic Cape view with very little walking. Good group photo stop.", P.nobska],
      ["11:15 AM-12:30 PM", "Woods Hole", "Small village, waterfront, coffee, and ferry orientation for tomorrow.", P.woodsHole],
      ["12:30-1:45 PM", "Lunch in Woods Hole or Falmouth", "Stay casual and seated."],
      ["2:00-4:00 PM", "Falmouth Main Street / beach pause", "Pick Main Street if weather is mixed; pick Old Silver Beach or Surf Drive if weather is good.", P.falmouthMain],
      ["4:00-6:00 PM", "Rest at lodging", "This protects the Martha's Vineyard day tomorrow."],
      ["6:00-7:30 PM", "Dinner close by", "Use Falmouth, Mashpee Commons, or a simple cook-at-home dinner."],
      ["8:00 PM", "Ferry prep", "Check ferry times, parking lot status, weather, and pack a light day bag."],
    ],
    meals: [
      ["Lunch", "Woods Hole Market, Pie in the Sky, or casual Falmouth Main Street options."],
      ["Dinner", "Falmouth/Mashpee casual seafood, pizza, Thai, or cook at the rental to keep costs down."],
    ],
    notes: [
      "This day is intentionally light. It makes the 4-night Cape base feel like a real home base, not just a place to sleep.",
      "Scout the Woods Hole ferry logistics today so June 1 feels easy.",
    ],
  },
  {
    id: "jun1",
    tab: "Mon 1",
    date: "June 1",
    title: "Martha's Vineyard day trip",
    subtitle: "Leave the car on the mainland, ferry from Woods Hole, and use island buses/taxis for the classic towns.",
    image: image("Oak Bluffs Martha's Vineyard gingerbread cottages.jpg"),
    pace: "Full day",
    walking: "Medium",
    driving: "Minimal once parked",
    cost: "Ferry + parking + island transport",
    sleep: "Same Cape base",
    route: [P.capeBase, P.palmerLot, P.vineyardHaven, P.oakBluffs, P.edgartown, P.palmerLot, P.capeBase],
    items: [
      ["7:00 AM", "Wake up / breakfast", "Eat at the rental. Bring water, layers, sunscreen, and a phone charger."],
      ["8:00-8:25 AM", "Drive to Steamship Authority parking", "Use the active SSA parking guidance. Palmer Ave lot is commonly used for Vineyard travelers.", P.palmerLot],
      ["8:25-9:15 AM", "Park + shuttle to Woods Hole terminal", "SSA says to plan about an hour for off-site parking and shuttle during busy periods.", P.palmerLot],
      ["9:30-10:15 AM", "Target ferry to Vineyard Haven", "Book/check the exact sailing. Woods Hole to Martha's Vineyard is about 45 minutes.", P.vineyardHaven, ["Ferry"]],
      ["10:15-11:00 AM", "Vineyard Haven arrival", "Coffee, bathrooms, and orient the group. Do not rush off the ferry."],
      ["11:00 AM-12:45 PM", "Oak Bluffs", "Gingerbread cottages, Ocean Park, harbor, and an easy lunch.", P.oakBluffs, ["Classic MV"]],
      ["12:45-1:15 PM", "Transit to Edgartown", "Use VTA bus, taxi, or rideshare depending wait times.", P.edgartown],
      ["1:15-3:30 PM", "Edgartown", "Harbor, shops, lighthouse area if energy is good, and a seated coffee/ice cream break.", P.edgartown],
      ["3:30-4:30 PM", "Return toward ferry town", "Build in buffer. Island transit and ferry timing are the stress points."],
      ["5:00-5:45 PM", "Target ferry back to Woods Hole", "Earlier return is calmer than squeezing the last ferry."],
      ["5:45-6:30 PM", "Shuttle back to car", "Expect some waiting; keep snacks accessible."],
      ["6:45-8:00 PM", "Dinner near Falmouth", "Eat close to the lodging after the ferry day."],
    ],
    meals: [
      ["Lunch on island", "Oak Bluffs casual seafood, sandwiches, pizza, or picnic-style food near Ocean Park."],
      ["Dinner", "Falmouth Main Street or a simple rental dinner. Everyone will be happier if this is easy."],
    ],
    notes: [
      "Steamship Authority 2026 adult passenger fare Woods Hole-MV is listed at $22 round trip, so 5 adults are about $110 plus parking.",
      "SSA Woods Hole parking is off-site; current listed Vineyard parking is $25/day during May 15-Sept 14.",
      "Hy-Line from Hyannis is faster to Oak Bluffs but much more expensive for 5 adults. Use Woods Hole unless schedule forces otherwise.",
      "VTA buses are the budget island move; confirm current fare/free status before the day.",
    ],
  },
  {
    id: "jun2",
    tab: "Tue 2",
    date: "June 2",
    title: "Cape Cod scenic day",
    subtitle: "Chatham, National Seashore, and optional Provincetown while still sleeping at the same Cape base.",
    image: image("Coast Guard Beach Cape Cod.jpg"),
    pace: "Scenic",
    walking: "Light-medium",
    driving: "3.5-5 hrs total",
    cost: "Parking + meals",
    sleep: "Same Cape base",
    route: [P.capeBase, P.chatham, P.saltPond, P.coastGuard, P.provincetown, P.capeBase],
    items: [
      ["7:30 AM", "Wake up / breakfast", "Eat at the rental and leave with water/snacks."],
      ["8:30-9:45 AM", "Drive to Chatham", "Start with a classic Cape town before roads get busier.", P.chatham],
      ["9:45-11:30 AM", "Chatham", "Main Street, lighthouse/beach viewpoint, coffee. Keep it compact.", P.chatham],
      ["11:30 AM-12:15 PM", "Drive to Eastham", "Head into Cape Cod National Seashore territory.", P.saltPond],
      ["12:15-1:15 PM", "Salt Pond Visitor Center / lunch", "Useful bathrooms, maps, and orientation. Picnic or casual lunch nearby.", P.saltPond],
      ["1:15-2:15 PM", "Coast Guard Beach viewpoint", "Beautiful, iconic Cape scenery. Walk only as much as the group wants.", P.coastGuard],
      ["2:15-3:15 PM", "Decision point", "Option A: continue to Provincetown. Option B: turn back and make the day easier."],
      ["3:15-5:00 PM", "Optional Provincetown", "Commercial Street, harbor, Pilgrim Monument exterior. Worth it if energy is good.", P.provincetown, ["Optional"]],
      ["5:00-7:15 PM", "Drive back to Cape base", "This is the longest return of the Cape stay; expect variability.", P.capeBase],
      ["7:30-8:30 PM", "Dinner close / pack lightly", "Tomorrow you leave the Cape for Connecticut and Yale."],
    ],
    meals: [
      ["Lunch", "Chatham or Eastham casual seafood/sandwiches, or picnic to control cost."],
      ["Dinner", "Keep it close to the lodging. Consider cooking in if the Provincetown option made the day long."],
    ],
    notes: [
      "Cape Cod National Seashore is open year-round; current NPS conditions list Salt Pond Visitor Center open 9 AM-4:30 PM.",
      "Provincetown is excellent but adds drive time. Make it optional, not mandatory.",
      "This is the one day where skipping something is intelligent if the group feels cooked.",
    ],
  },
  {
    id: "jun3",
    tab: "Wed 3",
    date: "June 3",
    title: "Mystic, Yale, and final NY-area positioning",
    subtitle: "Leave the Cape, add one charming Connecticut stop, tour Yale, eat New Haven pizza, then sleep close to New York.",
    image: image("Harkness Tower Yale University New Haven CT.jpg"),
    pace: "Transition day",
    walking: "Medium",
    driving: "4.5-5.5 hrs total",
    cost: "Meals + optional Mystic/Yale tour",
    sleep: "Stamford/Greenwich/White Plains/Rye/Yonkers",
    route: [P.capeBase, P.mystic, P.yale, P.newHavenPizza, P.finalBase],
    items: [
      ["7:00 AM", "Wake up / pack", "This is the real checkout day. Load the car once and keep Yale clothes/items accessible."],
      ["8:00-10:00 AM", "Drive to Mystic", "Good halfway-ish stop before New Haven.", P.mystic],
      ["10:00-11:30 AM", "Mystic waterfront", "Walk the village/waterfront. Mystic Seaport Museum is great but paid; use only if the group really wants it.", P.mystic],
      ["11:30 AM-12:30 PM", "Lunch in Mystic", "Eat before Yale so the afternoon is calm."],
      ["12:30-1:45 PM", "Drive to Yale Visitor Center", "Target New Haven parking near 149 Elm Street.", P.yale],
      ["2:00-3:15 PM", "Yale campus", "If official tour timing works, do it. Otherwise self-guide: Old Campus, Beinecke exterior, Sterling Library exterior, New Haven Green.", P.yale, ["Yale"]],
      ["3:15-4:15 PM", "Coffee / bookstore / rest", "Sit down before dinner and the final drive."],
      ["4:30-6:00 PM", "New Haven pizza early dinner", "Pepe's, Sally's, Modern, BAR, or whichever has the lowest wait.", P.newHavenPizza],
      ["6:00-7:30 PM", "Drive to final NY-area base", "Stamford/Greenwich/White Plains/Rye/Yonkers keeps June 4 controlled.", P.finalBase],
      ["7:30-8:30 PM", "Check in / pack for NYC morning", "Put essentials and travel documents where they are easy to reach."],
    ],
    meals: [
      ["Lunch", "Mystic: casual seafood, sandwiches, or Sift Bakery-style cafe stop."],
      ["Dinner", "New Haven pizza: Pepe's, Sally's, Modern, BAR. Choose based on wait time, not prestige."],
    ],
    notes: [
      "Yale Visitor Center is open Monday-Saturday 9 AM-4 PM. Official tours require reservations and are about 1 hour.",
      "Mystic Seaport Museum is excellent but not cheap. Use Mystic as a free/low-cost waterfront stop unless the museum is a must.",
      "Do not sleep in New Haven if NYC before 10 AM is important. Sleep closer.",
    ],
  },
  {
    id: "jun4",
    tab: "Thu 4",
    date: "June 4",
    title: "Arrive in New York before 10 AM",
    subtitle: "No sightseeing before the deadline. Just a clean, early handoff into NYC or the airport.",
    image: image("New York City skyline from Jersey City September 2020 HDR.jpg"),
    pace: "Deadline day",
    walking: "Minimal",
    driving: "45-120 min depending base",
    cost: "Tolls + parking/drop-off",
    sleep: "NYC / onward plans",
    route: [P.finalBase, P.nyc],
    items: [
      ["6:30 AM", "Wake up", "Keep breakfast simple and load the car calmly."],
      ["7:15 AM", "Leave final base", "This protects you from normal NYC-area traffic variability.", P.finalBase],
      ["8:30-9:45 AM", "Arrive NYC / airport area", "Exact timing depends whether you choose Manhattan, JFK, Newark, or another drop point.", P.nyc],
      ["10:00 AM", "Deadline protected", "No sightseeing is scheduled before this point."],
    ],
    meals: [
      ["Breakfast", "Hotel/rental coffee, grab-and-go, or something packed from the night before."],
      ["Lunch", "Plan after the handoff once everyone knows where they need to be."],
    ],
    notes: [
      "If the destination is JFK, consider sleeping in Stamford/Greenwich/Westchester and leaving early.",
      "If the destination is Newark, White Plains/Yonkers/Stamford still works, but route choice matters.",
      "Avoid a June 4 morning Yale stop. That belongs on June 3.",
    ],
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
      <div><span>Sleep</span><strong>${day.sleep}</strong></div>
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
          <h3>Cost / logistics notes</h3>
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
  const tripStart = new Date("2026-05-30T00:00:00");
  const tripEnd = new Date("2026-06-04T23:59:59");
  if (now < tripStart || now > tripEnd) return 0;
  return Math.min(days.length - 1, Math.max(0, Math.floor((now - tripStart) / 86400000)));
}

days.forEach((day, index) => dayTabs.append(dayButton(day, index)));
selectDay(initialDayIndex());

document.querySelector("[data-print]").addEventListener("click", () => window.print());
