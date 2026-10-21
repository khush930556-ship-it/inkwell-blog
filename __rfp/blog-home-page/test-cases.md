# Test cases: Blog Website — Home Page

| Field | Value |
| --- | --- |
| Related requirements | `__rfp/blog-home-page/requirements.md` |
| Implementation | `index.html`, `styles.css`, `script.js` |
| Created | 2026-10-21 |
| Environment | Local browser (open `index.html`, or `python -m http.server`) |
| Status | Not run |

## How to validate

1. Open the page: double-click `index.html`, or run `python -m http.server` in the
   project folder and visit `http://localhost:8000`.
2. For responsive checks, open DevTools → device toolbar and test at:
   - Desktop: 1280px wide
   - Tablet: 900px wide
   - Mobile: 600px wide
3. Run each case below and record the result in the **Validation log** at the end.
4. Mark status as `Pass`, `Fail`, or `Blocked`, with a short note.

## Test case format

| ID | Title | Requirement | Preconditions | Steps | Expected result | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| TC-001 | Header renders all elements | FR-001 | Page open | 1. Inspect the top header. | Brand/logo, nav links (Home, Stories, Categories, About), search button, and "Start writing" button are visible. | High |
| TC-002 | Sticky header + scroll state | FR-002 | Page open at top | 1. Scroll down the page.<br>2. Observe the header. | Header stays pinned to the top and gains a visible border/shadow after scrolling. | Medium |
| TC-003 | Mobile menu opens and closes | FR-003 | Viewport ≤ 720px | 1. Click the hamburger button. | Menu opens; `aria-expanded` becomes `true`; clicking again closes it and sets `aria-expanded="false"`. | High |
| TC-004 | Mobile menu closes on link click | FR-003 | Viewport ≤ 720px; menu open | 1. Click a nav link (e.g. Stories). | Menu closes, page scrolls to the target, and `aria-expanded` is `false`. | Medium |
| TC-005 | Hero content present | FR-004 | Page open | 1. View the hero section. | Headline, description, "Explore stories", "Become a writer", and 3 stats are visible. | High |
| TC-006 | "Explore stories" scrolls to listings | FR-005 | Page open; listings below the fold | 1. Click "Explore stories". | Page smoothly scrolls to the "Latest stories" section. | Medium |
| TC-007 | Post card content complete | FR-006 | Page open; listings visible | 1. Inspect any post card. | Card shows cover image, category tag, title, excerpt, author avatar, name, date, and read time. | High |
| TC-008 | Filter by Technology | FR-007 | Listings visible; filter = All | 1. Click the "Technology" pill. | Only Technology posts are shown; active pill is highlighted; "All" is no longer active. | High |
| TC-009 | Filter by All restores posts | FR-007 | A category filter is active | 1. Click the "All" pill. | All revealed posts are shown again and "All" is highlighted. | High |
| TC-010 | Empty-category result | FR-007 | All extra cards not loaded | 1. Click "Travel". | Only the revealed Travel post(s) are shown; no mismatched cards appear. | Medium |
| TC-011 | Load more reveals 3 cards | FR-008 | Filter = All; 6 cards visible | 1. Click "Load more stories". | 3 additional cards appear (total 9). | High |
| TC-012 | Load more hides when exhausted | FR-008 | All 9 cards revealed | 1. Observe the button. | "Load more stories" is hidden. | High |
| TC-013 | Filter + load more interaction | FR-008 | A category with an unrevealed extra card | 1. Click a category with extra posts.<br>2. Click "Load more". | Only cards of the active category are revealed; button hides when that category has no more extras. | Medium |
| TC-014 | Newsletter invalid email | FR-009 | Page open | 1. Leave empty or enter `abc`.<br>2. Click Subscribe. | An error message appears and the form is not submitted/cleared. | High |
| TC-015 | Newsletter valid email | FR-009 | Page open | 1. Enter `reader@example.com`.<br>2. Click Subscribe. | A success message appears and the input is cleared. | High |
| TC-016 | Footer content complete | FR-010 | Page open; scroll to footer | 1. Inspect the footer. | Brand, description, 4 social icons, Explore/Topics/Support columns, copyright, and Privacy/Terms/Cookies links are present. | High |
| TC-017 | Footer anchor navigation | FR-011 | Page open | 1. Click "Stories" in the footer. | Page scrolls to the listings section. | Low |
| TC-018 | Desktop layout | NFR-001 | Viewport 1280px | 1. Resize to 1280px wide. | Hero is two-column and the post grid shows 3 columns. | High |
| TC-019 | Tablet layout | NFR-001 | Viewport 900px | 1. Resize to 900px wide. | Post grid shows 2 columns; hero stacks to one column. | Medium |
| TC-020 | Mobile layout | NFR-001 | Viewport 600px | 1. Resize to 600px wide. | Post grid shows 1 column; nav is behind the hamburger; layout is readable. | High |
| TC-021 | No horizontal scrolling | NFR-001 | Any viewport | 1. Check at 1280/900/600px.<br>2. Scroll horizontally. | No horizontal scrollbar and no content clipped off-screen. | High |
| TC-022 | Keyboard accessibility | NFR-003 | Page open | 1. Press Tab repeatedly.<br>2. Press Enter on links/buttons. | Focus is visible in a logical order; nav, filters, load more, form, and footer links are keyboard-operable. | High |
| TC-023 | Images have alt text | NFR-003 | Page open | 1. Inspect `<img>` elements. | Content images have meaningful `alt`; decorative avatars have empty `alt`. | Medium |
| TC-024 | No console errors | NFR-002 / quality | DevTools open | 1. Load the page and use filters, load more, and the form. | No JavaScript errors in the Console; no failed local asset requests. | High |

## Coverage checklist

- [x] Happy path covered (render, filter, load more, subscribe)
- [x] Invalid / error inputs covered (newsletter validation)
- [x] Boundary and edge cases covered (category with no extra posts, load-more exhaustion)
- [x] Responsive behavior covered (desktop / tablet / mobile)
- [x] Accessibility checks covered (keyboard, alt text, ARIA)
- [x] Non-functional requirements verified (no horizontal scroll, no console errors)

## Validation log

Fill this in after running the cases.

| TC ID | Status (Pass/Fail/Blocked) | Date | Tester | Notes |
| --- | --- | --- | --- | --- |
| TC-001 |  |  |  |  |
| TC-002 |  |  |  |  |
| TC-003 |  |  |  |  |
| TC-004 |  |  |  |  |
| TC-005 |  |  |  |  |
| TC-006 |  |  |  |  |
| TC-007 |  |  |  |  |
| TC-008 |  |  |  |  |
| TC-009 |  |  |  |  |
| TC-010 |  |  |  |  |
| TC-011 |  |  |  |  |
| TC-012 |  |  |  |  |
| TC-013 |  |  |  |  |
| TC-014 |  |  |  |  |
| TC-015 |  |  |  |  |
| TC-016 |  |  |  |  |
| TC-017 |  |  |  |  |
| TC-018 |  |  |  |  |
| TC-019 |  |  |  |  |
| TC-020 |  |  |  |  |
| TC-021 |  |  |  |  |
| TC-022 |  |  |  |  |
| TC-023 |  |  |  |  |
| TC-024 |  |  |  |  |

## Notes

- Newsletter "success" is UI-only; no email is sent. Validate against real
  delivery separately if a provider is connected later.
- Remote images require internet. Offline, images show broken/blank but the
  layout and tests (other than image rendering) still apply.
