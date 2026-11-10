---
url: /pr-preview/pr-134/CHANGELOG.md
---
# Changelog

Notable changes to the EOPF Sentinel Zarr Explorer website. Versions follow [SemVer](https://semver.org/).

## [Unreleased]

## [2.5.0] - 2026-11-02

### Added

* Developer Resources page covering the STAC, raster and openEO APIs, direct Zarr access and the data model, linked from the navigation, the home page and Software & Services (#126).
* "Build with EOPF Zarr" section on the home page featuring six software and services (#123).
* `llms.txt`, `llms-full.txt` and a Markdown copy of each page for LLM clients (#126), including the service, event and tutorial lists (#130).
* Support for client side rendering and filtering of Sentinel-1 & Sentinel-3 in the Dynamic Browser: catalog filters and hover details follow the selected collection, and the browser opens on all collections (#108).
* STAC item links open the Dynamic Browser with the item selected (#108).
* ol-stac in Software & Services (#126).
* Banner for planned service interruptions (#127).
* Webinar #3 page (#128, #131) and the FOSS4G Europe 2026 workshop (#109).
* Privacy notice and an updated cookie notice (#106).

### Changed

* Dynamic Browser catalog items show mission, product level, date and tile instead of truncated product IDs (#122).
* Software & Services cards are clickable as a whole, and external links across the site are marked (#122).
* Home page sections reordered (#125).
* openEO Web Editor removed from Software & Services, and service entries updated (#112, #126).
* Updated to eodash 5.10 and pages-theme-eox 2.0 (#108, #126).
* Performance enhancements for the Dynamic Browser.

### Fixed

* Software & Services sometimes rendering empty until a refresh (#122).
* Keyword search in the Software & Services gallery (#122, #126).
* Dynamic Browser: the date picker now recenters the timeline (#126); mosaic view hints when there is no data in view, item click and hover work reliably, and the time slider no longer glitches (#104).
* Feature matrix icons no longer look like separate buttons (#122).
* Example STAC items on the tutorial pages are resolved at build time, so expired items no longer break them (#115).
* Broken and outdated links, including the webinar slides, the CarbonPlan demo and the NDCI story image (#111, #114, #119, #122, #123).
* Inconsistent FAQ typography (#126).

## [2.0.0] - 2026-06-04

### Added

* Client-side GeoZarr rendering in the Sentinel Explorer (#101, #103).
* Sentinel Explorer: STAC item details, sorting, tooltips, date range selection and 3D terrain (#62); the mosaic follows the timeline filters, including cloud cover (#49); the item catalog is available in compare mode (#46).
* GeoZarr Data Model page with a timeline, featured on the home page (#38).
* EOxElements and eodash tutorial pages and catalog entries (#60), and EOxElements Jupyter with Python examples for the EOxElements tutorials (#99).
* STAC demo page built with OpenLayers (#59), and openEO Studio in Software & Services (#52, #71).
* Webinars & Events page (#80), a webinar registration button and ThriveGEO in the acknowledgments (#72).

### Changed

* Software & Services pages moved under `/software-services/` with a shared tutorial layout (#60).
* OpenLayers 10.9, titiler-eopf 0.8 and updated GeoZarr source configurations across the site (#74, #91, #103).
* Software & Services entries follow a fixed order (#44).
* Webinar #2 links to its recording (#102).

### Fixed

* Sentinel Explorer: loading bar position, switching between the 3D globe and the 2D map, the mosaic in the expert template and the band arithmetic forms (#46); map and globe performance, timeline time slots and hiding a scene by selecting it again (#62); item order and selected item highlighting (#103).
* TiTiler tile scaling (#103).
* Zarr URLs include the measurements path (#91).
* Styling that did not follow the page theme (#48).
* Spelling and typing errors (#45, #50).

## [1.0.0] - 2026-01-19

### Added

* Landing page for the EOPF Sentinel Zarr Explorer, based on the V0 design (#2, #15) and the EOPF brand (#9), with a feature matrix and a link to the EOPF forum (#22).
* Sentinel Explorer dashboard built on eodash (#6), with an easier-to-scan scene list, a base map that loads first and a loading indicator (#37).
* Story viewer for narratives (#14).
* Software & Services catalog with search, tags and category filters that can be set from the URL (#29, #34, #36, #40).
* TiTiler and OpenLayers integration examples (#30, #31).
* Preview deployments for pull requests (#8).

### Changed

* Pre-release notice shown during the soft launch (#4) and removed for the public launch (#13).
* Tagline aligned with the logo (#22).

### Fixed

* Sentinel Explorer not loading when opened directly by URL (#20), and the eodash page layout (#24).
* Base URL and broken links (#7, #12, #18).

[Unreleased]: https://github.com/EOPF-Explorer/landing-page/compare/v2.5.0...HEAD

[2.5.0]: https://github.com/EOPF-Explorer/landing-page/compare/v2.0.0...v2.5.0

[2.0.0]: https://github.com/EOPF-Explorer/landing-page/compare/v1.0.0...v2.0.0

[1.0.0]: https://github.com/EOPF-Explorer/landing-page/releases/tag/v1.0.0
