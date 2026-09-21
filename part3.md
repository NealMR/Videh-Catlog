# PART 3 — SEASONAL CATALOG EXPERIENCE

## Objective

Build the main seasonal discovery experience for VIDEH.

The perfume catalog must be organized around the seasons and the seasonal information provided in the master perfume catalog PDF.

The four primary seasons are:

- Spring
- Summer
- Monsoon
- Winter

Do not invent seasonal classifications.

If a perfume belongs to multiple seasons according to the source catalog, it must appear in each applicable seasonal collection.

The PDF is the source of truth for fragrance metadata.

---

## Seasonal Navigation

Create a dedicated seasonal navigation system.

Primary options:

- SPRING
- SUMMER
- MONSOON
- WINTER

Desktop:

Use a clean horizontal navigation.

Mobile:

Use a horizontally scrollable season selector.

The active season should be indicated using a subtle underline or typography change.

Do not use large colored buttons.

Do not create a different colored theme for every season.

Keep the overall interface white, black, and neutral.

---

## Seasonal URL Structure

Use query parameters or clean routes.

Preferred structure:

    /catalog?season=spring
    /catalog?season=summer
    /catalog?season=monsoon
    /catalog?season=winter

The selected season must remain shareable through the URL.

Refreshing the page should preserve the selected season.

---

## Seasonal Header

Each seasonal catalog view should contain:

Large season title:

    SPRING

or:

    SUMMER

etc.

Below it:

A short description explaining that the collection is based on the seasonal information contained in the VIDEH fragrance catalog.

Do not create unsupported fragrance claims.

Example:

"Explore fragrances marked for spring in the VIDEH fragrance archive."

Keep the typography large and editorial.

---

## Seasonal Product Grid

Display fragrances belonging to the selected season.

Use a premium editorial grid.

Desktop:

- 3 or 4 columns depending on viewport width
- Large image areas
- Generous spacing

Tablet:

- 2 columns

Mobile:

- 1 or 2 columns depending on image readability

Each card should contain:

- Fragrance image
- Brand
- Fragrance name
- Gender
- Optional season/time metadata

Do not show:

- Fake ratings
- Fake reviews
- Prices
- Buy buttons
- Cart buttons

---

## Seasonal Filtering

Within a selected season, allow filtering by:

- Gender
- Time
- Occasion
- Brand
- Notes

Possible gender values:

- Men
- Women
- Unisex

Time values should come from the catalog.

Examples:

- Day
- Evening
- Day/Evening

Occasions should come from the source catalog.

Examples may include:

- Office
- College
- Travel
- Brunch
- Casual daytime

Do not invent values for individual perfumes.

---

## Multi-Season Fragrances

A perfume may belong to multiple seasons.

For example, if the source says:

    Summer / Monsoon / Spring

then that perfume must appear in:

- Summer
- Monsoon
- Spring

Do not assign it to only one season.

---

## Seasonal Transition

When switching seasons:

- Use subtle fade/slide transitions.
- Avoid exaggerated animations.
- Avoid loading entire pages unnecessarily.
- Preserve scroll behavior where appropriate.

Respect:

    prefers-reduced-motion

Users who disable motion should receive an instant or nearly instant transition.

---

## Empty State

If a filter combination produces no results:

Show a simple message:

    NO FRAGRANCES FOUND

Then provide:

    CLEAR FILTERS

Do not show fake recommendations.

---

## Important Rule

Never determine a fragrance's season from personal assumptions.

Only use the seasonal information available in the source catalog.

If the source says a fragrance belongs to multiple seasons, preserve that relationship.

---

# PART 4 — FRAGRANCE CARD SYSTEM

## Objective

Create a reusable fragrance card component.

The same card system should be used across:

- Homepage featured fragrances
- Seasonal collections
- Full catalog
- Search results
- Filter results
- Related fragrance sections

---

## Card Structure

Each fragrance card should contain:

1. Image
2. Brand
3. Fragrance name
4. Gender
5. Optional metadata
6. Hover interaction

Example structure:

    [IMAGE]

    AMOUAGE
    REFLECTION MAN

    MEN

---

## Visual Design

Cards should be extremely clean.

Avoid:

- Borders everywhere
- Heavy shadows
- Rounded card containers
- Large colored backgrounds
- Excessive badges

