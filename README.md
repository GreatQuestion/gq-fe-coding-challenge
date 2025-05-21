# README

A lightweight GitHub repo search app with debounced querying and an accessible Accordion for grouped results.

## Requirements

- **Loading & error states**: show feedback during fetch or on failure  
- **Debounced search**: delay API calls until 500 ms after typing stops  
- **Grouping**: organize repos by their `language` (use “Unknown” if none)  
- **Accessible Accordion**: build a component that:
  - Renders each language group as a collapsible panel  
  - Supports keyboard navigation (Tab, Enter/Space, Up/Down)  
  - Uses proper ARIA roles/attributes  
- **Repo items**: inside each panel, display:
  - Name (link to GitHub)  
  - Description  
  - Star count  
- **Styling**: minimal Tailwind CSS; focus on structure and accessibility
- **Unit tests**: write tests for **both** the Accordion and RepoExplorer components using Jest & React Testing Library

## Quickstart

```bash
git clone https://github.com/your-org/fe-accordion-challenge.git
cd fe-accordion-challenge
npm install
npm run dev   # → http://localhost:5173
npm test      # → Jest + React Testing Library
