# Runtime and customer-action contract

Checked October 18, 2026 against source revision `294e80c1c54857e703d57475c604dae98f786b65`. This is independent runtime preparation; it does not accept the outstanding reconstruction gate or establish publication.

This landing site is static. It stores no customer records and submits no requests, orders or payments. The verified existing inquiry route is Galleria Deli's telephone, as published on [the official website](https://galleriadeli.com/). No verified external checkout, email or quote endpoint was found.

| Destination | Contract and checked behavior |
|---|---|
| `/`, `/menu/`, `/catering/`, `/visit/` | Separate generated HTML pages; direct production-container requests return 200 and `text/html`. |
| `/health` | GET returns 200, `text/plain`, body `ok` followed by a newline. No side effects. |
| `/version.json` | GET returns 200 JSON with one `revision` string matching the image build argument. `Cache-Control: no-store`; no stale ETag handling. |
| `tel:+14103215860` | Delegates to the visitor's phone handler. Same number as the official site and address-matched independent listing. Links inspected; no call placed. |
| `https://www.google.com/maps/dir/?api=1&destination=1419%20York%20Rd%2C%20Lutherville-Timonium%2C%20MD%2021093` | Address-based Google Maps directions. No origin tracking or embedded third-party script. The address matches the official website; no customer journey was initiated. |
| Menu category anchors | Local navigation to one of ten visible categories. No filter state, data mutation or network API. |
| Unknown route, missing asset, dotfile | Returns HTTP 404. The current branded fallback displays the home content while preserving the error status. |

Every checked response carries `X-Robots-Tag: noindex, nofollow`. Page metadata also prevents indexing for this authorized proposal release. Public customer content includes only source-backed facts; no private lead or sales context belongs in the build.

## Deployment contract

The multi-stage Docker build runs the site's production build and static checks before copying the output into nginx. The runtime listens on port 8080, runs as UID/GID 101, and was verified with a read-only root, dropped capabilities, no-new-privileges and a 64 MB `/tmp` tmpfs. No volume, database or secret is required. Docker health reported healthy.

Only locally bundled styles, JavaScript and twelve optimized business-image derivatives load during normal page use. No remote font or photo dependency is required. All 54 menu names, prices, descriptions and modifiers are reconciled with the captured official menu by the build checks.

The private runtime receipt records all nine HTTP checks, exact image/container identities and revision. Container verification is local; Oracle ARM64 execution and public TLS/revision checks remain release-stage work.