Prefer:

- Image
- Typography
- Whitespace

The image should be the visual focus.

---

## Image Behavior

Use a consistent image aspect ratio.

Images should:

- Load lazily
- Use appropriate resolution
- Maintain consistent proportions
- Avoid layout shifting

Use:

    object-fit: cover

or

    object-fit: contain

depending on the actual image collection.

Do not crop perfume bottles aggressively.

---

## Hover Interaction

Desktop hover can include:

- Slight image scale
- Subtle opacity transition
- Small movement
- Secondary image if available

Animation must be restrained.

Do not use:

- 3D spinning bottles
- Large zoom effects
- Flashing animations
- Excessive parallax

---

## Click Behavior

Clicking a fragrance card should open the fragrance detail page.

Example:

    /fragrance/amouage-reflection-man

The slug must be generated from the fragrance name.

Avoid duplicate slugs.

If duplicate names exist across brands, include the brand in the slug.

Example:

    /fragrance/brand-name-fragrance-name

---

## Accessibility

Cards must be keyboard accessible.

Users should be able to:

- Tab to the card
- Press Enter
- Press Space where appropriate

Images should have meaningful alt text.

Example:

    "Amouage Reflection Man perfume bottle"

---

# PART 5 — FRAGRANCE DETAIL PAGE

## Objective

Create a premium individual fragrance page.

This page should feel like a digital fragrance archive rather than a shopping product page.

---

## URL

Use:

    /fragrance/[slug]

Example:

    /fragrance/amouage-reflection-man

---

## Page Layout

Use a split editorial layout on desktop.

Left:

Large fragrance image.

Right:

Fragrance information.

Mobile:

Image first.

Information below.

---

## Information Hierarchy

Display:

BRAND

FRAGRANCE NAME

GENDER

Then:

TOP NOTES

HEART NOTES

BASE NOTES

Then:

WHEN TO WEAR

SEASON

TIME

SPRAYS

Only show fields that exist in the source catalog.

Do not fabricate missing information.

---

## Notes Section

Present the fragrance pyramid clearly.

Example:

TOP

Bergamot  
Lemon  
Cardamom

HEART

Rosemary  
Jasmine  
Rose

BASE

Musk  
Sandalwood  
Vetiver

Use typography and whitespace rather than colored boxes.

---

## When To Wear

Display the source catalog's recommendations.

Example:

WHEN TO WEAR

Office  
College  
Travel  
Brunch  
Casual daytime

Do not rewrite the source into unsupported claims.

---

## Season

Show the seasons listed in the catalog.

Example:

SEASON

Summer  
Monsoon  
Spring

Each season can be clickable.

Clicking:

    SUMMER

should navigate to:

    /catalog?season=summer

---

## Time

Show the source value.

Example:

TIME

DAY

or:

DAY / EVENING

---

## Sprays

If the source provides spray guidance, show it exactly or clearly normalize formatting without changing meaning.

Example:

SPRAYS

3–4

INDOORS

2–3

Do not invent spray recommendations where none are provided.

---

## Editorial Layout

Use generous whitespace.

The page should feel calm and premium.

Avoid:

- Tabs for every tiny section
- Accordions everywhere
- Excessive borders
- Huge gradients
- Product purchase UI

---

## Image Gallery

If multiple authentic images exist:

Allow a small gallery.

If only one image exists:

Do not create fake gallery images.

---

## Related Fragrances

At the bottom, show related fragrances.

Relatedness should be based on available catalog metadata.

Possible matching factors:

- Same brand
- Shared season
- Shared gender
- Shared notes
- Similar wear time
- Shared occasion

Do not present the algorithm as scientifically accurate.

Label the section:

    YOU MAY ALSO EXPLORE

or:

    FROM THE ARCHIVE

---

# PART 6 — SEARCH EXPERIENCE

## Objective

Build a fast global fragrance search.

Search must work across the structured catalog data.

---

## Search Access

Desktop header:

    SEARCH

Mobile header:

    SEARCH

Clicking search should open a dedicated search interface or full-screen search overlay.

---

## Search Fields

Search across:

- Brand
- Fragrance name
- Gender
- Notes
- Season
- Time
- Occasion

---

