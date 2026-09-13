Dev Stack

**Build Your Ideal Development Stack** an interactive catalog of frontend,
backend, database, and tooling technologies. Browse each option, compare it
against the others, and put together your own stack by adding technologies to
a running "Your Stack" list.

## About the project

Dev Stack lets a developer explore a curated set of technologies React,
Node.js, PostgreSQL, Docker, and more each shown as a card with a rating,
difficulty level, and short description. Clicking **Add to Stack** collects
that technology into a sidebar panel, so by the end you have a personalized
shortlist of the tools you'd use to build your next project.

## Built with

- **React** (Vite) - component-driven UI
- **JavaScript (ES6+)**
- **Tailwind CSS v4** - utility-first styling, themed with a single shared
  gradient token
- **React-Toastify** - toast notifications for add / remove / duplicate actions
- **lucide-react** - icon set for UI controls (menu, star, close)
- **JSON** - technology data, fetched at runtime instead of hardcoded

## Features

1. **Live stack builder** - adding or removing a technology instantly updates
   both the technology grid (button becomes "Added to Stack") and the "Your
   Stack" sidebar, with duplicate-add attempts blocked and surfaced as a
   warning toast instead of silently failing.
2. **One shared brand gradient** - the orange to pink to violet gradient used
   in the brand mark, the hero headline, and every primary button is defined
   once as a CSS variable (`--brand-gradient`), so re-theming the whole site
   is a one-line change.
3. **Fully responsive, data-driven layout** - the technology grid reflows
   from 3 columns to 2 to 1 across desktop, tablet, and mobile, the navbar
   collapses into a hamburger menu on small screens, and every card is
   rendered from a local JSON file rather than a hardcoded array.

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly
inside JavaScript. React uses it because it lets a component describe what
its UI should look like in the same place it describes the logic behind it,
instead of juggling separate template and script files. Under the hood, JSX
is just compiled into regular `React.createElement()` calls.

**2. What is the difference between props and state?**
Props are values passed **into** a component from its parent - the
component that receives them can read them but not change them. State is
data a component **owns and manages itself**, and it can change over time
(usually in response to user actions), which triggers a re-render. In this
project, a technology object passed into `TechCard` is a prop; the `stack`
array kept in `App` is state.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` gives a component a piece of state and a function to update it,
and React re-renders the component whenever that state changes. It's used in
`App.jsx` to hold `technologies` (the fetched data), `loading` (whether the
fetch is still in progress), and `stack` (the list of technologies the user
has added) - and inside `Navbar.jsx` to track whether the mobile menu is
open.

**4.What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders - things like
fetching data, subscribing to something, or reading from the network, which
shouldn't happen directly in the render itself. It's needed here because
fetching `technologies.json` is an asynchronous side effect: `useEffect` runs
once when `App` mounts, kicks off the `fetch`, and updates state (and turns
off the loading spinner) once the data arrives.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the `key` to tell which items changed, were added, or were
removed between renders, so it can update the DOM efficiently instead of
re-rendering the whole list. Without a stable, unique key, React can mix up
items during re-renders - for example, mis-attaching the wrong input state
to the wrong row. Each technology's `id` is used as its key here.

**6. What is conditional rendering? Show one place you used it (example: the
empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same markup. In `YourStack.jsx`,
the component checks `count === 0` and renders the "Your stack is empty."
placeholder when true, or the list of selected technologies when false.

**7. How do you pass data from a parent component to a child component, and
how does a child send something back to the parent?**
A parent passes data down to a child as props - for example, `App` passes
the `technologies` array and the `stack` array down into
`TechnologySection`, which passes individual technology objects into each
`TechCard`. To send something back up, the parent passes a **function** down
as a prop; the child calls that function (optionally with an argument) when
something happens. `TechCard` calls the `onAdd(tech)` function it received
from `App` when its button is clicked, and `YourStack` calls `onRemove(id)`
the same way - that's how a click inside a child ends up updating state that
lives in the parent.