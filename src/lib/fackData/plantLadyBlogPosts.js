import blog_1 from "@/assets/images/blog-image-1.jpg";
import blog_2 from "@/assets/images/blog-image-2.jpg";
import blog_3 from "@/assets/images/blog-image-3.jpg";
import blog_4 from "@/assets/images/blog-image-4.jpg";
import blog_5 from "@/assets/images/blog-image-5.jpg";
import blog_6 from "@/assets/images/blog-image-6.jpg";
import blog_7 from "@/assets/images/blog-image-7.jpg";
import blog_8 from "@/assets/images/blog-image-8.jpg";
import blog_9 from "@/assets/images/blog-image-9.jpg";

/**
 * Single source of truth for Plant Lady TX blog posts.
 * - Use `plantLadyBlogPosts` for full post pages
 * - Use `blogIndex` for archive cards / sliders
 */

export const plantLadyBlogPosts = [
    {
        id: 1,
        slug: "plant-refresh-playbook",
        link: "/pages/blog/plant-refresh-playbook",
        thumb: blog_1,
        cover: blog_1,
        title: {
            sectionName: "The Plant",
            sectionTitle: "Refresh Playbook",
            sectionDesc: "How to Reset Your Home or Office Plants Without Killing Them",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "06 February 25",
            category: "Plant Care",
            readTime: "6 min read",
        },
        introText:
            "Winter in Texas is weird: cold snaps, dry indoor heat, and HVAC that runs like it’s training for a marathon. The result is predictable—plants that looked great in October start looking tired, dusty, yellow, or stretched by February.",
        introText2:
            "The fix is not “buy all new plants.” The fix is a reset. This is the same refresh process we use on homes, offices, lobbies, and restaurants—because plants thrive on boring consistency more than dramatic rescue missions.",
        tagList: [
            { id: "1", tag: "plant refresh", link: "" },
            { id: "2", tag: "indoor plants", link: "" },
            { id: "3", tag: "dallas", link: "" },
            { id: "4", tag: "maintenance", link: "" },
        ],
        sections: [
            {
                blogListTitle: "Start with a fast audit",
                blogListSubTitle: "(two minutes per plant group)",
                blogListText:
                    "Don’t guess. Look for patterns. Most ‘mystery problems’ are just light + water + drainage being out of sync.",
                blogListData: [
                    { id: "01", item_name: "Yellowing leaves:", item_text: "usually too much water, not enough light, or poor drainage." },
                    { id: "02", item_name: "Crispy tips:", item_text: "low humidity + inconsistent watering + mineral buildup from hard water." },
                    { id: "03", item_name: "Leggy growth:", item_text: "plant is reaching for light (move it or add a grow light)." },
                    { id: "04", item_name: "Mushy stems:", item_text: "root stress—stop watering and check drainage immediately." },
                ],
            },
            {
                blogListTitle: "Do the ‘clean + prune’ reset",
                blogListSubTitle: "(you’re not hurting it)",
                blogListText:
                    "Removing dead, damaged, or heavily yellowed leaves stops the plant from wasting energy and helps you see new growth signals.",
                blogListData: [
                    { id: "01", item_name: "Wipe leaves:", item_text: "dust blocks light—use a damp microfiber, not leaf-shine spray." },
                    { id: "02", item_name: "Prune smart:", item_text: "snip at the node, take 10–25% max if it’s stressed." },
                    { id: "03", item_name: "Rotate:", item_text: "quarter-turn weekly so it doesn’t lean like it’s escaping." },
                ],
            },
            {
                blogListTitle: "Fix watering with one rule",
                blogListSubTitle: "(water less, but water correctly)",
                blogListText:
                    "Stop ‘sipping.’ Most indoor plant deaths are from frequent small watering that never fully saturates, then never dries.",
                blogListData: [
                    { id: "01", item_name: "Soak until runoff:", item_text: "water thoroughly, then let excess drain completely." },
                    { id: "02", item_name: "Check before you water:", item_text: "stick a finger 2 inches down—dry means water, damp means wait." },
                    { id: "03", item_name: "Drainage is non‑negotiable:", item_text: "no hole, no deal. Use a cachepot if you want pretty." },
                ],
            },
            {
                blogListTitle: "Light upgrades that actually work",
                blogListSubTitle: "(cheap wins)",
                blogListText:
                    "If your plant is ‘fine’ but not thriving, it’s usually light. Texas winter light through windows can be deceptive.",
                blogListData: [
                    { id: "01", item_name: "Move closer to windows:", item_text: "most plants need to be within 2–6 feet of light." },
                    { id: "02", item_name: "Add a grow bulb:", item_text: "a simple LED grow bulb in a lamp works for many setups." },
                    { id: "03", item_name: "Match plant to zone:", item_text: "low light plants in low light corners; don’t force it." },
                ],
            },
            {
                blogListTitle: "Lock in the maintenance rhythm",
                blogListSubTitle: "(the boring part that makes you rich)",
                blogListText:
                    "A 10‑minute weekly routine beats a 3‑hour rescue mission every month.",
                blogListData: [
                    { id: "01", item_name: "Weekly:", item_text: "check soil moisture, wipe leaves, quick pest scan." },
                    { id: "02", item_name: "Monthly:", item_text: "light prune, rotate, check drainage trays, refresh topsoil if crusty." },
                    { id: "03", item_name: "Quarterly:", item_text: "repot only if needed, fertilize during active growth, refresh staging." },
                ],
            },
        ],
    },

    {
        id: 2,
        slug: "spring-repotting-north-texas",
        link: "/pages/blog/spring-repotting-north-texas",
        thumb: blog_2,
        cover: blog_2,
        title: {
            sectionName: "The Plant",
            sectionTitle: "Repotting Guide",
            sectionDesc: "Spring Repotting in North Texas (No Swamp Pots)",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "12 March 25",
            category: "Plant Care",
            readTime: "7 min read",
        },
        introText:
            "Repotting is supposed to help… but it’s also how people accidentally suffocate roots in a giant pot of wet soil.",
        introText2:
            "Here’s the Plant Lady method: repot only when the plant gives you a reason, size up modestly, and use a mix that drains like it means it.",
        tagList: [
            { id: "1", tag: "repotting", link: "" },
            { id: "2", tag: "soil mix", link: "" },
            { id: "3", tag: "houseplants", link: "" },
            { id: "4", tag: "dallas", link: "" },
        ],
        sections: [
            {
                blogListTitle: "How to tell it’s time",
                blogListSubTitle: "(real signals, not vibes)",
                blogListData: [
                    { id: "01", item_name: "Roots circling the bottom:", item_text: "you see a tight ring of roots or roots escaping the drain hole." },
                    { id: "02", item_name: "Water runs straight through:", item_text: "soil has collapsed or gone hydrophobic." },
                    { id: "03", item_name: "Plant dries out too fast:", item_text: "needs water every 1–2 days in normal indoor conditions." },
                    { id: "04", item_name: "Top growth stalls:", item_text: "during spring/summer, healthy plants should be pushing new leaves." },
                ],
            },
            {
                blogListTitle: "Pick the right pot size",
                blogListSubTitle: "(bigger is not better)",
                blogListText:
                    "Most indoor plants only need to go up 1–2 inches in diameter. Oversizing keeps soil wet too long and invites root rot.",
                blogListData: [
                    { id: "01", item_name: "Go up one pot size:", item_text: "ex: 8-inch → 10-inch, not 8 → 14." },
                    { id: "02", item_name: "Use heavier pots for top-heavy plants:", item_text: "monsteras + dracaenas love a stable base." },
                    { id: "03", item_name: "Drain hole required:", item_text: "if it can’t drain, it can’t breathe." },
                ],
            },
            {
                blogListTitle: "Soil mix that works in Dallas interiors",
                blogListSubTitle: "(air + drainage first)",
                blogListData: [
                    { id: "01", item_name: "Aroid mix:", item_text: "potting soil + orchid bark + perlite (fast draining, airy)." },
                    { id: "02", item_name: "Cactus/succulent:", item_text: "cactus mix + extra pumice/perlite (super fast drying)." },
                    { id: "03", item_name: "Ferns:", item_text: "moisture-retentive soil + a little perlite (don’t over-air it)." },
                ],
            },
            {
                blogListTitle: "Repot step-by-step",
                blogListSubTitle: "(clean + calm)",
                blogListData: [
                    { id: "01", item_name: "Water the day before:", item_text: "slightly moist roots handle better than bone dry." },
                    { id: "02", item_name: "Loosen, don’t shred:", item_text: "tease outer roots gently; only cut if roots are circling hard." },
                    { id: "03", item_name: "Set the same height:", item_text: "don’t bury the stem deeper than it was." },
                    { id: "04", item_name: "Water once, then wait:", item_text: "let it settle; don’t keep topping off daily." },
                ],
            },
            {
                blogListTitle: "Aftercare",
                blogListSubTitle: "(give it two weeks)",
                blogListData: [
                    { id: "01", item_name: "Bright indirect light:", item_text: "avoid harsh sun for the first week." },
                    { id: "02", item_name: "Skip fertilizer:", item_text: "wait 2–4 weeks; new soil has nutrients." },
                    { id: "03", item_name: "Watch for droop:", item_text: "minor droop is normal; mushy stems are not." },
                ],
            },
        ],
    },

    {
        id: 3,
        slug: "living-walls-that-dont-die",
        link: "/pages/blog/living-walls-that-dont-die",
        thumb: blog_3,
        cover: blog_3,
        title: {
            sectionName: "The Wall",
            sectionTitle: "Living Wall Basics",
            sectionDesc: "Living Walls That Don’t Die: The Real Checklist",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "18 April 25",
            category: "Living Walls",
            readTime: "8 min read",
        },
        introText:
            "A living wall is either a luxury statement… or a very expensive science project. The difference is planning + maintenance.",
        introText2:
            "Here’s what we check before we install anything: light, access, irrigation, plant choice, and who’s responsible when it needs love.",
        tagList: [
            { id: "1", tag: "living walls", link: "" },
            { id: "2", tag: "biophilic design", link: "" },
            { id: "3", tag: "commercial", link: "" },
            { id: "4", tag: "maintenance", link: "" },
        ],
        sections: [
            {
                blogListTitle: "Is your wall a good candidate?",
                blogListSubTitle: "(the unsexy questions)",
                blogListData: [
                    { id: "01", item_name: "Light:", item_text: "if it’s dark, you’ll need grow lighting. Period." },
                    { id: "02", item_name: "Access:", item_text: "someone has to reach it for pruning + replacement." },
                    { id: "03", item_name: "Water management:", item_text: "drainage and leak prevention are part of the design." },
                    { id: "04", item_name: "Expectations:", item_text: "it’s living—some plants will cycle out and be swapped." },
                ],
            },
            {
                blogListTitle: "Plant selection that behaves",
                blogListSubTitle: "(pretty + resilient)",
                blogListData: [
                    { id: "01", item_name: "Low drama staples:", item_text: "pothos, philodendron, ferns (with the right moisture), peperomia." },
                    { id: "02", item_name: "Texture layers:", item_text: "mix leaf sizes so the wall looks designed, not random." },
                    { id: "03", item_name: "Avoid divas:", item_text: "finicky plants can work, but they raise maintenance cost." },
                ],
            },
            {
                blogListTitle: "Irrigation vs. manual watering",
                blogListSubTitle: "(choose your pain)",
                blogListData: [
                    { id: "01", item_name: "Irrigation:", item_text: "best for larger walls; consistent and scalable, needs proper setup." },
                    { id: "02", item_name: "Manual:", item_text: "works for smaller walls, but relies on human consistency (risky)." },
                    { id: "03", item_name: "Hybrid:", item_text: "drip for base moisture + manual touch-ups during heat spikes." },
                ],
            },
            {
                blogListTitle: "Maintenance cadence",
                blogListSubTitle: "(how it stays premium)",
                blogListData: [
                    { id: "01", item_name: "Weekly:", item_text: "moisture check, quick prune, pest scan." },
                    { id: "02", item_name: "Monthly:", item_text: "detail pruning, nutrient check, replace tired plants." },
                    { id: "03", item_name: "Quarterly:", item_text: "deep clean, lighting audit, irrigation inspection." },
                ],
            },
        ],
    },

    {
        id: 4,
        slug: "office-plants-that-thrive",
        link: "/pages/blog/office-plants-that-thrive",
        thumb: blog_4,
        cover: blog_4,
        title: {
            sectionName: "The Space",
            sectionTitle: "Office Plant Strategy",
            sectionDesc: "Office Plants That Thrive (Even Under HVAC)",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "21 May 25",
            category: "Commercial",
            readTime: "6 min read",
        },
        introText:
            "Offices kill plants in the most boring ways: low light, constant HVAC, and random people ‘helping’ with a cup of water.",
        introText2:
            "The solution is a system: pick the right plants for the right zones, limit human interference, and give them a maintenance plan.",
        tagList: [
            { id: "1", tag: "office plants", link: "" },
            { id: "2", tag: "commercial", link: "" },
            { id: "3", tag: "dallas", link: "" },
            { id: "4", tag: "maintenance", link: "" },
        ],
        sections: [
            {
                blogListTitle: "Zone your space first",
                blogListSubTitle: "(light + traffic)",
                blogListData: [
                    { id: "01", item_name: "Lobby statement zone:", item_text: "bright indirect light + high visibility = higher impact plants." },
                    { id: "02", item_name: "Low-light corridor zone:", item_text: "use tough plants or add discreet grow lighting." },
                    { id: "03", item_name: "Desk zone:", item_text: "small plants with simple watering rules so nobody ‘saves’ them." },
                    { id: "04", item_name: "Conference rooms:", item_text: "plants that tolerate neglect + occasional overwatering." },
                ],
            },
            {
                blogListTitle: "Reliable plant picks",
                blogListSubTitle: "(low drama roster)",
                blogListData: [
                    { id: "01", item_name: "Low light:", item_text: "zz plant, snake plant, pothos (closer to windows), aglaonema." },
                    { id: "02", item_name: "Medium light:", item_text: "dracaena, philodendron, rubber tree." },
                    { id: "03", item_name: "High light near windows:", item_text: "ficus, large monsteras, palms (with consistency)." },
                ],
            },
            {
                blogListTitle: "Stop ‘random watering’",
                blogListSubTitle: "(the #1 office problem)",
                blogListData: [
                    { id: "01", item_name: "Assign one caretaker:", item_text: "or outsource to a maintenance plan. No plant-by-committee." },
                    { id: "02", item_name: "Use cachepots + liners:", item_text: "so water doesn’t spill and people don’t panic." },
                    { id: "03", item_name: "Clear rules:", item_text: "if it’s damp, don’t water. Put it on a little sign if needed." },
                ],
            },
            {
                blogListTitle: "A maintenance plan pays for itself",
                blogListSubTitle: "(less replacement, more wow)",
                blogListData: [
                    { id: "01", item_name: "Pruning + shaping:", item_text: "keeps plants looking intentional, not abandoned." },
                    { id: "02", item_name: "Pest monitoring:", item_text: "catches issues before they spread office-wide." },
                    { id: "03", item_name: "Replacements:", item_text: "swap tired plants fast so the space stays premium." },
                ],
            },
        ],
    },

    {
        id: 5,
        slug: "summer-planters-texas-heat",
        link: "/pages/blog/summer-planters-texas-heat",
        thumb: blog_5,
        cover: blog_5,
        title: {
            sectionName: "The Outdoor",
            sectionTitle: "Summer Planters",
            sectionDesc: "Planters That Survive Texas Heat (and Look Good Doing It)",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "27 June 25",
            category: "Outdoor",
            readTime: "7 min read",
        },
        introText:
            "Dallas summer doesn’t ‘stress’ plants. It straight-up interrogates them. Your planters need strategy, not hope.",
        introText2:
            "Here’s how we build planters that hold up: proper soil depth, drainage, irrigation, and plant combinations that don’t collapse by July.",
        tagList: [
            { id: "1", tag: "outdoor planters", link: "" },
            { id: "2", tag: "texas heat", link: "" },
            { id: "3", tag: "seasonal color", link: "" },
            { id: "4", tag: "irrigation", link: "" },
        ],
        sections: [
            {
                blogListTitle: "Container rules that save lives",
                blogListSubTitle: "(and your wallet)",
                blogListData: [
                    { id: "01", item_name: "Depth matters:", item_text: "shallow pots overheat fast. Use deeper containers when possible." },
                    { id: "02", item_name: "Drainage + airflow:", item_text: "elevate pots slightly; don’t trap water against roots." },
                    { id: "03", item_name: "Mulch the top:", item_text: "reduces evaporation and keeps soil temps calmer." },
                ],
            },
            {
                blogListTitle: "Watering strategy",
                blogListSubTitle: "(consistency > volume)",
                blogListData: [
                    { id: "01", item_name: "Morning water:", item_text: "evening watering + heat can invite fungus." },
                    { id: "02", item_name: "Drip is king:", item_text: "small, consistent watering beats one huge flood then drought." },
                    { id: "03", item_name: "Avoid saucers outdoors:", item_text: "they turn roots into soup." },
                ],
            },
            {
                blogListTitle: "Plant combos that hold up",
                blogListSubTitle: "(color + structure)",
                blogListData: [
                    { id: "01", item_name: "Sun + heat:", item_text: "lantana, pentas, vinca, portulaca, ornamental grasses." },
                    { id: "02", item_name: "Shade patios:", item_text: "ferns, caladiums, coleus (with consistent moisture)." },
                    { id: "03", item_name: "Evergreen structure:", item_text: "boxwood, rosemary, dwarf yaupon (depending on site)." },
                ],
            },
            {
                blogListTitle: "Mid-summer refresh",
                blogListSubTitle: "(so it doesn’t look cooked)",
                blogListData: [
                    { id: "01", item_name: "Trim + replace:", item_text: "swap tired annuals; don’t drag them to the finish line." },
                    { id: "02", item_name: "Topdress soil:", item_text: "refresh nutrients lightly without disturbing roots." },
                    { id: "03", item_name: "Check irrigation:", item_text: "clogs happen; July is not forgiving." },
                ],
            },
        ],
    },

    {
        id: 6,
        slug: "bug-battle-ladder",
        link: "/pages/blog/bug-battle-ladder",
        thumb: blog_6,
        cover: blog_6,
        title: {
            sectionName: "The Fix",
            sectionTitle: "Bug Battle Ladder",
            sectionDesc: "Mites, Thrips, Mealybugs: A Sane Escalation Plan",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "07 August 25",
            category: "Troubleshooting",
            readTime: "8 min read",
        },
        introText:
            "Pests don’t show up because you’re a bad plant parent. They show up because indoor plants are basically a tiny buffet with no predators.",
        introText2:
            "This is our escalation ladder: diagnose, isolate, treat correctly, and prevent the comeback tour.",
        tagList: [
            { id: "1", tag: "spider mites", link: "" },
            { id: "2", tag: "mealybugs", link: "" },
            { id: "3", tag: "thrips", link: "" },
            { id: "4", tag: "plant care", link: "" },
        ],
        sections: [
            {
                blogListTitle: "Diagnose fast",
                blogListSubTitle: "(before you treat)",
                blogListData: [
                    { id: "01", item_name: "Spider mites:", item_text: "fine webbing + speckled leaves, especially on undersides." },
                    { id: "02", item_name: "Mealybugs:", item_text: "white cottony clusters in nodes and leaf joints." },
                    { id: "03", item_name: "Thrips:", item_text: "silvery scarring + tiny dark specks; new growth looks messed up." },
                    { id: "04", item_name: "Fungus gnats:", item_text: "tiny flies near soil—usually from staying too wet." },
                ],
            },
            {
                blogListTitle: "Step 1: isolate + clean",
                blogListSubTitle: "(non-negotiable)",
                blogListData: [
                    { id: "01", item_name: "Quarantine:", item_text: "move the plant away from others immediately." },
                    { id: "02", item_name: "Rinse:", item_text: "a firm shower knocks down populations fast." },
                    { id: "03", item_name: "Wipe leaves:", item_text: "especially undersides where pests hang out." },
                ],
            },
            {
                blogListTitle: "Step 2: treat correctly",
                blogListSubTitle: "(repeat matters)",
                blogListData: [
                    { id: "01", item_name: "Insecticidal soap:", item_text: "contact killer; spray thoroughly, repeat every 4–7 days." },
                    { id: "02", item_name: "Horticultural oil:", item_text: "smothers pests; avoid blasting in direct sun." },
                    { id: "03", item_name: "Systemic options:", item_text: "best for some pests; use responsibly and follow label directions." },
                ],
            },
            {
                blogListTitle: "Step 3: prevent the relapse",
                blogListSubTitle: "(the part everyone skips)",
                blogListData: [
                    { id: "01", item_name: "Check new plants:", item_text: "quarantine new arrivals for 7–10 days." },
                    { id: "02", item_name: "Don’t overwater:", item_text: "stressed roots = weak plant = pest magnet." },
                    { id: "03", item_name: "Keep airflow:", item_text: "crowded plants invite problems." },
                ],
            },
        ],
    },

    {
        id: 7,
        slug: "fall-plant-reset",
        link: "/pages/blog/fall-plant-reset",
        thumb: blog_7,
        cover: blog_7,
        title: {
            sectionName: "The Season",
            sectionTitle: "Fall Reset",
            sectionDesc: "Fall Plant Reset Before You Bring Them Inside",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "19 September 25",
            category: "Seasonal",
            readTime: "6 min read",
        },
        introText:
            "Your plants notice seasonal changes before you do. Shorter days + cooler nights = different watering and different growth behavior.",
        introText2:
            "This is how to transition plants without shock—especially if they lived outside for summer.",
        tagList: [
            { id: "1", tag: "fall plants", link: "" },
            { id: "2", tag: "seasonal care", link: "" },
            { id: "3", tag: "pest check", link: "" },
            { id: "4", tag: "indoor plants", link: "" },
        ],
        sections: [
            {
                blogListTitle: "Do a pest checkpoint",
                blogListSubTitle: "(before they enter your home)",
                blogListData: [
                    { id: "01", item_name: "Inspect undersides:", item_text: "look for mites, eggs, and sticky residue." },
                    { id: "02", item_name: "Rinse thoroughly:", item_text: "a good shower prevents bringing hitchhikers indoors." },
                    { id: "03", item_name: "Treat proactively:", item_text: "soap/oil cycle if you’ve had issues before." },
                ],
            },
            {
                blogListTitle: "Adjust light expectations",
                blogListSubTitle: "(winter light is weaker)",
                blogListData: [
                    { id: "01", item_name: "Move closer to windows:", item_text: "plants that were happy outside will struggle deep indoors." },
                    { id: "02", item_name: "Add a grow light:", item_text: "especially for citrus, herbs, and high-light plants." },
                    { id: "03", item_name: "Rotate weekly:", item_text: "keeps growth balanced as sun angle changes." },
                ],
            },
            {
                blogListTitle: "Change watering rhythm",
                blogListSubTitle: "(slower growth = less water)",
                blogListData: [
                    { id: "01", item_name: "Let it dry a bit more:", item_text: "most plants want longer dry-down between waterings in fall." },
                    { id: "02", item_name: "Empty trays:", item_text: "standing water indoors is a fungus party." },
                    { id: "03", item_name: "Skip heavy fertilizer:", item_text: "wait until spring for big feeding." },
                ],
            },
        ],
    },

    {
        id: 8,
        slug: "holiday-greenery-that-looks-expensive",
        link: "/pages/blog/holiday-greenery-that-looks-expensive",
        thumb: blog_8,
        cover: blog_8,
        title: {
            sectionName: "The Style",
            sectionTitle: "Holiday Greenery",
            sectionDesc: "Holiday Greenery That Looks Expensive (Not Crafty)",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "10 November 25",
            category: "Design",
            readTime: "5 min read",
        },
        introText:
            "Holiday plant styling is either tasteful and elevated… or it looks like a clearance aisle exploded.",
        introText2:
            "Here’s how we keep it clean: strong shapes, intentional repetition, and plants that actually hold up indoors.",
        tagList: [
            { id: "1", tag: "holiday decor", link: "" },
            { id: "2", tag: "greenery", link: "" },
            { id: "3", tag: "design", link: "" },
            { id: "4", tag: "commercial", link: "" },
        ],
        sections: [
            {
                blogListTitle: "Choose a ‘palette’ first",
                blogListSubTitle: "(less chaos)",
                blogListData: [
                    { id: "01", item_name: "Green + white:", item_text: "modern, clean, works in offices and homes." },
                    { id: "02", item_name: "Green + gold:", item_text: "warm luxury without screaming." },
                    { id: "03", item_name: "Green + natural:", item_text: "pinecones, twigs, textured greens—quietly expensive." },
                ],
            },
            {
                blogListTitle: "Plants that hold up indoors",
                blogListSubTitle: "(no needle apocalypse)",
                blogListData: [
                    { id: "01", item_name: "Norfolk pine:", item_text: "great indoor ‘tree’ vibe with proper light + consistent watering." },
                    { id: "02", item_name: "Poinsettias:", item_text: "bright light + steady moisture; keep away from drafts." },
                    { id: "03", item_name: "Amaryllis:", item_text: "dramatic bloom, minimal maintenance, huge visual payoff." },
                ],
            },
            {
                blogListTitle: "Install like a designer",
                blogListSubTitle: "(simple moves)",
                blogListData: [
                    { id: "01", item_name: "Cluster in odd numbers:", item_text: "3s and 5s read intentional." },
                    { id: "02", item_name: "Use height changes:", item_text: "tall + medium + low makes it look curated." },
                    { id: "03", item_name: "Repeat elements:", item_text: "same ribbon, same pot style, same greens = premium." },
                ],
            },
        ],
    },

    {
        id: 9,
        slug: "plant-maintenance-plan",
        link: "/pages/blog/plant-maintenance-plan",
        thumb: blog_9,
        cover: blog_9,
        title: {
            sectionName: "The System",
            sectionTitle: "Maintenance Plan",
            sectionDesc: "The Maintenance Plan That Saves Your Plants (and Money)",
        },
        meta: {
            author: "The Plant Lady TX",
            date: "12 January 26",
            category: "Maintenance",
            readTime: "6 min read",
        },
        introText:
            "Replacing dead plants is the most expensive way to ‘maintain’ greenery. It looks bad, wastes money, and usually repeats the same mistakes.",
        introText2:
            "A real maintenance plan is cheaper long-term: scheduled visits, health checks, pruning, replacements, and a system that keeps plants stable.",
        tagList: [
            { id: "1", tag: "maintenance", link: "" },
            { id: "2", tag: "commercial plants", link: "" },
            { id: "3", tag: "plant care", link: "" },
            { id: "4", tag: "dallas", link: "" },
        ],
        sections: [
            {
                blogListTitle: "What’s included in real maintenance",
                blogListSubTitle: "(the checklist)",
                blogListData: [
                    { id: "01", item_name: "Watering (correctly):", item_text: "deep water + drain, adjusted to season and light." },
                    { id: "02", item_name: "Pruning + shaping:", item_text: "keeps plants looking intentional and healthy." },
                    { id: "03", item_name: "Pest monitoring:", item_text: "early detection prevents spread and replacements." },
                    { id: "04", item_name: "Rotation + light checks:", item_text: "fixes leaning and slow decline." },
                ],
            },
            {
                blogListTitle: "Why it saves money",
                blogListSubTitle: "(even when it feels ‘extra’)",
                blogListData: [
                    { id: "01", item_name: "Less replacement:", item_text: "healthy plants live longer; you buy fewer." },
                    { id: "02", item_name: "Better presentation:", item_text: "plants stay clean and shaped—your space looks premium." },
                    { id: "03", item_name: "Fewer emergencies:", item_text: "small problems get fixed before they become disasters." },
                ],
            },
            {
                blogListTitle: "What to do today",
                blogListSubTitle: "(quick start)",
                blogListData: [
                    { id: "01", item_name: "Count your plants:", item_text: "rough inventory by area (lobby, offices, patio)." },
                    { id: "02", item_name: "List pain points:", item_text: "yellowing, bugs, low light, ‘random watering’." },
                    { id: "03", item_name: "Set a visit cadence:", item_text: "most businesses do biweekly or monthly depending on density." },
                ],
            },
        ],
    },
];

// Handy for archive pages/sliders
export const blogIndex = plantLadyBlogPosts.map((p) => ({
    id: p.id,
    thumb: p.thumb,
    author: p.meta.author,
    date: p.meta.date,
    tag: p.meta.category,
    title: `${p.title.sectionName} ${p.title.sectionTitle}`,
    desc: p.title.sectionDesc,
    slug: p.slug,
    link: p.link,
}));