## Search Behavior

Search should begin responding as the user types.

Example:

User enters:

    oud

Possible results include fragrances where "oud" appears in:

- Name
- Notes
- Relevant catalog metadata

---

## Search Results

Show:

- Fragrance image
- Brand
- Name
- Gender

Keep results visually simple.

---

## Search States

Initial:

    SEARCH THE ARCHIVE

Typing:

Display matching results.

No results:

    NO FRAGRANCES FOUND

Then:

    TRY ANOTHER SEARCH

---

## Search Keyboard Behavior

Support:

- Escape to close
- Enter to open selected result
- Arrow keys where appropriate

Do not create unnecessary keyboard complexity.

---

## Performance

Search must not rerender the entire catalog unnecessarily.

Use efficient filtering.

For a large catalog, consider:

- Debouncing
- Indexed search
- Memoized filtering

---

# PART 7 — ADVANCED FILTER SYSTEM

## Objective

Create a complete catalog filtering interface.

Filtering must be data-driven.

---

## Filters

Support:

### Season

- Spring
- Summer
- Monsoon
- Winter

### Gender

- Men
- Women
- Unisex

### Time

Use values from the catalog.

### Brand

Generate dynamically from catalog data.

### Notes

Allow filtering based on note presence.

### Occasion

Use the source catalog's "WHEN TO WEAR" information.

---

## Desktop Filters

Use a clean filter sidebar or compact filter bar.

Do not allow filters to dominate the page.

---

## Mobile Filters

Use:

    FILTER

button.

Open a clean bottom sheet or full-screen filter panel.

Include:

    APPLY FILTERS

and:

    CLEAR ALL

---

## Active Filters

Show selected filters as small minimal chips or text controls.

Example:

    SUMMER ×
    MEN ×

Avoid colorful pill-heavy interfaces.

---

## Filter Combination

Filters should combine logically.

Example:

Season:

    Summer

Gender:

    Men

should return only fragrances satisfying both.

---

## Result Count

Show a subtle count:

    24 FRAGRANCES

Do not exaggerate or hide the count.

---

## URL State

Where practical, preserve filters in the URL.

Example:

    /catalog?season=summer&gender=men

This makes filtered catalog views shareable.

---

# PART 8 — CATALOG DATA ARCHITECTURE

## Objective

Create a clean structured data layer.

The PDF must not remain the runtime data source.

Convert the perfume information into structured JSON or TypeScript data.

---

## Data Model

Each perfume should follow a structure similar to:

```ts
{
  id: string,
  brand: string,
  name: string,
  gender: string,
  image: string,

  notes: {
    top: string[],
    heart: string[],
    base: string[]
  },

  whenToWear: string[],

  seasons: string[],

  time: string[],

  sprays: {
    recommended?: string,
    indoors?: string
  },

  featured?: boolean
}
```

Adapt the exact structure to the actual project architecture.

---

## Important

Do not manually create separate React components for individual perfumes.

Perfumes must be represented as data.

The UI should consume the data.

---

## Data Source

The uploaded master perfume catalog PDF is the source of truth.

Extract the catalog carefully.

Preserve:

* Brand names
* Fragrance names
* Gender
* Top notes
* Heart notes
* Base notes
* When to wear
* Season
* Time
* Sprays

Do not invent missing values.

---

## Normalization

Normalize formatting where necessary.

For example:

```
Summer / Monsoon / Spring
```

can become:

```ts
["Summer", "Monsoon", "Spring"]
```

But do not change the underlying meaning.

---

## Missing Data

If information is missing:

Use:

```
null
```

or

```
[]
```

depending on the field.

Do not fill the field with guesses.

---

## Duplicate Fragrances

Do not automatically assume two similarly named fragrances are the same.

Use:

* Brand
* Name
* Gender
* Source context

to distinguish entries.

---

# PART 9 — IMAGE SYSTEM

## Objective

Create a premium visual system for fragrance imagery.

---

## Image Requirements

Every perfume should ideally have an authentic image.

Preferred:

* Clean bottle photography
* Neutral background
* High resolution
* Consistent aspect ratio

---

## Image Fallback

If an image is unavailable:

Use a tasteful neutral placeholder.

Do not use:

