# Verified Oracle infrastructure

The October 18, 2026 Part A setup preserves the accepted four-page Galleria Deli application from `50e41e0a595cbc81bb76e078076d7d3db6981ed5`. Infrastructure commit `040df667afbfd79ed62ea3ce6ad27b3c506c1a4f` was initially synchronized to all three branches. Application source, Dockerfile and runtime source were unchanged.

Repository: https://github.com/xsolutionsmd/galleria-deli (public).

| Branch | URL | Independent runtime / updater prefix |
|---|---|---|
| main | https://galleriadeli.xsolutionsmd.com | galleria-deli |
| derek-dev | https://d-galleriadeli.xsolutionsmd.com | galleria-deli-derek-dev |
| abdul-dev | https://a-galleriadeli.xsolutionsmd.com | galleria-deli-abdul-dev |

The initial push started real automatic workflows: [production](https://github.com/xsolutionsmd/galleria-deli/actions/runs/39143810124), [Derek](https://github.com/xsolutionsmd/galleria-deli/actions/runs/39143811564), [Abdul](https://github.com/xsolutionsmd/galleria-deli/actions/runs/39143815085). Each environment's four page routes, `/health` and uncached `/version.json` passed public HTTPS checks at that revision with `noindex, nofollow`. The page bodies matched across all three environments.

The three GHCR packages (`galleria-deli`, `galleria-deli-derek-dev`, `galleria-deli-abdul-dev`) and their exact-digest deployment release assets were anonymously accessible. Their image indexes contain Linux AMD64 and ARM64 variants. Publication uses temporary workflow tokens; Oracle uses anonymous outbound pulls and has no Actions SSH credential.

Main requires a PR and strict successful `Check deployable app` and `Check application container` checks. Force pushes and deletion are disabled. GitHub environments `production`, `derek-dev` and `abdul-dev` each restrict deployments to their matching branch. Required approval count is zero; administrator enforcement is disabled, so maintainers must preserve the documented release-authorization boundary.

Each environment has its own `/opt/<prefix>`, `/var/lib/<prefix>-deploy`, reviewed `/usr/local/share/<prefix>/compose.yaml`, root-owned updater, systemd service/timer, image package and retention registration. Timers are enabled. Runtime is non-root, read-only, has disposable `/tmp`, `/data`, `/config`, no-new-privileges and no published origin port. All origins use their unique alias on the preserved `xsolutions-proxy` network.

The production bootstrap copied the verified direct image's `.env` to root-only `release.env` under the updater lock, preserving matched rollback configuration. The managed updater replaced the working direct container only after a healthy candidate passed. The existing gateway production block was retained; only the two preview blocks were added using fresh reads under the gateway lock, staged validation, CAS and graceful reload. Company-owned fragments remain editable under `deploy/`.

Validation included the lifecycle container check, 31 isolated generator/updater regression scenarios and actual production/preview Compose rehearsals with synthetic network/project identities. The rehearsals verified health/revision, non-root, read-only filesystem, tmpfs and no-new-privileges, then removed their containers/network. Live browser smoke checks and the protected PR/release receipt are recorded separately in the private infrastructure evidence; formal visual/interaction review belongs to the next pipeline stage.

Use [ORACLE_DEPLOYMENT.md](ORACLE_DEPLOYMENT.md) for normal releases, timer operations, transaction-guard recovery and automatic image retention. Recovery is image/configuration recovery for this stateless site. A VM reboot or offsite restore was not tested, and existing same-disk backups do not automatically cover these new app/state directories.
