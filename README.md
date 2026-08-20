# GMI Tech Beacon

Build a premium, professional **single-page maintenance website** for my company.

## MAIN GOAL

The website should clearly communicate that the main company website is currently being upgraded/maintained while presenting a polished, modern and trustworthy brand experience.

This must be a **single-screen / single-page maintenance website**.

### VERY IMPORTANT

* There must be **NO PAGE SCROLLING** on desktop or mobile.
* Everything important must fit within the viewport.
* Do not create unnecessary sections.
* Do not create a long landing page.
* The entire experience should feel like one premium maintenance screen.
* The layout must automatically adapt to different screen sizes.

I will provide:

1. **Company logo** — use the exact logo I provide.
2. **Animation/video file** — use the exact video I provide.

Do NOT replace these assets with AI-generated alternatives.

---

# DESIGN DIRECTION

Create a **minimal, modern, premium corporate technology design**.

It should feel like a professional software/technology company website.

Do NOT make it look like a generic AI-generated landing page.

### Avoid

* Neon colors
* Excessive gradients
* Glassmorphism
* Excessive animations
* Stock images
* AI-generated illustrations
* Generic decorative graphics
* Overly colorful backgrounds
* Excessive text
* Huge empty spaces
* Unnecessary cards
* Excessive shadows
* Clutter

Use:

* Strong typography
* Clean spacing
* Professional alignment
* Subtle transitions
* High-quality visual hierarchy
* Corporate technology aesthetic

---

# HEADER

Create a clean, minimal header at the top.

### Left side

Place the **actual company logo** that I upload.

Use the exact logo without changing its proportions or colors.

### Right side

Add a small status indicator:

**Website Under Maintenance**

Use a subtle professional indicator, such as a small dot.

Do NOT make it flashy.

---

# BROWSER / PAGE TITLE

Set the browser/page title to:

**GMI Tech — Website Under Maintenance**

Use the company logo as the website favicon.

If a favicon version of the uploaded logo is available, use it.

---

# MAIN HERO

The main content must be split into **two columns on desktop**.

### LEFT SIDE — CONTENT

The left side should contain the main maintenance message.

Use a large headline:

**We’re upgrading our digital experience.**

Below it:

**Our website is currently under maintenance while we work on something better. We’ll be back shortly.**

Then add a subtle animated status message using the FuzzyText component:

**UNDER MAINTENANCE**

The FuzzyText effect should be subtle and professional, not glitchy or distracting.

Recommended settings:

* baseIntensity: 0.12
* hoverIntensity: 0.25
* enableHover: true
* fuzzRange: 12
* fps: 30
* direction: "horizontal"
* transitionDuration: 150
* clickEffect: false
* glitchMode: false

Use a brand-appropriate text color instead of the default white if the background is light.

Do not make FuzzyText occupy most of the screen.

---

# RIGHT SIDE — VIDEO

The **provided animation video must be placed on the RIGHT SIDE** of the main hero section.

The video is one of the primary visual elements of the page.

### Video requirements

* Use the exact uploaded video.
* Do not replace it.
* Do not crop important parts.
* Preserve the original aspect ratio.
* Keep it responsive.
* Autoplay when supported.
* Muted by default.
* Loop continuously.
* Do not show unnecessary video controls.
* Optimize video loading.
* Make sure it does not cause horizontal overflow.
* Make the video visually prominent but not oversized.

Use a clean professional presentation around the video if necessary.

Do not use a generic video player design.

---

# DESKTOP LAYOUT

The desktop viewport should approximately follow this structure:

```text
--------------------------------------------------
| LOGO                         WEBSITE STATUS      |
|                                                |
|                                                |
|  LEFT CONTENT             RIGHT VIDEO          |
|                                                |
|  UNDER MAINTENANCE                              |
|                                                |
|  We're upgrading...        [ ANIMATION VIDEO ] |
|                                                |
|  Website maintenance...                         |
|                                                |
|  Need to reach us?                              |
|  Email / Phone / WhatsApp                       |
|                                                |
--------------------------------------------------
```

The layout should be vertically centered.

The left and right columns should have balanced visual weight.

The video should never push the content below the viewport.

---

# CONTACT SECTION

At the bottom of the LEFT content area, include:

**Need to reach us?**

Email:

**[ceo@gmitech.in](mailto:ceo@gmitech.in)**

Email:

**[hr@gmitech.in](mailto:hr@gmitech.in)**

Phone:

**+91 90367 17885**

Add small professional buttons:

**Email Us**

**WhatsApp**

**Call Us**

Use the correct links:

* Email buttons should use `mailto:`
* Phone button should use `tel:`
* WhatsApp should open WhatsApp using the correct phone number.

Do not make these buttons oversized.

---

# FOOTER

Add a very small footer at the bottom:

**© 2026 GMI Tech. All rights reserved.**

The footer must remain inside the viewport.

Do not create a separate footer section that causes scrolling.

---

# BRANDING

The uploaded company logo is the primary brand identity.

Use the logo's existing colors as the basis for the design.

Do NOT randomly introduce new colors.

Do not alter:

* Logo proportions
* Logo shape
* Logo colors
* Logo typography

The logo should appear:

1. In the **website header**
2. As the **browser favicon/page icon**

Do not place a second large logo unnecessarily inside the hero.

---

# TYPOGRAPHY

Use a modern, professional and highly readable font.