* Random perfume images
* Unrelated stock photos
* AI-generated bottle images that could be mistaken for authentic product photography

---

## Image Naming

Use predictable filenames.

Example:

```
/images/perfumes/amouage-reflection-man.webp
```

---

## Optimization

Use modern formats where possible:

* WebP
* AVIF

Use responsive image sizes.

Do not load huge original images when a smaller version is sufficient.

---

## Lazy Loading

Images below the fold should lazy load.

The main hero image can load eagerly.

---

## Loading State

Use a simple neutral image placeholder.

Avoid animated skeletons everywhere.

---

# PART 10 — ANIMATION & INTERACTION SYSTEM

## Objective

Add premium motion without making the website feel like a showcase of animations.

Motion should support navigation and hierarchy.

---

## Global Motion Principles

Use:

* Fade
* Small translate
* Gentle scale
* Smooth opacity
* Image reveal

Avoid:

* Excessive bouncing
* Fast spinning
* Large parallax
* Constant moving backgrounds
* Excessive scroll effects

---

## Page Load

On initial load:

1. Header appears
2. Main typography appears
3. Supporting text appears
4. Hero image reveals
5. CTA appears

Use short staggered delays.

Do not make the user wait for the animation.

---

## Scroll Animations

Sections can reveal as they enter the viewport.

Examples:

* Text fade-up
* Image fade
* Slight translate

Keep movement subtle.

---

## Card Hover

Use:

* Image scale around 1.02–1.04
* Slight text transition

Avoid dramatic transformations.

---

## Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or significantly reduce decorative animations.

---

# PART 11 — TYPOGRAPHY & VISUAL SYSTEM

## Objective

Create the visual identity of VIDEH.

The design should feel:

* Minimal
* Premium
* Editorial
* Modern
* Calm
* Fragrance-focused

---

## Color Palette

Primary:

* White
* Near-black
* Soft gray
* Neutral tones

Do not build the interface around bright colors.

Seasonal distinctions should remain subtle.

---

## Typography

Use a premium typography hierarchy.

Large editorial headings.

Small uppercase metadata.

Strong spacing between sections.

Example:

```
THE FRAGRANCE
ARCHIVE
```

Then:

```
A CURATED DIGITAL CATALOG OF FRAGRANCES.
```

---

## Font Rules

Use a high-quality web font combination if appropriate.

Possible approach:

* Elegant serif for large editorial headings
* Clean sans-serif for interface and metadata

Do not use too many fonts.

Maximum:

* 1 display family
* 1 interface family

---

## Spacing

Whitespace is a major design element.

Avoid crowded layouts.

Use generous:

* Section padding
* Image spacing
* Text spacing
* Grid gaps

---

## Borders

Use borders sparingly.

Prefer thin neutral lines.

---

## Shadows

Avoid heavy shadows.

The interface should feel flat and editorial.

---

# PART 12 — RESPONSIVE DESIGN

## Objective

The website must feel intentionally designed for all screen sizes.

---

## Desktop

Large:

* Editorial typography
* Wide imagery
* Multi-column grids
* Spacious layouts

---

## Tablet

Adapt:

* Grid columns
* Header spacing
* Typography
* Image sizes

---

## Mobile

Prioritize:

* Readability
* Touch targets
* Simple navigation
* Fast loading

---

## Mobile Header

Use:

```
VIDEH
```

and:

```
MENU
```

Menu should open a clean full-screen navigation.

Navigation:

```
CATALOG
SEASONS
SEARCH
```

---

## Mobile Cards

Cards should not become cramped.

Use:

* 1 or 2 columns
* Appropriate image ratio
* Clear text

---

## Mobile Filters

Use a full-screen or bottom-sheet filter interface.

Do not squeeze a desktop sidebar into mobile.

---

# PART 13 — NAVIGATION & ROUTING

## Objective

Create a clear site architecture.

---

## Main Routes

Recommended:

```
/
/catalog
/catalog?season=spring
/catalog?season=summer
/catalog?season=monsoon
/catalog?season=winter
/fragrance/[slug]
```

Optional:

```
/about
```

---

## Header Navigation

Desktop:

```
VIDEH        CATALOG   SEASONS   SEARCH
```

Mobile:

```
VIDEH        MENU
```

---

## Breadcrumbs

