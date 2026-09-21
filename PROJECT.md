# VIDEH — Perfume Catalog Website

## Project Overview

Build a premium perfume catalog and fragrance-discovery website called **VIDEH**.

The attached `catlog.pdf` is the master perfume catalog and must be treated as the primary source of perfume information.

This is a **catalog and fragrance-discovery website**, not an e-commerce website.

The purpose of the website is to allow users to:

- Browse perfumes
- Discover perfumes by season
- Search for perfumes
- Filter perfumes
- Explore fragrance notes
- View detailed perfume information
- Discover perfumes by gender
- Discover perfumes by occasion and time of day
- Browse perfumes by brand

Do not add shopping or purchasing functionality.

---

# Design Direction

## Overall Visual Style

Create a **minimal, premium, white-background fragrance catalog**.

The website should communicate luxury through **restraint**, not through excessive decoration.

The visual language should be:

- Minimal
- Clean
- Elegant
- Premium
- Sophisticated
- Editorial
- Modern
- Calm
- Spacious
- Timeless

The primary visual focus should always be the perfume imagery and typography.

Do NOT take visual inspiration from Zara.

Do NOT imitate any specific existing perfume website.

Instead, create an original luxury fragrance catalog using the principles of minimalist luxury design.

---

# Color System

Use a predominantly monochromatic color palette.

### Primary

```text
Background: #FFFFFF
Text:       #111111
Secondary:  #666666
Muted:      #999999
Border:     #E5E5E5
Surface:    #F7F7F7
```

---

# Brand

## Name

**VIDEH**

Use `VIDEH` as the primary website identity.

The logo should be simple and typography-based.

Avoid:

- Complicated logos
- Excessive gradients
- Decorative perfume icons
- Generic luxury-brand templates

---

# Core Website Philosophy

The website should not immediately show hundreds of perfume cards.

The user should first experience the visual identity of VIDEH and then gradually enter the catalog.

The intended experience is:

```text
HERO
  ↓
SEASONAL DISCOVERY
  ↓
FEATURED FRAGRANCES
  ↓
FRAGRANCE EXPLORATION
  ↓
FULL CATALOG
  ↓
FOOTER
```

The website should feel curated rather than overwhelming.

---

# Important: Catalog Only

This website is NOT an online store.

Do NOT implement:

* Shopping cart
* Checkout
* Payment
* Buy Now
* Add to Cart
* Fake prices
* Fake discounts
* Fake ratings
* Fake reviews
* Fake stock information

The primary action should be:

**EXPLORE**

rather than:

**BUY**

---

# Catalog Data

The attached `catlog.pdf` is the source of truth for perfume information.

Do not invent perfume information when it is not present in the catalog.

Preserve the terminology and information provided by the catalog.

Perfume entries may contain:

* Brand
* Perfume name
* Gender
* Top notes
* Heart notes
* Base notes
* When to wear
* Season
* Time
* Recommended sprays

The actual website should use the information extracted from the catalog.

Do not manually hard-code hundreds of perfumes inside React components.

---

# Technical Direction

Use a modern frontend architecture suitable for vibe coding.

Preferred stack:

* React
* Vite
* JavaScript or TypeScript
* Tailwind CSS
* GSAP
* GSAP ScrollTrigger

---

# Responsive Design

The website must be fully responsive.

Support:

* Desktop
* Laptop
* Tablet
* Mobile

Do not simply scale the desktop design down for mobile.

Mobile should have its own thoughtful layout.

---

# Animation Philosophy

Animations should make the website feel premium.

Do not add animations everywhere just because they are technically possible.

Prefer:

* Smooth page transitions
* Image reveal animations
* Subtle parallax
* Scroll-based text reveals
* Product image zoom
* Elegant hover states
* Smooth horizontal movement
* Fade transitions
* Section transitions
* Subtle typography animations

Animations should be:

* Smooth
* Fast enough to feel responsive
* Elegant
* Purposeful

Avoid:

* Excessive bouncing
* Flashy effects
* Random movement
* Overly complicated 3D effects
* Animations that reduce usability

---

# Visual Quality Standard

Do not settle for a basic template.

The visual hierarchy should come primarily from:

* Typography
* Scale
* Spacing
* Photography
* Composition
* Motion

The final website should give the user the feeling that they are entering a **premium fragrance archive**.
 
 

# Part 2 — Homepage & Navigation

## Objective

