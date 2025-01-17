import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Topbar, Sidebar } from "./scenes/global";
import {
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Bar,
  Form,
  Line,
  Pie,
  FAQ,
  Geography,

} from "./scenes";
import MyCalendar from "./scenes/mycalendar";


function App () {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={ colorMode }>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={ <Dashboard /> } />
              <Route path="/team" element={ <Team /> } />
              <Route path="/invoices" element={ <Invoices /> } />
              <Route path="/contacts" element={ <Contacts /> } />
              <Route path="/bar" element={ <Bar /> } />
              <Route path="/form" element={ <Form /> } />
              <Route path="/line" element={ <Line /> } />
              <Route path="/pie" element={ <Pie /> } />
              <Route path="/faq" element={ <FAQ /> } />
              <Route path="/geography" element={ <Geography /> } />
              <Route path="/mycalendar" element={ <MyCalendar /> } />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