On fragrance detail pages, optionally show:

```
CATALOG / AMOUAGE / REFLECTION MAN
```

Keep breadcrumbs subtle.

---

## Browser Navigation

Back/forward navigation must preserve:

* Search state
* Filters
* Season
* Catalog position where practical

---

# PART 14 — HOMEPAGE CONTENT SYSTEM

## Objective

Ensure the homepage remains editorial and not repetitive.

---

## Homepage Sections

Recommended order:

1. Header
2. Hero
3. Introduction
4. Seasonal discovery
5. Featured fragrances
6. Archive introduction
7. Footer

---

## Featured Fragrances

Featured products must come from structured data.

Example:

```ts
featured: true
```

Do not hardcode random products into JSX.

---

## Featured Selection

Keep the number limited.

Approximately:

```
3–6 fragrances
```

The homepage should not become a full catalog.

---

## Seasonal Preview

Show:

```
SPRING
SUMMER
MONSOON
WINTER
```

Each should lead to its corresponding filtered catalog.

---

## Content Tone

Use concise editorial language.

Avoid marketing clichés such as:

* "The ultimate fragrance"
* "Guaranteed compliments"
* "Best perfume"
* "Luxury like never before"

The website is an archive/catalog, not an advertising campaign.

---

# PART 15 — FOOTER

## Objective

Create a minimal footer.

---

## Footer Content

Include:

```
VIDEH
```

Then:

```
CATALOG
SEASONS
SEARCH
```

Optional:

```
ABOUT
```

Add a small copyright line.

Example:

```
© 2026 VIDEH
```

---

## Footer Design

Keep it mostly white with dark typography.

Use generous spacing.

Do not create a large complex footer.

---

# PART 16 — ABOUT / BRAND STORY

## Objective

Create a simple explanation of what VIDEH is.

The page should explain that VIDEH is a digital fragrance catalog designed for exploration and discovery.

---

## Suggested Structure

Large heading:

```
THE FRAGRANCE ARCHIVE
```

Then a short explanation.

Example direction:

"VIDEH is a digital fragrance catalog designed to make fragrance discovery simpler through notes, seasons, occasions, and time of wear."

Do not make unsupported claims about expertise or authority.

---

## Design

Use:

* Large typography
* Minimal imagery
* Generous whitespace
* Editorial composition

Avoid:

* Corporate-looking layouts
* Excessive text
* Fake company history

---

# PART 17 — SEARCH & DISCOVERY UX

## Objective

Make it easy to discover fragrances without purchasing.

Users should be able to discover through multiple paths.

---

## Discovery Paths

Users can begin with:

```
SEASON
```

or:

```
BRAND
```

or:

```
GENDER
```

or:

```
NOTES
```

or:

```
OCCASION
```

or:

```
SEARCH
```

---

## Discovery Flow

Example:

HOME

↓

SUMMER

↓

MEN

↓

AMOUAGE

↓

REFLECTION MAN

↓

NOTES

↓

RELATED FRAGRANCES

The user should always have an easy way to continue exploring.

---

## Related Navigation

At the bottom of a fragrance page:

```
EXPLORE MORE
```

Possible links:

* Same brand
* Same season
* Similar notes
* Same gender

---

# PART 18 — DATA VALIDATION

## Objective

Before considering the catalog complete, validate the structured data against the source PDF.

---

## Validation Checks

Check every entry for:

* Brand
* Name
* Gender
* Top notes
* Heart notes
* Base notes
* Season
* Time
* When to wear
* Sprays

---

## Do Not Invent

Never create:

* Missing notes
* Fake seasons
* Fake occasions
* Fake spray recommendations
* Fake descriptions

---

## Validation Script

Create a development validation script if useful.

Example checks:

```text
Missing brand
Missing fragrance name
Invalid gender
Empty notes
Invalid season
Invalid time
Duplicate ID
Duplicate slug
```

The script should report issues instead of silently modifying data.

---

# PART 19 — PERFORMANCE

## Objective

Make VIDEH fast despite the large fragrance catalog.

---

## Requirements

Implement:

* Lazy image loading
* Optimized images
* Code splitting where appropriate
* Efficient filtering
* Memoization where useful
* Avoid unnecessary rerenders

---

