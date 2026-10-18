# Galleria Deli reconstruction blueprint

October 18, 2026. Reference selection and content gate were accepted before implementation. This document describes the populated frontend on `derek-dev`; it does not establish publication or later-stage acceptance.

Scope-specific workflow exception, October 18, 2026: Derek explicitly accepted Sol's documented desktop/mobile browser inspection in place of the blocked REA capture for Galleria Deli and directed continuation through refinement and the full release. Coordinator accepts the supported reconstruction evidence on that basis. REA was not run; this exception does not change any other company or later quality gate.

## References and observed evidence

- [Francis Deli homepage](https://francisdeli.com.au/): fixed cream navigation; burgundy story split; italic serif display; cream menu surface; telephone, directions and catering inquiry actions.
- [Francis Deli menu](https://francisdeli.com.au/menu/): category anchors, rounded three-column mixed photo/text cards, ingredient descriptions and prices; single-column phone layout; full-screen mobile navigation.
- Coordinator captures: `private/runs/template-selection/reference-story-desktop.png`, `reference-menu-desktop.png`, `reference-mobile-navigation.png`, `reference-home-desktop.png` in the company workspace. These pixels were inspected, alongside the full authentic business-media contact sheet.
- Additional task-owned native-browser desktop/mobile observations and captures: `private/runs/template-analysis/`. Reference DOM/computed-style observations are browser evidence, not REA evidence.
- REA's dedicated task-browser start was rejected before execution with `rejected: blocked by policy`. No endpoint, target, REA capture or Evidence ID exists. The task preserved the exact attempt in `rea-status.json`; helper status subsequently returned `absent`. No bypass or shared-helper change occurred. REA analysis remains unavailable for coordinator acceptance.

## Concrete reference system

Observed desktop at 1280/1440px and mobile at 390px:

- Cream `#FDFBF7`; story burgundy `#581C21`; restrained darker red accents; thin warm neutral borders. Use the same system across all four pages.
- Georgia/Cambria/Times serif, italic and regular weight for display; Arial/Helvetica sans for body and controls. No external fonts or runtime font service.
- Fixed cream navigation, roughly 80–96px tall, bold serif wordmark, small spaced uppercase links, burgundy pill telephone action. Active page has a thin underline.
- Homepage story: centered maximum 1280px container, 24px side padding, two equal columns, 80px gap, generous 88–128px vertical spacing. Text left; portrait photo and two stacked companion panels right. Images have 32px corners, 24px internal gaps, and an approximately 48px downward portrait offset.
- Desktop story display about 72–76px with close line spacing; body 18–20px with generous leading. Phone display 46–52px; body 16px.
- Reference menu: cream surface with 48–80px top corner radii, spacious vertical rhythm; rounded white cards around 48px corners, 30–32px padding, thin borders; 192px-high item photos with 28–32px inner corners. Three columns become two at tablet and one on phones. Name and price share a row; descriptions remain beneath.
- The full reference menu uses item photographs **and text-only cards**. Its five principal anchor labels adapt to Galleria's ten real categories. The observed reference anchor could hide a heading under fixed navigation; this implementation reserves the actual header height plus 28px and moves keyboard focus to the heading.
- Phone navigation is a cream full-screen sheet with large serif links, close control, and bottom telephone pill. The implementation uses a native modal dialog with explicit Tab/Shift+Tab wrap, Escape close and focus restoration. Without JavaScript, a native disclosure supplies the same destination links.
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
| Opening portrait; Reuben card; fries card | `07cba8d6210e` | Separate portrait, sandwich and fries derivatives; retain the sandwich in the tall opening; sides are separately priced |
| Opening companion; Italian Cold Cut card; Catering | `fc9a20eddd59` | Real intact sandwich, restrained crop; no catering platter claim |
| Opening dining-room companion | `d9bd77d4cbcb` | Historical premises image; no assertion that every furnishing is unchanged |
| Visit storefront | `42b868b3f228` | Door/address/sign preserved; neighboring premises are not attributed to Galleria |
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
