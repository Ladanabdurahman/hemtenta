# Hemtenta

# MT Brewscape Testning

# Beskrivning
Detta projekt innehåller automatiserade tester för webbplatsen MT Brewscape med hjälp av Playwright.

# Webbplats
https://mt-brewscape.lovable.app/

# Installation

Kör följande kommandon:

npm install
npx playwright install

# Köra tester

Kör:

npx playwright test

# Testerna kontrollerar
- Att användaren kan öppna Brewscape-webbplatsen och att rätt sida visas.
- Att användaren försöker öppna produktinformationen för produkten "Konisk kvarn", men att ingen separat produktsida öppnas utan att användaren stannar kvar på produktsidan.
- Att produktinformationen för "Konisk kvarn" visas korrekt, inklusive produktnamn, beskrivning och pris.