## Catalog Rendering

Do not render hundreds of large images simultaneously if unnecessary.

If the catalog becomes large, consider:

* Pagination
* Load more
* Virtualized rendering

Use the simplest solution that provides good performance.

---

## Performance Priority

Prioritize:

1. Fast initial page load
2. Fast navigation
3. Fast search
4. Fast filtering
5. Smooth image loading

Animations must never compromise these priorities.

---

# PART 20 — ACCESSIBILITY

## Objective

Make VIDEH usable with keyboard and assistive technologies.

---

## Requirements

Use semantic HTML.

Examples:

```html
<header>
<nav>
<main>
<section>
<footer>
```

---

## Keyboard Navigation

Everything interactive must be reachable with keyboard navigation.

Focus states must be visible.

---

## Images

Every meaningful image should have appropriate alt text.

Decorative images can use empty alt attributes.

---

## Contrast

Ensure text has sufficient contrast against the background.

---

## Motion

Respect:

```
prefers-reduced-motion
```

---

## Forms

Search and filters should have accessible labels.

Do not rely only on placeholder text.

---

# PART 21 — SEO

## Objective

Make fragrance pages discoverable through search engines.

---

## Metadata

Each fragrance page should generate:

* Title
* Description
* Canonical URL
* Open Graph metadata

Example title:

```
Reflection Man — Amouage | VIDEH
```

---

## Description

Generate descriptions from actual catalog data.

Do not invent marketing claims.

Example:

```
Explore Amouage Reflection Man on VIDEH, including notes, seasons, time of wear and fragrance details.
```

---

## Structured Data

If appropriate, use structured metadata for an informational fragrance catalog.

Do not mark VIDEH as an e-commerce store.

Do not create fake:

* Price
* Availability
* Aggregate rating
* Review count

---

# PART 22 — ERROR & LOADING STATES

## Objective

Every major page should have clear loading and error states.

---

## Loading

Use minimal placeholders.

Avoid large skeleton interfaces.

---

## Error

Example:

```
SOMETHING WENT WRONG

Please try again.
```

Button:

```
TRY AGAIN
```

---

## Missing Fragrance

If a fragrance slug does not exist:

Show:

```
FRAGRANCE NOT FOUND
```

Then:

```
RETURN TO CATALOG
```

---

## Missing Image

Show a neutral placeholder.

Never show a broken image icon as the primary design.

---

# PART 23 — DEVELOPMENT ARCHITECTURE

## Objective

Keep the codebase maintainable.

---

## Suggested Structure

Adapt to the chosen framework, but keep responsibilities separated.

Example:

```text
src/
├── components/
│   ├── Header
│   ├── Footer
│   ├── FragranceCard
│   ├── FragranceGrid
│   ├── Search
│   ├── Filters
│   └── SeasonNavigation
│
├── pages/
│   ├── Home
│   ├── Catalog
│   └── FragranceDetail
│
├── data/
│   └── fragrances
│
├── utils/
│   ├── filtering
│   ├── search
│   └── slug
│
├── styles/
│
└── assets/
```

Use the project's actual framework conventions if different.

---

## Component Philosophy

Build reusable components.

Do not duplicate:

* Card markup
* Filter logic
* Search logic
* Season navigation
* Metadata formatting

---

# PART 24 — NO E-COMMERCE RULE

## IMPORTANT

VIDEH is NOT an online store.

Never add:

* Add to cart
* Buy now
* Checkout
* Payment
* Quantity selector
* Product price
* Discount
* Shipping
* Delivery
* Fake stock
* Fake reviews
* Fake ratings

The purpose is:

```
DISCOVERY
EXPLORATION
INFORMATION
```

Not:

```
TRANSACTION
```

---

# PART 25 — CONTENT INTEGRITY

## Objective

Keep the website faithful to the fragrance catalog.

---

## Source of Truth

The master perfume catalog PDF is the primary source for fragrance information.

The website should not silently alter source information.

---

## Data Transformation

Allowed:

* Formatting
* Normalizing arrays
* Converting text into structured fields
* Creating URL slugs
* Normalizing capitalization

Not allowed:

* Inventing information
* Adding unsupported notes
* Adding unsupported seasons
* Adding unsupported occasions
* Creating fake descriptions
* Creating fake reviews