Recommended hierarchy:

### Main headline

Large, bold and clean.

### Supporting text

Medium size with comfortable line height.

### Status text

Subtle but visually interesting.

### Contact information

Small and readable.

Do not use decorative or futuristic fonts.

---

# BACKGROUND

Use a clean professional background.

Prefer:

* White
* Off-white
* Very light neutral tones

If the uploaded animation video looks better with a dark background, use a sophisticated dark theme instead.

The background must remain simple.

Do not use:

* Busy patterns
* Large abstract shapes
* Excessive gradients
* Neon effects

---

# RESPONSIVE DESIGN

This is extremely important.

The website must work perfectly on:

* Large desktop
* Desktop
* Laptop
* Tablet
* iPhone
* Android phones

### Desktop

Use a two-column layout:

**Left = Content**

**Right = Video**

### Mobile

Switch to a compact single-column layout.

Recommended order:

```text
LOGO

Website Under Maintenance

UNDER MAINTENANCE

Headline

Short maintenance message

Animation Video

Need to reach us?

Email
Email
Phone

Contact buttons

Footer
```

However, everything must still fit within the mobile viewport.

### NO SCROLLING

This is a strict requirement.

Set the page/application so that:

* `overflow: hidden`
* No vertical scrolling
* No horizontal scrolling
* No scrollbars
* No content extending beyond the viewport

Use responsive sizing such as:

* `100dvh`
* `min-height`
* `max-height`
* Responsive typography
* Responsive video dimensions
* Flexible spacing

Do NOT simply hide overflowing content.

Actually design the layout so all important content fits.

On smaller mobile screens, intelligently reduce:

* Logo size
* Headline size
* Video size
* Spacing
* Contact section size

Do not remove important content.

---

# ACCESSIBILITY

Ensure:

* Good color contrast
* Proper semantic HTML
* Alt text for the company logo
* Accessible buttons
* Keyboard navigation
* Visible focus states
* Video does not interfere with accessibility

Respect reduced-motion preferences where appropriate.

---

# PERFORMANCE

Optimize the page for fast loading.

Requirements:

* Lazy-load the video where appropriate.
* Avoid unnecessary dependencies.
* Optimize image rendering.
* Avoid heavy animations.
* Keep JavaScript efficient.
* Avoid unnecessary API calls.
* Avoid external resources unless required.
* Ensure the page loads quickly even on mobile networks.

---

# SEO

Add:

### Page title

**GMI Tech — Website Under Maintenance**

### Meta description

**GMI Tech is currently upgrading its website. Our new digital experience will be available soon.**

Use the uploaded company logo as the favicon.

---

# FUZZYTEXT COMPONENT

Integrate the **FuzzyText** React component from React Bits.

Use the provided JavaScript + CSS component implementation.

Create:

`src/components/FuzzyText.jsx`

Copy the provided FuzzyText component source into that file.

Import it into the maintenance page.

Example:

```jsx
import FuzzyText from './components/FuzzyText';

<FuzzyText
  baseIntensity={0.12}
  hoverIntensity={0.25}
  enableHover={true}
  fuzzRange={12}
  fps={30}
  direction="horizontal"
  transitionDuration={150}
  clickEffect={false}
  glitchMode={false}
>
  UNDER MAINTENANCE
</FuzzyText>
```

### Important

The FuzzyText effect must be subtle.

It should enhance the page rather than make it look like a gaming/glitch website.

Do not use:

* Glitch mode
* Strong distortion
* Neon gradients
* Excessive animation

---

# FINAL VISUAL EXPERIENCE

The final page should communicate:

**Professional**

**Modern**

**Reliable**

**Technology-focused**

**Premium**

The visitor should immediately understand:

1. This is GMI Tech.
2. The website is temporarily under maintenance.
3. The company is actively upgrading its digital experience.
4. They can contact GMI Tech immediately if required.

---

# STRICT REQUIREMENTS

Before completing the implementation, verify all of the following:

* [ ] Single-page website
* [ ] No scrolling on desktop
* [ ] No scrolling on mobile
* [ ] No horizontal overflow
* [ ] Actual company logo used
* [ ] Logo visible in header
* [ ] Logo used as favicon
* [ ] Actual uploaded animation video used
* [ ] Video positioned on the right on desktop
* [ ] Content positioned on the left on desktop
* [ ] Mobile layout is responsive
* [ ] Contact email: [ceo@gmitech.in](mailto:ceo@gmitech.in)
* [ ] Contact email: [hr@gmitech.in](mailto:hr@gmitech.in)
* [ ] Contact number: +91 90367 17885
* [ ] Email button works
* [ ] WhatsApp button works
* [ ] Call button works
* [ ] FuzzyText component integrated
* [ ] FuzzyText is subtle
* [ ] No unnecessary sections
* [ ] No stock images
* [ ] No AI-generated graphics
* [ ] No neon colors
* [ ] No excessive gradients
* [ ] No glassmorphism
* [ ] Fast loading
* [ ] Accessible
* [ ] SEO metadata added
* [ ] Production-quality responsive design

Before finalizing, test the page at different desktop and mobile viewport sizes.

The final result must feel like a **premium technology company maintenance screen**, not a generic "Coming Soon" template.
the first one the video and the second one is the company logo ok.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://polished-up-status.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/317bc910-8298-451d-ae34-65d2f29ded88).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