Build the first complete visual experience of the VIDEH website.

The homepage should introduce VIDEH as a premium perfume catalog and guide the user naturally toward discovering fragrances.

Do not make the homepage feel like an online store.

The main goal is:

**Discover → Explore → Browse**

---

# Header / Navigation

Create a minimal fixed or sticky header.

Desktop layout:

```text
VIDEH                                      CATALOG   SEASONS   SEARCH
```

The VIDEH logo should remain on the left.

Navigation links should be on the right.

Use:

* White background
* Black typography
* Very thin or no visible border
* Generous horizontal spacing
* Small uppercase labels
* Clean typography

The header should not take too much vertical space.

---

## Header Behavior

At the top of the page:

```text
VIDEH                                      CATALOG   SEASONS   SEARCH
```

When the user scrolls:

* Header remains accessible
* Background remains white
* Navigation becomes slightly more compact if appropriate
* Do not use a large animated header
* Do not use a dramatic background transition

The transition should be subtle.

---

# Mobile Navigation

On mobile, use:

```text
VIDEH                              MENU
```

Clicking `MENU` should open a clean full-screen or large overlay navigation.

Example:

```text
CLOSE

CATALOG

SEASONS

SEARCH

ABOUT
```

The menu should use large typography and generous spacing.

Do not create a complicated hamburger animation.

---

# Hero Section

The hero is the first major visual element.

It should occupy most of the first viewport.

Use a large, high-quality perfume or fragrance-related image.

The image should feel:

* Clean
* Premium
* Minimal
* Editorial
* Bright
* Sophisticated

Prefer a white or very light background.

Avoid dark cinematic perfume imagery for the main hero.

---

## Hero Layout

Use a composition similar to:

```text
┌────────────────────────────────────────────────────────┐
│                                                        │
│ VIDEH                                    CATALOG       │
│                                                        │
│                                                        │
│              THE FRAGRANCE                             │
│              ARCHIVE                                   │
│                                                        │
│              A curated collection                      │
│              of fragrances for                         │
│              every season.                             │
│                                                        │
│              EXPLORE CATALOG →                         │
│                                                        │
│                         [PERFUME IMAGE]                │
│                                                        │
└────────────────────────────────────────────────────────┘
```

The exact composition can be improved during implementation.

Do not force this exact layout if a better composition creates a more premium result.

---

# Hero Typography

The main heading should be large but elegant.

Example:

```text
THE
FRAGRANCE
ARCHIVE
```

or:

```text
THE FRAGRANCE
ARCHIVE
```

Use typography as a major visual element.

Avoid:

* Heavy bold typography
* Decorative fonts
* Excessive text
* Marketing slogans
* Large paragraphs

The supporting text should be short.

Example:

```text
A curated catalog of fragrances,
organized by season and character.
```

---

# Hero CTA

Use one primary CTA:

```text
EXPLORE CATALOG →
```

The CTA should be understated.

Possible interaction:

* Arrow moves slightly on hover
* Text underline appears
* Very subtle opacity transition

Do not create a large colorful button.

Prefer a text-based CTA.

---

# Hero Animation

When the homepage loads:

1. Header appears smoothly.
2. Hero typography fades/reveals.
3. Supporting text appears.
4. Hero image reveals softly.
5. CTA appears last.

Use subtle motion.

The animation should be quick enough that the user can interact with the page immediately.

Do not use long loading animations.

---

# Hero Image

The hero image should have a strong visual presence.

Use a large image area rather than a tiny product card.

Possible layout:

```text
             ┌─────────────────────┐
             │                     │
             │                     │
             │    PERFUME IMAGE    │
             │                     │
             │                     │
             └─────────────────────┘
```

The image can extend beyond the normal content grid if this improves the composition.

Do not add unnecessary frames or decorative borders.

---

# Introductory Catalog Statement

After the hero, introduce the catalog with a short statement.

Example:

```text
A COLLECTION OF FRAGRANCES

Explore perfumes selected across
different seasons, occasions,
notes and moods.
```

Keep the section extremely simple.

Large heading.

Small supporting text.

Large whitespace.

---

# Seasonal Discovery Preview

The homepage should introduce the seasonal organization of the catalog.

Create four main seasonal sections:

```text
SPRING
SUMMER
MONSOON
WINTER
```

Do not show every perfume here.

Instead, show a visual preview of each category.

Example:

