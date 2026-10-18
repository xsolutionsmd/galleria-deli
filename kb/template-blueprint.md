# Galleria Deli reconstruction blueprint

October 18, 2026. Reference selection and content gate were accepted before implementation. This document describes the populated frontend on `derek-dev`; it does not establish publication or later-stage acceptance.

Inspection method, October 18, 2026: REA is preferred tooling, not a required acceptance gate (Derek's canonical workflow correction). When it is unavailable or fails, ordinary browser/devtools inspection of rendered pages, DOM, computed styles, layout, public client assets and visible behavior continues without a permission or repair wait. This reconstruction used that fallback: Sol's documented desktop/mobile browser inspection is the reference evidence, and the coordinator accepted it. Earlier in the day Derek had answered "Accept browser evidence and continue" for Galleria specifically; the canonical correction now supersedes that exception-only framing. REA was not run and no REA success is claimed. Remaining desktop/mobile, content and release checks are unchanged.

## References and observed evidence

- [Francis Deli homepage](https://francisdeli.com.au/): fixed cream navigation; burgundy story split; italic serif display; cream menu surface; telephone, directions and catering inquiry actions.
- [Francis Deli menu](https://francisdeli.com.au/menu/): category anchors, rounded three-column mixed photo/text cards, ingredient descriptions and prices; single-column phone layout; full-screen mobile navigation.
- Coordinator captures: `private/runs/template-selection/reference-story-desktop.png`, `reference-menu-desktop.png`, `reference-mobile-navigation.png`, `reference-home-desktop.png` in the company workspace. These pixels were inspected, alongside the full authentic business-media contact sheet.
- Additional task-owned native-browser desktop/mobile observations and captures: `private/runs/template-analysis/`. Reference DOM/computed-style observations are browser evidence, not REA evidence.
- REA's dedicated task-browser start was rejected before execution with `rejected: blocked by policy`. No endpoint, target, REA capture or Evidence ID exists. The task preserved the exact attempt in `rea-status.json`; helper status subsequently returned `absent`. No bypass or shared-helper change occurred, and the rejected helper is not retried. Historical record only: it does not block acceptance, which rests on the browser evidence above.

## Concrete reference system

Observed desktop at 1280/1440px and mobile at 390px:

- Cream `#FDFBF7`; story burgundy `#581C21`; restrained darker red accents; thin warm neutral borders. Use the same system across all four pages.
- Georgia/Cambria/Times serif, italic and regular weight for display; Arial/Helvetica sans for body and controls. No external fonts or runtime font service.
- Fixed cream navigation, roughly 80–96px tall, bold serif wordmark, small spaced uppercase links, burgundy pill telephone action. Active page has a thin underline.
- Homepage story: centered maximum 1280px container, 24px side padding, two equal columns, 80px gap, generous 88–128px vertical spacing. Text left; portrait photo and two stacked companion panels right. Images have 32px corners, 24px internal gaps, and an approximately 48px downward portrait offset.
- Desktop story display about 72–76px with close line spacing; body 18–20px with generous leading. Phone display 46–52px; body 16px.
- Reference menu: cream surface with 48–80px top corner radii, spacious vertical rhythm; rounded white photo cards around 48px corners, 30–32px padding, thin borders; 192px-high item photos with 28–32px inner corners. Text-only cards (observed live in the Fried section) are compact: aligned to the row start rather than stretched, 32px corners, 70% white surface, no hover lift. Three columns become two at tablet and one on phones. Name and price share a row; descriptions remain beneath.
- The full reference menu uses item photographs **and text-only cards**. Its five principal anchor labels adapt to Galleria's ten real categories. The observed reference anchor could hide a heading under fixed navigation; this implementation reserves the actual header height plus 28px and moves keyboard focus to the heading.
- Phone navigation is a burgundy full-screen sheet (live computed background, cream text) with large serif links, a full-width header rule, close control and a bottom cream telephone pill; the current page is a softened cream link. The earlier "cream sheet" note here was corrected during refinement from the live reference. The implementation uses a native modal dialog with explicit Tab/Shift+Tab wrap, Escape close and focus restoration. Without JavaScript, a native disclosure supplies the same destination links.
- Restrained hover photo scaling, card lift, pill feedback, smooth category scrolling and a short navigation slide. No continuous animation. Reduced-motion declarations disable transitions/animation and smooth scrolling.

## Page and content mapping

| URL | Populated hierarchy and visitor action | Factual authority |
|---|---|---|
| `/` | Relocated reference story split; menu highlights; Korean specials/catering/visit links; telephone panel; practical footer | company-profile, offerings, contact-and-hours; [S1/S2](sources.md) |
| `/menu/` | Burgundy title panel; rounded cream surface; ten category anchors; all 54 named items with prices, ingredients and modifiers; seasonal soup/salad invitation; telephone panel | menu-source.json and offerings; S1 |
| `/catering/` | Burgundy title; real Italian sandwich panel paired with phone-inquiry copy; date/group/food-preference planning prompts; telephone panel | official catering invitation, features; S1 |
| `/visit/` | Burgundy title; address, directions, telephone and published weekly hours; authentic storefront; compact phone invitation | contact-and-hours; S1/S2 |

Every route has its own generated HTML, title, description, canonical, social metadata, active navigation and `noindex, nofollow`. Vite builds all four explicit HTML inputs. Direct loads and refreshes do not require client-side routing. The existing static Docker/Vite/nginx contract is retained.

## Company-driven adaptations

1. The coordinator explicitly moved the reference's inspected story split into the opening. Authentic 750–1024px source images support restrained panels, not a high-resolution panoramic hero. On phones, opening copy/actions precede the collage so the relocated opening identifies the business immediately; the reference's lower story section placed its collage first.
2. The menu's photographic full-screen title backdrop is replaced by a shorter burgundy title using the same type/color hierarchy. No suitable panoramic Galleria image exists; actual dishes appear in the card system instead. Catering and Visit reuse that title treatment for consistency.
3. Separate Home/Menu/Catering/Visit pages replace the reference's same-page About/FAQ navigation, as required by the selected scope. Unverified business claims, reviews, opening badges, email, checkout and social destinations are omitted.
4. Galleria's much longer category/item names require slightly smaller card headings and wrapping. Ten categories and the full 54-item depth remain visible; no teaser-only substitute or category filter hides items.
5. No decorative numbering, visitor-facing preview banner, hero location eyebrow or unsupported catering package. Telephone inquiries remain the existing customer route.

## Authentic asset mapping

Twelve WebP derivatives from nine original photographs are actually included in `app/public/assets/` (662,122 image bytes). No hotlinked runtime images or reference-site assets are used. `app/public/assets/provenance.json` records original hashes, source page/photographer/date and exact normalized crop boxes; `app/src/photos.json` maps each item to the correct derivative.

| Role | Original hash prefix | Treatment |
|---|---|---|
| Opening portrait; Reuben card; fries card | `07cba8d6210e` | Separate portrait, sandwich and fries derivatives; the opening crop removes the diner's lap/floor and trims the bottles while retaining the sandwich; sides are separately priced |
| Opening companion; Italian Cold Cut card; Catering | `fc9a20eddd59` | Real intact sandwich, restrained crop; no catering platter claim |
| Opening dining-room companion | `d9bd77d4cbcb` | Historical premises image; no assertion that every furnishing is unchanged |
| Visit storefront | `42b868b3f228` | Door/address/hours decal preserved; the crop starts below the neighboring nail-shop sign so it is not shown or attributed to Galleria |
| Classic Cuban card | `faed76239abb` | Caption-confirmed dish; upper diner cropped |
| Veggie Powerhouse and Grilled Salmon cards | `ee69446a2109` | Distinct, specifically mapped crops of the upper/lower sandwich halves |
| Chicken Salad card | `bcf9f3452d53` | Confirmed chicken salad on rye, not a Club |
| Egg and Meat Sandwich card | `37a04a6fe8b8` | Sausage variant; cheese/croissant add-ons explicitly identified |
| Side of Home Fries card | `ca82d51f1fae` | Only the separate potato container; no Breakfast Platter/turkey-bacon mislabeling |

Nine menu rows have confirmed item photos; 45 remain deliberately text-only. Four likely identities are unused. French toast and seasonal Fresh Fruit remain text-only despite confirmed library examples because group/seasonal crops are less suitable. No Korean bowl substitute exists or is shown. Standing Derek authorization applies to gathered assets; provenance labels do not create another permission gate.

## Flows, states and backend boundary

- Navigation: real page links, current-page indication, native history and direct refresh. Mobile open/close, focus wrap/return, Escape and viewport changes are handled locally.
- Category jump: ordinary hash destination, smooth movement unless reduced motion, visible focused heading beneath actual fixed-header height. No selection, cart or order state.
- Calls: `tel:+14103215860` throughout; no test call placed. Catering is the same existing phone inquiry. Suggested planning information is not a form, minimum, package or lead-time promise.
- Directions: address-based Google Maps directions to 1419 York Rd, Lutherville-Timonium, MD 21093; no invented business ID.
- Published hours: Monday–Friday 6am–6pm; Saturday 8am–4pm; Sunday closed. No holiday or live open-status claim.
- Loading: static HTML is immediately readable, image dimensions reserve space; below-fold item images load lazily. The app has no submitted/success/error customer-data states because it collects no customer data.
- No new API, backend, checkout, credentials, account, custom form or persistent state. Hidden reference server rules were not inspected and remain unknown. Astra owns subsequent container/health/version/integration acceptance.

## Validation and remaining limits

`npm run check` builds four real HTML pages and checks required destinations, noindex, local resources, unsupported claims, all menu names/categories/prices and every ingredient/modifier. Private reconciliation confirms 54/54 against the original menu after correcting malformed spacing/question-mark artifacts only.

Native-browser checks cover all four routes at 1440, 720, 390 and 320 CSS pixels, decoded photos, zero horizontal overflow, per-card content containment and CTA parent containment. All four pages also pass a 320px/200% computed-text-size override after fixing the header to wrap and reserve its measured height. Keyboard/modal/category/history flows passed. Exact reduced-motion declarations were forced in-browser to verify zero transitions, no dialog animation and automatic scrolling; the OS preference itself was not changed.

Saved captures include reference views, desktop/mobile populated pages, menu/category views, mobile navigation and enlarged text. See `docs/VALIDATION.md` for the reconstruction receipt. Docker/production/live URL/social-card network acceptance and the blocked REA analysis are not claimed. The next authorized owner should review this existing implementation, not initiate another reference/design cycle.

## Claude refinement — October 18, 2026

Claude Opus 5.5 High reviewed Sol's populated source against the full KB, media notes, asset contact sheet and the live reference (browser inspection of the reference menu's text-only card and mobile sheet). Structure, pages, typography, palette, menu content and the static runtime are unchanged. Justified changes:

- **Text-only menu cards** followed the photo-card style and stretched to row height, leaving large empty white boxes beside photo cards. They now use the reference's compact text-card treatment above; photo cards keep the hover lift.
- **Mobile navigation** now reproduces the reference's burgundy sheet with cream links and cream call pill; the heavy current-page underline became a thin underline with softened color.
- **Opening portrait crop** showed a diner's lap and floor beneath the Reuben, contrary to the media note. A new derivative from the same original (`crop_box` 0.03, 0.04, 0.97, 0.93) removes them; object position centers the sandwich.
- **Visit storefront crop** showed the neighboring Towson Nails sign at desktop and phone sizes. The new derivative (`crop_box` 0, 0.22, 0.87, 1) begins below it while keeping 1419, the door and hours decal.
- **Home highlights** repeated both opening food photos (Italian Cold Cut, Reuben) immediately below the opening. They now show Classic Cuban, Veggie Powerhouse and Egg and Meat Sandwich: confirmed dish photos with published descriptions, covering signature sandwiches, a vegetarian option and breakfast. Chicken Salad was considered and rejected because its published entry has no description.
- **Opening copy** replaced generic lines with sourced company facts: breakfast and lunch on York Road, scratch preparation for local customers and nearby businesses, the 2005 purchase/renovation, fresh roast turkey and the Korean-inspired dishes that followed (company-profile; S1).
- **Focus visibility**: cream pill buttons on burgundy panels had a burgundy focus ring (invisible), and every focused pill took the generic 5px link radius. Cream buttons now use a cream ring, and focused pills and category chips keep their pill shape.
- Balanced wrapping on short intro/menu-note paragraphs removes single-word orphans.

Provenance for both recrops is updated in `app/public/assets/provenance.json`; the private originals and library were not changed. The twelve WebP derivatives now total 656,926 bytes (previously 662,122).
