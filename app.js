const image = (file, width = 1400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const days = [
  {
    id: "may15",
    tab: "Fri 15",
    date: "May 15",
    title: "Arrive and land softly",
    subtitle: "A simple first night: car, check-in, sleep.",
    image: image("LAX International Airport (18261269934).jpg"),
    pace: "Commute day",
    walking: "Minimal",
    driving: "LAX to West LA: 25-45 min",
    cost: "Rental + parking",
    routeLinks: [
      ["LAX to Airbnb area", "https://www.google.com/maps/dir/LAX/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA"]
    ],
    items: [
      ["8:00 PM", "Land at LAX", "Keep expectations low tonight. The goal is to get the car and arrive safely, not to start sightseeing."],
      ["8:30-9:30 PM", "Pick up rental car", "Use this time as a buffer for baggage, shuttle, and rental counter pacing.", ["Transport"]],
      ["9:30-10:10 PM", "Drive to West LA Airbnb", "Traffic should be lighter than daytime, but keep the route simple."],
      ["10:10-10:45 PM", "Check in and settle", "Confirm parking, bring in only what you need, and set out clothes for the next morning."],
      ["11:00 PM", "Sleep", "A clean reset makes the first real day much better."]
    ],
    meals: [
      ["Late snack", "Only if needed: choose something close to the Airbnb in Sawtelle/West LA. Do not detour."]
    ],
    notes: ["Put Getty reservation and car return details somewhere easy to find.", "Set Google Maps offline areas if you like having a backup."]
  },
  {
    id: "may16",
    tab: "Sat 16",
    date: "May 16",
    title: "Hollywood, market lunch, Griffith sunset",
    subtitle: "One efficient central-LA loop with rest built into lunch and coffee.",
    image: image("Griffith Observatory, Los Angeles.jpg"),
    pace: "Balanced",
    walking: "Light-medium",
    driving: "About 90-130 min total",
    cost: "Parking + meals",
    routeLinks: [
      ["Full day route", "https://www.google.com/maps/dir/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA/TCL+Chinese+Theatre/Original+Farmers+Market/Griffith+Observatory/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA"]
    ],
    items: [
      ["7:00 AM", "Wake up", "Use the early start to get ahead of the worst parking and crowd friction."],
      ["7:30-8:15 AM", "Breakfast near Airbnb", "Keep it simple: coffee, pastries, yogurt, or breakfast at home."],
      ["8:15-9:00 AM", "Drive to Hollywood", "Park once near Hollywood Boulevard and keep the visit short."],
      ["9:00-10:15 AM", "Hollywood Boulevard", "Chinese Theatre, Walk of Fame, Dolby Theatre area. Treat this as an iconic photo stop, not a long wandering block.", ["Classic LA", "Short walk"]],
      ["10:15-10:45 AM", "Drive to Farmers Market", "This moves you toward lunch and a seated break."],
      ["10:45 AM-1:00 PM", "Original Farmers Market + lunch", "A perfect group stop: bathrooms, shade, seating, and different food choices.", ["Meal", "Rest"]],
      ["1:00-2:30 PM", "The Grove and coffee pause", "Use this as the mid-day recovery window. Sit when you find a good spot."],
      ["2:30-3:15 PM", "Drive to Los Feliz / Griffith area", "Aim to arrive before the sunset rush fully builds."],
      ["3:15-4:15 PM", "Pre-Griffith rest", "Coffee or early snack in Los Feliz. This replaces the inefficient hotel return."],
      ["4:15-7:30 PM", "Griffith Observatory", "Views, architecture, sunset, and optional exhibits. Skip any hike unless everyone feels excellent.", ["Sunset", "Views"]],
      ["7:30-8:30 PM", "Dinner nearby", "Eat in Los Feliz or Thai Town before driving west."],
      ["8:30-9:15 PM", "Return to Airbnb", "One drive home, then real rest."]
    ],
    meals: [
      ["Lunch", "Original Farmers Market: Pampas Grill, Singapore's Banana Leaf, Monsieur Marcel snacks, or Gott's Roadside."],
      ["Dinner", "Los Feliz / Thai Town: HomeState, Spitz Los Feliz, Ruen Pair Thai, or a simple diner-style option if tired."]
    ],
    notes: ["Griffith Observatory is free; parking near the top can be paid and crowded.", "If Observatory parking looks bad, park lower or use a ride option for the final climb."]
  },
  {
    id: "may17",
    tab: "Sun 17",
    date: "May 17",
    title: "Beverly Hills, Getty, Santa Monica",
    subtitle: "A refined westside day: estates, gardens, architecture, and ocean air.",
    image: image("Getty Center Central Garden.jpg"),
    pace: "Elegant and easy",
    walking: "Medium, modular",
    driving: "About 70-105 min total",
    cost: "Getty parking + meals",
    routeLinks: [
      ["Full day route", "https://www.google.com/maps/dir/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA/Greystone+Mansion/Rodeo+Drive/Getty+Center/Santa+Monica+Pier/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA"]
    ],
    items: [
      ["7:00 AM", "Wake up", "This morning starts gently because Greystone opens later."],
      ["7:30-8:15 AM", "Breakfast", "Breakfast at home or nearby; avoid a detour."],
      ["8:15-9:30 AM", "Slow morning", "Groceries, reset, or an easy drive around the neighborhood."],
      ["9:30-10:00 AM", "Drive to Greystone Mansion", "Arrive close to opening for easier parking."],
      ["10:00-11:15 AM", "Greystone Mansion grounds", "Free gardens, mansion exterior, classic Beverly Hills atmosphere.", ["Free", "Gardens"]],
      ["11:15-11:30 AM", "Drive to Rodeo Drive", "Short hop into Beverly Hills."],
      ["11:30 AM-12:30 PM", "Rodeo Drive + Beverly Gardens Park", "A polished stroll and photo stop. Keep it compact."],
      ["12:30-1:30 PM", "Lunch", "Choose Beverly Hills/Century City for convenience or Sawtelle for better value."],
      ["1:30-2:00 PM", "Drive to Getty Center", "Use the official Getty entrance at Sepulveda and Getty Center Drive."],
      ["2:00-5:15 PM", "Getty Center", "Tram ride, gardens, views, architecture, and a light gallery pass.", ["Reservation", "Views"]],
      ["5:15-5:50 PM", "Drive to Santa Monica", "Head to the coast for sunset energy."],
      ["5:50-7:15 PM", "Palisades Park + Santa Monica Pier", "Ocean views with easy seating options. Pier only as much as you enjoy it."],
      ["7:15-8:15 PM", "Dinner on the way back", "Sawtelle is the best-value dinner zone tonight."],
      ["8:30-9:00 PM", "Back to Airbnb", "Wind down."]
    ],
    meals: [
      ["Lunch", "Century City or Sawtelle. For value, Sawtelle usually wins: Marugame Udon, casual ramen, or Japanese comfort food."],
      ["Dinner", "Sawtelle Japantown: Marugame Udon, Tatsu Ramen, Tsujita area, or any busy casual spot with easy seating."]
    ],
    notes: ["Greystone grounds are free and typically open around 10 AM.", "Getty admission is free with timed reservation; parking is currently $25, $15 after 3 PM."]
  },
  {
    id: "may18",
    tab: "Mon 18",
    date: "May 18",
    title: "Malibu and Santa Barbara",
    subtitle: "The longest driving day, made worthwhile by coastline, courthouse, and waterfront.",
    image: image("Santa Barbara County Courthouse.jpg"),
    pace: "Scenic day trip",
    walking: "Light-medium",
    driving: "About 4.5-5.5 hours total",
    cost: "Fuel + parking + meals",
    routeLinks: [
      ["Full day route", "https://www.google.com/maps/dir/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA/Malibu+Pier/Santa+Barbara+County+Courthouse/Stearns+Wharf/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA"]
    ],
    items: [
      ["6:45 AM", "Wake up", "This is the day where the early start matters most."],
      ["7:15-8:00 AM", "Breakfast", "Eat before leaving; bring water and a light snack."],
      ["8:00-9:00 AM", "Drive to Malibu", "Use the coast as the first reward of the day."],
      ["9:00-9:40 AM", "Malibu Pier", "Short coastal stop, photos, bathrooms if available, then keep moving."],
      ["9:40-10:30 AM", "Scenic drive north", "Point Dume only if parking is easy; otherwise preserve energy for Santa Barbara."],
      ["10:30 AM-12:00 PM", "Drive to Santa Barbara", "Settle in for the prettiest long drive of the trip."],
      ["12:00-1:15 PM", "Lunch in Santa Barbara", "Choose near State Street or the waterfront depending parking."],
      ["1:15-2:30 PM", "Santa Barbara County Courthouse", "The essential stop: architecture, gardens, and optional tower if energy is good.", ["Free", "Architecture"]],
      ["2:30-3:30 PM", "State Street stroll + coffee", "Keep it slow. This is the built-in rest block."],
      ["3:30-4:30 PM", "Stearns Wharf / waterfront", "Easy ocean finale before the drive back."],
      ["4:30-6:45 PM", "Drive back to West LA", "Expect traffic variability. No extra stops unless needed."],
      ["6:45-7:45 PM", "Dinner near Airbnb", "Keep dinner close tonight."],
      ["9:30 PM", "Sleep", "Protect the next day's transfer."]
    ],
    meals: [
      ["Lunch", "Los Agaves, East Beach Tacos, Savoy Cafe & Deli, or Brophy Bros for a moderate scenic seafood option."],
      ["Dinner", "Close to West LA/Sawtelle. This is not the night for a destination dinner."]
    ],
    notes: ["Stearns Wharf parking often gives the first 90 minutes free, then hourly.", "If the day feels long, skip State Street and keep Courthouse + Wharf."]
  },
  {
    id: "may19",
    tab: "Tue 19",
    date: "May 19",
    title: "Coastal drive to San Diego",
    subtitle: "A beautiful transfer day with Orange County stops and an easy Old Town dinner.",
    image: image("La Jolla Cove, San Diego.jpg"),
    pace: "Transfer with stops",
    walking: "Light",
    driving: "About 3.5-4.5 hours total",
    cost: "Fuel + parking + meals",
    routeLinks: [
      ["Full day route", "https://www.google.com/maps/dir/Federal+Ave+%26+Santa+Monica+Blvd,+Los+Angeles,+CA/Huntington+Beach+Pier/Laguna+Beach/Dana+Point+Harbor/Point+Loma,+San+Diego,+CA/Old+Town+San+Diego"]
    ],
    items: [
      ["7:00 AM", "Wake up", "Pack with the San Diego bag accessible."],
      ["7:30-8:15 AM", "Breakfast and checkout", "Do one last sweep of chargers, meds, and rental car items."],
      ["8:15-9:30 AM", "Drive to Huntington Beach", "First beach-town stop on the way south."],
      ["9:30-10:10 AM", "Huntington Beach Pier", "Short pier stroll and ocean reset."],
      ["10:10-11:00 AM", "Drive to Laguna Beach", "This is the best stop of the transfer day."],
      ["11:00 AM-1:15 PM", "Laguna Beach + lunch", "Heisler Park, Main Beach, and a relaxed lunch.", ["Coast", "Meal"]],
      ["1:15-1:45 PM", "Drive to Dana Point", "Easy final Orange County pause."],
      ["1:45-2:20 PM", "Dana Point Harbor", "Short harbor walk; skip if everyone wants to get to San Diego."],
      ["2:20-4:00 PM", "Drive to Point Loma Airbnb", "Check traffic before leaving Dana Point."],
      ["4:00-5:15 PM", "Check in and rest", "This is a real rest break after moving cities."],
      ["5:15-5:35 PM", "Drive to Old Town", "Short drive from Point Loma."],
      ["5:35-7:30 PM", "Old Town dinner and stroll", "Easy historic atmosphere, Mexican dinner, low-pressure walking."],
      ["7:30-8:00 PM", "Return to Point Loma", "Settle in for two San Diego days."]
    ],
    meals: [
      ["Lunch", "Laguna Beach: The Taco Stand, Carmelita's, The Cliff for views, or Nick's for a moderate splurge."],
      ["Dinner", "Old Town: Miguel's Cocina, Cafe Coyote, or Old Town Mexican Cafe."]
    ],
    notes: ["If traffic is heavy, skip Huntington or Dana Point, not Laguna.", "Old Town park museums may close earlier, but restaurants and the district remain useful for dinner."]
  },
  {
    id: "may20",
    tab: "Wed 20",
    date: "May 20",
    title: "La Jolla and Torrey Pines",
    subtitle: "The nature day: cove, cliffs, glider views, and a calm Point Loma dinner.",
    image: image("La Jolla Cove, San Diego.jpg"),
    pace: "Scenic and flexible",
    walking: "Medium, optional hike",
    driving: "About 90-130 min total",
    cost: "Parking + meals",
    routeLinks: [
      ["Full day route", "https://www.google.com/maps/dir/Point+Loma,+San+Diego,+CA/La+Jolla+Cove/Torrey+Pines+Gliderport/Point+Loma,+San+Diego,+CA"]
    ],
    items: [
      ["7:00 AM", "Wake up", "Early start helps with La Jolla parking."],
      ["7:30-8:15 AM", "Breakfast", "Eat at home or grab something quick in Point Loma."],
      ["8:15-8:50 AM", "Drive to La Jolla Cove", "Aim for a garage or street parking without circling forever."],
      ["8:50-10:45 AM", "La Jolla Cove coast walk", "Sea lions, cove views, short walking sections, frequent benches.", ["Nature", "Photo stop"]],
      ["10:45-11:30 AM", "Coffee/rest in La Jolla", "Build in a real sit-down pause before lunch."],
      ["11:30 AM-12:45 PM", "Lunch in La Jolla", "Stay casual and close to where you parked."],
      ["12:45-1:15 PM", "Drive to Torrey Pines Gliderport", "Minimal walking for a big-view payoff."],
      ["1:15-2:15 PM", "Gliderport views", "Watch the paragliders, sit outside, optional snack."],
      ["2:15-3:30 PM", "Optional Torrey Pines short walk", "Only do this if everyone feels good; the day already works without it."],
      ["3:30-4:15 PM", "Drive back to Point Loma", "Return before the day becomes tiring."],
      ["4:15-6:00 PM", "Airbnb rest", "This is the one planned hotel rest because the route naturally returns north-to-south."],
      ["6:00-7:30 PM", "Dinner near Point Loma", "Short drive, easy parking, good seafood options."],
      ["9:30 PM", "Sleep", "Keep energy for the final full day."]
    ],
    meals: [
      ["Lunch", "The Taco Stand La Jolla, El Pescador Fish Market, or a nearby cafe with seating."],
      ["Dinner", "Point Loma: Mitch's Seafood, Point Loma Seafoods, Miguel's Point Loma, Supannee House of Thai."]
    ],
    notes: ["Torrey Pines reserve parking can vary by lot and day, often around $15-$25.", "If parking around La Jolla Cove is frustrating, choose a paid garage quickly and save the mood."]
  },
  {
    id: "may21",
    tab: "Thu 21",
    date: "May 21",
    title: "Balboa Park, waterfront, Coronado",
    subtitle: "San Diego's grand finale, ending with the car return before the early flight.",
    image: image("Hotel del Coronado, San Diego, California LCCN2017656416.jpg"),
    pace: "Full but controlled",
    walking: "Medium",
    driving: "About 75-110 min before car return",
    cost: "Parking + optional Midway",
    routeLinks: [
      ["Full day route", "https://www.google.com/maps/dir/Point+Loma,+San+Diego,+CA/Balboa+Park/USS+Midway+Museum/Hotel+del+Coronado/San+Diego+Airport+Rental+Car+Center/Point+Loma,+San+Diego,+CA"]
    ],
    items: [
      ["7:00 AM", "Wake up", "Final full day. Keep bags partly organized before leaving."],
      ["7:30-8:15 AM", "Breakfast", "Simple breakfast in Point Loma or at the Airbnb."],
      ["8:15-8:40 AM", "Drive to Balboa Park", "Arrive early for easier parking."],
      ["8:40-11:30 AM", "Balboa Park outdoor highlights", "Prado, Botanical Building area, Spanish Village, gardens. Museums optional, not required.", ["Gardens", "Architecture"]],
      ["11:30 AM-12:30 PM", "Lunch near Balboa or Little Italy", "Choose based on parking and appetite."],
      ["12:30-1:00 PM", "Drive to waterfront", "Head toward USS Midway / Embarcadero."],
      ["1:00-3:15 PM", "USS Midway or Seaport Village", "Midway is excellent but more tiring. Seaport Village is easier and cheaper.", ["Choose one"]],
      ["3:15-3:45 PM", "Drive to Coronado", "Cross the bridge and shift into final-evening mode."],
      ["3:45-6:15 PM", "Coronado Beach + Hotel del exterior", "Beach, hotel exterior, benches, and sunset-adjacent atmosphere."],
      ["6:15-7:30 PM", "Dinner", "Eat in Coronado or back in Point Loma depending energy."],
      ["7:30-8:00 PM", "Drive to SAN Rental Car Center", "Use 3355 Admiral Boland Way."],
      ["8:00-8:30 PM", "Return rental car", "Take photos of mileage/fuel if you want documentation."],
      ["8:30-8:50 PM", "Uber/Lyft back to Point Loma", "No car-return stress tomorrow morning."],
      ["9:00-9:45 PM", "Pack for flight", "Set alarms and airport clothes."],
      ["10:00 PM", "Sleep", "Early departure."]
    ],
    meals: [
      ["Lunch", "Panama 66 if convenient, or Little Italy for casual Italian, sandwiches, pizza, or cafes."],
      ["Dinner", "Coronado: Clayton's Mexican Take Out, Miguel's Coronado. Point Loma: Mitch's Seafood or Point Loma Seafoods."]
    ],
    notes: ["Balboa Park nonresident parking may be around $10-$16 depending lot.", "USS Midway is typically 10 AM-5 PM, last admission 4 PM, and about $39 per adult online."]
  },
  {
    id: "may22",
    tab: "Fri 22",
    date: "May 22",
    title: "Fly home",
    subtitle: "No sightseeing. No rental return. Just a clean airport morning.",
    image: image("San Diego International Airport, San Diego, California (15035673474).jpg"),
    pace: "Departure",
    walking: "Airport only",
    driving: "Point Loma to SAN: 10-15 min",
    cost: "Uber/Lyft",
    routeLinks: [
      ["Airbnb area to SAN", "https://www.google.com/maps/dir/Point+Loma,+San+Diego,+CA/San+Diego+International+Airport"]
    ],
    items: [
      ["5:45 AM", "Wake up", "Quiet, focused morning."],
      ["6:15 AM", "Uber/Lyft to SAN", "For three people with luggage, keep this conservative."],
      ["6:30-6:45 AM", "Arrive airport", "Plenty of buffer for check-in, bags, and security."],
      ["9:00 AM", "Flight departs", "Trip complete."]
    ],
    meals: [
      ["Breakfast", "Airport coffee/snack after security, unless your Airbnb has a quick option ready."]
    ],
    notes: ["Book the rideshare when everyone is fully ready downstairs.", "Because the car is already returned, this morning stays simple."]
  }
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
  button.innerHTML = `<strong>${day.tab}</strong><span>${day.title.split(",")[0]}</span>`;
  button.addEventListener("click", () => selectDay(index));
  return button;
}

function timelineItem(item) {
  const [time, title, detail, tags = []] = item;
  return `
    <div class="timeline-item">
      <div class="time">${time}</div>
      <div class="timeline-card">
        <h4>${title}</h4>
        <p>${detail}</p>
        ${tags.length ? `<div class="tag-row">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>` : ""}
      </div>
    </div>
  `;
}

function mealCard(meal) {
  const [title, detail] = meal;
  return `<div class="meal-card"><strong>${title}</strong><p>${detail}</p></div>`;
}

function routeLink(link) {
  const [label, url] = link;
  return `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderDay(day) {
  dayDetail.id = `panel-${day.id}`;
  dayDetail.role = "tabpanel";
  dayDetail.setAttribute("aria-labelledby", `tab-${day.id}`);
  dayDetail.innerHTML = `
    <div class="day-hero">
      <div class="day-hero__content">
        <p class="eyebrow">${day.date}</p>
        <h3>${day.title}</h3>
        <p>${day.subtitle}</p>
        <div class="route-links">${day.routeLinks.map(routeLink).join("")}</div>
      </div>
      <div class="day-hero__image" style="background-image: url('${day.image}')"></div>
    </div>
    <div class="meta-grid">
      <div><span>Pace</span><strong>${day.pace}</strong></div>
      <div><span>Walking</span><strong>${day.walking}</strong></div>
      <div><span>Driving</span><strong>${day.driving}</strong></div>
      <div><span>Cost</span><strong>${day.cost}</strong></div>
    </div>
    <div class="timeline">
      ${day.items.map(timelineItem).join("")}
    </div>
    <div class="day-bottom">
      <section class="meal-panel">
        <h3>Food That Fits The Route</h3>
        ${day.meals.map(mealCard).join("")}
      </section>
      <section class="notes-panel">
        <h3>Good To Know</h3>
        <ul class="checklist">
          ${day.notes.map((note) => `<li>${note}</li>`).join("")}
        </ul>
      </section>
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
