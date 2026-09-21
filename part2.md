
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