---

# PART 26 — DESIGN QUALITY CONTROL

Before considering the website finished, inspect every major screen.

---

## Homepage Checklist

Check:

* White background
* Premium typography
* Clean hero
* Strong spacing
* High-quality imagery
* No clutter
* Subtle animations
* Responsive layout

---

## Catalog Checklist

Check:

* Season navigation works
* Filters work
* Search works
* Product cards are consistent
* Images load correctly
* Empty states work
* URL filtering works

---

## Fragrance Page Checklist

Check:

* Correct fragrance information
* Correct notes
* Correct season
* Correct time
* Correct occasions
* Correct spray information
* Good image presentation
* Related fragrances work

---

# PART 27 — RESPONSIVE QA

Test at minimum:

```text
Desktop:
1440px
1280px
1024px

Tablet:
768px

Mobile:
430px
390px
375px
```

Check:

* Header
* Hero
* Catalog
* Filters
* Search
* Fragrance details
* Footer

Nothing should overflow horizontally.

---

# PART 28 — BROWSER & INTERACTION QA

Test:

* Chrome
* Edge
* Safari where available
* Mobile browser

Test:

* Mouse
* Keyboard
* Touch
* Back button
* Forward button
* Refresh
* Direct URL access

---

# PART 29 — FINAL POLISH

After functionality is complete, perform a dedicated visual polish pass.

Do not immediately add more features.

Instead inspect:

* Typography
* Spacing
* Image quality
* Alignment
* Animation timing
* Responsive behavior
* Consistency

Remove anything that feels unnecessary.

---

## Visual Rule

When in doubt:

```
REMOVE
```

rather than:

```
ADD
```

The design should feel intentional because of what it leaves out.

---

# PART 30 — FINAL PRODUCT DEFINITION

VIDEH should ultimately feel like:

```
A DIGITAL FRAGRANCE ARCHIVE
```

not:

```
AN ONLINE PERFUME STORE
```

The experience should allow someone to:

1. Enter the website.
2. Discover fragrances visually.
3. Explore by season.
4. Search the archive.
5. Filter by fragrance characteristics.
6. Open a fragrance.
7. Read its notes and metadata.
8. Discover related fragrances.
9. Continue exploring.

The visual language should remain:

```
MINIMAL
WHITE
EDITORIAL
PREMIUM
CALM
MODERN
```

The interaction language should remain:

```
SUBTLE
FAST
PURPOSEFUL
RESPONSIVE
```

The content should remain:

```
DATA-DRIVEN
SOURCE-ACCURATE
NON-COMMERCIAL
```

---

# PART 31 — FINAL IMPLEMENTATION RULES

Before declaring VIDEH complete, verify:

* [ ] Master catalog data has been structured.
* [ ] No perfume data has been invented.
* [ ] Seasons come from the catalog.
* [ ] Multi-season fragrances appear in all applicable seasons.
* [ ] Search works.
* [ ] Filters work.
* [ ] Fragrance detail pages work.
* [ ] Dynamic slugs work.
* [ ] Related fragrances work.
* [ ] Images are optimized.
* [ ] Missing images have proper fallbacks.
* [ ] Mobile layout works.
* [ ] Desktop layout works.
* [ ] Keyboard navigation works.
* [ ] Reduced-motion support works.
* [ ] SEO metadata works.
* [ ] No fake reviews exist.
* [ ] No fake ratings exist.
* [ ] No pricing exists.
* [ ] No shopping/cart functionality exists.
* [ ] No unnecessary UI exists.
* [ ] Animations remain subtle.
* [ ] The website maintains a white/minimal visual identity.

---

# PART 32 — FINAL DESIGN PRINCIPLE

The most important rule for VIDEH:

DO NOT TRY TO IMPRESS THE USER WITH FEATURES.

IMPRESS THE USER WITH:

* Photography
* Typography
* Whitespace
* Information hierarchy
* Smooth interactions
* Accurate fragrance data
* Simplicity

Every element should have a purpose.

If a component does not improve:

```
DISCOVERY
NAVIGATION
INFORMATION
OR VISUAL QUALITY
```

remove it.

VIDEH should feel like a carefully designed fragrance archive where the fragrances themselves remain the focus.