```text
SPRING                         SUMMER

[IMAGE]                        [IMAGE]

EXPLORE SPRING →              EXPLORE SUMMER →


MONSOON                       WINTER

[IMAGE]                        [IMAGE]

EXPLORE MONSOON →             EXPLORE WINTER →
```

The exact layout can be:

* 2 × 2 grid
* Full-width alternating sections
* Horizontal editorial layout

Choose whichever creates the strongest minimalist composition.

---

# Seasonal Images

Each season should have an appropriate visual atmosphere.

The images should be visually different while keeping the overall website white and minimal.

Suggested visual direction:

### Spring

Fresh flowers, soft natural light, greenery, clean atmosphere.

### Summer

Bright sunlight, citrus, water, airy environment.

### Monsoon

Rain, wet surfaces, greenery, cloudy natural light.

### Winter

Warm materials, woods, soft shadows, darker fragrance mood while maintaining a mostly light website.

These are visual directions only.

Do not use these descriptions to invent perfume classifications.

Actual perfume season classifications must come from the catalog data.

---

# Seasonal Interaction

On hover:

* Image can subtly scale
* Text can move slightly
* Arrow can move
* Image overlay should remain minimal

Example:

```text
SPRING
EXPLORE COLLECTION →
```

On click:

Navigate to the catalog with the corresponding season filter already selected.

Example:

```text
/collection?season=spring
```

or an equivalent routing approach.

---

# Featured Fragrances

After the season section, show a small number of featured perfumes.

Do not randomly select products.

The implementation should make it easy to define featured perfumes in the data.

Example:

```js
featured: true
```

Then the homepage can automatically display perfumes marked as featured.

The number of featured fragrances should remain small.

Recommended:

**3–6 perfumes**

Do not display dozens of products on the homepage.

---

# Featured Product Layout

Use a clean horizontal or grid layout.

Example:

```text
FEATURED FRAGRANCES


┌──────────────────┐
│                  │
│     IMAGE        │
│                  │
└──────────────────┘
AMOUAGE
INTERLUDE MAN


┌──────────────────┐
│                  │
│     IMAGE        │
│                  │
└──────────────────┘
ACQUA DI PARMA
COLONIA INTENSA
```

The cards should remain visually quiet.

---

# Browse the Catalog

Near the lower portion of the homepage, introduce the complete catalog.

Example:

```text
THE COLLECTION

Explore the complete
VIDEH fragrance archive.

VIEW ALL FRAGRANCES →
```

This should lead to the main catalog page.

---

# Homepage Footer

Create a very minimal footer.

Example:

```text
VIDEH

PERFUME CATALOG


CATALOG
SEASONS
SEARCH


© VIDEH
```

Do not add unnecessary sections.

If social links or other information are not provided, do not invent them.

---

# Homepage Spacing

Use generous vertical spacing between sections.

The page should not feel crowded.

Recommended principle:

```text
Large section
       ↓
Whitespace
       ↓
Next section
       ↓
Whitespace
       ↓
Next section
```

Whitespace should be intentional.

---

# Homepage Responsive Behavior

Desktop:

* Large hero
* Large typography
* Spacious seasonal layouts
* 3-column or 4-column featured products where appropriate

Tablet:

* Reduce typography slightly
* Maintain generous spacing
* Adjust image sizes

Mobile:

* Single-column hero
* Large readable typography
* One seasonal section at a time
* 1-column or 2-column product layout depending on available width
* Simplified navigation

Never allow text to overlap images unintentionally.

---

# Homepage Performance

Do not load the entire perfume catalog on the homepage.

Only load:

* Hero assets
* Seasonal preview assets
* Featured perfume assets

Load the complete catalog only when the user enters the catalog section/page.

Use lazy loading for images below the initial viewport.

---

# Important Design Rule

Do not make every section look identical.

Use a consistent visual system but vary composition.

For example:

```text
Hero
→ large image + typography

Season
→ editorial image grid

Featured
→ product grid

Catalog introduction
→ typography-focused section
```

This prevents the website from becoming repetitive.

---

# Quality Check

Before considering the homepage complete, verify:

* White background is maintained
* Typography is clean
* No unnecessary colors
* No excessive rounded cards
* No excessive shadows
* No fake product information
* No e-commerce elements
* Navigation is responsive
* Hero works on mobile
* Seasonal sections are visually distinct
* Animations are subtle
* Page remains fast
* Layout has generous whitespace
* The website feels premium without relying on decorative effects
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
